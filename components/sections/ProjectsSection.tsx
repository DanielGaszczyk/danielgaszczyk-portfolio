'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { getAllProjects } from '@/lib/projects'
import { GlassCard } from '@/components/ui/GlassCard'

export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const allProjects = getAllProjects(locale)

  // Helper function to get grid classes based on project size
  const getGridClasses = (size?: string) => {
    switch (size) {
      case 'hero':
        return 'col-span-2 row-span-2 md:col-span-2 md:row-span-2'
      case 'featured':
        return 'col-span-2 row-span-1 md:col-span-2 md:row-span-1'
      case 'small':
      default:
        return 'col-span-1 row-span-1'
    }
  }

  // Helper function to get scale based on size
  const getHoverScale = (size?: string) => {
    switch (size) {
      case 'hero':
        return 1.02
      case 'featured':
        return 1.03
      case 'small':
      default:
        return 1.05
    }
  }

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto font-light">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
          {allProjects.map((project, index) => {
            const isHero = project.size === 'hero'
            const isFeatured = project.size === 'featured'
            const hasMetrics = project.metrics && project.metrics.length > 0

            return (
              <motion.div
                key={project.id}
                className={getGridClasses(project.size)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{
                  scale: getHoverScale(project.size),
                  y: isHero ? -8 : -12
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <GlassCard className="h-full flex flex-col group p-0 transition-all duration-300 hover:shadow-[0_30px_80px_rgba(59,130,246,0.5)]">
                  {/* Header Image/Emoji Area */}
                  <div className={`relative ${isHero ? 'h-64' : isFeatured ? 'h-48' : 'h-40'} bg-gradient-to-br from-white/5 to-white/10 overflow-hidden flex items-center justify-center border-b border-white/5`}>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <motion.span
                      className={`${isHero ? 'text-8xl' : isFeatured ? 'text-7xl' : 'text-6xl'} relative z-10`}
                      animate={{
                        scale: hoveredProject === project.id ? 1.2 : 1,
                        rotate: hoveredProject === project.id ? [0, -10, 10, 0] : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.emoji || '🚀'}
                    </motion.span>

                    {/* Overlay gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={`${isHero ? 'text-3xl' : 'text-2xl'} font-bold mb-3 group-hover:text-primary transition-colors`}>
                      {project.title}
                    </h3>
                    <p className={`text-foreground/90 text-sm ${isHero ? 'line-clamp-4' : 'line-clamp-3'} mb-4 flex-1 leading-relaxed`}>
                      {project.longDescription || project.description}
                    </p>

                    {/* Metrics for hero and featured projects */}
                    {hasMetrics && (isHero || isFeatured) && (
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {project.metrics!.map((metric) => (
                          <div key={metric.label} className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-xs text-foreground/70 mb-1">{metric.label}</p>
                            <p className="text-lg font-bold gradient-text">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button className="w-full bg-white/5 hover:bg-white/20 border-white/10 hover:border-white/30 backdrop-blur-md" variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={project.liveUrl ? "" : "flex-1"}
                        >
                          <Button className={`${!project.liveUrl ? "w-full" : ""} bg-white/5 hover:bg-white/20 border-white/10 hover:border-white/30 backdrop-blur-md`} variant="outline" size="sm">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
