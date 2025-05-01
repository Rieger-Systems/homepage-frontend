<template>
  <section
    id="after-hero"
    class="pt-32 pb-36 bg-base-200 relative z-10 border-t border-base-300/20"
  >
    <!-- 🧭 Heading -->
    <div class="text-center mb-20 px-6">
      <h2 class="text-4xl font-bold text-base-content mb-3 animate-fade-up">
        Unsere Leistungen
      </h2>
      <p
        class="text-base-content/70 max-w-2xl mx-auto text-lg animate-fade-up delay-100"
      >
        Wir bauen Systeme, die nicht nur funktionieren – sondern Menschen
        entlasten, Prozesse vereinfachen und Vertrauen schaffen.
      </p>
    </div>

    <!-- 🌟 Parallax Cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 group"
    >
      <NuxtLink
        v-for="(item, i) in services"
        :key="i"
        :to="item.link"
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
            <component :is="item.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-semibold text-lg text-base-content">
            {{ item.title }}
          </h3>
          <p class="text-sm text-base-content/70 leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </NuxtLink>
    </div>

    <!-- 🚀 CTA -->
    <div class="text-center mt-20 animate-fade-up delay-300">
      <NuxtLink to="/products" class="btn btn-primary btn-lg group">
        <span>Alle Produkte ansehen</span>
        <ArrowRightIcon
          class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ServerStackIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

const services = [
  {
    title: "Hosting",
    desc: "Selbstbestimmtes Hosting – DSGVO-konform & souverän.",
    icon: ServerStackIcon,
    link: "/products/hosting",
  },
  {
    title: "Webentwicklung",
    desc: "Schnelle, barrierefreie & responsive Interfaces.",
    icon: GlobeAltIcon,
    link: "/products/webentwicklung",
  },
  {
    title: "Softwareentwicklung",
    desc: "Skalierbare APIs & modulare Backends.",
    icon: WrenchScrewdriverIcon,
    link: "/products/softwareentwicklung",
  },
  {
    title: "KI-Systeme",
    desc: "Erklärbare, ethische & lokal betreibbare KI.",
    icon: CpuChipIcon,
    link: "/products/ki-systeme",
  },
];

const tiltStyles = ref<string[]>(
  Array(services.length).fill("transform: rotateX(0deg) rotateY(0deg);")
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
