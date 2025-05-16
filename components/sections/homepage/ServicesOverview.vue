<script setup lang="ts">
import { ref } from "vue";
import { products } from "~/data/products";

const services = Object.keys(products).map((key) => {
  const product = products[key];
  return {
    title: product.title.split(" - ")[0],
    desc: product.shortDescription,
    icon: product.icon,
    link: product.link,
  };
});

const currentSlide = ref(0);

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % services.length;
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + services.length) % services.length;
}

function goToSlide(index: number) {
  currentSlide.value = index;
}
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

    <!-- Carousel -->
    <div
      class="carousel-container w-3/4 max-w-3xl mx-auto relative overflow-hidden"
    >
      <div
        class="carousel-track flex transition-transform duration-300"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(item, index) in services"
          :key="index"
          class="carousel-item flex-none w-full"
        >
          <NuxtLink :to="item.link" class="block w-full">
            <div
              class="card bg-base-100 shadow-lg rounded-xl p-8 flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105"
            >
              <div
                class="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mb-4"
              >
                <component :is="item.icon" class="w-10 h-10" />
              </div>
              <h3 class="font-bold text-xl mb-2">{{ item.title }}</h3>
              <p class="text-base-content/70 mb-2">{{ item.desc }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div
        class="carousel-buttons absolute inset-0 flex justify-between items-center px-4"
      >
        <button
          @click="prevSlide"
          class="btn btn-circle btn-sm bg-primary/70 hover:bg-primary"
          aria-label="Vorherige Folie"
        >
          ❮
        </button>
        <button
          @click="nextSlide"
          class="btn btn-circle btn-sm bg-primary/70 hover:bg-primary"
          aria-label="Nächste Folie"
        >
          ❯
        </button>
      </div>

      <!-- Slide Indicator -->
      <div class="flex justify-center gap-2 mt-4">
        <span
          v-for="(item, index) in services"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'indicator-dot w-3 h-3 rounded-full',
            currentSlide === index ? 'bg-primary' : 'bg-base-300',
          ]"
          class="cursor-pointer transition-all duration-200"
        ></span>
      </div>
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
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-buttons {
  top: 50%;
  transform: translateY(-50%);
}

.btn-circle {
  background-color: var(--primary);
  color: var(--base-100);
  opacity: 0.7;
  transition: opacity 0.2s, transform 0.2s;
}

.btn-circle:hover {
  opacity: 1;
  transform: scale(1.1);
}

.indicator-dot {
  transition: background-color 0.2s;
}

.indicator-dot:hover {
  background-color: var(--primary);
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }

  .carousel-buttons {
    top: auto;
    bottom: 2rem;
  }

  .btn-circle {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
