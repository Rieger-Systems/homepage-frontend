<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import {
  EnvelopeIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  CpuChipIcon,
} from "@heroicons/vue/24/outline";

// 1. Reihenfolge festlegen
const serviceKeys = ["mail", "hosting", "software", "websites", "aiSystems"];

const icons = [
  EnvelopeIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  CpuChipIcon,
];

const { t } = useI18n();

// 2. Services-Array aus i18n-Keys bauen
const services = computed(() =>
  serviceKeys.map((key, idx) => ({
    title: t(`homepage.services.${key}`),
    desc: t(`homepage.services.${key}Description`),
    icon: icons[idx],
    link: `/products/${key === "aiSystems" ? "aisystems" : key}`, // Passe ggf. Slug an
  }))
);

const currentSlide = ref(0);
const slideIntervalDuration = 3000;
let autoSlideIntervalId: ReturnType<typeof setInterval> | null = null;

const hasServices = computed(() => services.value.length > 0);
const canSlide = computed(() => services.value.length > 1);

function nextSlideLogic() {
  if (!canSlide.value) return;
  currentSlide.value = (currentSlide.value + 1) % services.value.length;
}

function prevSlideLogic() {
  if (!canSlide.value) return;
  currentSlide.value =
    (currentSlide.value - 1 + services.value.length) % services.value.length;
}

function startAutoSlide() {
  if (!canSlide.value) return;
  if (autoSlideIntervalId) clearInterval(autoSlideIntervalId);
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
  if (canSlide.value) startAutoSlide();
}

function prevSlide() {
  prevSlideLogic();
  if (canSlide.value) startAutoSlide();
}

function goToSlide(index: number) {
  if (!canSlide.value) return;
  currentSlide.value = index;
  if (canSlide.value) startAutoSlide();
}

onMounted(() => {
  if (canSlide.value) startAutoSlide();
});
onUnmounted(stopAutoSlide);
</script>

<template>
  <section
    id="services-carousel"
    class="py-20 bg-base-200 relative z-10 text-base-content"
  >
    <div class="text-center mb-20">
      <h2
        v-motion="{
          initial: { opacity: 0, y: 30, scale: 0.98 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 30,
              delay: 150,
            },
          },
        }"
        class="text-4xl lg:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-base-content"
      >
        {{ t("homepage.services.sectionTitle") }}
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
              delay: 250,
            },
          },
        }"
        class="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed"
      >
        {{ t("homepage.services.sectionDescription") }}
      </p>
    </div>

    <div
      v-if="hasServices"
      class="w-full md:w-3/4 max-w-3xl mx-auto relative overflow-hidden pb-12"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <div
        class="flex transition-transform duration-300 will-change-transform"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <NuxtLink
          v-for="(item, index) in services"
          :key="index"
          :to="item.link"
          class="flex-none w-full block group relative px-2"
          :aria-label="`Mehr Informationen zu ${item.title}`"
        >
          <div
            class="card bg-base-100 shadow-xl rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:bg-base-100/90 h-full overflow-hidden"
          >
            <div
              class="w-24 h-24 rounded-full bg-primary text-primary-content flex items-center justify-center mb-8 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md"
            >
              <component :is="item.icon" class="w-12 h-12" />
            </div>
            <h3 class="font-bold text-2xl md:text-3xl mb-3 text-base-content">
              {{ item.title }}
            </h3>
            <p class="text-base-content/70 leading-relaxed text-balance">
              {{ item.desc }}
            </p>
            <span
              class="absolute inset-0 block rounded-2xl border-2 border-transparent group-hover:border-primary transition-colors duration-200 pointer-events-none"
              aria-hidden="true"
            ></span>
          </div>
        </NuxtLink>
      </div>

      <template v-if="canSlide">
        <div
          class="absolute inset-y-0 flex justify-between items-center w-full px-4"
        >
          <button
            @click="prevSlide"
            class="btn btn-circle bg-primary/70 hover:bg-primary text-primary-content shadow-lg transition-all duration-300 transform hover:scale-115 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-200"
            aria-label="Vorherige Folie"
          >
            ❮
          </button>
          <button
            @click="nextSlide"
            class="btn btn-circle bg-primary/70 hover:bg-primary text-primary-content shadow-lg transition-all duration-300 transform hover:scale-115 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-200"
            aria-label="Nächste Folie"
          >
            ❯
          </button>
        </div>
        <div class="flex justify-center gap-2 mt-12">
          <button
            v-for="(item, index) in services"
            :key="`dot-${index}`"
            @click="goToSlide(index)"
            :class="[
              'h-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out',
              currentSlide === index
                ? 'w-6 bg-primary shadow-lg'
                : 'w-3 bg-base-300 hover:bg-primary/50',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-200',
            ]"
            :aria-label="`Gehe zu Folie ${index + 1}: ${item.title}`"
          ></button>
        </div>
      </template>
    </div>
    <div v-else class="text-center py-10">
      <p class="text-lg text-base-content/70">
        {{ t("homepage.services.empty") }}
      </p>
    </div>
  </section>
</template>

<style scoped>
/* All styles are now handled by Tailwind CSS utility classes in the template. */
/* No custom CSS needed here. */
</style>
