import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { getAllProjects } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const featuredProjects = getAllProjects(locale).filter((project) => project.featured).slice(0, 4)

  return (
    <section id="projects" className="relative z-10 py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <span className="eyebrow mb-5">Selected work</span>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl">
              {t.projects.title}
            </h2>
          </div>
          <p className="max-w-readable text-base leading-relaxed text-foreground/60 sm:text-lg">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                'surface-panel surface-hover flex h-full flex-col p-6 sm:p-8',
                index === 0 && 'lg:col-span-7',
                index === 1 && 'lg:col-span-5',
                index === 2 && 'lg:col-span-5',
                index === 3 && 'lg:col-span-7'
              )}
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.18em] text-foreground/40">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.05em] text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.16em] text-foreground/50">
                  {project.size ?? 'featured'}
                </span>
              </div>

              <p className="mt-6 flex-1 text-base leading-relaxed text-foreground/60">
                {project.longDescription || project.description}
              </p>

              {project.metrics?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.metrics.map((metric) => (
                    <span key={`${project.id}-${metric.label}`} className="metric-chip text-sm text-foreground/60">
                      <strong>{metric.value}</strong>
                      {metric.label}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="rounded-full px-5">
                      <ExternalLink className="h-4 w-4" />
                      {t.projects.liveDemo}
                    </Button>
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="rounded-full px-5">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Link href={`/${locale}/projects`}>
            <Button variant="ghost" size="lg" className="rounded-full px-0 text-foreground/70 hover:bg-transparent hover:text-foreground">
              {t.projects.viewMore}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
