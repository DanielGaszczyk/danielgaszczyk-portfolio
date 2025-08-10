import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { type Locale } from '@/lib/i18n'

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          {locale === 'pl' ? 'Wszystkie Projekty' : 'All Projects'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {locale === 'pl' 
            ? 'Pełna lista projektów nad którymi pracowałem'
            : 'Complete list of projects I have worked on'}
        </p>
      </div>
      <ProjectsGrid locale={locale} />
    </div>
  )
}