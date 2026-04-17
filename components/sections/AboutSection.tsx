'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase } from 'lucide-react'
import { type Locale } from '@/lib/i18n'
import { GlassCard } from '@/components/ui/GlassCard'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function AboutSection({ locale }: { locale: Locale }) {

  const content = {
    pl: {
      title: 'O mnie',
      subtitle: 'Przedsiębiorca technologiczny i konsultant AI',
      bio: [
        'Jestem przedsiębiorcą i konsultantem AI z ponad 5-letnim doświadczeniem. Współtworzyłem kilka startupów, w tym TeamFeedback, który pozyskał około miliona złotych finansowania z funduszy UE. Specjalizuję się w budowaniu produktów na styku sztucznej inteligencji i biznesu.',
        'Zaczynałem od hackathonów, dziś pomagam firmom wdrażać praktyczne rozwiązania AI. Każdy projekt traktuję jako szansę na rozwiązanie realnego problemu - nie budowanie technologii dla samej technologii.',
      ],
      stats: [
        { icon: Briefcase, label: 'Lat doświadczenia', value: '5+' },
        { icon: Award, label: 'Ukończonych projektów', value: '20+' },
      ],
    },
    en: {
      title: 'About Me',
      subtitle: 'Tech entrepreneur and AI consultant',
      bio: [
        "I'm an entrepreneur and AI consultant with over 5 years of experience. I co-founded several startups, including TeamFeedback, which secured around 1 million PLN in EU funding. I specialize in building products at the intersection of artificial intelligence and business.",
        'I started at hackathons, today I help companies implement practical AI solutions. I treat every project as a chance to solve a real problem - not building technology for technology\'s sake.',
      ],
      stats: [
        { icon: Briefcase, label: 'Years of experience', value: '5+' },
        { icon: Award, label: 'Completed projects', value: '20+' },
      ],
    },
  }

  const data = content[locale]

  return (
    <section id="about" className="py-24 lg:py-32 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 tracking-tight gradient-text text-balance">{data.title}</h2>
            <p className="text-lg text-foreground/80">{data.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {data.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-foreground/85 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: easeOutExpo }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {data.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: easeOutExpo }}
                    className="h-full"
                  >
                    <GlassCard className="text-center h-full flex flex-col items-center justify-center p-6 min-h-[180px]" hoverEffect={false}>
                      <div className="w-14 h-14 min-w-14 shrink-0 rounded-full bg-white/5 mb-4 flex items-center justify-center mx-auto">
                        <Icon className="h-7 w-7 text-primary shrink-0 mx-auto" />
                      </div>
                      <div className="text-3xl font-heading font-bold mb-2 gradient-text">{stat.value}</div>
                      <div className="text-sm text-foreground/70 font-medium leading-tight px-2">{stat.label}</div>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
