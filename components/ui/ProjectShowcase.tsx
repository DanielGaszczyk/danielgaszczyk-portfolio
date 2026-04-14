'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, ShieldCheck, Sparkles } from 'lucide-react'
import { type Locale } from '@/lib/i18n'
import { usePrefersReducedMotion } from '@/lib/hooks'

const ease = [0.16, 1, 0.3, 1] as const

const showcaseContent = {
  pl: {
    title: 'Wybrane wyniki',
    subtitle: 'Przekładam strategiczne myślenie na produkty, wdrożenia i realne sygnały biznesowe.',
    outcomes: [
      {
        name: 'TeamFeedback',
        detail: 'AI feedback platform dla organizacji',
        value: '1M+ PLN',
        label: 'finansowania',
      },
      {
        name: 'AI wdrożenia',
        detail: 'projekty dla MŚP z mierzalnym ROI',
        value: '3-6 mies.',
        label: 'do pierwszego zwrotu',
      },
      {
        name: 'DailySpark',
        detail: 'produkt od idei do gotowego doświadczenia',
        value: '15 min',
        label: 'core habit loop',
      },
    ],
    operatingTitle: 'Jak pracuję',
    operatingPoints: ['Discovery i audyt', 'PoC / MVP bez przeciągania', 'Dowiezienie od strategii do delivery'],
    proofTitle: 'Sygnały z rynku',
    proofPoints: ['AI × biznes', 'fractional CTO', 'product partner'],
  },
  en: {
    title: 'Selected outcomes',
    subtitle: 'I turn strategic thinking into products, implementations, and tangible business signal.',
    outcomes: [
      {
        name: 'TeamFeedback',
        detail: 'AI feedback platform for organisations',
        value: '1M+ PLN',
        label: 'in funding',
      },
      {
        name: 'AI implementations',
        detail: 'SME projects with measurable ROI',
        value: '3-6 mo',
        label: 'to first return',
      },
      {
        name: 'DailySpark',
        detail: 'product built from idea into experience',
        value: '15 min',
        label: 'core habit loop',
      },
    ],
    operatingTitle: 'How I operate',
    operatingPoints: ['Discovery and audit', 'PoC / MVP without drag', 'Strategy through delivery ownership'],
    proofTitle: 'Market signal',
    proofPoints: ['AI × business', 'fractional CTO', 'product partner'],
  },
} satisfies Record<Locale, {
  title: string
  subtitle: string
  outcomes: Array<{ name: string; detail: string; value: string; label: string }>
  operatingTitle: string
  operatingPoints: string[]
  proofTitle: string
  proofPoints: string[]
}>

export function ProjectShowcase({ locale }: { locale: Locale }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const content = showcaseContent[locale]

  return (
    <div className="relative mx-auto w-full max-w-[36rem] px-6 pb-10 pt-6">
      <motion.div
        className="absolute inset-x-10 top-4 -z-10 h-40 rounded-full bg-primary/20 blur-[90px]"
        animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.65, 0.35], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.article
        className="surface-panel-strong relative overflow-hidden p-8"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="absolute inset-x-8 top-0 h-px bg-white/10" />
        <span className="eyebrow mb-6">{content.title}</span>
        <p className="max-w-[30ch] text-sm leading-relaxed text-foreground/60">{content.subtitle}</p>

        <div className="mt-8 space-y-4">
          {content.outcomes.map((item, index) => (
            <motion.div
              key={item.name}
              className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-5 py-4"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 + index * 0.12, duration: 0.55, ease }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                    {item.name}
                  </div>
                  <p className="mt-1 text-sm text-foreground/60">{item.detail}</p>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-semibold tracking-[-0.05em] text-foreground">
                    {item.value}
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-foreground/40">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.article>

      <motion.aside
        className="surface-panel absolute -bottom-2 -left-2 w-60 p-5"
        initial={prefersReducedMotion ? false : { opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.42, duration: 0.6, ease }}
      >
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
          <BriefcaseBusiness className="h-4 w-4 text-accent" />
          {content.operatingTitle}
        </div>
        <ul className="space-y-2 text-sm text-foreground/60">
          {content.operatingPoints.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-primary/70" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.aside>

      <motion.aside
        className="surface-panel absolute -right-3 top-20 w-56 p-5"
        initial={prefersReducedMotion ? false : { opacity: 0, x: 20, y: -12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.54, duration: 0.6, ease }}
      >
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          {content.proofTitle}
        </div>
        <div className="flex flex-wrap gap-2">
          {content.proofPoints.map((point) => (
            <span
              key={point}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.16em] text-foreground/60"
            >
              {point}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm text-foreground/60">
          <Sparkles className="h-4 w-4 text-accent" />
          Taste-driven execution
        </div>
      </motion.aside>
    </div>
  )
}
