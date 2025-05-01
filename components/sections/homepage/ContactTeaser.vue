<template>
  <section
    class="py-28 bg-base-100 border-t border-base-300/20 text-center relative z-10 px-6"
  >
    <!-- 🧭 Heading -->
    <h2 class="text-4xl font-bold text-base-content mb-4 animate-fade-up">
      Lust auf Austausch?
    </h2>
    <p
      class="text-base text-base-content/70 mb-10 max-w-xl mx-auto animate-fade-up delay-100"
    >
      Ob Zusammenarbeit, Idee oder Rückmeldung – wir freuen uns über jede
      Nachricht.
    </p>

    <!-- 📬 CTA Buttons -->
    <div
      class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-200"
    >
      <a href="mailto:kontakt@rieger-systems.eu" class="btn btn-primary btn-lg">
        E-Mail schreiben
      </a>
      <NuxtLink to="/contact" class="btn btn-outline btn-lg">
        Kontaktformular
      </NuxtLink>
    </div>
  </section>
</template>

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
.animate-fade-up.delay-200 {
  animation-delay: 0.2s;
}
</style>
