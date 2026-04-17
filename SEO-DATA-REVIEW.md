# SEO / pSEO / GEO — krytyczna ocena stanu danych

Status: draft roboczy, branch `seo`. Przed jakąkolwiek zmianą kodu
muszę wiedzieć, co na tej stronie jest **faktem**, co jest **marketingowym
zaokrągleniem**, a co **placeholderem który nie powinien trafić do Google**.
Poniżej każde twierdzenie z obecnego kodu, z moim werdyktem i pytaniem do
Daniela jeśli nie umiem tego zweryfikować sam.

---

## 1. Twierdzenia ilościowe — są wewnętrznie sprzeczne

Obecnie w repo krążą trzy różne zestawy liczb, tego samego dnia, o tej samej osobie:

| Gdzie | Co mówi |
|---|---|
| `app/[locale]/layout.tsx` (metadata description, PL+EN) | **8+ lat doświadczenia, 20+ projektów** |
| `components/sections/AboutSection.tsx` (widoczny stat) | **8+ lat, 20+ projektów** |
| `lib/projects.ts` — projekt `ai-consulting`, metrics | **„5+ lat w AI", „30+ projektów"** |

Google bez problemu scrapuje to wszystko w jednej indeksacji. Dla person-schema i
dla E-E-A-T to jest czerwona flaga: albo 8 lat, albo 5. Albo 20 projektów, albo
30. Nie da się mieć obu.

**Do ustalenia (Daniel):**
- Ile lat doświadczenia **liczymy jako punkt startowy** (pierwszy komercyjny projekt? założenie pierwszej spółki? pierwszy projekt AI?). Jedna liczba, jedna definicja, w całym repo.
- 20 czy 30 projektów? Co liczymy jako „projekt" (commercial delivery? hackathon? freelance gig?).
- Jeśli nie chcemy wybierać jednej liczby — wycofuję się z konkretów i piszę „wieloletnie doświadczenie" bez cyfr. To słabsze marketingowo, ale nie kłamie.

Dopóki tego nie ustalimy, **NIE zmieniam metadata**. Wpuszczenie sprzecznych
danych do OG/Twitter tylko powieli problem.

---

## 2. „1M+ PLN finansowania" dla TeamFeedback

Pojawia się w: `layout.tsx` meta description (PL+EN), AboutSection, prawdopodobnie gdzieś jeszcze.

