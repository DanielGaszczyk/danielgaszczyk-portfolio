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
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  
  const metadata = {
    pl: {
      title: 'Daniel Gaszczyk - Konsultant AI | Automatyzacja Biznesu | TeamFeedback CTO',
      description: 'Konsultant AI specjalizujący się w automatyzacji biznesu. Twórca TeamFeedback (1M+ PLN finansowania), DailySpark. Wdrożenia AI dla MŚP - zwiększ efektywność o 25% w 90 dni. 5+ lat doświadczenia, 30+ projektów.',
    },
    en: {
      title: 'Daniel Gaszczyk - AI Consultant | Business Automation | TeamFeedback CTO',
      description: 'AI consultant specializing in business automation. Creator of TeamFeedback (1M+ PLN funding), DailySpark. AI implementations for SMEs - increase efficiency by 25% in 90 days. 5+ years experience, 30+ projects.',
    },
  }

  return {
    title: {
      default: metadata[locale].title,
      template: `%s | Daniel Gaszczyk`,
    },
    description: metadata[locale].description,
    keywords: locale === 'pl' ? [
      'konsultant AI Polska',
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
      creator: '@danielgaszczyk',
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
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  if (!locales.includes(locale)) notFound()

  const projects = getAllProjects(locale)
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Gaszczyk',
    alternateName: 'Daniel Gąszczyk',
    url: 'https://danielgaszczyk.com',
    jobTitle: locale === 'pl' ? 'Konsultant AI i CTO' : 'AI Consultant and CTO',
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
      'Machine Learning',
      'Business Automation',
      'Digital Transformation',
      'Software Development',
      'React',
      'Node.js',
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
      url: project.liveUrl || project.githubUrl,
      keywords: project.technologies.join(', ')
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