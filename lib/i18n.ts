export const locales = ['pl', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'pl'

export const translations = {
  pl: {
    nav: {
      home: 'Strona główna',
      projects: 'Projekty',
      blog: 'Blog',
      about: 'O mnie',
      contact: 'Kontakt',
    },
    hero: {
      badge: 'AI × Biznes × Technologia',
      greeting: 'Cześć, jestem Daniel',
      subtitle: 'Buduję produkty na styku AI i biznesu',
      description: 'Od hackathonów po produkty z milionowym finansowaniem. Specjalizuję się w szybkim prototypowaniu rozwiązań AI, które mają realny wpływ na biznes.',
      cta: {
        primary: 'Zobacz co buduję',
        secondary: 'Umów rozmowę',
      },
    },
    projects: {
      title: 'Wybrane Projekty',
      subtitle: 'Kilka wybranych projektów w których miałem przyjemność uczestniczyć',
      allTitle: 'Wszystkie Projekty',
      allSubtitle: 'Pełna lista projektów nad którymi pracowałem',
      viewMore: 'Zobacz więcej',
      technologies: 'Technologie',
      liveDemo: 'Demo',
      caseStudy: 'Case Study',
    },
    about: {
      title: 'O mnie',
      subtitle: 'Przedsiębiorca technologiczny i konsultant AI',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Masz pomysł? Porozmawiajmy o tym, jak AI może pomóc Twojemu biznesowi.',
      form: {
        name: 'Imię',
        email: 'Email',
        message: 'Wiadomość',
        send: 'Wyślij',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Myśli o technologii, AI i przedsiębiorczości',
      comingSoon: 'Wkrótce',
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      badge: 'AI Entrepreneur & Builder',
      greeting: "Hi, I'm Daniel",
      subtitle: 'Building products where AI meets business',
      description: 'From hackathons to products with million-dollar funding. I specialize in rapid prototyping of AI solutions that drive real business impact.',
      cta: {
        primary: 'See what I build',
        secondary: 'Book a call',
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Selected projects I had the pleasure to participate in',
      allTitle: 'All Projects',
      allSubtitle: 'Complete list of projects I have worked on',
      viewMore: 'View More',
      technologies: 'Technologies',
      liveDemo: 'Demo',
      caseStudy: 'Case Study',
    },
    about: {
      title: 'About Me',
      subtitle: 'Tech Entrepreneur and AI Consultant',
    },
    contact: {
      title: 'Contact',
      subtitle: "Got an idea? Let's talk about how AI can help your business.",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Thoughts on technology, AI, and entrepreneurship',
      comingSoon: 'Coming Soon',
    },
    footer: {
      rights: 'All rights reserved',
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale]
}
