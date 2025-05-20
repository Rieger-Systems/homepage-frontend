<template>
  <section
    id="ethics"
    aria-labelledby="heading-ethics"
    role="region"
    class="scroll-mt-28 min-h-screen py-32 px-6 border-t border-base-300/20 bg-base-100"
  >
    <div class="text-center mb-24">
      <h2
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            // Animation nur einmal, wenn sichtbar
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 25,
              delay: 100,
            },
          },
        }"
        id="heading-ethics"
        tabindex="-1"
        class="text-4xl font-bold mb-4"
      >
        Unsere ethischen Prinzipien
      </h2>
      <p
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: {
            // Animation nur einmal, wenn sichtbar
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 25,
              delay: 200,
            },
          },
        }"
        class="text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed text-balance"
      >
        Technologie darf nicht lenken – sie muss stärken. Unsere Systeme folgen
        Prinzipien. Kein Marketing. Kein Zufall.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div
        v-for="(item, index) in ethics"
        :key="item.title"
        v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 350 + index * 150,
            },
          },
        }"
        class="border-l-4 border-primary pl-6 space-y-3"
      >
        <div class="flex items-center gap-2 text-primary font-semibold">
          <component :is="item.icon" class="w-5 h-5" />
          <h3 class="text-lg font-bold text-base-content">{{ item.title }}</h3>
        </div>
        <p class="text-base text-base-content/80 leading-relaxed">
          {{ item.desc }}
        </p>
        <p class="text-sm text-base-content/70 italic leading-relaxed">
          {{ item.explanation }}
        </p>
        <p class="text-sm text-base-content/60 leading-relaxed">
          <strong>Beispiel:</strong> {{ item.example }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  UserIcon,
  EyeIcon,
  LightBulbIcon,
  LockClosedIcon,
  ScaleIcon,
} from "@heroicons/vue/24/outline";

const ethics = [
  {
    title: "Autonomie schützen",
    desc: "Nutzer:innen behalten jederzeit die Kontrolle. Keine Eingriffe. Kein Nudging.",
    icon: UserIcon,
    explanation:
      "Technologie soll uns befähigen – nicht manipulieren. Viele Systeme beeinflussen heute Entscheidungen subtil: durch Design, durch Algorithmen, durch Unklarheit. Wir halten dagegen.",
    example:
      "Soziale Medien, die Suchtmechaniken einsetzen, um Verweildauer zu erhöhen – ohne Rücksicht auf Wohlbefinden oder Autonomie.",
  },
  {
    title: "Verantwortung übernehmen",
    desc: "Entscheidungen sind nachvollziehbar und überprüfbar.",
    icon: EyeIcon,
    explanation:
      "Wir übernehmen Verantwortung für das, was unsere Systeme tun. Kein „die KI hat das entschieden“. Entscheidungen müssen rückverfolgbar, erklärbar und absichtlich sein.",
    example:
      "Ein Algorithmus lehnt einen Kreditantrag ab – ohne, dass jemand erklären kann, warum. So etwas darf nicht passieren.",
  },
  {
    title: "Transparenz leben",
    desc: "Wir zeigen offen, was gespeichert wird – und warum.",
    icon: LightBulbIcon,
    explanation:
      "Vertrauen entsteht nicht durch Versprechen, sondern durch Klarheit. Nutzer:innen haben ein Recht darauf zu wissen, was mit ihren Daten passiert.",
    example:
      "Viele Anbieter sammeln Bewegungsdaten und geben sie weiter – ohne Nutzen für die Nutzer:innen.",
  },
  {
    title: "Keine Ausbeutung",
    desc: "Keine Tracker. Keine Datenverkäufe. Kein Profiling.",
    icon: LockClosedIcon,
    explanation:
      "Daten sind keine Ressource, die man ausschlachten darf. Unsere Systeme verkaufen nicht – sie schützen.",
    example:
      "Tracking-Werbung, die dir noch Monate später Produkte zeigt, obwohl du sie nie gekauft hast.",
  },
  {
    title: "Langfristig denken",
    desc: "Nicht kurzfristiger Profit, sondern nachhaltige Wirkung.",
    icon: ScaleIcon,
    explanation:
      "Ethische Technologie braucht Langfristigkeit: in Wartung, Wirkung und Wirkungskontrolle.",
    example:
      "Startups, die ohne Rücksicht auf technische oder soziale Folgen schnell skalieren wollen.",
  },
];
</script>
