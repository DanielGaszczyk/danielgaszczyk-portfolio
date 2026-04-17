import { type Locale } from './i18n'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  emoji?: string
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  size?: 'hero' | 'featured' | 'small'
  screenshot?: string
  graphic3d?: string
  metrics?: { label: string; value: string }[]
}

const projectsData: Record<Locale, Project[]> = {
  pl: [
    {
      id: 'teamfeedback',
      title: 'TeamFeedback',
      description: 'Wszechstronne narzędzie do oceny pracowników wspierane AI. Certyfikat ISO 27001.',
      longDescription: 'TeamFeedback to kompleksowe narzędzie do feedbacku 360 stopni, oceny pracownika i ankiet zaangażowania wspierane przez AI. System oferuje automatyczne generowanie raportów, wykrywanie wzorców w feedbacku, cele OKR, macierz umiejętności oraz spersonalizowane rekomendacje rozwojowe. Produkt pozyskał około miliona złotych finansowania z funduszy UE i posiada certyfikat bezpieczeństwa ISO 27001.',
      emoji: '💬',
      featured: true,
      size: 'hero',
      liveUrl: 'https://teamfeedback.co',
      metrics: [
        { label: 'Finansowanie', value: '>1M PLN' },
        { label: 'Certyfikat', value: 'ISO 27001' }
      ]
    },
    {
      id: 'dailyspark',
      title: 'DailySpark',
      description: 'Aplikacja do walki z prokrastynacją - 15 minut do sukcesu.',
      longDescription: 'DailySpark to jedyna aplikacja, która dzieli przytłaczające cele na 15-minutowe zadania wykorzystując AI. System inteligentnego podziału celów, psychologia małych kroków, pilne okna czasowe tworzące zdrową presję. Nagradzamy wysiłek, nie perfekcję - elastyczne serie wybaczają potknięcia. Beta testerzy otrzymują 6 miesięcy Premium za darmo.',
      emoji: '⚡',
      featured: true,
      size: 'hero',
      liveUrl: 'https://efektywnosc.com',
      metrics: [
        { label: 'Zadania', value: '15 min' },
        { label: 'Metoda', value: 'AI-Powered' }
      ]
    },
    {
      id: 'ai-consulting',
      title: 'Wdrożenia AI w biznesie',
      description: 'Automatyzacja biznesu z AI - ROI w 3-6 miesięcy.',
      longDescription: 'Pomagam polskim MŚP wdrażać praktyczne rozwiązania AI bez ryzyka i wielkich inwestycji. Oferuję audyt procesów, prototypy (PoC), pełne wdrożenia i wsparcie. ROI w ciągu 3-6 miesięcy, bez vendor lock-in. Doświadczenie: 5+ lat w AI, 20+ projektów. Certyfikat Microsoft Azure AI.',
      emoji: '🤖',
      featured: true,
      size: 'featured',
      liveUrl: 'https://wytlumacz.com',
      metrics: [
        { label: 'ROI', value: '3-6 mies.' },
        { label: 'Projektów', value: '20+' }
      ]
    },
    {
      id: 'ai-privacy-shield',
      title: 'AI Privacy Shield',
      description: 'Rozwiązanie zapewniające prywatność w aplikacjach AI.',
      longDescription: 'System ochrony danych w aplikacjach wykorzystujących sztuczną inteligencję. Implementacja technik differential privacy, federated learning oraz homomorphic encryption. Chroni dane użytkowników przed nieautoryzowanym dostępem przy zachowaniu funkcjonalności modeli AI.',
      emoji: '🛡️',
      featured: false,
      size: 'small',
      githubUrl: 'https://github.com/danielgaszczyk/ai-privacy-shield'
    },
    {
      id: 'rentsolv',
      title: 'RentSolv',
      description: 'Inteligentna weryfikacja najemców i zarządzanie najmem.',
      longDescription: 'Aplikacja pozwalająca przeprowadzić wynajmującego przez cały proces bezpiecznego wynajmu mieszkania. Inteligentna weryfikacja najemców wykorzystująca AI do analizy ryzyka, automatyczne generowanie umów, obsługa płatności i zgłoszeń. Znacząca minimalizacja ryzyka wynajmu nieruchomości w Polsce.',
      emoji: '🏠',
      featured: false,
      size: 'small'
    },
    {
      id: 'senzen',
      title: 'SenZen',
      description: 'Hackathon winner - inteligentne inwestowanie na emeryturę.',
      longDescription: 'Aplikacja mobilna i webowa stworzona podczas hackathonu PFR. Wspomaganie łatwego i efektywnego inwestowania na emeryturę, edukacja o potrzebach finansowych w przyszłości. Moduł analityczny, system lojalnościowy oraz algorytm inwestycyjny dostosowany do profilu ryzyka.',
      emoji: '💰',
      featured: false,
      size: 'small'
    },
    {
      id: 'foresights',
      title: 'ForeSights',
      description: 'Audyt COVID-19 dla gastronomii - odpowiedź na pandemię.',
      longDescription: 'Powstał podczas pandemii jako odpowiedź na potrzeby restauratorów. Kompleksowy audyt zabezpieczeń przeciwdziałających COVID-19, pomoc w rozwiązaniu wykrytych problemów, generowanie raportów zgodności z wymogami sanitarnymi.',
      emoji: '🍽️',
      featured: false,
      size: 'small'
    },
    {
      id: 'sasiady',
      title: 'Sąsiady',
      description: 'Hackathon - platforma integracji społeczności lokalnych.',
      longDescription: 'Aplikacja stworzona podczas Hackathonu odpowiadająca na problemy małych społeczności lokalnych. Integrowanie miasta, tworzenie lepszych, zdrowszych i odpowiedzialnych społeczności. System wymiany usług, lokalne wydarzenia, pomoc sąsiedzka.',
      emoji: '🏘️',
      featured: false,
      size: 'small'
    },
    {
      id: 'heyhouse',
      title: 'HeyHouse',
      description: 'Smart home dla właścicieli - lepiej, szybciej, taniej.',
      longDescription: 'Aplikacja mobilna dla właścicieli nieruchomości pomagająca zadbać o mieszkania lepiej, szybciej i taniej niż konwencjonalne metody. Automatyczne przypomnienia o przeglądach, integracja z usługodawcami, historia napraw i ulepszeń.',
      emoji: '🏡',
      featured: false,
      size: 'small'
    },
    {
      id: 'jabp',
      title: 'JABP',
      description: 'Platforma rezerwacji dla fotografów i twórców. Oszczędź czas, zwiększ dostępność, zmniejsz no-shows.',
      longDescription: 'JABP to aplikacja do zarządzania rezerwacjami dla fotografów i zawodów kreatywnych. Pomaga odzyskać czas marnowany na negocjacjach przez DM i maila, otwiera na nową grupę odbiorców (tych, którzy nie lubią pisać bezpośrednio) oraz zmniejsza problemy z niepojawieniem się klienta na sesji czy zdziwieniem ceną. Co-founder.',
      emoji: '📸',
      featured: true,
      size: 'featured',
      liveUrl: 'https://jabp.app',
      metrics: [
        { label: 'Dla', value: 'Fotografów' },
        { label: 'Rola', value: 'Co-founder' }
      ]
    },
    {
      id: 'paymentx',
      title: 'PaymentX',
      description: 'Automatyzacja rozliczeń - od papierowej faktury do wysłania w kilka kliknięć.',
      longDescription: 'PaymentX to prosta aplikacja umożliwiająca automatyzację rozliczeń. Wprowadzanie danych z faktur papierowych przez OCR, automatyczne rozsyłanie maili i SMS z fakturami, śledzenie płatności. Idealne dla małych firm, które chcą oszczędzić czas na księgowości. Solo founder.',
      emoji: '💳',
      featured: false,
      size: 'small'
    },
  ],
  en: [
    {
      id: 'teamfeedback',
      title: 'TeamFeedback',
      description: 'AI-powered employee assessment tool. ISO 27001 certified.',
      longDescription: 'TeamFeedback is a comprehensive 360-degree feedback, employee assessment and engagement survey tool powered by AI. The system offers automatic report generation, feedback pattern detection, OKR goals, skills matrix and personalized development recommendations. Product secured around 1 million PLN in EU funding and holds ISO 27001 security certification.',
      emoji: '💬',
      featured: true,
      size: 'hero',
      liveUrl: 'https://teamfeedback.co',
      metrics: [
        { label: 'Funding', value: '>1M PLN' },
        { label: 'Certified', value: 'ISO 27001' }
      ]
    },
    {
      id: 'dailyspark',
      title: 'DailySpark',
      description: 'Beat procrastination app - 15 minutes to success.',
      longDescription: 'DailySpark is the only app that breaks overwhelming goals into 15-minute tasks using AI. Intelligent goal breakdown system, psychology of small steps, urgent time windows creating healthy pressure. We reward effort, not perfection - flexible streaks forgive slip-ups. Beta testers get 6 months Premium for free.',
      emoji: '⚡',
      featured: true,
      size: 'hero',
      liveUrl: 'https://efektywnosc.com',
      metrics: [
        { label: 'Tasks', value: '15 min' },
        { label: 'Method', value: 'AI-Powered' }
      ]
    },
    {
      id: 'ai-consulting',
      title: 'AI Business Implementations',
      description: 'Business automation with AI - ROI in 3-6 months.',
      longDescription: 'I help Polish SMEs implement practical AI solutions without risk and large investments. I offer process audit, prototypes (PoC), full implementations and support. ROI within 3-6 months, no vendor lock-in. Experience: 5+ years in AI, 20+ projects. Microsoft Azure AI certified.',
      emoji: '🤖',
      featured: true,
      size: 'featured',
      liveUrl: 'https://wytlumacz.com',
      metrics: [
        { label: 'ROI', value: '3-6 months' },
        { label: 'Projects', value: '20+' }
      ]
    },
    {
      id: 'ai-privacy-shield',
      title: 'AI Privacy Shield',
      description: 'Privacy solution for AI applications.',
      longDescription: 'Data protection system for applications using artificial intelligence. Implementation of differential privacy, federated learning and homomorphic encryption techniques. Protects user data from unauthorized access while maintaining AI model functionality.',
      emoji: '🛡️',
      featured: false,
      size: 'small',
      githubUrl: 'https://github.com/danielgaszczyk/ai-privacy-shield'
    },
    {
      id: 'rentsolv',
      title: 'RentSolv',
      description: 'Smart tenant verification and rental management.',
      longDescription: 'Application allowing landlords to go through the entire process of safe apartment rental. Intelligent tenant verification using AI for risk analysis, automatic contract generation, payment and maintenance handling. Significant minimization of property rental risk in Poland.',
      emoji: '🏠',
      featured: false,
      size: 'small'
    },
    {
      id: 'senzen',
      title: 'SenZen',
      description: 'Hackathon winner - smart retirement investing.',
      longDescription: 'Mobile and web application created during PFR hackathon. Supporting easy and effective retirement investing, education about future financial needs. Analytical module, loyalty system and investment algorithm tailored to risk profile.',
      emoji: '💰',
      featured: false,
      size: 'small'
    },
    {
      id: 'foresights',
      title: 'ForeSights',
      description: 'COVID-19 audit for restaurants - pandemic response.',
      longDescription: 'Created during the pandemic as a response to restaurateurs needs. Comprehensive audit of COVID-19 prevention measures, help in solving detected problems, generating compliance reports with sanitary requirements.',
      emoji: '🍽️',
      featured: false,
      size: 'small'
    },
    {
      id: 'sasiady',
      title: 'Sąsiady',
      description: 'Hackathon - local community integration platform.',
      longDescription: 'Application created during Hackathon addressing small local communities problems. City integration, creating better, healthier and responsible communities. Service exchange system, local events, neighborhood help.',
      emoji: '🏘️',
      featured: false,
      size: 'small'
    },
    {
      id: 'heyhouse',
      title: 'HeyHouse',
      description: 'Smart home for owners - better, faster, cheaper.',
      longDescription: 'Mobile application for property owners helping to take care of apartments better, faster and cheaper than conventional methods. Automatic inspection reminders, service provider integration, repair and improvement history.',
      emoji: '🏡',
      featured: false,
      size: 'small'
    },
    {
      id: 'jabp',
      title: 'JABP',
      description: 'Booking platform for photographers and creatives. Save time, increase availability, reduce no-shows.',
      longDescription: 'JABP is a booking management app for photographers and creative professionals. Helps recover time wasted on DM and email negotiations, opens you to a new audience (those who don\'t like direct messaging), and reduces problems with client no-shows or price surprises. Co-founder.',
      emoji: '📸',
      featured: true,
      size: 'featured',
      liveUrl: 'https://jabp.app',
      metrics: [
        { label: 'For', value: 'Photographers' },
        { label: 'Role', value: 'Co-founder' }
      ]
    },
    {
      id: 'paymentx',
      title: 'PaymentX',
      description: 'Payment automation - from paper invoice to sent in a few clicks.',
      longDescription: 'PaymentX is a simple app enabling payment automation. OCR data entry from paper invoices, automatic email and SMS sending with invoices, payment tracking. Perfect for small businesses wanting to save time on accounting. Solo founder.',
      emoji: '💳',
      featured: false,
      size: 'small'
    },
  ],
}

export function getAllProjects(locale: Locale): Project[] {
  return projectsData[locale]
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return projectsData[locale].filter(p => p.featured)
}