# Portfolio setup

This redesign belongs in the existing `SassiMohamedRayene/SassiMohamedRayene` repository. It uses one HTML page, locally compiled Tailwind CSS, custom CSS, and vanilla JavaScript. Your profile README is preserved. The old site content is preserved in `original-portfolio.md`.

## Preview locally

Open `index.html` directly, or run from the repository root:

```sh
python3 -m http.server 8000
```

On Windows, use `py -m http.server 8000` if needed. Visit http://localhost:8000.

The compiled CSS is included. Node.js is only necessary when editing styles or adding Tailwind classes:

```sh
npm ci
npm run build
```

`npm run dev` watches styles while you edit.

## Apply to your existing repository

1. Extract the ZIP. Copy its contents into your local repository. Preserve the local `.git` folder.
2. Remove the old root `index.md` (its content is preserved as `original-portfolio.md`). Keep the new root `index.html` and `.nojekyll` file. The latter prevents the previous Jekyll theme from wrapping the new design.
3. Review locally, then commit and push:

```sh
git add .
git commit -m "Redesign personal portfolio"
git push origin main
```

4. In GitHub, open repository Settings → Pages. Choose **Deploy from a branch**, then **main** and **/(root)**, and Save.
5. Use the URL GitHub Pages displays. For this repository, the expected URL is https://SassiMohamedRayene.github.io/SassiMohamedRayene/ . If you use a different address, update `og:url` and `og:image` in `index.html`.

## Updating content

- Page content, contact links, experience, projects: `index.html`.
- Styles: `src/styles.css`, then run `npm run build`.
- Navigation: `assets/js/main.js`.
- Portrait: `assets/images/portrait.webp`.
- Resume: replace `assets/resume/Mohamed-Rayene-Sassi-Resume.pdf`, keeping the same name.

## Content notes

The supplied resume is the primary source. The uploaded brief and existing portfolio support the preferred full name, B.S. Computer Science, current M.S., and current Graduate Assistant role. No dates or duties were invented for that current role. The combined program date and GPA match the resume. LandscapingPro is explicitly described as in development, and its stack is marked planned. Project visuals are conceptual illustrations, not screenshots of the applications. Repository links were verified against the public GitHub repository list.

The original `README.md` and `_config.yml` are unchanged. No remote push or deployment has been performed. The resume is published unmodified and includes its original contact information.

## Version 2 redesign

Visual direction follows the supplied reference: white and charcoal surfaces, orange accents, rounded cards, pill buttons, and a persistent light/dark toggle. This is a custom implementation with vanilla JavaScript; Alpine.js and a CDN are not required. Koops Automation’s Interactive Build Floor Map is now the first, largest featured project. Its floor-plan visual is an original concept illustration, not a production screenshot. No public Koops source or demo URL was supplied, so none is invented.

Checked in Chromium at 1440, 768, 390, and 320 pixels: no horizontal overflow. Mobile navigation, fragment links, resume asset, theme persistence, reduced-motion behavior, and no-JavaScript navigation were checked. No JavaScript errors were observed.
