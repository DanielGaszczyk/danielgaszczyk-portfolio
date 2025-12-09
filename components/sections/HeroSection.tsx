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
            {/* Badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-primary/30 bg-primary/10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase text-white">{t.hero.badge}</span>
            </motion.div>

            {/* H1 Greeting */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              <span className="block">{t.hero.greeting}</span>
            </h1>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              {renderShimmeredText(t.hero.subtitle, locale === 'pl' ? ['AI', 'biznes'] : ['AI', 'business'])}
            </h2>

            <p className="text-xl sm:text-2xl text-foreground/95 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {t.hero.description}
            </p>

            {/* Social Media Links */}
            <motion.div
              className="flex gap-6 mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://www.linkedin.com/in/daniel-gaszczyk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://substack.com/@danielgaszczyk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white hover:scale-110 transition-all"
                aria-label="Substack"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href={`/${locale}/projects`}>
                <Button size="xl" className="group text-lg px-8 py-6 rounded-2xl relative overflow-hidden bg-white text-black hover:bg-white/95 transition-all hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(255,255,255,0.4),0_0_40px_rgba(59,130,246,0.3)] hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    {t.hero.cta.primary}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-25 transition-all duration-500 animate-shimmer" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>
                </Button>
              </Link>
              <a
                href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="xl" variant="outline" className="group text-lg px-8 py-6 rounded-2xl border-white/20 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(147,197,253,0.5),0_0_40px_rgba(59,130,246,0.4)] hover:border-blue-400/60 hover:scale-105 relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    {t.hero.cta.secondary}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
