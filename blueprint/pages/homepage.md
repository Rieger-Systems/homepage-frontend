# 🏠 Homepage – `routes/+page.svelte`

> **Zweck:** Erster Eindruck, Markenpositionierung, Vertrauen schaffen  
> **Zielgruppe:** Entscheider:innen, Kooperationspartner, Interessierte, Institutionen  
> **Status:** [✍️ In Bearbeitung]  
> **Design-Vorlage:** Figma Dark Template (Digital Agency)

---

## 🔹 1. Hero Section

**Funktion:** Sofortige Markenbotschaft, Einstiegspunkt

**Inhalte:**

- Headline: **„KI, die schützt. Systeme, die tragen.“**
- Subline: „Rieger Systems entwickelt menschenzentrierte KI-Systeme – klar, verantwortungsvoll und europäisch gedacht.“
- CTA 1: „Mehr erfahren“ → scrollt zu Vision
- CTA 2: „Kontakt aufnehmen“ → scrollt zu Kontakt

**Designhinweise:**

- Zentriert, vollflächig
- CTA-Buttons prominent, animiert

---

## 🔹 2. Vision & Mission

**Funktion:** Wertehaltung und Ziel verdeutlichen

**Inhalte:**

- Titel: „Warum wir tun, was wir tun“
- Textblock:
  > „Wir glauben an eine Welt, in der Technologie den Menschen stärkt – nicht ersetzt.  
  > Unsere Mission ist es, Systeme zu entwickeln, die Vertrauen verdienen, Verantwortung übernehmen  
  > und ethisch handeln – im Sinne der Gesellschaft und im Einklang mit europäischen Werten.“
- Optionaler CTA: „Unser Manifest lesen“ → `/manifesto`

**Designhinweise:**

- Text mit klarer Typografie (z. B. `prose prose-invert`)
- Animation: Fade-in

---

## 🔹 3. Unsere Produkte

**Funktion:** Übersicht über Dienstleistungen / Leistungsbereiche

**Inhalte (4 Cards):**

| Produkt                 | Kurzbeschreibung                                                 |
| ----------------------- | ---------------------------------------------------------------- |
| **Hosting**             | DSGVO-konformes Hosting – sicher, performant, transparent.       |
| **Webentwicklung**      | Maßgeschneiderte Websites mit modernen Frameworks & gutem UI/UX. |
| **Softwareentwicklung** | Individualsoftware – stabil, wartbar, langfristig durchdacht.    |
| **KI-Systeme**          | Modular, erklärbar, ethisch. KI mit Verantwortung.               |

**Designhinweise:**

- Hover- oder Reveal-Effekt je Card
- Gleichmäßige Höhe, Grid-Layout

---

## 🔹 4. Unsere Projekte

**Funktion:** Präsentation der Vorzeigeprojekte

**Inhalte (3 Cards):**

| Projekt        | Beschreibung                                                          |
| -------------- | --------------------------------------------------------------------- |
| **A.M.A.R.A.** | Zentrales KI-System. Modular, erklärbar, menschenzentriert.           |
| **AmaraCall**  | KI-Anrufsystem für Unternehmen – Gesprächsdokumentation & Entlastung. |
| **AmaraWell**  | Digitale Begleiterin für psychische Gesundheit – sicher & empathisch. |

**Designhinweise:**

- Bilder oder Logos optional
- CTA je Projekt möglich („Mehr erfahren“)

---

## 🔹 5. Was uns auszeichnet

**Funktion:** Werte & Differenzierung sichtbar machen

**Inhalte (Icon Grid):**

| Icon | Aussage                                               |
| ---- | ----------------------------------------------------- |
| 🛡️   | Wir schützen, statt auszubeuten.                      |
| ⚖️   | DSGVO & ethisch korrekt – kein KI-Wildwuchs.          |
| 🧠   | Unsere Systeme denken mit – aber greifen nie ein.     |
| 🌍   | Entwickelt in Europa. Für Menschen weltweit.          |
| 💶   | Faire Preise – transparent, nachvollziehbar.          |
| 🔧   | Offen gedacht: wartbar, dokumentiert, zukunftssicher. |

**Designhinweise:**

- Grid mit Icon + Text
- Gleiches Layout wie bei "Features" in SaaS-Pages

---

## 🔹 6. Über uns (Teaser)

**Funktion:** Persönliche Komponente, Menschlichkeit

**Inhalte:**

- Kurzer Text:
  > „Gegründet mit der Vision, Technologie menschlich zu machen.  
  > Unser Team vereint Ethik, Technik und Verantwortung – mit dem Ziel, neue Standards zu setzen.“
- CTA: „Mehr über uns“ → `/about`

**Designhinweise:**

- Optional kleines Portraitbild oder Symbol

---

## 🔹 7. Stimmen & Rückmeldungen

**Funktion:** Vertrauen & soziale Bestätigung

**Inhalte (Platzhalter):**

> _„Rieger Systems denkt weiter. Die erste KI-Firma, bei der ich mich verstanden fühle.“_  
> — (Platzhalter für Testimonial)

> _„Technik mit Haltung. So sollte KI immer gebaut werden.“_  
> — (Platzhalter für Netzwerk-Feedback)

**Designhinweise:**

- Quote-Komponente (z. B. mit `blockquote`)
- Optional Carousel oder Scrollbereich

---

## 🔹 8. Kontakt (Teaser)

**Funktion:** Niedrigschwellige Kontaktaufnahme

**Inhalte:**

- Text: „Lass uns gemeinsam neue Wege gehen.“
- E-Mail: [kontakt@rieger-systems.eu](mailto:kontakt@rieger-systems.eu)
- Optional: Button „Kontakt aufnehmen“ → `/contact`
- Icons für GitHub / LinkedIn (optional verlinken)

**Designhinweise:**

- Dunkler Hintergrund (Kontrast zum Rest)
- Optional kleines Formular oder nur E-Mail

---

## 🔹 9. Footer

**Funktion:** Navigation + Pflichtinfos + SEO

**Inhalte:**

- Links:
  - Impressum → `/imprint`
  - Datenschutz → `/privacy`
  - AGB → `/terms` (optional)
- Hinweis: „Hosting by Rieger Systems“
- Plausible Analytics Hinweis (self-hosted)

**Designhinweise:**

- Simple, kontrastreich, keine Ablenkung
- Responsiv unterteilt (z. B. links: Navigation, rechts: Text)

---

## 🧾 To-Dos / Besonderheiten

- [ ] Sprache über i18n integrieren
- [ ] SEO-Tags setzen (`<svelte:head>`)
- [ ] OG / Twitter Image generieren
- [ ] Finaler Claim validieren (ggf. A/B-Test)
- [ ] Finales Design (Padding, Grid, Animationen abstimmen)
