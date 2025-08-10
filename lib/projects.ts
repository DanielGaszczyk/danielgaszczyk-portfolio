import { type Locale } from './i18n'

export interface Project {
  id: string
  title: string
  description: string
  emoji?: string
  technologies: string[]
  featured: boolean
  liveUrl?: string
  githubUrl?: string
}

const projectsData = {
  pl: [
    {
      id: 'teamfeedback',
      title: 'TeamFeedback',
      description: 'Wszechstronne narzędzie do feedbacku wspierane AI, zapewniające kompleksową analitykę i raportowanie. Pozyskało ponad milion złotych finansowania.',
      emoji: '💬',
      technologies: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
      featured: true,
      liveUrl: 'https://teamfeedback.com',
    },
    {
      id: 'dailyspark',
      title: 'DailySpark',
      description: 'Aplikacja mobilna do codziennej motywacji i produktywności, wykorzystująca AI do personalizacji treści.',
      emoji: '✨',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'OpenAI'],
      featured: true,
      githubUrl: 'https://github.com/danielgaszczyk/dailyspark',
    },
    {
      id: 'ai-privacy-shield',
      title: 'AI Privacy Shield',
      description: 'Rozwiązanie zapewniające prywatność w aplikacjach AI, chroniące dane użytkowników przed nieautoryzowanym dostępem.',
      emoji: '🛡️',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      featured: true,
      githubUrl: 'https://github.com/danielgaszczyk/ai-privacy-shield',
    },
    {
      id: 'rentsolv',
      title: 'RentSolv',
      description: 'Aplikacja do zarządzania najmem i weryfikacji najemców, minimalizująca ryzyko wynajmu nieruchomości.',
      emoji: '🏠',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Stripe'],
      featured: false,
    },
    {
      id: 'senzen',
      title: 'SenZen',
      description: 'Aplikacja mobilna wspomagająca inwestowanie na emeryturę z modułem analitycznym i algorytmem inwestycyjnym.',
      emoji: '💰',
      technologies: ['Flutter', 'Python', 'MongoDB', 'TensorFlow'],
      featured: false,
    },
    {
      id: 'foresights',
      title: 'ForeSights',
      description: 'Kompleksowy audyt zabezpieczeń dla restauratorów podczas pandemii.',
      emoji: '🍽️',
      technologies: ['React', 'Express', 'MongoDB', 'Chart.js'],
      featured: false,
    },
    {
      id: 'sasiady',
      title: 'Sąsiady',
      description: 'Aplikacja integrująca społeczności lokalne, tworząca lepsze i zdrowsze relacje sąsiedzkie.',
      emoji: '🏘️',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      featured: false,
    },
    {
      id: 'heyhouse',
      title: 'HeyHouse',
      description: 'Aplikacja mobilna dla właścicieli nieruchomości, pomagająca zarządzać mieszkaniami efektywniej.',
      emoji: '🏡',
      technologies: ['Flutter', 'Firebase', 'Google Cloud', 'Stripe'],
      featured: false,
    },
  ],
  en: [
    {
      id: 'teamfeedback',
      title: 'TeamFeedback',
      description: 'AI-powered comprehensive feedback tool providing analytics and reporting. Secured over 1 million PLN in funding.',
      emoji: '💬',
      technologies: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
      featured: true,
      liveUrl: 'https://teamfeedback.com',
    },
    {
      id: 'dailyspark',
      title: 'DailySpark',
      description: 'Mobile app for daily motivation and productivity, using AI for content personalization.',
      emoji: '✨',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'OpenAI'],
      featured: true,
      githubUrl: 'https://github.com/danielgaszczyk/dailyspark',
    },
    {
      id: 'ai-privacy-shield',
      title: 'AI Privacy Shield',
      description: 'Privacy solution for AI applications, protecting user data from unauthorized access.',
      emoji: '🛡️',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      featured: true,
      githubUrl: 'https://github.com/danielgaszczyk/ai-privacy-shield',
    },
    {
      id: 'rentsolv',
      title: 'RentSolv',
      description: 'Rental management and tenant verification app, minimizing property rental risks.',
      emoji: '🏠',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Stripe'],
      featured: false,
    },
    {
      id: 'senzen',
      title: 'SenZen',
      description: 'Mobile app supporting retirement investment with analytical module and investment algorithm.',
      emoji: '💰',
      technologies: ['Flutter', 'Python', 'MongoDB', 'TensorFlow'],
      featured: false,
    },
    {
      id: 'foresights',
      title: 'ForeSights',
      description: 'Comprehensive security audit for restaurateurs during the pandemic.',
      emoji: '🍽️',
      technologies: ['React', 'Express', 'MongoDB', 'Chart.js'],
      featured: false,
    },
    {
      id: 'sasiady',
      title: 'Sąsiady',
      description: 'App integrating local communities, creating better and healthier neighborhood relationships.',
      emoji: '🏘️',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      featured: false,
    },
    {
      id: 'heyhouse',
      title: 'HeyHouse',
      description: 'Mobile app for property owners, helping manage apartments more efficiently.',
      emoji: '🏡',
      technologies: ['Flutter', 'Firebase', 'Google Cloud', 'Stripe'],
      featured: false,
    },
  ],
}

export function getAllProjects(locale: Locale): Project[] {
  return projectsData[locale]
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return projectsData[locale].filter(p => p.featured)
}