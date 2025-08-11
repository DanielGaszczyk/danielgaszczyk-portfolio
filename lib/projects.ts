import { type Locale } from './i18n'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  emoji?: string
  technologies: string[]
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  metrics?: {
    funding?: string
    users?: string
    impact?: string
  }
}

const projectsData = {
  pl: [
    {
      id: 'teamfeedback',
      title: 'TeamFeedback',
      description: 'Wszechstronne narzędzie do oceny pracowników wspierane AI. Certyfikat ISO 27001.',
      longDescription: 'TeamFeedback to kompleksowe narzędzie do feedbacku 360 stopni, oceny pracownika i ankiet zaangażowania wspierane przez AI. System oferuje automatyczne generowanie raportów, wykrywanie wzorców w feedbacku, cele OKR, macierz umiejętności oraz spersonalizowane rekomendacje rozwojowe. Produkt pozyskał ponad milion złotych finansowania z funduszy UE i posiada certyfikat bezpieczeństwa ISO 27001.',
      emoji: '💬',
      technologies: ['React', 'Node.js', 'OpenAI', 'PostgreSQL', 'Azure', 'Docker'],
      featured: true,
      liveUrl: 'https://teamfeedback.co',
      metrics: {
        funding: '1M+ PLN',
        users: '250+ firm',
        impact: 'ISO 27001'
      }
    },
    {
      id: 'dailyspark',
      title: 'DailySpark',
      description: 'Aplikacja do walki z prokrastynacją - 15 minut do sukcesu.',
      longDescription: 'DailySpark to jedyna aplikacja, która dzieli przytłaczające cele na 15-minutowe zadania wykorzystując AI. System inteligentnego podziału celów, psychologia małych kroków, pilne okna czasowe tworzące zdrową presję. Nagradzamy wysiłek, nie perfekcję - elastyczne serie wybaczają potknięcia. Beta testerzy otrzymują 6 miesięcy Premium za darmo.',
      emoji: '⚡',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'OpenAI', 'Tailwind CSS'],
      featured: true,
      liveUrl: 'https://efektywnosc.com',
      metrics: {
        impact: '15-min zadania',
        users: 'Beta testing'
      }
    },
    {
      id: 'ai-consulting',
      title: 'AI Consulting Services',
      description: 'Automatyzacja biznesu z AI - zwiększ efektywność o 25% w 90 dni.',
      longDescription: 'Pomagam polskim MŚP wdrażać praktyczne rozwiązania AI bez ryzyka i wielkich inwestycji. Oferuję audyt procesów, prototypy (PoC), pełne wdrożenia i wsparcie. ROI w ciągu 3-6 miesięcy, bez vendor lock-in. Doświadczenie: 5+ lat w AI, 30+ projektów, projekty >1M PLN. Certyfikat Microsoft Azure AI.',
      emoji: '🤖',
      technologies: ['Python', 'Azure AI', 'OpenAI', 'FastAPI', 'Docker', 'Kubernetes'],
      featured: true,
      liveUrl: 'https://wytlumacz.com',
      metrics: {
        impact: '+25% efektywności',
        users: '30+ projektów',
        funding: 'ROI 3-6 mies.'
      }
    },
    {
      id: 'ai-privacy-shield',
      title: 'AI Privacy Shield',
      description: 'Rozwiązanie zapewniające prywatność w aplikacjach AI.',
      longDescription: 'System ochrony danych w aplikacjach wykorzystujących sztuczną inteligencję. Implementacja technik differential privacy, federated learning oraz homomorphic encryption. Chroni dane użytkowników przed nieautoryzowanym dostępem przy zachowaniu funkcjonalności modeli AI.',
      emoji: '🛡️',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Kubernetes'],
      featured: false,
      githubUrl: 'https://github.com/danielgaszczyk/ai-privacy-shield',
    },
    {
      id: 'rentsolv',
      title: 'RentSolv',
      description: 'Inteligentna weryfikacja najemców i zarządzanie najmem.',
      longDescription: 'Aplikacja pozwalająca przeprowadzić wynajmującego przez cały proces bezpiecznego wynajmu mieszkania. Inteligentna weryfikacja najemców wykorzystująca AI do analizy ryzyka, automatyczne generowanie umów, obsługa płatności i zgłoszeń. Znacząca minimalizacja ryzyka wynajmu nieruchomości w Polsce.',
      emoji: '🏠',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Stripe', 'AI Risk Analysis'],
      featured: false,
      metrics: {
        impact: '-70% ryzyka'
      }
    },
    {
      id: 'senzen',
      title: 'SenZen',
      description: 'Hackathon winner - inteligentne inwestowanie na emeryturę.',
      longDescription: 'Aplikacja mobilna i webowa stworzona podczas hackathonu PFR. Wspomaganie łatwego i efektywnego inwestowania na emeryturę, edukacja o potrzebach finansowych w przyszłości. Moduł analityczny, system lojalnościowy oraz algorytm inwestycyjny dostosowany do profilu ryzyka.',
      emoji: '💰',
      technologies: ['Flutter', 'Python', 'MongoDB', 'TensorFlow', 'Financial APIs'],
      featured: false,
      metrics: {
        impact: 'Hackathon PFR'
      }
    },
    {
      id: 'foresights',
      title: 'ForeSights',
      description: 'Audyt COVID-19 dla gastronomii - odpowiedź na pandemię.',
      longDescription: 'Powstał podczas pandemii jako odpowiedź na potrzeby restauratorów. Kompleksowy audyt zabezpieczeń przeciwdziałających COVID-19, pomoc w rozwiązaniu wykrytych problemów, generowanie raportów zgodności z wymogami sanitarnymi.',
      emoji: '🍽️',
      technologies: ['React', 'Express', 'MongoDB', 'Chart.js', 'QR Codes'],
      featured: false,
      metrics: {
        impact: '100+ audytów'
      }
    },
    {
      id: 'sasiady',
      title: 'Sąsiady',
      description: 'Hackathon - platforma integracji społeczności lokalnych.',
      longDescription: 'Aplikacja stworzona podczas Hackathonu odpowiadająca na problemy małych społeczności lokalnych. Integrowanie miasta, tworzenie lepszych, zdrowszych i odpowiedzialnych społeczności. System wymiany usług, lokalne wydarzenia, pomoc sąsiedzka.',
      emoji: '🏘️',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Maps API'],
      featured: false,
      metrics: {
        impact: 'Smart City'
      }
    },
    {
      id: 'heyhouse',
      title: 'HeyHouse',
      description: 'Smart home dla właścicieli - lepiej, szybciej, taniej.',
      longDescription: 'Aplikacja mobilna dla właścicieli nieruchomości pomagająca zadbać o mieszkania lepiej, szybciej i taniej niż konwencjonalne metody. Automatyczne przypomnienia o przeglądach, integracja z usługodawcami, historia napraw i ulepszeń.',
      emoji: '🏡',
      technologies: ['Flutter', 'Firebase', 'Google Cloud', 'Stripe', 'IoT'],
      featured: false,
      metrics: {
        impact: '-30% kosztów'
      }
    },
  ],
  en: [
    {
      id: 'teamfeedback',
      title: 'TeamFeedback',
      description: 'AI-powered employee assessment tool. ISO 27001 certified.',
      longDescription: 'TeamFeedback is a comprehensive 360-degree feedback, employee assessment and engagement survey tool powered by AI. The system offers automatic report generation, feedback pattern detection, OKR goals, skills matrix and personalized development recommendations. Product secured over 1 million PLN in EU funding and holds ISO 27001 security certification.',
      emoji: '💬',
      technologies: ['React', 'Node.js', 'OpenAI', 'PostgreSQL', 'Azure', 'Docker'],
      featured: true,
      liveUrl: 'https://teamfeedback.co',
      metrics: {
        funding: '1M+ PLN',
        users: '250+ companies',
        impact: 'ISO 27001'
      }
    },
    {
      id: 'dailyspark',
      title: 'DailySpark',
      description: 'Beat procrastination app - 15 minutes to success.',
      longDescription: 'DailySpark is the only app that breaks overwhelming goals into 15-minute tasks using AI. Intelligent goal breakdown system, psychology of small steps, urgent time windows creating healthy pressure. We reward effort, not perfection - flexible streaks forgive slip-ups. Beta testers get 6 months Premium for free.',
      emoji: '⚡',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'OpenAI', 'Tailwind CSS'],
      featured: true,
      liveUrl: 'https://efektywnosc.com',
      metrics: {
        impact: '15-min tasks',
        users: 'Beta testing'
      }
    },
    {
      id: 'ai-consulting',
      title: 'AI Consulting Services',
      description: 'Business automation with AI - increase efficiency by 25% in 90 days.',
      longDescription: 'I help Polish SMEs implement practical AI solutions without risk and large investments. I offer process audit, prototypes (PoC), full implementations and support. ROI within 3-6 months, no vendor lock-in. Experience: 5+ years in AI, 30+ projects, projects >1M PLN. Microsoft Azure AI certified.',
      emoji: '🤖',
      technologies: ['Python', 'Azure AI', 'OpenAI', 'FastAPI', 'Docker', 'Kubernetes'],
      featured: true,
      liveUrl: 'https://wytlumacz.com',
      metrics: {
        impact: '+25% efficiency',
        users: '30+ projects',
        funding: 'ROI 3-6 months'
      }
    },
    {
      id: 'ai-privacy-shield',
      title: 'AI Privacy Shield',
      description: 'Privacy solution for AI applications.',
      longDescription: 'Data protection system for applications using artificial intelligence. Implementation of differential privacy, federated learning and homomorphic encryption techniques. Protects user data from unauthorized access while maintaining AI model functionality.',
      emoji: '🛡️',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Kubernetes'],
      featured: false,
      githubUrl: 'https://github.com/danielgaszczyk/ai-privacy-shield',
    },
    {
      id: 'rentsolv',
      title: 'RentSolv',
      description: 'Smart tenant verification and rental management.',
      longDescription: 'Application allowing landlords to go through the entire process of safe apartment rental. Intelligent tenant verification using AI for risk analysis, automatic contract generation, payment and maintenance handling. Significant minimization of property rental risk in Poland.',
      emoji: '🏠',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Stripe', 'AI Risk Analysis'],
      featured: false,
      metrics: {
        impact: '-70% risk'
      }
    },
    {
      id: 'senzen',
      title: 'SenZen',
      description: 'Hackathon winner - smart retirement investing.',
      longDescription: 'Mobile and web application created during PFR hackathon. Supporting easy and effective retirement investing, education about future financial needs. Analytical module, loyalty system and investment algorithm tailored to risk profile.',
      emoji: '💰',
      technologies: ['Flutter', 'Python', 'MongoDB', 'TensorFlow', 'Financial APIs'],
      featured: false,
      metrics: {
        impact: 'PFR Hackathon'
      }
    },
    {
      id: 'foresights',
      title: 'ForeSights',
      description: 'COVID-19 audit for restaurants - pandemic response.',
      longDescription: 'Created during the pandemic as a response to restaurateurs needs. Comprehensive audit of COVID-19 prevention measures, help in solving detected problems, generating compliance reports with sanitary requirements.',
      emoji: '🍽️',
      technologies: ['React', 'Express', 'MongoDB', 'Chart.js', 'QR Codes'],
      featured: false,
      metrics: {
        impact: '100+ audits'
      }
    },
    {
      id: 'sasiady',
      title: 'Sąsiady',
      description: 'Hackathon - local community integration platform.',
      longDescription: 'Application created during Hackathon addressing small local communities problems. City integration, creating better, healthier and responsible communities. Service exchange system, local events, neighborhood help.',
      emoji: '🏘️',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Maps API'],
      featured: false,
      metrics: {
        impact: 'Smart City'
      }
    },
    {
      id: 'heyhouse',
      title: 'HeyHouse',
      description: 'Smart home for owners - better, faster, cheaper.',
      longDescription: 'Mobile application for property owners helping to take care of apartments better, faster and cheaper than conventional methods. Automatic inspection reminders, service provider integration, repair and improvement history.',
      emoji: '🏡',
      technologies: ['Flutter', 'Firebase', 'Google Cloud', 'Stripe', 'IoT'],
      featured: false,
      metrics: {
        impact: '-30% costs'
      }
    },
  ],
}

export function getAllProjects(locale: Locale): Project[] {
  return projectsData[locale]
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return projectsData[locale].filter(p => p.featured)
}