'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Calendar, Code2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { FloatingParticles } from '@/components/effects/FloatingParticles'
import { ProjectShowcase } from '@/components/ui/ProjectShowcase'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function HeroSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const { scrollY } = useScroll()
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-2000">
      <FloatingParticles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            {/* Badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-primary/30 bg-primary/10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, ease: easeOutExpo }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium tracking-[0.15em] uppercase text-white/90">{t.hero.badge}</span>
            </motion.div>

            {/* H1 Greeting */}
            <motion.h1
              className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold mb-6 leading-[0.95] tracking-tight text-balance"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: easeOutExpo }}
            >
              {t.hero.greeting}
            </motion.h1>

            <motion.h2
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-balance"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: easeOutExpo }}
            >
              {renderShimmeredText(t.hero.subtitle, locale === 'pl' ? ['AI', 'biznesu'] : ['AI', 'business'])}
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easeOutExpo }}
            >
              {t.hero.description}
            </motion.p>

            {/* Social Media Links */}
            <motion.div
              className="flex gap-6 mb-10 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ease: easeOutExpo }}
            >
              <a
                href="https://www.linkedin.com/in/daniel-gaszczyk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white hover:scale-110 transition-all duration-200"
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
                className="text-white/50 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Substack"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, ease: easeOutExpo }}
            >
              <Link href={`/${locale}/projects`}>
                <Button size="xl" className="group text-lg px-8 py-6 rounded-2xl relative overflow-hidden bg-white text-black hover:bg-white/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,255,255,0.25),0_0_30px_rgba(99,102,241,0.2)] hover:scale-[1.02]">
                  <span className="relative z-10 flex items-center">
                    <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    {t.hero.cta.primary}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-all duration-500" />
                </Button>
              </Link>
              <a
                href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="xl" variant="outline" className="group text-lg px-8 py-6 rounded-2xl border-white/15 hover:bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(139,92,246,0.3),0_0_30px_rgba(99,102,241,0.2)] hover:border-indigo-400/50 hover:scale-[1.02] relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    {t.hero.cta.secondary}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-400/15 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Project Showcase Bento Grid */}
          <motion.div
            className="flex-1 relative hidden lg:block"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
          >
            <ProjectShowcase />
          </motion.div>
        </div>

        {/* Mobile Stats Bar */}
        <motion.div
          className="flex lg:hidden justify-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, ease: easeOutExpo }}
        >
          <div className="inline-flex items-center gap-3 sm:gap-5 px-6 py-3 rounded-full glass text-sm">
            <span className="text-white/90 font-medium">
              {locale === 'pl' ? '5+ lat' : '5+ yrs'}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-white/90 font-medium">
              {locale === 'pl' ? '20+ projektów' : '20+ projects'}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-white/90 font-medium">~1M PLN</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ opacity }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-7 w-7 text-muted-foreground/40" />
        </motion.div>
      </div>
    </section>
  )
}
