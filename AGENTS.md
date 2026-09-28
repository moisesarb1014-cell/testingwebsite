# Base44 Dev Environment

## Project
Static marketing site (plain HTML/CSS/JS, no build step, no framework, no backend).
6 pages: `index.html`, `services.html`, `commercial.html`, `gallery.html`, `about.html`, `contact.html`.

## Running
```bash
docker compose -f docker-compose.base44.yml up -d
```
Serves the repo root via nginx on host port 3000. No environment variables or secrets needed.

## Editing
Source files are bind-mounted; nginx serves them directly, so edits appear immediately (call `reload_preview` to force a refresh of the preview iframe).

## Notes
- Contact forms submit to a placeholder Formspree endpoint — not wired up by default.
- Images in `assets/img/` are SVG placeholders.
