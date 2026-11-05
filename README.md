# Personal Website

An Astro static site for GitHub Pages.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## GitHub Pages

In the repository settings, set **Pages > Build and deployment > Source** to
**GitHub Actions**. The workflow builds the site and deploys the `dist` folder.

Pages use `src/layouts/BaseLayout.astro`, which includes the shared header and
footer. Global design tokens and base styles live in `src/styles/global.css`.
