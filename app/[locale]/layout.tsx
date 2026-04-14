import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { locales, type Locale } from '@/lib/i18n'
import { ClientLayout } from '@/components/ui/ClientLayout'
import { getAllProjects } from '@/lib/projects'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: localeStr } = await params
  const locale = localeStr as Locale

  const metadata = {
    pl: {
      title: 'Daniel Gaszczyk - AI × Biznes × Technologia | TeamFeedback CTO',
      description: 'Buduję produkty na styku AI i biznesu. Twórca TeamFeedback (1M+ PLN finansowania), DailySpark. Wdrożenia AI dla MŚP - ROI w 3-6 miesięcy. 8+ lat doświadczenia, 20+ projektów.',
    },
    en: {
      title: 'Daniel Gaszczyk - AI Entrepreneur & Builder | TeamFeedback CTO',
      description: 'Building products where AI meets business. Creator of TeamFeedback (1M+ PLN funding), DailySpark. AI implementations for SMEs - ROI in 3-6 months. 8+ years experience, 20+ projects.',
    },
  }

  return {
    title: {
      default: metadata[locale].title,
      template: `%s | Daniel Gaszczyk`,
    },
    description: metadata[locale].description,
    keywords: locale === 'pl' ? [
      'automatyzacja biznesu AI',
      'wdrożenia sztucznej inteligencji',
      'TeamFeedback',
      'DailySpark',
      'Daniel Gaszczyk',
      'transformacja cyfrowa',
      'ocena pracownika AI',
      'feedback 360 stopni',
      'rozwiązania AI dla MŚP',
      'Azure AI certified',
      'startup technologiczny',
      'CTO as a Service',
      'audyt AI',
      'prototyp PoC AI'
    ] : [
      'AI consultant Poland',
      'business automation AI',
      'artificial intelligence implementation',
      'TeamFeedback',
      'DailySpark',
      'Daniel Gaszczyk',
      'digital transformation',
      'AI employee assessment',
      '360 degree feedback',
      'AI solutions for SMEs',
      'Azure AI certified',
      'tech startup',
      'CTO as a Service',
      'AI audit',
      'AI PoC prototype'
    ],
    authors: [{ name: 'Daniel Gaszczyk' }],
    creator: 'Daniel Gaszczyk',
    openGraph: {
      type: 'website',
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      url: 'https://danielgaszczyk.com',
      title: metadata[locale].title,
      description: metadata[locale].description,
      siteName: 'Daniel Gaszczyk',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata[locale].title,
      description: metadata[locale].description,
      creator: '@DaGaszczyk',
    },
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
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
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

  const projects = getAllProjects(locale)
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Gaszczyk',
    alternateName: 'Daniel Gąszczyk',
    url: 'https://danielgaszczyk.com',
    jobTitle: locale === 'pl' ? 'AI Entrepreneur | CTO' : 'AI Entrepreneur | CTO',
    worksFor: [
      {
        '@type': 'Organization',
        name: 'TeamFeedback',
        url: 'https://teamfeedback.co'
      },
      {
        '@type': 'Organization',
        name: locale === 'pl' ? 'Konsulting AI' : 'AI Consulting',
        url: 'https://wytlumacz.com'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/in/daniel-gaszczyk',
      'https://github.com/danielgaszczyk',
      'https://www.facebook.com/p4Q00F',
      'https://www.instagram.com/danielgaszczyk'
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'AI Agents',
      'Voice AI (ElevenLabs)',
      'AI-Assisted Coding',
      'Business Automation',
      'Digital Transformation',
      'Software Development',
      'Python',
      'Azure AI'
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Microsoft Azure AI Certified'
    },
    makesOffer: projects.map(project => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.longDescription || project.description,
      url: project.liveUrl || project.githubUrl
    }))
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ClientLayout locale={locale}>{children}</ClientLayout>
    </>
  )
}