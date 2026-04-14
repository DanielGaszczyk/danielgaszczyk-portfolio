import { Badge } from '@/components/ui/Badge'
import { type Locale } from '@/lib/i18n'

const skills: Record<string, { pl: string; en: string; items: string[] }> = {
  'ai-ml': {
    pl: 'AI & Machine Learning',
    en: 'AI & Machine Learning',
    items: ['OpenAI API', 'Gemini API', 'ElevenLabs API', 'Hugging Face', 'LangChain'],
  },
  startup: {
    pl: 'Startup & SaaS',
    en: 'Startup & SaaS',
    items: ['Lean Startup', 'MVP Development', 'Growth Hacking', 'Metrics & KPIs', 'Fundraising', 'Build in Public'],
  },
  automation: {
    pl: 'Automatyzacja & Integracje',
    en: 'Automation & Integrations',
    items: ['n8n', 'API Integration', 'Webhook Automation', 'RPA'],
  },
  cloud: {
    pl: 'Cloud & DevOps',
    en: 'Cloud & DevOps',
    items: ['Azure', 'VPS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
  },
  business: {
    pl: 'Biznes & Strategia',
    en: 'Business & Strategy',
    items: ['Product Management', 'Startup Development', 'Digital Transformation', 'Agile/Scrum', 'Team Leadership'],
  },
}

export function SkillsSection({ locale }: { locale: Locale }) {
  const title = locale === 'pl' ? 'Kompetencje i narzędzia' : 'Capabilities and tools'
  const subtitle =
    locale === 'pl'
      ? 'To zestaw kompetencji, którym łączę warstwę strategiczną, produktową i techniczną.'
      : 'This is the stack I use to connect strategy, product thinking, and technical execution.'

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <span className="eyebrow mb-5">Capability matrix</span>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
          <p className="max-w-readable text-base leading-relaxed text-foreground/60 sm:text-lg">{subtitle}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {Object.entries(skills).map(([key, category], index) => (
            <article key={key} className="surface-panel surface-hover p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.18em] text-foreground/40">0{index + 1}</span>
                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.05em] text-foreground">
                    {category[locale]}
                  </h3>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-primary">
                  {category.items.length}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {category.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="rounded-full border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-foreground/60"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
