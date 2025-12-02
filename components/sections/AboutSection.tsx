'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react'
import { type Locale } from '@/lib/i18n'
import { GlassCard } from '@/components/ui/GlassCard'

export function AboutSection({ locale }: { locale: Locale }) {
  
  const content = {
    pl: {
      title: 'O mnie',
      subtitle: 'Przedsiębiorca technologiczny z pasją do AI',
      bio: [
        'Jestem przedsiębiorcą technologicznym i konsultantem AI z ponad 8-letnim doświadczeniem w branży tech. Specjalizuję się w tworzeniu innowacyjnych rozwiązań wykorzystujących sztuczną inteligencję do rozwiązywania realnych problemów biznesowych.',
        'Moja przygoda z technologią rozpoczęła się od hackathonów, gdzie nauczyłem się szybkiego prototypowania i pracy w zespole. Od tego czasu współtworzyłem kilka startupów, w tym TeamFeedback, który pozyskał ponad milion złotych finansowania.',
        'Wierzę w siłę technologii jako narzędzia pozytywnej zmiany. Każdy projekt traktuję jako okazję do nauki i rozwoju, zarówno technicznego jak i biznesowego.',
      ],
      stats: [
        { icon: Briefcase, label: 'Lat doświadczenia', value: '8+' },
        { icon: Award, label: 'Ukończonych projektów', value: '20+' },
        { icon: GraduationCap, label: 'Certyfikatów', value: '12' },
        { icon: Heart, label: 'Zadowolonych klientów', value: '50+' },
      ],
    },
    en: {
      title: 'About Me',
      subtitle: 'Tech entrepreneur with a passion for AI',
      bio: [
        "I'm a tech entrepreneur and AI consultant with over 8 years of experience in the tech industry. I specialize in creating innovative solutions using artificial intelligence to solve real business problems.",
        'My journey with technology began at hackathons, where I learned rapid prototyping and teamwork. Since then, I co-founded several startups, including TeamFeedback, which secured over 1 million PLN in funding.',
        'I believe in the power of technology as a tool for positive change. I treat every project as an opportunity to learn and grow, both technically and business-wise.',
      ],
      stats: [
        { icon: Briefcase, label: 'Years of experience', value: '8+' },
        { icon: Award, label: 'Completed projects', value: '20+' },
        { icon: GraduationCap, label: 'Certifications', value: '12' },
        { icon: Heart, label: 'Happy clients', value: '50+' },
      ],
    },
  }

  const data = content[locale]

  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black mb-6 tracking-tight gradient-text">{data.title}</h2>
            <p className="text-xl text-muted-foreground font-light">{data.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {data.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed font-light"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                  >
                    <GlassCard className="text-center h-full flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                      <div className="p-4 rounded-full bg-white/5 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
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
