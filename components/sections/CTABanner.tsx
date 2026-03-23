'use client'

import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function CTABanner({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-purple-500/10 border border-white/10 px-8 py-16 sm:px-16 sm:py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight gradient-text text-balance">
              {t.ctaBanner.title}
            </h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto">
              {t.ctaBanner.subtitle}
            </p>
            <a
              href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="xl"
                className="group text-lg px-8 py-6 rounded-2xl bg-white text-black hover:bg-white/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                {t.ctaBanner.cta}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
