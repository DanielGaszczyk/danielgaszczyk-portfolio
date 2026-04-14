import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react'
import { type Locale } from '@/lib/i18n'
import { GlassCard } from '@/components/ui/GlassCard'

const content = {
  pl: {
    title: 'O mnie',
    subtitle: 'Łączę perspektywę founder-tech z realnym dowożeniem produktów i wdrożeń AI.',
    bio: [
      'Jestem przedsiębiorcą i konsultantem AI z ponad 8-letnim doświadczeniem. Współtworzyłem kilka startupów, w tym TeamFeedback, który pozyskał ponad milion złotych finansowania z funduszy UE. Najlepiej czuję się na styku strategii, produktu i technologii.',
      'Pracuję z firmami, które potrzebują nie tylko pomysłu, ale też kogoś, kto potrafi przełożyć go na sensowny plan, szybki prototyp i działające wdrożenie. Interesują mnie projekty, w których AI ma poprawić wynik biznesowy, a nie tylko wyglądać dobrze na slajdzie.',
    ],
    principles: [
      'Szybko porządkuję chaos i zamieniam go w klarowny plan produktu.',
      'Lubię małe zespoły, wysoki ownership i decyzje oparte na sygnałach, nie na modzie.',
      'Buduję doświadczenia, które są zarówno pragmatyczne, jak i estetycznie dopracowane.',
    ],
    stats: [
      { icon: Briefcase, label: 'Lat doświadczenia', value: '8+' },
      { icon: Award, label: 'Projektów', value: '20+' },
      { icon: GraduationCap, label: 'Certyfikaty', value: '12' },
      { icon: Heart, label: 'Zaufali mi klienci', value: '50+' },
    ],
  },
  en: {
    title: 'About Me',
    subtitle: 'I combine founder-tech perspective with actual product delivery and AI implementation work.',
    bio: [
      "I'm an entrepreneur and AI consultant with over 8 years of experience. I co-founded several startups, including TeamFeedback, which secured over 1 million PLN in EU funding. I operate best at the intersection of strategy, product, and technology.",
      'I work with teams that need more than an idea. They need someone who can turn it into a clear product plan, a fast prototype, and a working implementation. I care about AI that improves business outcomes, not AI that only looks impressive on a slide.',
    ],
    principles: [
      'I turn messy opportunity spaces into a clear product direction quickly.',
      'I prefer small teams, high ownership, and decisions based on signal rather than hype.',
      'I build experiences that are both pragmatic and aesthetically deliberate.',
    ],
    stats: [
      { icon: Briefcase, label: 'Years of experience', value: '8+' },
      { icon: Award, label: 'Projects', value: '20+' },
      { icon: GraduationCap, label: 'Certifications', value: '12' },
      { icon: Heart, label: 'Trusted clients', value: '50+' },
    ],
  },
} satisfies Record<Locale, {
  title: string
  subtitle: string
  bio: string[]
  principles: string[]
  stats: Array<{ icon: typeof Briefcase; label: string; value: string }>
}>

export function AboutSection({ locale }: { locale: Locale }) {
  const data = content[locale]

  return (
    <section id="about" className="relative z-10 py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <span className="eyebrow mb-5">Profile</span>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl">
              {data.title}
            </h2>
            <p className="mt-5 max-w-readable text-lg leading-relaxed text-foreground/60">{data.subtitle}</p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70 sm:text-lg">
              {data.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-4">
              {data.principles.map((principle) => (
                <div key={principle} className="surface-panel px-5 py-4 text-sm leading-relaxed text-foreground/60 sm:text-base">
                  {principle}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:pt-12">
            {data.stats.map((stat) => {
              const Icon = stat.icon
              return (
                <GlassCard key={stat.label} className="h-full p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.18em] text-foreground/40">Signal</span>
                  </div>
                  <div className="mt-8 font-heading text-4xl font-semibold tracking-[-0.06em] text-foreground">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">{stat.label}</p>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
