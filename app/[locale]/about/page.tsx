import type { Metadata } from 'next'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { type Locale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/site'
import { BreadcrumbsJsonLd } from '@/components/seo/BreadcrumbsJsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({ locale, page: 'about' })
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const trail = [{ name: locale === 'pl' ? 'O mnie' : 'About', path: '/about' }]

  return (
    <>
      <BreadcrumbsJsonLd locale={locale} trail={trail} />
      <AboutSection locale={locale} />
      <SkillsSection locale={locale} />
    </>
  )
}