**Do ustalenia:**
- Czy to publiczna informacja (np. komunikat PARP / NCBR / info na stronie TeamFeedback)? Jeśli tak — link do źródła trafia do JSON-LD jako `citation`/`sameAs`.
- Jeśli to kwota z umowy której nie można upublicznić — usuwamy cyfrę, zostawiamy „finansowanie z funduszy UE".
- Dokładnie jaki program? („EU funding" to szeroka fraza; „NCBR Bridge Alfa" / „PARP ścieżka SMART" itd. są weryfikowalne i bije mocniej).

---

## 3. „Azure AI Certified"

W `layout.tsx` jako `hasCredential`.

**Do ustalenia:**
- Dokładna nazwa certyfikatu (AI-102? AI-900? AZ-900?). JSON-LD bez konkretnej nazwy cert + ID + data wydania to dla Google pusty sygnał. Z konkretną nazwą można dodać `credentialCategory` i `recognizedBy: Microsoft`.
- Jeśli nie masz pod ręką numeru / daty — powiedz, wyciągnę z Microsoft Learn po Twoim loginie, albo po prostu napiszemy „Microsoft Certified: Azure AI Fundamentals" bez credential ID.

---

## 4. Profile `sameAs` w Person JSON-LD

Obecnie deklarujemy:
```
https://www.linkedin.com/in/daniel-gaszczyk
https://github.com/danielgaszczyk
https://www.facebook.com/p4Q00F
https://www.instagram.com/danielgaszczyk
```

**Problem:** jeśli Google sprawdzi i któryś z tych URL-i zwróci 404 lub profil nie należy do Ciebie, JSON-LD Person jest podważony całościowo — to jest ten sam sygnał zaufania, który ma potwierdzić kim jesteś.

**Do ustalenia dla każdego URL z osobna:**
- LinkedIn: potwierdź że to aktualny handle (`daniel-gaszczyk`) a nie np. `/in/danielgaszczyk/`.
- GitHub: potwierdź `danielgaszczyk` (nie `daniel-gaszczyk` etc.) — widzę lokalnie `github.com/danielgaszczyk` ale nie weryfikuję że to ten sam człowiek.
- `facebook.com/p4Q00F` — to wygląda jak legacy vanity URL / ID. Czy profil jest publiczny? Czy ma imię i nazwisko? Jeśli to prywatny profil bez spójności z marką — **wywalamy**. Facebook nie jest sygnałem autorytetu dla AI consultant; tylko obniża jakość listy.
- Instagram — jak wyżej. Czy to konto profesjonalne/branżowe czy prywatne? Jeśli prywatne — wywalamy.
- **Czego brakuje, a powinno być:** X/Twitter profil (używasz `@DaGaszczyk` jako `twitter.creator` — więc profil istnieje, dołóżmy go do `sameAs`). Ewentualnie strona TeamFeedback team/about jako `worksFor.url` z konkretną podstroną a nie domeną główną.

**Decyzja operacyjna:** lista `sameAs` ma mieć tylko profile które Google może sprawdzić, są publiczne, i wzmacniają tezę „to jest AI consultant". Mniej znaczy więcej.

---

## 5. OpenGraph / Twitter — obecny stan

```
openGraph.url: 'https://danielgaszczyk.com'   // hardcoded, niezależne od locale
openGraph.images: <BRAK>
twitter.images: <BRAK>
```

**Problemy:**
- `openGraph.url` powinno być per-locale (`https://danielgaszczyk.com/pl` / `/en`), inaczej share'y z wersji EN pokazują kanoniczny PL i odwrotnie.
- **Brak OG image**. To jest single biggest miss na tej stronie z punktu widzenia CTR w social / linkedin. Share bez obrazu = share się nie klika.
- Brak `alternates.canonical` i `alternates.languages` (hreflang) — robimy hreflang **tylko** przez Metadata API, nie przez linki w HTML head pisane ręcznie.

**Decyzja:** OG image generujemy runtime przez `next/og` (edge-safe na Cloudflare Workers), jeden template z gradientem + imię + tytuł strony + zdjęcie `daniel.jpg`. Nie tworzę PNG statycznego bo i tak będzie się różnił per-page (home vs /projects vs /about).

---

## 6. Ikony — referencje do nieistniejących plików

```
icons.shortcut: '/favicon-16x16.png'    // PLIK NIE ISTNIEJE
icons.apple:    '/apple-touch-icon.png' // PLIK NIE ISTNIEJE
```

`public/` zawiera tylko: `CNAME`, `daniel.jpg`, `favicon.ico`.

To nie jest SEO-krytyczne ale jest błędem w produkcji (404 w Network tab za każdym razem, obniża lighthouse PWA score). Albo dodajemy pliki, albo usuwamy referencje. Najprościej: generuję z `app/icon.tsx` + `app/apple-icon.tsx` (Next 13+ convention, dynamiczne, bezpieczne).

---

## 7. Sitemap — 28 martwych URL-i

`app/sitemap.ts` obecnie generuje:
- `/${locale}/projects/${project.id}` × 11 projektów × 2 locale = **22 URL-e**
- `/${locale}/blog/${post.slug}` × 3 posty × 2 locale = **6 URL-i**

**Żadna z tych stron nie istnieje.** Sprawdziłem:
- `app/[locale]/projects/` — tylko `page.tsx`, brak `[id]` / `[slug]`
- `app/[locale]/blog/` — tylko `page.tsx`, brak `[slug]`

Google zobaczy sitemap → zaindeksuje 28 URL-i → dostanie 28× 404/notFound → **Coverage Issues w Search Console, cały sitemap oznaczony jako low-quality**. To jest obecnie najgorszy problem SEO na tej stronie.

**Dwie opcje, do decyzji:**

**(A) Usunąć martwe URL-e z sitemap.** Najszybsze, najbezpieczniejsze. Blog/projekty zostają jako sekcje na jednej stronie + `/blog` i `/projects` index.

**(B) Zbudować faktyczne per-project i per-post strony.** Wartość SEO znaczna (każdy projekt = dedykowany landing z JSON-LD `CreativeWork`, możliwość rankowania na nazwę projektu + case studies bite w GEO bo LLM-y chętnie cytują case study). Koszt: 3 x MDX na blog + template projektu + longform contentu od Ciebie.

**Moja rekomendacja:** (A) teraz, (B) w osobnym PR jeśli masz treść. Nie mergujemy (B) z pustymi/lorem stronami — to gorsze niż brak strony.

---

## 8. Keywords meta — 2026, czy się tym w ogóle przejmować?

Metadata zawiera `keywords: [...14 fraz...]`. **Google od ~2009 nie używa meta keywords.** Bing też nie, od 2014. Jedyny przypadek w którym meta keywords coś robią to Yandex i niektóre korporacyjne wyszukiwarki enterprise.

To nie szkodzi, ale to **0 wartości SEO**. Zostawiam jeśli chcesz „na wszelki wypadek", ale nie poświęcam czasu na ich tuning. Ważne są: title, description, H1, JSON-LD, content.

---

## 9. Blog — 3 stuby bez treści

`lib/blog.ts` ma 3 wpisy (`jak-ai-zmienia-biznes`, `budowanie-startupow`, `prywatnosc-w-ai`) — **same metadata, brak `content`**. Do tego nie ma routingu per-slug.

**Decyzja:** blog index (`/blog`) zostaje jeśli chcemy pokazać „coming soon" ALE wtedy lista powinna mieć `noindex` dopóki nie ma realnych treści — **pusta lista zaindeksowana przez Google to sygnał thin content na całej domenie**.

Alternatywnie: ukrywamy link Blog w nawigacji, usuwamy route, dodajemy kiedy będą treści.

---

## 10. pSEO — pushback

Poprosiłeś o sugestie pSEO. **Programmatic SEO nie pasuje do portfolio jednoosobowego.**

pSEO działa gdy masz:
- bazę danych która da się przemnożyć przez atrybuty (np. „dentysta × miasto × specjalizacja" = 10k landingów)
- pełną treść generowaną z tej bazy (nie szablony z placeholderami)
- sygnał rynkowy że ludzie wyszukują te długie ogony

Portfolio Daniela Gaszczyka ma jeden podmiot — Ciebie. Nie da się pomnożyć „Daniel × 50 miast" bo to pustki. Próba to podjęcia skończy się jak u sporej części produktów które teraz Google deindeksuje w Helpful Content Update: thin, programmatic, AI-generated = penalty.

**Co zamiast tego proponuję (to NIE jest pSEO, to prawdziwe landing pages):**
- `/pl/uslugi/audyt-ai` — konkretna strona pod usługę z opisem procesu, czasem, ceną widełkami, case studies
- `/pl/uslugi/cto-as-a-service` — jw.
- `/pl/uslugi/wdrozenie-ai-msp` — jw.

Każda z ręki. 3-5 stron. Każda z własnym `Service` JSON-LD + FAQ JSONLD z prawdziwymi pytaniami. To rankuje, to nie jest pSEO, to klasyczne SEO usługowe.

**Decyzja:** nie tykam tego w obecnym PR. Piszę listę rekomendacji na przyszłość, wrzucam do ROADMAP. Ty decydujesz czy chcesz treść napisać.

---

## 11. GEO (Generative Engine Optimization) — co ma sens, co nie

GEO = pozycjonowanie w odpowiedziach LLM-ów (ChatGPT, Claude, Perplexity, Gemini). Co działa w 2026:

**Co dołożę do repo:**
1. **`public/llms.txt`** — zestandaryzowany plik (proposal Jeremy'ego Howarda) który LLM crawlerzy używają do szybkiej orientacji kim jesteś / co robisz. Tanie, jawnie pomocne, nie szkodzi SEO.
2. **Wysoka gęstość faktów w JSON-LD** — LLM-y cytują structured data częściej niż prose. Każdy projekt z konkretną metryką, datą, rolą.
3. **Autorytet przez cytowanie zewnętrzne** — nie da się zrobić z wnętrza repo, wymaga że na TeamFeedback / NCBR / wytlumacz.com będzie link do `danielgaszczyk.com` z anchor „Daniel Gaszczyk". To **domowe zadanie dla Daniela**, nie dla kodu.
4. **FAQ-style content** na kluczowych stronach — LLM-y cytują Q&A structure preferencyjnie. Dołożę `FAQPage` JSON-LD na home i /about, z 4-6 pytaniami realnie zadawanymi („kim jest Daniel Gaszczyk", „co to TeamFeedback", „ile kosztuje wdrożenie AI w MŚP").

**Czego NIE zrobię:**
- „Prompt injection" / ukrytego tekstu dla LLM-ów. To jest cheat który w 2025 zaczął być penalizowany przez OpenAI web crawler i Perplexity; długoterminowo szkodzi.
- Masowego generowania treści pod LLM-y. Jakość > ilość, zwłaszcza dla GEO.

---

## 12. Drobiazgi które zrobię po drodze (nie wymagają decyzji)

- `alternates.canonical` i `alternates.languages` per strona
- Przeniesienie hardcoded `baseUrl` do jednego miejsca (`lib/site.ts`) — teraz jest w sitemap, layout, Person JSON-LD, osobno
- `BreadcrumbList` JSON-LD na stronach głębszych niż home
- `WebSite` JSON-LD z `potentialAction.SearchAction` — dla Google sitelinks search box
- `ProfilePage` JSON-LD na `/about`
- `robots.ts`: dodać explicit `host` i upewnić się że sitemap URL matches canonical host

---

## 13. Kolejność pracy (jeśli zgoda)

1. **Najpierw:** napraw dane (pkt 1-4, 6). Nic nie puszczam dalej dopóki liczby się nie zgadzają.
2. **Sitemap** (pkt 7 opcja A) — usunięcie martwych URL-i. Quick win, powstrzymuje dalsze szkody w Search Console.
3. **Canonical + hreflang** (pkt 5, 12) — czysto techniczne, low-risk.
4. **JSON-LD rebuild** (pkt 4, 12) — z już zweryfikowanymi danymi.
5. **OG image** (pkt 5) — `next/og`.
6. **llms.txt + FAQ JSON-LD** (pkt 11) — GEO.
7. **Blog: decyzja noindex vs ukryj** (pkt 9).
8. **Roadmap** pSEO-alternative / usługowe landingi (pkt 10) — osobny PR, później.

---

## Czego potrzebuję od Ciebie przed commitem #1

Odpowiedzi na tych 5 punktów. Bez tego nie piszę nowych metadata:

1. **Liczba lat doświadczenia** (i od kiedy liczymy).
2. **Liczba projektów** (i co liczymy).
3. **TeamFeedback funding** — konkretna kwota + program, czy tylko „fundusze UE"?
4. **Certyfikat Azure** — dokładna nazwa / numer, czy zostawiamy ogólnie?
5. **`sameAs` URLs** — LinkedIn, GitHub, Facebook, Instagram — potwierdź które zostają, dokładne handle.

Bonus: jeśli masz Twitter/X profil — podaj URL, dołożę.
