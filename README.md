# Anandarup Mukherjee — Academic Portfolio

A multi-page static portfolio site for Dr. Anandarup Mukherjee, Senior Research Associate, University of Cambridge.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Home — bio, metrics, research theme, recent highlights |
| `research.html` | Research themes and all projects (Cambridge + IIT Kharagpur) |
| `publications.html` | 50 journals, 27 conferences, 2 textbooks, 1 edited book, 2 chapters, 1 patent, 4 articles |
| `cv.html` | Employment timeline, education, and professional credentials |
| `teaching.html` | Teaching, MOOCs, keynotes, and expert lectures |
| `awards.html` | Awards and honors organised by year |
| `css/style.css` | Shared stylesheet — editorial / Cambridge-modern aesthetic |

No JavaScript frameworks, no build step, no dependencies. Pure HTML + CSS. Loads in under a second.

## Design

- **Typography**: Fraunces (display serif) + IBM Plex Sans (body) + IBM Plex Mono (accents) — all loaded from Google Fonts.
- **Palette**: Warm paper background, deep ink text, burgundy/oxblood accent with subtle gold highlights.
- **Layout**: Sticky blurred navigation, asymmetric hero grid with metrics card, timeline-style CV, dense scannable publication list with per-entry links.
- **Details**: Subtle paper-grain overlay, reveal animations on load, accent underline hover states, corner bracket on hero card. Fully responsive with a hamburger menu on mobile.

## Deploy to GitHub Pages

There are two common options. Either works — pick one.

### Option A — User site (serves at `https://<username>.github.io`)

1. Create a new GitHub repository named **exactly** `<your-github-username>.github.io` (for example, `anandarupmukherjee.github.io`).
2. Upload all files in this folder (`index.html`, `research.html`, `publications.html`, `cv.html`, `teaching.html`, `awards.html`, and the `css/` folder) to the repository root.
3. Push to the `main` branch.
4. Go to **Settings → Pages**. Under "Build and deployment", set the source to **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
5. Wait 1–2 minutes. Your site will be live at `https://<your-github-username>.github.io`.

### Option B — Project site (serves at `https://<username>.github.io/<repo-name>`)

1. Create a new GitHub repository with any name (for example, `portfolio`).
2. Upload all files to the repository root.
3. Go to **Settings → Pages** and configure as above. Your site will live at `https://<your-github-username>.github.io/<repo-name>`.

### Using the terminal

```bash
# initialise the repo
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

Then enable Pages in the repository **Settings → Pages**.

## Custom domain (optional)

If you want to use your own domain (e.g., `anandarupmukherjee.com`):

1. In **Settings → Pages → Custom domain**, enter your domain name.
2. With your DNS provider, create a `CNAME` record pointing to `<username>.github.io`.
3. GitHub will create a `CNAME` file in your repo; keep it committed.
4. Wait for DNS propagation, then enable "Enforce HTTPS".

## Customising

### Updating content

Everything is in plain HTML. Open any `.html` file in a text editor and edit the text directly. No build step required.

### Adding a headshot

Create an `images/` folder, drop in your photo (e.g., `headshot.jpg`), and in `index.html`, replace the hero card block (search for `aside class="hero-card"`) or add an `<img>` inside the `.hero-grid`.

Example:
```html
<img src="images/headshot.jpg" alt="Anandarup Mukherjee" style="width: 100%; height: auto; border: 1px solid var(--rule);" />
```

### Changing the colour palette

Edit the `:root` variables at the top of `css/style.css`:

```css
--paper:       #F6F1E6;   /* background */
--ink:         #1A1F2E;   /* primary text */
--accent:      #7C2D3A;   /* burgundy accent */
--gold:        #B08845;   /* subtle gold highlight */
```

### Adding new publications

Open `publications.html`, find the relevant `<ol class="pub-list">`, and add a new `<li class="pub-item">` at the top — keep the structure consistent with surrounding entries.

### Adding a new page

1. Copy any existing `.html` file (e.g. `awards.html`) as your starting point.
2. Change the `<title>` and meta description.
3. Update the navigation `<ul class="nav-links">` so the new page has `class="active"` on its own link.
4. Add the page to the footer navigation in every other file.

## Local preview

You can open any `.html` file directly in your browser. For a more accurate preview (without CORS quirks), run a quick local server:

```bash
# Python 3
python3 -m http.server 8000

# or with Node
npx serve .
```

Then visit `http://localhost:8000`.

## Notes

- Images from the original Google Sites were not copied over — Google Sites uses temporary signed URLs that expire. You'll want to drop in your own images (headshot, project photos) as described above.
- All external links (Scholar, ORCID, ResearchGate, LinkedIn, etc.) open in a new tab and point to your actual profiles — no dummy links.
- The publication list is the full 50 journals / 27 conferences with live links to IEEE, Elsevier, Springer, MDPI, and others.

---

© Anandarup Mukherjee. Site structure and design: open to modify as you wish.
