<template>
  <section
    class="relative w-full min-h-screen bg-base-100 overflow-hidden pt-20"
  >
    <!-- 🌐 Background -->
    <div class="absolute inset-0 z-0">
      <HeroCanvas />
    </div>

    <!-- ✨ Glow Layer -->
    <div
      class="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent blur-[120px] z-0 pointer-events-none"
    />

    <!-- 🧊 Glass Text Box -->
    <div
      class="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-6"
    >
      <div
        class="max-w-2xl w-full bg-base-100/40 backdrop-blur-[8px] rounded-2xl shadow-xl border border-white/10 border-t border-t-white/10 p-6 sm:p-8 lg:p-10 animate-fade-in transition"
        style="box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3)"
      >
        <h1
          class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-center text-base-content"
        >
          Technologie mit Haltung.
        </h1>
        <p
          class="text-base sm:text-lg text-base-content/80 leading-relaxed mb-8 text-center"
        >
          Wir entwickeln Systeme, die tragen – stabil, dokumentiert und
          menschenfreundlich. Von IT-Infrastruktur bis erklärbarer KI.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#services-carousel" class="btn btn-primary btn-lg">
            Unsere Leistungen
          </a>
          <NuxtLink to="/contact" class="btn btn-outline btn-lg">
            Kontakt aufnehmen
          </NuxtLink>
        </div>

        <!-- 🧠 Haltung (Mini-Section) -->
        <p
          class="mt-10 text-xs text-center text-base-content/50 opacity-0 animate-fade-delayed"
        >
          Wir glauben an eine Technologie, die stärkt – nicht ersetzt.
        </p>
      </div>
    </div>

    <!-- ⬇️ Scroll Indicator -->
    <button
      @click="scrollToNext"
      aria-label="Scrollen"
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-base-content/50 animate-bounce hover:text-primary transition"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  </section>
</template>

<script setup lang="ts">
import HeroCanvas from "~/components/sections/homepage/HeroCanvas.vue";

const scrollToNext = () => {
  const nextSection = document.querySelector("#after-hero");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1.2s ease-out both;
}

@keyframes fade-delayed {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-delayed {
  animation: fade-delayed 2.5s ease-out forwards;
  animation-delay: 0.5s;
}
</style>
