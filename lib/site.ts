/**
 * Single source of truth for site-wide SEO constants and metadata builders.
 *
 * Everything that touches the canonical URL, a social profile handle, or
 * a page title/description imports from here — not from the component or
 * from `layout.tsx`. That way we change the base URL or a handle in one
 * place and every Open Graph tag, canonical link, JSON-LD block, and
 * sitemap entry updates in lockstep.
 */

import type { Locale } from '@/lib/i18n'
import type { Metadata } from 'next'

export const SITE_URL = 'https://danielgaszczyk.com'
export const SITE_NAME = 'Daniel Gaszczyk'
// No DEFAULT_OG_IMAGE constant: we rely on Next's file convention
// (app/opengraph-image.tsx + app/twitter-image.tsx) which auto-injects
// the correct hashed URL into og:image / twitter:image. Declaring an
// explicit image URL in Metadata would duplicate the tag and the
// explicit path would 404 (Next serves the real file at a hashed URL).

/**
 * Confirmed with Daniel 2026-04-17:
 * - Facebook and Instagram are his private profiles; he has no
 *   professional alternatives, so they stay in sameAs even though they
 *   add little SEO authority.
 * - Twitter creator handle is only used in twitter:creator meta; no
 *   profile URL was confirmed, so we don't add it to sameAs.
 */
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/daniel-gaszczyk',
  github: 'https://github.com/danielgaszczyk',
  facebook: 'https://www.facebook.com/p4Q00F',
  instagram: 'https://www.instagram.com/danielgaszczyk',
  substack: 'https://substack.com/@danielgaszczyk',
  twitterHandle: 'DaGaszczyk',
  email: 'hello@danielgaszczyk.com',
  calendar: 'https://calendar.app.google/xKCsZqPvkMwTyV1x9',
} as const

export const SAME_AS = [
  SOCIAL.linkedin,
  SOCIAL.github,
  SOCIAL.facebook,
  SOCIAL.instagram,
  SOCIAL.substack,
]

export type PageKey = 'home' | 'projects' | 'blog' | 'about' | 'contact'

/**
 * Only pages that actually exist as files under app/[locale]/ are listed
 * here. If you add a route, add its metadata — nothing here, no indexing.
 */
export const PAGE_PATHS: Record<PageKey, string> = {
  home: '',
  projects: '/projects',
  blog: '/blog',
  about: '/about',
  contact: '/contact',
}

export const PAGE_META: Record<Locale, Record<PageKey, { title: string; description: string }>> = {
  pl: {
    home: {
      title: 'Daniel Gaszczyk — AI × Biznes × Technologia | TeamFeedback CTO',
      description:
        'Buduję produkty na styku AI i biznesu. Twórca TeamFeedback (~1M PLN finansowania), DailySpark. Wdrożenia AI dla MŚP — ROI w 3–6 miesięcy. 5+ lat doświadczenia, 20+ projektów.',
    },
    projects: {
      title: 'Projekty',
      description:
        'Projekty AI i startupy: TeamFeedback, DailySpark, konsulting AI dla MŚP. Pełna lista realizacji Daniela Gaszczyka z metrykami.',
    },
    blog: {
      title: 'Blog',
      description:
        'Myśli o AI, technologii i przedsiębiorczości. Praktyczne wnioski z wdrożeń AI w MŚP — co działa, a co nie.',
    },
    about: {
      title: 'O mnie',
      description:
        'Daniel Gaszczyk — przedsiębiorca technologiczny i konsultant AI. Współtwórca TeamFeedback. 5+ lat doświadczenia w budowaniu produktów AI dla biznesu.',
    },
    contact: {
      title: 'Kontakt',
      description:
        'Skontaktuj się w sprawie konsultacji AI, audytu procesów lub wdrożenia rozwiązania. Email i kalendarz spotkań.',
    },
  },
  en: {
    home: {
      title: 'Daniel Gaszczyk — AI Entrepreneur & Builder | TeamFeedback CTO',
      description:
        'Building products where AI meets business. Creator of TeamFeedback (~1M PLN funding), DailySpark. AI implementations for SMEs — ROI in 3–6 months. 5+ years experience, 20+ projects.',
    },
    projects: {
      title: 'Projects',
      description:
        'AI projects and startups: TeamFeedback, DailySpark, AI consulting for SMEs. Full portfolio of Daniel Gaszczyk with metrics.',
    },
    blog: {
      title: 'Blog',
      description:
        'Thoughts on AI, technology and entrepreneurship. Practical lessons from AI deployments in SMEs — what works and what doesn\'t.',
    },
    about: {
      title: 'About',
      description:
        'Daniel Gaszczyk — tech entrepreneur and AI consultant. Co-founder of TeamFeedback. 5+ years building AI products for business.',
    },
    contact: {
      title: 'Contact',
      description:
        'Get in touch about AI consulting, process audits or implementation projects. Email and meeting calendar.',
    },
  },
}

/**
 * Build the canonical URL + hreflang alternates for a given locale+page.
 * Also emits per-locale OG URL so share cards from /en don't claim /pl as canonical.
 */
export function buildMetadata({
  locale,
  page,
}: {
  locale: Locale
  page: PageKey
}): Metadata {
  const meta = PAGE_META[locale][page]
  const path = PAGE_PATHS[page]
  const canonical = `${SITE_URL}/${locale}${path}`

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        pl: `${SITE_URL}/pl${path}`,
        en: `${SITE_URL}/en${path}`,
        // x-default = which URL to show when no language matches; we send to PL (default locale).
        'x-default': `${SITE_URL}/pl${path}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      alternateLocale: locale === 'pl' ? ['en_US'] : ['pl_PL'],
      url: canonical,
      title: meta.title,
      description: meta.description,
      siteName: SITE_NAME,
      // og:image is injected by app/opengraph-image.tsx (file convention)
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: `@${SOCIAL.twitterHandle}`,
      // twitter:image is injected by app/twitter-image.tsx (file convention)
    },
  }
}
