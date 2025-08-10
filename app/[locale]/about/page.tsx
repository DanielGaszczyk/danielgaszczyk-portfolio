import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { type Locale } from '@/lib/i18n'

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  
  return (
    <>
      <AboutSection locale={locale} />
      <SkillsSection locale={locale} />
    </>
  )
}