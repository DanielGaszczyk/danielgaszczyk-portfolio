'use client'

import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { getAllProjects } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const [, setHoveredProject] = useState<string | null>(null)
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set())
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const allProjects = getAllProjects(locale)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute('data-project-id')
            if (projectId) {
              setVisibleProjects((prev) => new Set(prev).add(projectId))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [allProjects])

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <Card
              key={project.id}
              ref={(el) => {
                if (el) projectRefs.current.set(project.id, el)
              }}
              data-project-id={project.id}
              variant="glass"
              className={cn(
                'group hover:scale-105 transition-all duration-300 cursor-pointer',
                visibleProjects.has(project.id) ? 'animate-fade-up' : 'opacity-0'
              )}
              style={{
                animationDelay: visibleProjects.has(project.id) ? `${(index % 3) * 0.1}s` : undefined,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader>
                <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <span className="text-5xl" role="img" aria-label={project.title}>{project.emoji || '🚀'}</span>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-sm line-clamp-3">
                  {project.longDescription || project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        {t.projects.liveDemo}
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
