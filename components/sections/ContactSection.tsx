import { Calendar, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'

export function ContactSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)

  const sideCards = {
    pl: [
      { icon: Mail, label: 'Email', value: 'hello@danielgaszczyk.com', href: 'mailto:hello@danielgaszczyk.com' },
      { icon: Calendar, label: 'Pierwszy krok', value: '30 minut rozmowy', href: 'https://calendar.app.google/xKCsZqPvkMwTyV1x9' },
      { icon: MapPin, label: 'Lokalizacja', value: 'Polska / remote-first' },
    ],
    en: [
      { icon: Mail, label: 'Email', value: 'hello@danielgaszczyk.com', href: 'mailto:hello@danielgaszczyk.com' },
      { icon: Calendar, label: 'First step', value: '30-minute intro call', href: 'https://calendar.app.google/xKCsZqPvkMwTyV1x9' },
      { icon: MapPin, label: 'Location', value: 'Poland / remote-first' },
    ],
  }

  return (
    <section id="contact" className="relative z-10 py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <article className="surface-panel-strong p-8 sm:p-10 lg:p-12">
            <span className="eyebrow mb-5">Start here</span>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-readable text-lg leading-relaxed text-foreground/60">
              {t.contact.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="xl" className="min-w-[15rem] px-6">
                  <Calendar className="h-5 w-5" />
                  {t.hero.cta.secondary}
                </Button>
              </a>
              <a href="mailto:hello@danielgaszczyk.com">
                <Button size="xl" variant="outline" className="min-w-[15rem] px-6">
                  <Mail className="h-5 w-5" />
                  hello@danielgaszczyk.com
                </Button>
              </a>
            </div>
          </article>

          <div className="grid gap-4">
            {sideCards[locale].map((item) => {
              const Icon = item.icon
              const content = (
                <article className="surface-panel surface-hover flex h-full items-start gap-4 p-6">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-foreground/40">{item.label}</div>
                    <div className="mt-3 text-base font-semibold tracking-[-0.02em] text-foreground">{item.value}</div>
                  </div>
                </article>
              )

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
