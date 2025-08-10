'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { getFeaturedProjects } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const [, setHoveredProject] = useState<string | null>(null)
  const featuredProjects = getFeaturedProjects(locale)

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              variant="glass"
              className={cn(
                'group hover:scale-105 transition-all duration-300 cursor-pointer',
                'animate-fade-up'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">{project.emoji || '🚀'}</span>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
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

        <div className="text-center mt-12">
          <Link href={`/${locale}/projects`}>
            <Button size="lg" variant="outline" className="group">
              {t.projects.viewMore}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}