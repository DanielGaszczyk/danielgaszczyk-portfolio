'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Calendar } from 'lucide-react'
import { getTranslations, type Locale } from '@/lib/i18n'
import { GlassCard } from '@/components/ui/GlassCard'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function ContactSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)

  const contactInfo = {
    pl: [
      { icon: Mail, label: 'Email', value: 'hello@danielgaszczyk.com', link: 'mailto:hello@danielgaszczyk.com' },
      { icon: MapPin, label: 'Lokalizacja', value: 'Polska' },
      { icon: Calendar, label: 'Kalendarz', value: 'Umów spotkanie', link: 'https://calendar.app.google/xKCsZqPvkMwTyV1x9' },
    ],
    en: [
      { icon: Mail, label: 'Email', value: 'hello@danielgaszczyk.com', link: 'mailto:hello@danielgaszczyk.com' },
      { icon: MapPin, label: 'Location', value: 'Poland' },
      { icon: Calendar, label: 'Calendar', value: 'Schedule meeting', link: 'https://calendar.app.google/xKCsZqPvkMwTyV1x9' },
    ],
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-balance">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo[locale].map((item, index) => {
              const Icon = item.icon
              const CardContent = (
                <GlassCard className="text-center h-full flex flex-col items-center justify-center p-8 min-h-[200px]" hoverEffect={false}>
                  <div className="w-16 h-16 min-w-16 shrink-0 rounded-full bg-white/5 mb-4 flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-primary shrink-0 mx-auto" />
                  </div>
                  <div className="text-sm text-foreground/70 font-medium mb-2">{item.label}</div>
                  <div className="text-lg font-semibold px-4">{item.value}</div>
                </GlassCard>
              )

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: easeOutExpo }}
                  className="h-full"
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block h-full hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
