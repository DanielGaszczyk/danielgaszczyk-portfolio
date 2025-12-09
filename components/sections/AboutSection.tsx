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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-5xl font-black mb-6 tracking-tight gradient-text">{data.title}</h2>
            <p className="text-xl text-foreground/90 font-light">{data.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {data.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-foreground/95 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="h-full"
                  >
                    <GlassCard className="text-center h-full flex flex-col items-center justify-center p-6 min-h-[180px]" hoverEffect={false}>
                      <div className="w-14 h-14 min-w-14 shrink-0 rounded-full bg-white/5 mb-4 flex items-center justify-center mx-auto">
                        <Icon className="h-7 w-7 text-primary shrink-0 mx-auto" />
                      </div>
                      <div className="text-3xl font-bold mb-2 gradient-text">{stat.value}</div>
                      <div className="text-sm text-foreground/80 font-medium leading-tight px-2">{stat.label}</div>
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
