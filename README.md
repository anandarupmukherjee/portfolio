# Anandarup Mukherjee · Academic profile

Static site for GitHub Pages. No build step, no dependencies.

## Structure

| File | What it holds |
|---|---|
| `index.html` | Page shell (header, footer, fonts) |
| `assets/content.js` | **All text**: vision, scales, programmes, roles, news, employment, education, teaching, talks, service, awards, links, metrics |
| `assets/publications.js` | Publication record (87 items). The id prefix sets the type: J, C, B, EB, CH, P, A. Set `featured: true` to show an item under "Selected"; `note` adds a badge |
| `assets/app.js` | Renderer and hash router (`#home`, `#research`, `#publications`, `#experience`, `#teaching`, `#recognition`, `#contact`) |
| `assets/site.css` | Styles |

## Routine updates

1. New paper: add an object to `assets/publications.js`.
2. New talk, award or news item: add a line to the matching list in `assets/content.js`.
3. Citation metrics: update `metrics` and `metricsAsOf` in `assets/content.js` from Google Scholar.

## Publishing

Settings → Pages → Deploy from a branch → choose the branch and `/ (root)`.
