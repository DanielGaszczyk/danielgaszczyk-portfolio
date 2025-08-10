import { type Locale } from './i18n'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content?: string
  date: string
  readingTime: string
  tags: string[]
}

const blogPosts = {
  pl: [
    {
      slug: 'jak-ai-zmienia-biznes',
      title: 'Jak AI zmienia sposób prowadzenia biznesu',
      excerpt: 'Sztuczna inteligencja nie jest już futurystyczną wizją - to rzeczywistość, która zmienia sposób działania firm na całym świecie.',
      date: '2024-01-15',
      readingTime: '5 min',
      tags: ['AI', 'Biznes', 'Innowacje'],
    },
    {
      slug: 'budowanie-startupow',
      title: 'Budowanie startupów: lekcje z hackathonów',
      excerpt: 'Hackathony nauczyły mnie szybkiego prototypowania i weryfikacji pomysłów. Oto najważniejsze lekcje.',
      date: '2024-01-10',
      readingTime: '7 min',
      tags: ['Startup', 'Hackathon', 'Przedsiębiorczość'],
    },
    {
      slug: 'prywatnosc-w-ai',
      title: 'Prywatność w erze AI - wyzwania i rozwiązania',
      excerpt: 'Ochrona danych osobowych w aplikacjach AI to jedno z największych wyzwań współczesnej technologii.',
      date: '2024-01-05',
      readingTime: '6 min',
      tags: ['AI', 'Prywatność', 'Bezpieczeństwo'],
    },
  ],
  en: [
    {
      slug: 'how-ai-changes-business',
      title: 'How AI is Changing the Way We Do Business',
      excerpt: 'Artificial intelligence is no longer a futuristic vision - it\'s a reality that\'s changing how companies operate worldwide.',
      date: '2024-01-15',
      readingTime: '5 min',
      tags: ['AI', 'Business', 'Innovation'],
    },
    {
      slug: 'building-startups',
      title: 'Building Startups: Lessons from Hackathons',
      excerpt: 'Hackathons taught me rapid prototyping and idea validation. Here are the key lessons.',
      date: '2024-01-10',
      readingTime: '7 min',
      tags: ['Startup', 'Hackathon', 'Entrepreneurship'],
    },
    {
      slug: 'privacy-in-ai',
      title: 'Privacy in the AI Era - Challenges and Solutions',
      excerpt: 'Personal data protection in AI applications is one of the biggest challenges in modern technology.',
      date: '2024-01-05',
      readingTime: '6 min',
      tags: ['AI', 'Privacy', 'Security'],
    },
  ],
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  return blogPosts[locale].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getBlogPost(locale: Locale, slug: string): BlogPost | undefined {
  return blogPosts[locale].find(post => post.slug === slug)
}