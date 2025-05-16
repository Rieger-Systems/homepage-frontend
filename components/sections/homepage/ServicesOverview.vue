<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { products } from "~/data/products";

const services = Object.keys(products).map((key) => {
  const product = products[key as keyof typeof products];
  return {
    title: product.title.split(" - ")[0],
    desc: product.shortDescription,
    icon: product.icon, // Dies sollte eine Komponente oder ein String sein, der zu einer Komponente aufgelöst wird
    link: product.link,
  };
});

const currentSlide = ref(0);
const slideIntervalDuration = 3000;
let autoSlideIntervalId: ReturnType<typeof setInterval> | null = null;

const hasServices = services.length > 0;
const canSlide = services.length > 1;

function nextSlideLogic() {
  if (!canSlide) return;
  currentSlide.value = (currentSlide.value + 1) % services.length;
}

function prevSlideLogic() {
  if (!canSlide) return;
  currentSlide.value =
    (currentSlide.value - 1 + services.length) % services.length;
}

function startAutoSlide() {
  if (!canSlide) return;
  if (autoSlideIntervalId) {
    clearInterval(autoSlideIntervalId);
  }
  autoSlideIntervalId = setInterval(() => {
    nextSlideLogic();
  }, slideIntervalDuration);
}

function stopAutoSlide() {
  if (autoSlideIntervalId) {
    clearInterval(autoSlideIntervalId);
    autoSlideIntervalId = null;
  }
}

function nextSlide() {
  nextSlideLogic();
  if (canSlide) startAutoSlide();
}

function prevSlide() {
  prevSlideLogic();
  if (canSlide) startAutoSlide();
}

function goToSlide(index: number) {
  if (!canSlide) return;
  currentSlide.value = index;
  if (canSlide) startAutoSlide();
}

onMounted(() => {
  if (canSlide) {
    startAutoSlide();
  }
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<template>
  <section
    id="services-carousel"
    class="py-20 bg-base-200 relative z-10 text-base-content"
  >
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-2">Unsere Leistungen</h2>
      <p class="text-lg text-base-content/70">
        Wir bauen Systeme, die Menschen entlasten, Prozesse vereinfachen und
        Vertrauen schaffen.
      </p>
    </div>

    <div
      v-if="hasServices"
      class="carousel-container w-full md:w-3/4 max-w-3xl mx-auto relative overflow-hidden"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <div
        class="carousel-track flex transition-transform duration-300 will-change-transform"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <NuxtLink
          v-for="(item, index) in services"
          :key="index"
          :to="item.link"
          class="carousel-item flex-none w-full block group"
          :aria-label="`Mehr Informationen zu ${item.title}`"
        >
          <div
            class="card bg-base-100 shadow-lg rounded-xl p-8 flex flex-col items-center text-center transition-transform group-hover:scale-105 h-full"
          >
            <div
              class="w-20 h-20 rounded-full bg-primary text-primary-content flex items-center justify-center mb-4"
            >
              <component :is="item.icon" class="w-10 h-10" />
            </div>
            <h3 class="font-bold text-xl mb-2">{{ item.title }}</h3>
            <p class="text-base-content/70 mb-2">{{ item.desc }}</p>
          </div>
        </NuxtLink>
      </div>

      <template v-if="canSlide">
        <div
          class="carousel-buttons absolute inset-0 flex justify-between items-center px-4"
        >
          <button
            @click="prevSlide"
            class="btn btn-circle btn-sm bg-primary/70 hover:bg-primary text-primary-content"
            aria-label="Vorherige Folie"
          >
            ❮
          </button>
          <button
            @click="nextSlide"
            class="btn btn-circle btn-sm bg-primary/70 hover:bg-primary text-primary-content"
            aria-label="Nächste Folie"
          >
            ❯
          </button>
        </div>

        <div class="flex justify-center gap-2 mt-4">
          <button
            v-for="(item, index) in services"
            :key="`dot-${index}`"
            @click="goToSlide(index)"
            :class="[
              'indicator-dot w-3 h-3 rounded-full cursor-pointer transition-all duration-200',
              currentSlide === index
                ? 'bg-primary scale-125'
                : 'bg-base-300 hover:bg-primary/50',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-200',
            ]"
            :aria-label="`Gehe zu Folie ${index + 1}: ${item.title}`"
          ></button>
        </div>
      </template>
    </div>
    <div v-else class="text-center py-10">
      <p class="text-lg text-base-content/70">
        Momentan sind keine Leistungen verfügbar.
      </p>
    </div>
  </section>
</template>

<style scoped>
.carousel-container {
  position: relative;
  max-width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease; /* Vereinheitlicht mit duration-300 */
  will-change: transform;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
  display: block;
}

.carousel-item .card {
  height: 100%;
}

.carousel-buttons {
  /* inset-0, flex, justify-between, items-center aus dem Template sind primär für die Positionierung */
  z-index: 10; /* Buttons über den Karten */
  pointer-events: none; /* WICHTIG: Lässt Klicks "durchfallen" zum Link */
}

.carousel-buttons .btn-circle {
  pointer-events: auto; /* WICHTIG: Macht die Buttons selbst wieder klickbar */
  /* Tailwind-Klassen (bg-primary/70, hover:bg-primary, text-primary-content) steuern das Aussehen */
  border: none;
  transition-property: background-color, opacity, transform;
  transition-duration: 0.2s;
}
/* Hover-Effekte etc. werden durch Tailwind-Klassen im Template gesteuert */

.indicator-dot {
  transition-property: background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
/* Fokus- und Hover-Stile werden durch Tailwind-Klassen im Template gesteuert */

@media (max-width: 768px) {
  .card {
    padding: 1.5rem; /* 24px */
  }

  /* Die Positionierung der .carousel-buttons wird weiterhin von inset-0 etc. gehandhabt. */
  /* Anpassungen für Button-Größe bleiben bestehen */
  .carousel-buttons .btn-circle {
    width: 2.5rem; /* 40px */
    height: 2.5rem; /* 40px */
  }

  .indicator-dot {
    width: 0.625rem; /* 10px */
    height: 0.625rem; /* 10px */
  }
}
</style>
