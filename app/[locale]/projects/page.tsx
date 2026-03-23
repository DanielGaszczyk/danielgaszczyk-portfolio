import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { getTranslations, type Locale } from '@/lib/i18n'

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-balance">
          {t.projects.allTitle}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.projects.allSubtitle}
        </p>
      </div>
      <ProjectsGrid locale={locale} />
    </div>
  )
}
