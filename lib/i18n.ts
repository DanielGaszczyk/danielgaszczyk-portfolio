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
      badge: 'Tłumaczę AI',
      greeting: 'Cześć, jestem Daniel',
      subtitle: 'Z pasją łączę AI, dane i biznes',
      description: 'Rozwijam pomysły od hackathonów aż po pełnoprawne startupy. Uwielbiam szybkie prototypowanie i nieustanne odkrywanie nowych technologii.',
      cta: {
        primary: 'Zobacz projekty',
        secondary: 'Spotkajmy się!',
      },
    },
    projects: {
      title: 'Wybrane Projekty',
      subtitle: 'Kilka wybranych projektów w których miałem przyjemność uczestniczyć',
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
      subtitle: 'Porozmawiajmy o Twoim następnym projekcie',
      form: {
        name: 'Imię',
        email: 'Email',
        message: 'Wiadomość',
        send: 'Wyślij',
      },
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
      badge: 'AI Explainer & Tech Entrepreneur',
      greeting: "Hi, I'm Daniel",
      subtitle: 'Passionately combining AI, data, and business',
      description: 'Developing ideas from hackathons to full-fledged startups. I love rapid prototyping and constantly discovering new technologies.',
      cta: {
        primary: 'View Projects',
        secondary: "Let's Meet!",
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Selected projects I had the pleasure to participate in',
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
      subtitle: "Let's talk about your next project",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
      },
    },
    footer: {
      rights: 'All rights reserved',
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale]
}