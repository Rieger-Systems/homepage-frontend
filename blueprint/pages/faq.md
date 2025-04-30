# ❓ FAQ – `pages/faq.vue`

> **Zweck:** Antworten auf häufige Fragen rund um Rieger Systems, Ethik, Produkte und Technologie  
> **Zielgruppe:** Interessierte Nutzer:innen, Organisationen, Fördergeber, technische Leser:innen  
> **Status:** [✍️ In Planung]  
> **Technologie:** NuxtJS + TailwindCSS + PrimeVue (Volt Design System)

---

## 🔹 1. Zweck der Seite

- Entlastung des Supports durch strukturierte Antworten
- Klarstellung zentraler Themen (z. B. Datenschutz, Einsatzbereiche)
- Vertrauensbildung durch transparente Kommunikation
- Einstiegspunkt für tiefere Inhalte (verlinkt zu `privacy`, `technology`, `ethics`)

---

## 🔹 2. Struktur / Aufbau

| Abschnitt                | Beschreibung                                                          |
| ------------------------ | --------------------------------------------------------------------- |
| **Einleitung**           | Kurzer Text zur Erklärung der Seite                                   |
| **Fragen & Antworten**   | Accordion-Komponenten mit typischen Fragen                            |
| **Weiterführende Links** | Verweise auf vertiefende Seiten wie `ethics`, `technology`, `privacy` |

---

## 🔹 3. FAQ-Beispiele

### **Ist eure KI wirklich DSGVO-konform?**

> Ja. Wir entwickeln alle Systeme so, dass sie den europäischen Datenschutzgrundsätzen entsprechen – ohne versteckte Datenweitergabe oder Auswertung.

### **Verkauft ihr Daten oder Nutzungsprofile?**

> Nein. Niemals. Wir glauben an eine klare Trennung von Funktionalität und wirtschaftlicher Ausbeutung.

### **Wie kann ich Rieger Systems einsetzen?**

> Unsere Systeme sind modular aufgebaut. Von kleinen Webprojekten bis hin zu spezialisierten KI-Anwendungen bieten wir individuelle Lösungen.

### **Wie unterscheidet ihr euch von typischen KI-Firmen?**

> Unsere Kernprinzipien sind Verantwortung, Transparenz und europäische Werte. Wir setzen nicht auf Wachstumszwang, sondern auf Nachhaltigkeit.

### **Welche KI-Modelle verwendet ihr?**

> Je nach Anwendungsfall nutzen wir erklärbare Open-Source-Modelle (z. B. BLOOM, GBERT, Mistral). Proprietäre Closed-Source-Modelle lehnen wir grundsätzlich ab.

---

## 🔹 4. Designhinweise

- Verwendung von PrimeVue Accordion-Komponenten (`Accordion`, `AccordionTab`)
- Responsive Darstellung
- Icons (❓, ✅, 🔒) können sinnvoll eingesetzt werden

---

## 🔹 5. To-Dos / Besonderheiten

- [ ] Finales Set an Fragen formulieren
- [ ] Links zu Detailseiten setzen (`/privacy`, `/technology`, etc.)
- [ ] i18n vorbereiten (DE/EN)
- [ ] SEO-Meta setzen (title/description)
