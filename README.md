# Dimas Bagus Ginta P · Product portfolio

Static portfolio site built with [Astro](https://astro.build). Plain CSS, no UI framework, no client-side JavaScript.

## Run locally

Requires Node 18.20+ (tested on Node 24).

```bash
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # static site in dist/
npm run preview   # serve dist/ to check the production build
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/projects.ts` | Every case study: card text, opener slide, and the beats (sections) of each page |
| `src/data/site.ts` | Name, contact links, hero numbers, career timeline, experience, education, toolkit |
| `src/components/` | `Slide`, `StatGrid`, `ProblemGrid`, `DecisionLog`, `Flow`, `CompareBars`, `ColumnChart`, `Takeaway`, `Figure`, `ProjectCard`, `CareerTimeline`, `ProjectNav`, `ContactLinks` |
| `src/components/Blocks.astro` | Turns a beat's block list into components |
| `src/styles/global.css` | Design tokens (colors, fonts) and all component styles |
| `src/pages/og/[slug].png.ts` | Generates a 1200×630 social preview image per page at build time |
| `src/assets/projects/` | Project images (resized and lazy-loaded by Astro) |
| `public/portfolio.pdf` | The PDF served at `/portfolio.pdf` |

## Edit or add a project

1. Open `src/data/projects.ts`.
2. Change any text in place. Wrap the key phrase of a hook in `<em>…</em>` and number ranges in `<span class="nw">…</span>` so they never break across lines.
3. To add a project, copy an existing entry in the `projects` array and change `slug`, `num`, `short`, `accent`, `card`, `opener` and `beats`. The page `/projects/<slug>/`, its card on the home page, its OG image and the “Next” link are created automatically. The order of the array is the order on the site.
4. Each beat is `{ label, title, blocks }`. Available block types (see the `Block` type at the top of the file): `p`, `ul`, `stats`, `problems`, `log`, `flow`, `compare`, `columns`, `takeaway`, `figure`, `figures`, `tiles`, `two` (two columns of blocks).

## Swap an image

Put the new file in `src/assets/projects/` and reference it by file name (`file: 'my-image.jpg'`) in `projects.ts`. Keep the same name to replace an image without touching the data. For covers, `position` sets the CSS `object-position` (e.g. `'center 35%'`). Always write an `alt`.

## Deploy

Before the first deploy, set the real domain: change the default in `astro.config.mjs` (or set the `SITE_URL` env var) and update the sitemap line in `public/robots.txt`. Canonical URLs, the sitemap and OG images use it.

### Vercel (recommended)

1. Push this folder to a GitHub repository.
2. On [vercel.com/new](https://vercel.com/new), import the repo. Vercel detects Astro: build command `npm run build`, output `dist`.
3. Optional: add the env var `SITE_URL=https://your-domain` and connect a custom domain under Settings → Domains.

Or from the terminal: `npx vercel` (preview) and `npx vercel --prod`.

### Netlify

1. Import the repo at [app.netlify.com](https://app.netlify.com/start).
2. Build command `npm run build`, publish directory `dist`. Add `SITE_URL` under Environment variables if needed.

Or: `npx netlify deploy --build --prod`.

### GitHub Pages

For a project page (`https://<user>.github.io/<repo>/`), build with `SITE_URL=https://<user>.github.io BASE_PATH=/<repo>/ npm run build`, or use the official [withastro/action](https://github.com/withastro/action) workflow with those env vars. All internal links go through `url()` in `src/data/site.ts`, so they follow the base path.
