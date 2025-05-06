<template>
  <section
    id="jobs-section"
    class="pt-32 pb-36 bg-base-200 relative z-10 border-t border-base-300/20"
  >
    <!-- 💬 Heading -->
    <div class="text-center mb-20 px-6">
      <h2 class="text-4xl font-bold text-base-content mb-3 animate-fade-up">
        Werde Teil von Rieger Systems
      </h2>
      <p
        class="text-base-content/70 max-w-2xl mx-auto text-lg animate-fade-up delay-100"
      >
        Wir schreiben selten Stellen aus – aber wir lesen jede
        Initiativbewerbung. Vielleicht beginnt hier etwas Neues.
      </p>
    </div>

    <!-- 💼 Jobbereiche -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 group"
    >
      <div
        v-for="(job, i) in jobs"
        :key="i"
        class="relative transform-gpu transition-all duration-300 group-hover:opacity-80 hover:opacity-100 hover:scale-[1.015]"
        @mousemove="handleMouse($event, i)"
        @mouseleave="resetTilt(i)"
      >
        <div
          class="card bg-base-100/80 backdrop-blur-md border border-base-300/20 shadow-xl rounded-xl p-6 flex flex-col gap-4 transition-all"
          :style="tiltStyles[i]"
        >
          <div
            class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center"
          >
            <component :is="job.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-semibold text-lg text-base-content">
            {{ job.title }}
          </h3>
          <p class="text-sm text-base-content/70 leading-relaxed">
            {{ job.desc }}
          </p>
        </div>
      </div>
    </div>

    <!-- ✉️ CTA -->
    <div class="text-center mt-20 animate-fade-up delay-300 space-y-4">
      <NuxtLink to="/about" class="btn btn-primary btn-lg group">
        <span>Mehr über uns erfahren</span>
        <ArrowRightIcon
          class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
        />
      </NuxtLink>
      <p class="text-sm text-base-content/60">
        Oder direkt per Mail:
        <a href="mailto:jobs@rieger-systems.eu" class="underline text-primary">
          jobs@rieger-systems.eu
        </a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  CodeBracketIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ServerStackIcon,
  ClipboardDocumentListIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

const jobs = [
  {
    title: "Fullstack-Entwicklung",
    desc: "Von Architektur bis Schnittstelle. Du denkst modular, nachhaltig und dokumentiert.",
    icon: CodeBracketIcon,
  },
  {
    title: "UX/UI Design",
    desc: "Du gestaltest Interfaces mit Klarheit, Gefühl und funktionaler Eleganz.",
    icon: GlobeAltIcon,
  },
  {
    title: "IT-Sicherheit & Datenschutz",
    desc: "Du schützt nicht nur Systeme, sondern auch die Menschen dahinter.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Netzwerktechnik & Infrastruktur",
    desc: "Du planst und betreibst Systeme, die zuverlässig, unabhängig und wartbar sind.",
    icon: ServerStackIcon,
  },
  {
    title: "KI & Analyse",
    desc: "Du baust Systeme, die verstehen statt urteilen – mit ethischem Anspruch.",
    icon: CpuChipIcon,
  },
  {
    title: "Projektkoordination",
    desc: "Du bringst Struktur, Kommunikation und Sorgfalt in technische Prozesse.",
    icon: ClipboardDocumentListIcon,
  },
];

const tiltStyles = ref<string[]>(
  Array(jobs.length).fill("transform: rotateX(0deg) rotateY(0deg);")
);

function handleMouse(e: MouseEvent, index: number) {
  const card = (e.currentTarget as HTMLElement).getBoundingClientRect();
  const centerX = card.left + card.width / 2;
  const centerY = card.top + card.height / 2;
  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;

  const rotateX = (-deltaY / 20).toFixed(2);
  const rotateY = (deltaX / 20).toFixed(2);

  tiltStyles.value[
    index
  ] = `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`;
}

function resetTilt(index: number) {
  tiltStyles.value[index] = "transform: rotateX(0deg) rotateY(0deg);";
}
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
.animate-fade-up.delay-100 {
  animation-delay: 0.1s;
}
.animate-fade-up.delay-300 {
  animation-delay: 0.3s;
}
</style>
