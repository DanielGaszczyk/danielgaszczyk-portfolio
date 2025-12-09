'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Calendar, Code2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { FloatingParticles } from '@/components/effects/FloatingParticles'
import { ProjectShowcase } from '@/components/ui/ProjectShowcase'

export function HeroSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Helper function to apply shimmer to specific words
  const renderShimmeredText = (text: string, shimmerWords: string[]) => {
    return text.split(' ').map((word, i) => {
      const shouldShimmer = shimmerWords.some(sw => word.toLowerCase().includes(sw.toLowerCase()))
      return (
        <span key={i} className={shouldShimmer ? 'gradient-text-shimmer' : 'gradient-text'}>
          {word}{' '}
        </span>
      )
    })
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-2000">
      {/* Background effects */}
      <FloatingParticles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-primary/20 bg-primary/5"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase">{t.hero.badge}</span>
            </motion.div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              <span className="block">{t.hero.greeting}</span>
              <span className="block mt-2">
                {renderShimmeredText(t.hero.subtitle, locale === 'pl' ? ['AI', 'biznes'] : ['AI', 'business'])}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-foreground/95 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href={`/${locale}/projects`}>
                <Button size="xl" className="group text-lg px-8 py-6 rounded-2xl relative overflow-hidden bg-white text-black hover:bg-white/90 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)]">
                  <span className="relative z-10 flex items-center">
                    <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    {t.hero.cta.primary}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Button>
              </Link>
              <a
                href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="xl" variant="outline" className="group text-lg px-8 py-6 rounded-2xl border-white/20 hover:bg-white/5 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(147,197,253,0.3)] hover:border-blue-400/40">
                  <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  {t.hero.cta.secondary}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Project Showcase Bento Grid */}
          <motion.div
            className="flex-1 relative hidden lg:block"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <ProjectShowcase />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-8 w-8 text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  )
}
