# 🔐 Privacy – `pages/privacy.vue`

> **Zweck:** Erfüllung der DSGVO-Pflichten & vertrauensbildende Transparenz  
> **Zielgruppe:** Alle Nutzer:innen (rechtlich + ethisch relevant)  
> **Status:** [✅ Pflichtseite]  
> **Technologie:** NuxtJS + TailwindCSS

---

## 🔹 1. Zweck der Seite

- Gesetzliche DSGVO-Pflicht (Art. 13/14 DSGVO)
- Offenlegung, welche Daten verarbeitet werden – wie und warum
- Vertrauen stärken durch verständliche, ehrliche Sprache
- Basis für Tools mit Einwilligung (z. B. Kontaktformular)

---

## 🔹 2. Inhaltliche Struktur (Gliederung)

| Abschnitt                       | Beschreibung                                                    |
| ------------------------------- | --------------------------------------------------------------- |
| **Einleitung**                  | Kurze Erklärung, warum Datenschutz wichtig ist                  |
| **Verantwortlicher Anbieter**   | Name, Adresse, Kontakt (vgl. Impressum)                         |
| **Art der verarbeiteten Daten** | Welche Daten bei Besuch, Formular, etc. anfallen                |
| **Zweck der Verarbeitung**      | Warum Daten verarbeitet werden (Kontakt, Betrieb, Analyse etc.) |
| **Rechtsgrundlagen**            | Einwilligung, Vertrag, berechtigtes Interesse                   |
| **Speicherdauer**               | Wie lange welche Daten gespeichert werden                       |
| **Empfänger / Dritte**          | Keine Übertragung an Dritte (außer ausdrücklich genannt)        |
| **Rechte der Betroffenen**      | Auskunft, Löschung, Berichtigung, Widerspruch                   |
| **Hosting & Analyse**           | Hinweis auf selbstgehostetes Plausible, kein Tracking           |
| **Kontakt bei Fragen**          | Ansprechpartner für Datenschutz                                 |
| **Änderungshinweis**            | Hinweis, dass Änderungen möglich sind und dokumentiert werden   |

---

## 🔹 3. Beispieltext – Einleitung

> Der Schutz Ihrer Daten ist uns wichtig.  
> Diese Seite erklärt, welche personenbezogenen Daten wir erheben, wie wir sie verwenden und welche Rechte Sie haben.  
> Wir handeln nach den Grundsätzen der Datenschutz-Grundverordnung (DSGVO) und streben maximale Transparenz an.

---

## 🔹 4. Datenschutzspezifika bei Rieger Systems

- Keine Verwendung von Google Analytics oder externem Tracking
- Analyse über **self-hosted Plausible Analytics**
- Keine Datenweitergabe an Dritte oder US-Dienste
- Kein Einsatz von Cookies ohne Einwilligung
- Kontaktformulardaten werden nur zur Bearbeitung verwendet, nicht gespeichert oder weitergegeben

---

## 🔹 5. To-Dos / Besonderheiten

- [ ] Firmenanschrift & Ansprechpartner eintragen
- [ ] Rechtstext ggf. juristisch prüfen (nach Gründung)
- [ ] Datenschutzinfo mit `/contact` verknüpfen
- [ ] Änderungshistorie dokumentieren (optional)

---

## 🔹 6. Designhinweise

- Klarer, nüchterner Stil
- Ideal: Accordion oder anklickbare Kapitelübersicht
- Text in `prose`, max-w-screen-sm
