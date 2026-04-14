'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Calendar, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProjectShowcase } from '@/components/ui/ProjectShowcase'
import { getTranslations, type Locale } from '@/lib/i18n'
import { usePrefersReducedMotion } from '@/lib/hooks'

const ease = [0.16, 1, 0.3, 1] as const

const heroSignals = {
  pl: ['AI dla MŚP', 'founder-to-founder', 'delivery bez teatru'],
  en: ['AI for SMEs', 'founder-to-founder', 'delivery without theatre'],
} satisfies Record<Locale, string[]>

const proofChips = {
  pl: [
    { value: '8+', label: 'lat budowania produktów' },
    { value: '20+', label: 'projektów i startupów' },
    { value: '1M+', label: 'PLN pozyskanego finansowania' },
  ],
  en: [
    { value: '8+', label: 'years building products' },
    { value: '20+', label: 'projects and startups' },
    { value: '1M+', label: 'PLN in secured funding' },
  ],
} satisfies Record<Locale, Array<{ value: string; label: string }>>

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-gaszczyk/' },
  { label: 'GitHub', href: 'https://github.com/danielgaszczyk' },
  { label: 'Substack', href: 'https://substack.com/@danielgaszczyk' },
]

function renderAccentText(text: string, keywords: string[]) {
  return text.split(' ').map((word, index) => {
    const shouldAccent = keywords.some((keyword) => word.toLowerCase().includes(keyword.toLowerCase()))
    return (
      <span key={`${word}-${index}`} className={shouldAccent ? 'text-primary' : undefined}>
        {word}{' '}
      </span>
    )
  })
}

export function HeroSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { scrollY } = useScroll()
  const showcaseY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : -48])
  const arrowOpacity = useTransform(scrollY, [0, 220], [0.85, 0])

  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="max-w-3xl">
            <motion.span
              className="eyebrow mb-6"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              {t.hero.badge}
            </motion.span>

            <motion.div
              className="mb-8 flex flex-wrap gap-3"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55, ease }}
            >
              {heroSignals[locale].map((signal) => (
                <span key={signal} className="metric-chip text-sm text-foreground/70">
                  {signal}
                </span>
              ))}
            </motion.div>

            <motion.p
              className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-foreground/50"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.55, ease }}
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              className="font-heading text-[clamp(3.4rem,10vw,7.4rem)] leading-[0.88] tracking-[-0.065em] text-balance"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.72, ease }}
            >
              {renderAccentText(t.hero.subtitle, locale === 'pl' ? ['AI', 'biznesu'] : ['AI', 'business'])}
            </motion.h1>

            <motion.p
              className="mt-8 max-w-readable text-lg leading-relaxed text-foreground/70 sm:text-xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.64, ease }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.64, ease }}
            >
              {proofChips[locale].map((chip) => (
                <span key={chip.label} className="metric-chip text-sm text-foreground/70">
                  <strong>{chip.value}</strong>
                  {chip.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.64, ease }}
            >
              <Link href={`/${locale}/projects`}>
                <Button size="xl" className="group min-w-[15rem] justify-between px-6">
                  <span className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    {t.hero.cta.primary}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Link>

              <a
                href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="xl" variant="outline" className="min-w-[15rem] px-6">
                  <Calendar className="h-5 w-5" />
                  {t.hero.cta.secondary}
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-foreground/50"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.6, ease }}
            >
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/40">
                Signals
              </span>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-fade inline-flex items-center gap-1"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            style={{ y: showcaseY }}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.28, duration: 0.8, ease }}
          >
            <ProjectShowcase locale={locale} />
          </motion.div>
        </div>

        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
          style={{ opacity: arrowOpacity }}
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-6 w-6 text-foreground/30" />
        </motion.div>
      </div>
    </section>
  )
}
