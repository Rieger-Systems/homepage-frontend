<template>
  <section class="py-32 bg-base-100 border-t border-base-300/20 relative z-10">
    <!-- 🧭 Heading -->
    <div class="text-center mb-20 px-6">
      <h2 class="text-4xl font-bold text-base-content mb-4 animate-fade-up">
        Projekte im Fokus
      </h2>
      <p
        class="text-base text-base-content/70 max-w-2xl mx-auto animate-fade-up delay-100"
      >
        Unsere aktuell entwickelten Lösungen – technologiegetrieben,
        menschenzentriert und mit klarem Fokus auf ethische Standards und
        europäische Souveränität.
      </p>
    </div>

    <!-- 🔲 Project Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
      <NuxtLink
        v-for="(project, i) in projects"
        :key="project.title"
        :to="project.link"
        class="group bg-base-200/60 backdrop-blur-md rounded-2xl border border-base-300/30 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all transform hover:-translate-y-1 hover:bg-base-200/80 p-6 sm:p-8 animate-fade-up"
        :style="{ animationDelay: `${i * 100}ms` }"
      >
        <div class="space-y-4">
          <div
            class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition"
          >
            <component :is="project.icon" class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-semibold text-base-content">
            {{ project.title }}
          </h3>
          <p class="text-sm text-base-content/70 leading-relaxed">
            {{ project.desc }}
          </p>
          <div
            class="text-sm font-medium text-primary mt-2 inline-flex items-center group-hover:underline"
          >
            Mehr erfahren
            <ArrowRightIcon class="w-4 h-4 ml-1" />
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowRightIcon,
  CpuChipIcon,
  PhoneIcon,
  HeartIcon,
} from "@heroicons/vue/24/outline";

const projects = [
  {
    title: "A.M.A.R.A",
    desc: "Zentrale modulare KI-Plattform – für Analyse, Verständnis & Kontrolle. Offline-fähig, erklärbar, ethisch.",
    link: "/projects/amara",
    icon: CpuChipIcon,
  },
  {
    title: "AmaraCall",
    desc: "KI-Telefonassistentin für Arztpraxen – nimmt Anrufe entgegen, notiert Wünsche und entlastet das Team.",
    link: "/projects/amaracall",
    icon: PhoneIcon,
  },
  {
    title: "AmaraWell",
    desc: "KI-gestützte Begleiterin für mentale Gesundheit – vertrauenswürdig, empathisch & therapeutisch sicher.",
    link: "/projects/amarawell",
    icon: HeartIcon,
  },
];
</script>

<style scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.8s ease-out both;
}
</style>
