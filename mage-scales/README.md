# Mage Scales — Agency Website

Single-page static site (HTML/CSS/JS, no build step). Open `index.html` in a browser,
or serve locally with `python3 -m http.server` from this folder.

## Brand
- **Logo** – `assets/wordmark-light.png`, `assets/monogram-light.png`, `assets/monogram-blue.png`
  (light/blue versions of the supplied logo files for use on dark backgrounds).
- **Type** – Cinzel (display, matches the classical serif wordmark) + Manrope (body).
- **Palette** – midnight navy `#070b14`, navy `#101a2e`, sapphire `#3d74ff`, light sapphire `#5b8dff`,
  ivory `#f2eee6`, champagne accent `#cdb27a`. All defined as tokens at the top of `css/style.css`.

## Sections
Hero (rotating seal) · Services · Work · The Ascent (3-step process) · Testimonials · Founder · Contact

## Before launch
- **Work** – projects link to the live Base44 sites. To show real screenshots, place an `<img>` inside
  each `.site-preview` (it covers the styled preview automatically).
- **Testimonials** – client businesses are real; quote text and owner names are placeholders.
- **Founder** – add the owner's name, photo and bio.
- **Contact** – update the email and connect the form to a service (Formspree, Netlify Forms, etc.).
- **Book a Call** buttons – point them at your Calendly (or similar) link.
