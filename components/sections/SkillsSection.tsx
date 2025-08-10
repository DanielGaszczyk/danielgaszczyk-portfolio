'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const skills = {
  'AI & Machine Learning': [
    'OpenAI API',
    'TensorFlow',
    'PyTorch',
    'Hugging Face',
    'LangChain',
    'Vector Databases',
  ],
  'Frontend Development': [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Vue.js',
    'React Native',
  ],
  'Backend Development': [
    'Node.js',
    'Python',
    'FastAPI',
    'Django',
    'PostgreSQL',
    'MongoDB',
  ],
  'Cloud & DevOps': [
    'AWS',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Terraform',
    'GitHub Actions',
  ],
  'Business & Strategy': [
    'Product Management',
    'Startup Development',
    'Digital Transformation',
    'Agile/Scrum',
    'Team Leadership',
    'Fundraising',
  ],
}

export function SkillsSection({ locale }: { locale: Locale }) {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement)
            setVisibleSections((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const title = locale === 'pl' ? 'Umiejętności i Technologie' : 'Skills & Technologies'
  const subtitle = locale === 'pl' 
    ? 'Technologie i narzędzia, które wykorzystuję w codziennej pracy'
    : 'Technologies and tools I use in my daily work'

  return (
    <section className="py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              ref={(el) => {
                sectionRefs.current[index] = el
              }}
              className={cn(
                'transform transition-all duration-700',
                visibleSections.has(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card variant="glass" className="h-full hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={cn(
                          'transform transition-all duration-500',
                          visibleSections.has(index)
                            ? 'scale-100 opacity-100'
                            : 'scale-0 opacity-0'
                        )}
                        style={{ transitionDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}