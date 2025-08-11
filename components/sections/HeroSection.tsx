'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowDown, Calendar, Code2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { getTranslations, type Locale } from '@/lib/i18n'

export function HeroSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        {mounted && <AnimatedBackground />}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with animation */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI Consultant & Tech Entrepreneur</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="block animate-fade-up">{t.hero.greeting}</span>
            <span className="block mt-2 gradient-text animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {t.hero.subtitle}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link href={`/${locale}/projects`}>
              <Button size="lg" className="group">
                <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                {t.hero.cta.primary}
              </Button>
            </Link>
            <a
              href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="group">
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                {t.hero.cta.secondary}
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}