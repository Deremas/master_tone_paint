<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

function respond(int $statusCode, bool $ok, string $message): never
{
    http_response_code($statusCode);
    echo json_encode(
        [
            'ok' => $ok,
            'message' => $message,
        ],
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );
    exit;
}

function clean_string(?string $value): string
{
    return trim((string) $value);
}

function post_string(string $key): string
{
    $value = $_POST[$key] ?? '';

    return is_scalar($value) ? trim((string) $value) : '';
}

function has_line_breaks(string $value): bool
{
    return preg_match('/[\r\n]/', $value) === 1;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Method not allowed.');
}

$requestSize = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($requestSize > 16384) {
    respond(413, false, 'Request too large.');
}

if (!empty($_POST['website'])) {
    respond(200, true, 'Thank you. Your inquiry has been received.');
}

$configPath = dirname(__DIR__, 2) . '/mastertone-mail-config.php';
$vendorPath = dirname(__DIR__, 2) . '/mastertone-vendor/autoload.php';

if (!is_file($configPath) || !is_file($vendorPath)) {
    respond(503, false, 'Contact service is not configured yet.');
}

$config = require $configPath;
require $vendorPath;

$allowedOrigin = clean_string((string) ($config['allowed_origin'] ?? ''));
$origin = clean_string($_SERVER['HTTP_ORIGIN'] ?? '');
$referer = clean_string($_SERVER['HTTP_REFERER'] ?? '');

if ($allowedOrigin === '' || str_contains($allowedOrigin, 'YOUR-DOMAIN.com')) {
    respond(503, false, 'Contact service is not configured yet.');
}

if ($origin !== '' && !hash_equals($allowedOrigin, $origin)) {
    respond(403, false, 'Invalid request origin.');
}

if ($origin === '' && ($referer === '' || !str_starts_with($referer, $allowedOrigin . '/'))) {
    respond(403, false, 'Invalid request origin.');
}

$name = post_string('name');
$email = post_string('email');
$phone = post_string('phone');
$product = post_string('product');
$message = post_string('message');

$allowedProducts = [
    '',
    'general-paint',
    'metal-paint',
    'decorative-quartz',
    'decorative-quartz-coating',
    'wholesale-inquiry',
    'other',
];

$productLabels = [
    '' => 'General inquiry',
    'general-paint' => 'General Paint',
    'metal-paint' => 'Metal Paint',
    'decorative-quartz' => 'Decorative Quartz Coating',
    'decorative-quartz-coating' => 'Decorative Quartz Coating',
    'wholesale-inquiry' => 'Wholesale inquiry',
    'other' => 'Other / General question',
];

if (mb_strlen($name) < 2 || mb_strlen($name) > 120 || has_line_breaks($name)) {
    respond(422, false, 'Please enter a valid name.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 254 || has_line_breaks($email)) {
    respond(422, false, 'Please enter a valid email address.');
}

if ($phone !== '' && (mb_strlen($phone) > 35 || has_line_breaks($phone))) {
    respond(422, false, 'Please enter a valid phone number.');
}

if (!in_array($product, $allowedProducts, true)) {
    respond(422, false, 'Invalid product selection.');
}

if (mb_strlen($message) < 10 || mb_strlen($message) > 3000) {
    respond(422, false, 'Please provide a message between 10 and 3000 characters.');
}

session_name('mastertone_contact');
if (session_status() !== PHP_SESSION_ACTIVE) {
    @session_start();
}

$now = time();
$windowKey = 'mt_contact_hits';
$history = array_values(
    array_filter(
        $_SESSION[$windowKey] ?? [],
        static fn ($timestamp) => is_int($timestamp) && $timestamp > $now - 3600
    )
);

if (count($history) >= 5) {
    respond(429, false, 'Too many requests. Please try again later.');
}

$smtpEncryption = strtolower((string) ($config['smtp_encryption'] ?? 'tls'));
$smtpSecure = $smtpEncryption === 'ssl' || $smtpEncryption === 'smtps'
    ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
    : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;

$subjectSuffix = $productLabels[$product] ?? 'General inquiry';

try {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = (string) $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['smtp_username'];
    $mail->Password = (string) $config['smtp_password'];
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port = (int) $config['smtp_port'];
    $mail->setFrom((string) $config['from_email'], 'Master Tone Paint Website');
    $mail->addAddress((string) $config['recipient_email']);
    $mail->addReplyTo($email, $name);
    $mail->isHTML(false);
    $mail->Subject = 'Website inquiry - Master Tone Paint - ' . $subjectSuffix;
    $mail->Body = implode(
        "\n",
        [
            'A new website inquiry was submitted.',
            '',
            'Name: ' . $name,
            'Email: ' . $email,
            'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
            'Product interest: ' . $subjectSuffix,
            '',
            'Message:',
            $message,
            '',
            'Origin: ' . ($origin !== '' ? $origin : $referer),
        ]
    );

    $mail->send();

    $history[] = $now;
    $_SESSION[$windowKey] = $history;

    respond(200, true, 'Your message was sent successfully.');
} catch (Throwable $error) {
    error_log('Master Tone Paint contact mail error: ' . $error::class);
    respond(503, false, 'We could not send your message right now. Please try again later.');
}
