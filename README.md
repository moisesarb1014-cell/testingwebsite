# Reyes Gardening Services — Website

A 6-page static marketing site for Reyes Gardening Services (Goleta, CA), built to attract both
residential clients and larger commercial/HOA grounds-maintenance contracts.

## Pages

- `index.html` — Home: hero, trust signals, services overview, commercial callout, process, testimonials, FAQ
- `services.html` — Detailed breakdown of every service offered
- `commercial.html` — Dedicated page for HOAs/property managers with a proposal-request form
- `gallery.html` — Filterable project gallery with lightbox
- `about.html` — Owner story, values, trust badges
- `contact.html` — Main lead-generation form + map + hours

No build step or framework — plain HTML/CSS/JS. Open `index.html` in a browser, or serve the
folder with any static file server.

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Before you launch — do these 4 things

### 1. Replace the placeholder photos
Every image in `assets/img/` (hero banners, gallery shots, the owner portrait, the social-share
image) is an intentionally simple SVG placeholder — **not** a stock photo — so nothing on the
live site misrepresents work that isn't actually yours. Swap them for real project photos and
keep the same filenames (or update the `src=` paths):

| File | Used for |
|---|---|
| `hero-home.svg` | Homepage hero background |
| `hero-services.svg`, `hero-commercial.svg`, `hero-gallery.svg`, `hero-about.svg`, `hero-contact.svg` | Interior page headers |
| `gallery-01.svg` … `gallery-09.svg` | Homepage + gallery project photos |
| `portrait-gerson.svg` | About page owner photo |
| `og-image.svg` | Social-share preview image (replace with a real 1200×630 JPG/PNG for best compatibility on Facebook/LinkedIn/iMessage) |

This is the single highest-impact change you can make — real before/after photos convert far
better than any placeholder.

### 2. Connect the contact forms
Both `contact.html` and `commercial.html` submit to a placeholder Formspree endpoint:

```html
<form data-lead-form action="https://formspree.io/f/REPLACE_WITH_FORM_ENDPOINT" method="POST">
```

Until this is replaced, submissions will show an error message telling the visitor to call
instead — no leads are lost, but none are captured by email either. To fix it (~2 minutes):

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a form and copy its endpoint URL (`https://formspree.io/f/xxxxxxxx`).
3. Replace `REPLACE_WITH_FORM_ENDPOINT` in **both** files' `action` attribute with your real ID.

(Any similar form backend — Netlify Forms, Basin, a custom API — works too; just change the
`action` URL and the JS in `js/main.js` will POST to it as-is.)

### 3. Confirm license, insurance & hours details
The site references "Licensed & Insured" as a trust badge (footer, about page, commercial page)
and lists business hours as Mon–Fri 7 AM–5 PM / Sat by appointment. Before launch:

- Confirm the actual CA contractor license number and consider adding it to the footer (many
  states legally require the license number be displayed on a contractor's website/ads).
- Confirm liability insurance is current if you're going to lead with that claim to commercial
  clients — property managers will ask for a Certificate of Insurance during the RFP process.
- Double-check hours match reality.

### 4. Update placeholder business info
- `assets/img/*` and both JSON-LD blocks in `index.html` reference
  `https://www.reyesgardeningservices.com/` as the canonical domain — update every `canonical`
  link tag and the JSON-LD `url`/`image` fields once you have a real domain.
- Wire up Google Analytics / Google Tag Manager if you want conversion tracking (there's no
  tracking code installed by default).

## Design notes

- **Fonts:** Fraunces (headlines) + Inter (body), loaded from Google Fonts.
- **Palette:** deep forest green + warm gold accent, built around the business's actual 4.9★/36-review
  Google rating and real client quotes (Ricardo Cisneros, Peter Jacobi, Alex Star, Moises Arb).
- **Commercial positioning:** `commercial.html` exists specifically to speak to property managers
  and HOA boards differently than homeowners — process, scope of work, and a longer-form RFP
  intake form, since that audience needs more proof (scope, reliability, single point of contact)
  before committing to a recurring contract.
- **Conversion elements:** sticky mobile call/quote bar, phone number in the header on every page,
  repeated CTAs per section, short lead forms, real reviews surfaced multiple times, and a
  dedicated commercial funnel — based on current best practices for contractor lead generation
  (specific CTAs, trust signals repeated throughout, 3–5 field forms).

## Deploying

This is a static site — it can be hosted for free on:
- **GitHub Pages** (Settings → Pages → deploy from this branch)
- **Netlify** or **Vercel** (drag-and-drop the folder, or connect the repo)
- Any standard web host (upload the files via FTP/cPanel)

No environment variables or server-side code are required.
