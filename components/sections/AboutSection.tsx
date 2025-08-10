'use client'

import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

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
    <section id="about" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
            <p className="text-xl text-muted-foreground">{data.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {data.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className={cn(
                    'text-lg text-muted-foreground leading-relaxed animate-fade-up'
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={stat.label}
                    variant="glass"
                    className={cn(
                      'text-center hover:scale-105 transition-all duration-300 animate-fade-up'
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}