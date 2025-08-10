import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { type Locale } from '@/lib/i18n'

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return (
    <>
      <HeroSection locale={locale} />
      <ProjectsSection locale={locale} />
      <SkillsSection locale={locale} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  )
}