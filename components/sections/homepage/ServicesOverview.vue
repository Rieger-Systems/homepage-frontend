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

const serviceConfig = [
  { key: "mail", icon: EnvelopeIcon },
  { key: "services", icon: ServerStackIcon },
  { key: "software", icon: WrenchScrewdriverIcon },
  { key: "website", icon: GlobeAltIcon },
  { key: "aisystems", icon: CpuChipIcon },
];

const { t } = useI18n();

const services = computed(() =>
  serviceConfig.map((config, idx) => ({
    title: t(`homepage.services.${config.key}`),
    desc: t(`homepage.services.${config.key}Description`),
    icon: config.icon,
    link: `/products/${config.key}`,
    id: `service-item-${idx + 1}`,
  }))
);

const currentSlide = ref(0);
const slideIntervalDuration = 4000;
let autoSlideIntervalId: ReturnType<typeof setInterval> | null = null;

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
  stopAutoSlide();
  autoSlideIntervalId = setInterval(nextSlideLogic, slideIntervalDuration);
}
function stopAutoSlide() {
  if (autoSlideIntervalId) {
    clearInterval(autoSlideIntervalId);
    autoSlideIntervalId = null;
  }
}
function nextSlide() {
  stopAutoSlide();
  nextSlideLogic();
  startAutoSlide();
}
function prevSlide() {
  stopAutoSlide();
  prevSlideLogic();
  startAutoSlide();
}
function goToSlide(index: number) {
  if (!canSlide.value || index === currentSlide.value) return;
  stopAutoSlide();
  currentSlide.value = index;
  startAutoSlide();
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
        class="text-4xl lg:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-base-content"
      >
        {{ t("homepage.services.sectionTitle") }}
      </h2>
      <p
        class="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed"
      >
        {{ t("homepage.services.sectionDescription") }}
      </p>
    </div>

    <div
      v-if="services.length"
      class="w-full md:w-3/4 max-w-3xl mx-auto relative pb-8"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
      role="region"
      aria-label="Unsere Dienstleistungen im Überblick"
    >
      <transition name="fade" mode="out-in">
        <NuxtLink
          v-if="services[currentSlide]"
          :key="services[currentSlide].id"
          :id="services[currentSlide].id"
          :to="services[currentSlide].link"
          class="block"
          :aria-label="`Mehr Informationen zu ${services[currentSlide].title}`"
          tabindex="0"
        >
          <div
            class="card bg-base-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:scale-[1.02] transition-all duration-300 h-full overflow-hidden"
          >
            <div
              class="w-24 h-24 rounded-full bg-primary text-primary-content flex items-center justify-center mb-8 shadow-md"
            >
              <component
                :is="services[currentSlide].icon"
                class="w-12 h-12"
                aria-hidden="true"
              />
            </div>
            <h3 class="font-bold text-2xl md:text-3xl mb-3 text-base-content">
              {{ services[currentSlide].title }}
            </h3>
            <p class="text-base-content/70 leading-relaxed text-balance">
              {{ services[currentSlide].desc }}
            </p>
          </div>
        </NuxtLink>
      </transition>

      <template v-if="canSlide">
        <!-- Dots/Buttons unter dem Carousel -->
        <div class="flex justify-center items-center gap-3 mt-8" role="tablist">
          <button
            v-for="(item, index) in services"
            :key="`dot-${index}`"
            @click="goToSlide(index)"
            :class="[
              'rounded-full cursor-pointer transition-all duration-300 ease-in-out focus:outline-none',
              currentSlide === index
                ? 'w-7 h-3 bg-primary shadow'
                : 'w-3 h-3 bg-base-300 hover:bg-primary/50',
              'focus-visible:ring-2 focus-visible:ring-primary',
            ]"
            :aria-label="`Gehe zu Folie ${index + 1}: ${item.title}`"
            :aria-controls="item.id"
            :aria-selected="currentSlide === index ? 'true' : 'false'"
            role="tab"
            tabindex="0"
          ></button>
        </div>

        <!-- Prev/Next Buttons seitlich, aber responsive -->
        <div
          class="absolute flex justify-between items-center w-full top-1/2 -translate-y-1/2 px-2 pointer-events-none"
        >
          <button
            @click="prevSlide"
            class="btn btn-circle btn-ghost pointer-events-auto"
            aria-label="Vorherige Dienstleistung"
            tabindex="0"
          >
            ❮
          </button>
          <button
            @click="nextSlide"
            class="btn btn-circle btn-ghost pointer-events-auto"
            aria-label="Nächste Dienstleistung"
            tabindex="0"
          >
            ❯
          </button>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
