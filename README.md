# Royal City Planner — standalone PWA

A GitHub Pages-ready Vite/React project based on the Royal City planner component you supplied.

## Included
- Original planner map tools and interactions.
- Local autosave in this browser/device using `localStorage`.
- PNG/JPG export.
- PWA manifest, icon, and service worker for install/offline app-shell support.
- No XClashWiki account, save endpoint, CSRF token, or live-sync dependency.

## Publish with GitHub Pages
1. Create a new GitHub repository and upload the contents of this folder.
2. Open **Settings → Pages** and set the source to **GitHub Actions**.
3. Keep the included `.github/workflows/deploy.yml` workflow in the repository.
4. Push to the `main` branch and wait for the Actions deployment to finish.
5. Open the published HTTPS URL. On iPhone, use Safari → Share → Add to Home Screen.

## Run locally
Install Node.js, then run `npm install` and `npm run dev`.
For a production build, run `npm run build`.

## Notes
- Plans save only in the current browser/device. They do not sync between devices; clearing browser site data can erase them. Export a PNG backup.
- The original page's server-provided translation dictionary and initial plan data were not included in the supplied files. This package supplies an English label baseline, so some wording may differ from XClashWiki.
- This is a personal standalone planner, not a multi-user shared plan.
