'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { type Locale } from '@/lib/i18n'
import { GlassCard } from '@/components/ui/GlassCard'

const skills = {
  'AI & Machine Learning': [
    'OpenAI API',
    'Gemini API',
    'ElevenLabs API',
    'Hugging Face',
    'LangChain',
  ],
  'Startup & SaaS': [
    'Lean Startup',
    'MVP Development',
    'Growth Hacking',
    'Metrics & KPIs',
    'Dofinansowania',
    'Build in Public',
  ],
  'Automatyzacja & Integracje': [
    'n8n',
    'API Integration',
    'Webhook Automation',
    'RPA',
  ],
  'Cloud & DevOps': [
    'Azure',
    'VPS',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'GitHub Actions',
  ],
  'Business & Strategy': [
    'Product Management',
    'Startup Development',
    'Digital Transformation',
    'Agile/Scrum',
    'Team Leadership',
    'Fundraising',
  ],
}

export function SkillsSection({ locale }: { locale: Locale }) {
  const title = locale === 'pl' ? 'Umiejętności i Technologie' : 'Skills & Technologies'
  const subtitle = locale === 'pl'
    ? 'Technologie i narzędzia, które wykorzystuję w codziennej pracy'
    : 'Technologies and tools I use in my daily work'

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-5xl font-black mb-6 tracking-tight text-white">
            {title}
          </h2>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <GlassCard className="h-full" hoverEffect={false}>
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
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
