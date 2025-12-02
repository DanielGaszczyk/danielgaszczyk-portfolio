'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Calendar, Code2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { GlassCard } from '@/components/ui/GlassCard'

export function HeroSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
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
              <span className="block mt-2 gradient-text">
                {t.hero.subtitle}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href={`/${locale}/projects`}>
                <Button size="xl" className="group text-lg px-8 py-6 rounded-2xl relative overflow-hidden bg-white text-black hover:bg-white/90">
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
                <Button size="xl" variant="outline" className="group text-lg px-8 py-6 rounded-2xl border-white/20 hover:bg-white/5 backdrop-blur-md">
                  <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  {t.hero.cta.secondary}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Floating Glass Element */}
          <motion.div
            className="flex-1 relative hidden lg:block"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />

              <GlassCard className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-[4/5] flex flex-col justify-center items-center backdrop-blur-3xl bg-black/20 border-white/10 z-20 rotate-[-6deg] hover:rotate-0 transition-all duration-500">
                <div className="text-8xl font-black text-white/10">AI</div>
                <div className="text-4xl font-bold gradient-text mt-4">Automation</div>
                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-2 bg-white/10 rounded-full w-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="absolute bottom-0 right-0 w-[60%] aspect-video z-30 translate-x-10 translate-y-10 animate-float-delayed">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-white/20 rounded" />
                  <div className="h-2 w-1/2 bg-white/20 rounded" />
                </div>
              </GlassCard>
            </div>
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
