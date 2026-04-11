# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build (outputs to /out for static hosting)
npm run lint     # Run ESLint with Next.js rules
```

Build generates static files in `/out` - this is a static export site deployed to GitHub Pages.

## Architecture

### Internationalization (i18n)
Custom i18n implementation without external libraries:
- Locales: `pl` (default), `en` - defined in `lib/i18n.ts`
- All pages live under `app/[locale]/` dynamic route
- Root `app/page.tsx` redirects to default locale (`/pl`)
- Components receive `locale: Locale` prop and use `getTranslations(locale)` to access strings
- When adding new pages, implement `generateStaticParams()` to generate routes for all locales

### Component Organization
- `components/ui/` - Reusable primitives (Button, Card, Badge, ThemeProvider)
- `components/sections/` - Page sections that compose the homepage and other pages
- `components/navigation/` - Navigation (FloatingNav)
- `components/effects/` - Visual effects and backgrounds (particles, liquid glass)

### Data Layer
Content is stored in TypeScript files, not markdown:
- `lib/projects.ts` - Project data with `Project` interface, locale-specific arrays
- `lib/blog.ts` - Blog post metadata with `BlogPost` interface
- `lib/i18n.ts` - Translation strings organized by section (nav, hero, projects, etc.)

### Styling
- Tailwind CSS with CSS variables for theming (see `tailwind.config.ts`)
- Theme colors defined as HSL CSS variables (background, foreground, primary, etc.)
- Dark mode via `class` strategy - ThemeProvider toggles `dark` class on `<html>`
- `cn()` utility from `lib/utils.ts` for merging Tailwind classes

### Layout Structure
`ClientLayout` wraps all locale pages and provides:
- ThemeProvider context
- Header, Footer, FloatingNav
- Background effects (OptimizedLiquidBackground, CustomCursor)

## Key Patterns

- Static export: `next.config.js` uses `output: 'export'` with `trailingSlash: true`
- Client components must be marked with `'use client'` directive
- Framer Motion used for animations - imported from `framer-motion`
- Path alias `@/*` maps to project root
