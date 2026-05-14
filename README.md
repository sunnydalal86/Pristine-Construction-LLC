# Pristine Construction LLC — Website

Marketing site for **Pristine Construction LLC** (Bay Area residential remodeling). Built with **Next.js** (App Router), **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**. Typography uses **DM Serif Display** and **Inter** via `next/font`.

**Repository:** [github.com/sunnydalal86/Pristine-Construction-LLC](https://github.com/sunnydalal86/Pristine-Construction-LLC)

## Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** (comes with Node)

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open **[http://127.0.0.1:3000](http://127.0.0.1:3000)** in your browser (`localhost` may resolve differently on some networks). The dev script frees port **3000** first so you are not left hitting an old process (which often shows a **404**) while Next.js quietly starts on another port.

Other scripts:

| Command | Purpose |
|--------|---------|
| `npm run dev:turbo` | Dev server with Turbopack |
| `npm run dev:clean` | Clear `.next`, then webpack dev server |
| `npm run build` | Production build (static export to `out/`) |
| `npm run lint` | ESLint |

## Project layout

- `src/app/` — App Router (`layout.tsx`, `page.tsx`)
- `src/components/` — UI and page sections (`sections/`, `ui/`)
- `public/` — Static assets (`public/images/`)

Primary content composition lives in `src/app/page.tsx`, which stitches section components together.

## Build and deploy

This project uses **`output: "export"`** in `next.config.ts`, so **`npm run build`** produces a static site in **`out/`** (images use `images.unoptimized` for compatibility with static hosting).

Deployment is wired for **Netlify** via `netlify.toml` (`publish = "out"`). Connect the GitHub repo in Netlify and use the defaults from that file, or run `npm run build` locally and deploy the `out` directory.

---

© Pristine Construction LLC. All rights reserved.
