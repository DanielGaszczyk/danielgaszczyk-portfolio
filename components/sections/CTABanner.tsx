import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'

export function CTABanner({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const notes =
    locale === 'pl'
      ? ['AI audit', 'PoC / MVP', 'fractional CTO']
      : ['AI audit', 'PoC / MVP', 'fractional CTO']

  return (
    <section className="relative z-10 py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-panel-strong overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <span className="eyebrow mb-5">Open for selected collaborations</span>
              <h2 className="font-heading text-3xl font-semibold tracking-[-0.06em] text-balance sm:text-4xl lg:text-5xl">
                {t.ctaBanner.title}
              </h2>
              <p className="mt-5 max-w-readable text-lg leading-relaxed text-foreground/60">
                {t.ctaBanner.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {notes.map((note) => (
                  <span key={note} className="metric-chip text-sm text-foreground/60">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a
                href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="xl" className="min-w-[15rem] px-6">
                  <Calendar className="h-5 w-5" />
                  {t.ctaBanner.cta}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
