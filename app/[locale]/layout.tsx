import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'
import { ClientLayout } from '@/components/ui/ClientLayout'

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
      title: 'Daniel Gaszczyk - AI Consultant & Tech Entrepreneur',
      description: 'Konsultant AI i przedsiębiorca technologiczny. Specjalizuję się w rozwoju produktów AI, transformacji cyfrowej i innowacyjnych rozwiązaniach technologicznych.',
    },
    en: {
      title: 'Daniel Gaszczyk - AI Consultant & Tech Entrepreneur',
      description: 'AI consultant and tech entrepreneur. Specializing in AI product development, digital transformation, and innovative technology solutions.',
    },
  }

  return {
    title: {
      default: metadata[locale].title,
      template: `%s | Daniel Gaszczyk`,
    },
    description: metadata[locale].description,
    keywords: [
      'AI Consultant',
      'Tech Entrepreneur',
      'Machine Learning',
      'Digital Transformation',
      'Poland',
      'Startup',
      'Innovation',
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

  return <ClientLayout locale={locale}>{children}</ClientLayout>
}