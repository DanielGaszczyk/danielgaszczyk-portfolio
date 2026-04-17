import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { locales, type Locale } from '@/lib/i18n'
import { ClientLayout } from '@/components/ui/ClientLayout'
import { SITE_URL, SITE_NAME, SAME_AS, buildMetadata } from '@/lib/site'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

/**
 * Root metadata for the [locale] segment. Each page below can override
 * title/description/openGraph via its own generateMetadata — Next merges
 * per-page metadata on top of this. metadataBase lets relative URLs
 * (like the opengraph-image route) resolve against the canonical host.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: localeStr } = await params
  const locale = localeStr as Locale
  const base = buildMetadata({ locale, page: 'home' })

  return {
    metadataBase: new URL(SITE_URL),
    ...base,
    title: {
      default: base.title as string,
      template: `%s | ${SITE_NAME}`,
    },
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    keywords: locale === 'pl' ? [
      'automatyzacja biznesu AI',
      'wdrożenia sztucznej inteligencji',
      'TeamFeedback',
      'DailySpark',
      'Daniel Gaszczyk',
      'konsultant AI',
      'rozwiązania AI dla MŚP',
      'Azure AI',
      'CTO as a Service',
      'audyt AI',
      'prototyp PoC AI',
    ] : [
      'AI consultant Poland',
      'business automation AI',
      'AI implementation',
      'TeamFeedback',
      'DailySpark',
      'Daniel Gaszczyk',
      'AI solutions for SMEs',
      'Azure AI',
      'CTO as a Service',
      'AI audit',
      'AI PoC prototype',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Icons are emitted by app/icon.tsx + app/apple-icon.tsx (Next file
    // conventions). No explicit declarations needed here — and we no
    // longer reference favicon-16x16.png / apple-touch-icon.png which
    // did not exist in public/ and returned 404s.
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: localeStr } = await params
  if (!locales.includes(localeStr as Locale)) notFound()
  const locale = localeStr as Locale

  // Person JSON-LD — "who is this site about".
  // All claims verified with Daniel 2026-04-17:
  //   - 5+ years (since 2021)
  //   - Azure AI certified (no specific exam name confirmed → generic)
  //   - sameAs are Daniel's; FB/IG are personal but stay per his request
  // We do NOT dump 11 projects into makesOffer — project structured
  // data belongs on /projects (separate commit), not on every page.
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE_NAME,
    alternateName: 'Daniel Gąszczyk',
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/daniel.jpg`,
    jobTitle: locale === 'pl' ? 'Przedsiębiorca AI, CTO' : 'AI Entrepreneur, CTO',
    description: locale === 'pl'
      ? 'Przedsiębiorca technologiczny i konsultant AI. Współtwórca TeamFeedback. 5+ lat doświadczenia w budowaniu produktów na styku AI i biznesu.'
      : 'Tech entrepreneur and AI consultant. Co-founder of TeamFeedback. 5+ years building products at the intersection of AI and business.',
    email: 'mailto:hello@danielgaszczyk.com',
    worksFor: [
      { '@type': 'Organization', name: 'TeamFeedback', url: 'https://teamfeedback.co' },
      { '@type': 'Organization', name: locale === 'pl' ? 'Konsulting AI' : 'AI Consulting', url: 'https://wytlumacz.com' },
    ],
    sameAs: SAME_AS,
    knowsAbout: [
      'Artificial Intelligence',
      'AI Agents',
      'Voice AI',
      'Business Automation',
      'Digital Transformation',
      'Software Development',
      'Python',
      'Azure AI',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Microsoft Azure AI Certified',
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: 'Microsoft' },
    },
  }

  // WebSite JSON-LD — positions the site as a canonical entity and
  // gives Google the language signal per locale.
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: locale === 'pl' ? 'pl-PL' : 'en-US',
    publisher: { '@id': `${SITE_URL}/#person` },
  }

  return (
    <>
      <Script
        id="ld-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <ClientLayout locale={locale}>{children}</ClientLayout>
    </>
  )
}