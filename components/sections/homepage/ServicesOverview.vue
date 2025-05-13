<script setup lang="ts">
import { ref } from "vue";
import { products } from "~/data/products";

// Dynamische Services basierend auf Produkten
const services = Object.keys(products).map((key) => {
  const product = products[key];
  return {
    title: product.title.split(" - ")[0],
    desc: product.shortDescription,
    icon: product.icon, // Direkt aus dem Produkt geladen
    link: product.link,
  };
});

// Parallax Effekt für die Karten
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

<template>
  <section
    id="after-hero"
    class="pt-32 pb-36 bg-base-200 relative z-10 border-t border-base-300/20"
  >
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

    <!-- 🌟 Optimierte Karten -->
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
            class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center"
          >
            <component :is="item.icon" class="w-8 h-8" />
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
  </section>
</template>
