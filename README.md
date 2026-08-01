# SolarBalkon Ratgeber

Unabhängige Nischen-Website zu Balkonkraftwerken (Steckersolar) – gebaut mit **Astro 7**, statischem Output für **GitHub Pages**.

## Stack

- Astro 7 (static HTML)
- Vanilla CSS (mobile-first, Grün/Erde)
- `@astrojs/sitemap`
- Google Fonts (Fraunces + Source Sans 3)
- Kein React, kein Tailwind, keine weiteren JS-Frameworks

## Entwicklung

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Deployment

GitHub Actions-Workflow: `.github/workflows/deploy.yml`

1. Repository auf GitHub anlegen
2. Settings → Pages → Source: **GitHub Actions**
3. In `astro.config.mjs` die `site`-URL anpassen
4. Push auf `main`

## Inhalte

| Pfad | Beschreibung |
|------|----------------|
| `/` | Startseite |
| `/blog` | Ratgeber-Übersicht |
| `/blog/*` | Artikel |
| `/ueber-mich` | Autor |
| `/impressum` | Impressum (DSGVO/DDG) |
| `/datenschutz` | Datenschutzerklärung inkl. AdSense |

## AdSense

Platzhalter und Datenschutz-Abschnitte sind vorbereitet. AdSense-Code erst nach Freigabe und mit Consent-Banner (TDDDG/DSGVO) einbinden.

## Lizenz

Inhalt © SolarBalkon Ratgeber. Vor Veröffentlichung Impressumsdaten und Beispiel-USt-IdNr. ersetzen.
