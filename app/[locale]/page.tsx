import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { type Locale } from '@/lib/i18n'

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return (
    <>
      <HeroSection locale={locale} />
      <hr className="section-divider" />
      <ProjectsSection locale={locale} />
      <hr className="section-divider" />
      <SkillsSection locale={locale} />
      <hr className="section-divider" />
      <AboutSection locale={locale} />
      <hr className="section-divider" />
      <ContactSection locale={locale} />
      <CTABanner locale={locale} />
    </>
  )
}