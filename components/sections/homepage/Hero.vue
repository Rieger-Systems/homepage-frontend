<template>
  <section
    class="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 py-24 sm:py-32"
    style="background-color: var(--p-surface-0); color: var(--p-surface-800)"
  >
    <div class="max-w-3xl space-y-6 animate-fade-in">
      <h1
        class="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-white font-sans"
      >
        KI, die schützt. <br />
        Systeme, die tragen.
      </h1>

      <p class="text-[var(--p-surface-600)] text-lg sm:text-xl font-sans">
        Rieger Systems entwickelt menschenzentrierte KI-Systeme – klar,
        verantwortungsvoll und europäisch gedacht.
      </p>

      <div class="flex justify-center gap-4 mt-8">
        <button
          class="px-6 py-3 rounded font-medium text-white transition"
          style="background-color: var(--p-primary-500)"
          @click="scrollTo('vision')"
        >
          Mehr erfahren
        </button>

        <NuxtLink
          to="/contact"
          class="px-6 py-3 rounded border border-[var(--p-surface-400)] text-white hover:border-white transition"
        >
          Kontakt aufnehmen
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out both;
}
</style>
