'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { type Locale } from '@/lib/i18n'
import { GlassCard } from '@/components/ui/GlassCard'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const skills: Record<string, { pl: string; en: string; items: string[] }> = {
  'ai-ml': {
    pl: 'AI & Machine Learning',
    en: 'AI & Machine Learning',
    items: ['OpenAI API', 'Gemini API', 'ElevenLabs API', 'Hugging Face', 'LangChain'],
  },
  'startup': {
    pl: 'Startup & SaaS',
    en: 'Startup & SaaS',
    items: ['Lean Startup', 'MVP Development', 'Growth Hacking', 'Metrics & KPIs', 'Fundraising', 'Build in Public'],
  },
  'automation': {
    pl: 'Automatyzacja & Integracje',
    en: 'Automation & Integrations',
    items: ['n8n', 'API Integration', 'Webhook Automation', 'RPA'],
  },
  'cloud': {
    pl: 'Cloud & DevOps',
    en: 'Cloud & DevOps',
    items: ['Azure', 'VPS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
  },
  'business': {
    pl: 'Biznes & Strategia',
    en: 'Business & Strategy',
    items: ['Product Management', 'Startup Development', 'Digital Transformation', 'Agile/Scrum', 'Team Leadership'],
  },
}

export function SkillsSection({ locale }: { locale: Locale }) {
  const title = locale === 'pl' ? 'Umiejętności i Technologie' : 'Skills & Technologies'
  const subtitle = locale === 'pl'
    ? 'Technologie i narzędzia, które wykorzystuję w codziennej pracy'
    : 'Technologies and tools I use in my daily work'

  return (
    <section className="py-24 lg:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white text-balance">
            {title}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: easeOutExpo }}
            >
              <GlassCard className="h-full" hoverEffect={false}>
                <h3 className="text-xl font-heading font-bold mb-6 gradient-text">
                  {category[locale]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-white/5 border-white/10 text-white px-3 py-1 text-sm font-medium backdrop-blur-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
