<?php
// Rename to mastertone-mail-config.php and keep it outside public_html.
return [
    'allowed_origin' => 'https://YOUR-DOMAIN.com',
    'smtp_host' => 'mail.YOUR-DOMAIN.com',
    'smtp_port' => 587,
    'smtp_encryption' => 'tls',
    'smtp_username' => 'website@YOUR-DOMAIN.com',
    'smtp_password' => 'YOUR_SMTP_PASSWORD',
    'from_email' => 'website@YOUR-DOMAIN.com',
    'recipient_email' => 'sales@YOUR-DOMAIN.com',
];
