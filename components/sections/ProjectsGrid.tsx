'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { getAllProjects } from '@/lib/projects'

export function ProjectsGrid({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const projects = getAllProjects(locale)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            variant="glass"
            className={cn(
              'group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300',
              'animate-fade-up'
            )}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CardHeader>
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">{project.emoji || '🚀'}</span>
              </div>
              <CardTitle className="font-heading">{project.title}</CardTitle>
              <CardDescription className="mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
    </>
  )
}
