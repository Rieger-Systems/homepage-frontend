# 💼 Jobs – `pages/jobs.vue`

> **Zweck:** Potenzielle Mitarbeiter:innen ansprechen, Interesse sammeln, Zukunftsteam vorbereiten  
> **Zielgruppe:** Entwickler:innen, Designer:innen, Tech-Ethiker:innen, KI-Spezialist:innen, Generalisten  
> **Status:** [✍️ In Planung – Firma im Aufbau]  
> **Technologie:** NuxtJS + TailwindCSS + PrimeVue (Volt Design System)

---

## 🔹 1. Zweck der Seite

- Offenheit für Talente zeigen – auch vor offiziellem Wachstum
- Möglichkeit zur Mitgestaltung der Firmenkultur betonen
- Vertrauen durch Ehrlichkeit (derzeit 1-Personen-Team)
- Talente proaktiv binden, bevor konkrete Stellen existieren

---

## 🔹 2. Inhaltliche Struktur

| Abschnitt                     | Beschreibung                                                                                              |
| ----------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Intro / Ehrlicher Hinweis** | Aktuell wird das Unternehmen von einer Person geführt. Bewerbungen sind dennoch ausdrücklich willkommen.  |
| **Mitgestaltung**             | Hinweis, dass man aktiv an der Firmenkultur, den Produkten und der technischen Architektur mitwirken kann |
| **Gesuchte Profile (Boxen)**  | Liste mit potenziellen Rollen, jeweils als Karte/Box (PrimeVue Card oder Panel)                           |
| **Kontaktmöglichkeit**        | Einfache Bewerbung via E-Mail mit kurzem Text                                                             |
| **Optionaler Callout**        | "Kein Job dabei? Schreib uns trotzdem."                                                                   |

---

## 🔹 3. Beispieltext – Intro

> **Aktuell ist Rieger Systems ein Ein-Personen-Unternehmen.**  
> Aber: Große Dinge entstehen im Kleinen.  
> Wenn du Lust hast, Teil von etwas Sinnvollem zu werden, melde dich gern – wir bauen das Unternehmen gerade auf.

> **Du kannst aktiv mitgestalten:**  
> Werte, Architektur, Produkte, Kommunikation, Prozesse – hier ist noch nichts festgefahren.

---

## 🔹 4. Beispiel-Boxen für Rollen (Dynamisch erweiterbar)

### 🔧 Software Engineer (Fullstack)

- Tech-Stack: NuxtJS, Tailwind, Spring Boot, PostgreSQL
- Fokus: Produktentwicklung, API-Design, Architektur
- Remote möglich

### 🤖 KI / NLP Engineer

- Erfahrung mit LLMs, HuggingFace, Qdrant oder ähnlichen Tools
- Interesse an ethischer KI
- Fokus: Analyse, Modell-Integration, Evaluation

### 🎨 UX / UI Designer:in

- Klarheit, Struktur, tiefe UI-Sprache
- Keine oberflächliche „Pretty-Design“-Rolle – hier geht’s um Wirkung

### ⚙️ DevOps / Infrastruktur

- Docker, Proxmox, Self-Hosting, GitHub Actions
- Fokus auf sichere, kontrollierte Systeme – nicht auf BigClouds

---

## 🔹 5. Designhinweise

- Intro = zentriert, max-w-xl
- Rollen = PrimeVue Cards in Grid
- Bewerbungslink als Button oder `mailto:`
- Optional: „Spontanbewerbung willkommen“-Box am Ende

---

## 🔹 6. To-Dos / Besonderheiten

- [ ] Rollen als JSON / API definieren (später dynamisch ladbar)
- [ ] Bewerbungen via E-Mail oder Formular?
- [ ] CTA-Box am Ende: „Gestalte Rieger Systems mit“
- [ ] Später eigenes Bewerbungs-Flow-System denkbar
