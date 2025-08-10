'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { getAllProjects } from '@/lib/projects'

export function ProjectsGrid({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<string>('all')
  const projects = getAllProjects(locale)
  
  const technologies = Array.from(
    new Set(projects.flatMap(p => p.technologies))
  ).sort()

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter))

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <Button
          variant={filter === 'all' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          {locale === 'pl' ? 'Wszystkie' : 'All'}
        </Button>
        {technologies.map(tech => (
          <Button
            key={tech}
            variant={filter === tech ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter(tech)}
          >
            {tech}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.id}
            variant="glass"
            className={cn(
              'group hover:scale-105 transition-all duration-300',
              'animate-fade-up'
            )}
            style={{ animationDelay: `${index * 0.05}s` }}
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
                  >
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
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