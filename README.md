# Master Tone Paint

Production-oriented Astro website for Master Tone Paint, a paint and decorative quartz coating manufacturer in Ayat, Addis Ababa, Ethiopia.

## Tech Stack

- Astro static site
- TypeScript
- Custom CSS, no framework runtime
- PHP + PHPMailer contact handler for cPanel hosting

## Local Setup

```bash
npm install
npm run check
npm run build
```

Run the dev server with:

```bash
npm run dev
```

## Project Structure

- `src/pages/` holds the five public pages plus `404`, `robots.txt`, and `sitemap.xml`
- `src/components/` contains reusable layout pieces
- `src/data/site.ts` centralizes company facts, product data, gallery placeholders, and SEO copy
- `src/styles/global.css` contains the full design system
- `public/api/contact.php` is the deployable PHP endpoint that the contact form submits to
- `contact-handler/` contains the PHP source, Composer file, and config template for cPanel deployment

## Pages

- `/` Home
- `/about/`
- `/products/`
- `/gallery/`
- `/contact/`

## Content Notes

The site only publishes confirmed business information:

- Company: Master Tone Paint
- Founded: April 24, 2024
- Location: Ayat, Addis Ababa, Ethiopia
- Business model: Wholesale / B2B manufacturing
- Production setup: two paint production machines and one decorative quartz coating machine
- Confirmed capacities: 28,000 liters/day paint and 11,250 liters/day decorative quartz coating

Mission, vision, phone number, email address, gallery photography, and any unverified technical product details remain as placeholders until they are officially confirmed.

## cPanel Deployment

### 1. Build the static site

```bash
npm run build
```

Upload the **contents of `dist/`** to your site document root, usually `public_html/` or the subdomain root.

### 2. Configure the PHP contact handler

The website form posts to `/api/contact.php`.

On the server, place the PHP endpoint at:

`public_html/api/contact.php`

Keep SMTP credentials and PHPMailer outside the public document root:

- `~/mastertone-mail-config.php`
- `~/mastertone-vendor/autoload.php`

Recommended structure:

```text
home/
  public_html/
    api/
      contact.php
  mastertone-mail-config.php
  mastertone-vendor/
    autoload.php
```

### 3. Install PHPMailer

Inside `contact-handler/`:

```bash
composer install --no-dev --optimize-autoloader
```

Copy the resulting `vendor/` contents to `~/mastertone-vendor/` on the hosting account.

### 4. Create the private config

Copy `contact-handler/mastertone-mail-config.example.php` to `~/mastertone-mail-config.php` and update:

- `allowed_origin`
- `smtp_host`
- `smtp_port`
- `smtp_encryption`
- `smtp_username`
- `smtp_password`
- `from_email`
- `recipient_email`

Never place SMTP credentials inside `public_html`.

### 5. Verify SMTP delivery

The handler will not claim success until the SMTP send actually succeeds. Test the live form after the SMTP account is configured and reachable from your host.

## SEO and Static Assets

- Titles and descriptions are set per page
- Canonical links are generated from the configured `site` URL in `astro.config.mjs`
- `robots.txt` and `sitemap.xml` are generated as static routes
- `404.astro` provides a custom error page
- `public/favicon.svg` and `public/assets/master-tone-logo.svg` provide the current brand visuals

## Final Checklist Before Launch

- Replace the placeholder `site` URL in `astro.config.mjs` with the production domain
- Add verified phone and email values in `src/data/site.ts`
- Replace the temporary logo SVG with the approved logo artwork if a final file is supplied
- Replace gallery placeholders with verified factory or product photography
- Confirm the PHP SMTP config and test the form end to end

## Notes for Editors

The site is intentionally simple:

- no database
- no CMS
- no React or Next.js
- no shopping cart or account system

It is designed to stay maintainable on shared hosting while still looking polished on desktop and mobile.
