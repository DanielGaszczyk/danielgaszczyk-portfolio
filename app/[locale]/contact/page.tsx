import type { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'
import { type Locale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/site'
import { BreadcrumbsJsonLd } from '@/components/seo/BreadcrumbsJsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({ locale, page: 'contact' })
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const trail = [{ name: locale === 'pl' ? 'Kontakt' : 'Contact', path: '/contact' }]

  return (
    <>
      <BreadcrumbsJsonLd locale={locale} trail={trail} />
      <ContactSection locale={locale} />
    </>
  )
}
