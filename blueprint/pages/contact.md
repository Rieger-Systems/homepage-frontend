# 📬 Contact – `pages/contact.vue`

> **Zweck:** Niedrigschwelliger Einstieg in die Kontaktaufnahme  
> **Zielgruppe:** Interessierte, Kunden, Partner, Medien, Behörden  
> **Status:** [✍️ In Planung]  
> **Technologie:** NuxtJS + TailwindCSS + PrimeVue (Volt Design System)

---

## 🔹 1. Zweck der Seite

- Ermöglicht direkte, einfache Kontaktaufnahme
- Stärkt Professionalität & Erreichbarkeit
- Optionaler Einstieg für Lead-Generierung, Gespräche, Kooperationen

---

## 🔹 2. Inhaltliche Struktur

| Abschnitt              | Beschreibung                                                             |
|------------------------|--------------------------------------------------------------------------|
| **Intro-Text**         | Kurze Einladung zum Gespräch (1–2 Sätze)                                 |
| **Kontaktformular**    | Formular mit Feldern: Name, E-Mail, Nachricht, optional Firma            |
| **Direkte Kontaktinfos** | E-Mail-Link, ggf. Telefonnummer                                         |
| **Socials (optional)** | GitHub · LinkedIn                                                       |
| **Datenschutzhinweis** | Hinweis: „Mit dem Absenden akzeptieren Sie unsere [Datenschutzerklärung](/privacy).“ |

---

## 🔹 3. Komponentenaufbau (Vue)

### 📦 `<ContactForm />`
- Eigenständige Komponente: `components/ContactForm.vue`
- PrimeVue Komponenten: `InputText`, `Textarea`, `Button`
- Tailwind-Klassen für Layout, Abstand, Responsivität

### ✅ Felder & Validierung

| Feld      | Typ       | Pflicht? |
|-----------|-----------|----------|
| Name      | InputText | ✅        |
| E-Mail    | InputText | ✅        |
| Nachricht | Textarea  | ✅        |
| Firma     | InputText | ❌        |

- Validierung via `required`, E-Mail-Format
- Feedback über PrimeVue `ToastService`

---

## 🔹 4. Layout-Vorschlag (TailwindCSS)

```html
<section class="max-w-3xl mx-auto px-4 py-16">
  <h1 class="text-3xl font-semibold mb-4">Lass uns gemeinsam neue Wege gehen.</h1>
  <p class="text-gray-400 mb-8">
    Ob Frage, Idee oder Zusammenarbeit – wir freuen uns über deine Nachricht.
  </p>
  <ContactForm />
  <p class="mt-6 text-sm text-gray-500">
    Mit dem Absenden akzeptieren Sie unsere 
    <NuxtLink to="/privacy" class="underline">Datenschutzerklärung</NuxtLink>.
  </p>
</section>
```

---

## 🔹 5. To-Dos / Besonderheiten

- [ ] E-Mail-Versand via API oder SMTP (z. B. `server/api/contact.ts`)
- [ ] Captcha oder Honeypot zur Spamvermeidung
- [ ] Toast-Bestätigung nach erfolgreichem Senden
- [ ] Optionale Kopie an Absender
- [ ] i18n: Texte in EN/DE

---

## 🔹 6. SEO & Meta-Tags

```ts
export default definePageMeta({
  title: 'Kontakt – Rieger Systems',
  description: 'Treten Sie mit uns in Kontakt – wir freuen uns auf Ihre Nachricht.',
})
```