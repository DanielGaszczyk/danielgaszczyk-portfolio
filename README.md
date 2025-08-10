# danielgaszczyk.com

Personal portfolio website built with Next.js 14 and TypeScript.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- GitHub Pages

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - Linting

## Deploy

Push to `main` branch → automatic deploy via GitHub Actions.

## Structure

```
app/[locale]/     - Internationalized pages (PL/EN)
components/       - UI components
content/          - Markdown content
lib/              - Utilities
```