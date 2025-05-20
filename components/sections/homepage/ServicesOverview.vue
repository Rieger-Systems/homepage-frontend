<template>
  <section
    id="services-carousel"
    class="py-20 bg-base-200 relative z-10 text-base-content"
  >
    <div class="text-center mb-12">
      <h2
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              delay: 100,
            },
          },
        }"
        class="text-4xl font-bold mb-2"
      >
        Unsere Leistungen
      </h2>
      <p
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 180,
              damping: 22,
              delay: 200,
            },
          },
        }"
        class="text-lg text-base-content/70"
      >
        Wir bauen Systeme, die Menschen entlasten, Prozesse vereinfachen und
        Vertrauen schaffen.
      </p>
    </div>

    <div
      v-if="hasServices"
      class="carousel-container w-full md:w-3/4 max-w-3xl mx-auto relative overflow-hidden"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
      v-motion="{
        initial: { opacity: 0, scale: 0.95 },
        visibleOnce: {
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 120,
            damping: 18,
            delay: 300,
          },
        },
      }"
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
            v-motion="{
              // Animate only the currently active slide on initial load
              // For subsequent slides, it's about the carousel 'slide' not individual card entry
              initial: { opacity: 0, y: 20 },
              // Use 'once' to ensure it only animates when the carousel itself appears
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: 400, // Matches initial carousel delay
                },
              },
            }"
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
            v-motion="{
              initial: { opacity: 0, x: -20 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 500,
                },
              },
            }"
          >
            ❮
          </button>
          <button
            @click="nextSlide"
            class="btn btn-circle btn-sm bg-primary/70 hover:bg-primary text-primary-content"
            aria-label="Nächste Folie"
            v-motion="{
              initial: { opacity: 0, x: 20 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 500,
                },
              },
            }"
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
            v-motion="{
              initial: { opacity: 0, y: 10 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: 600 + index * 50, // Staggered entry for dots
                },
              },
            }"
          ></button>
        </div>
      </template>
    </div>
    <div v-else class="text-center py-10">
      <p
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 150,
              damping: 20,
              delay: 300,
            },
          },
        }"
        class="text-lg text-base-content/70"
      >
        Momentan sind keine Leistungen verfügbar.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { products } from "~/data/products";

const services = Object.keys(products).map((key) => {
  const product = products[key as keyof typeof products];
  return {
    title: product.title.split(" - ")[0],
    desc: product.shortDescription,
    icon: product.icon, // This should be a component or a string that resolves to a component
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

<style scoped>
.carousel-container {
  position: relative;
  max-width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease; /* Unified with duration-300 */
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
  /* inset-0, flex, justify-between, items-center from the template are primarily for positioning */
  z-index: 10; /* Buttons above the cards */
  pointer-events: none; /* IMPORTANT: Allows clicks to "fall through" to the link */
}

.carousel-buttons .btn-circle {
  pointer-events: auto; /* IMPORTANT: Makes the buttons themselves clickable again */
  /* Tailwind classes (bg-primary/70, hover:bg-primary, text-primary-content) control the appearance */
  border: none;
  transition-property: background-color, opacity, transform;
  transition-duration: 0.2s;
}
/* Hover effects etc. are controlled by Tailwind classes in the template */

.indicator-dot {
  transition-property: background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
/* Focus and Hover styles are controlled by Tailwind classes in the template */

@media (max-width: 768px) {
  .card {
    padding: 1.5rem; /* 24px */
  }

  /* The positioning of .carousel-buttons is still handled by inset-0 etc. */
  /* Adjustments for button size remain */
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
