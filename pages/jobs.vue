<script setup lang="ts">
import {
  CodeBracketIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ServerStackIcon,
  ClipboardDocumentListIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#i18n";

const { t } = useI18n();
const localePath = useLocalePath();

const jobs = [
  {
    titleKey: "jobs.fullstackDevelopmentTitle",
    descKey: "jobs.fullstackDevelopmentDescription",
    icon: CodeBracketIcon,
  },
  {
    titleKey: "jobs.uxUiDesignTitle",
    descKey: "jobs.uxUiDesignDescription",
    icon: GlobeAltIcon,
  },
  {
    titleKey: "jobs.itSecurityDataProtectionTitle",
    descKey: "jobs.itSecurityDataProtectionDescription",
    icon: ShieldCheckIcon,
  },
  {
    titleKey: "jobs.networkInfrastructureTitle",
    descKey: "jobs.networkInfrastructureDescription",
    icon: ServerStackIcon,
  },
  {
    titleKey: "jobs.aiAnalyticsTitle",
    descKey: "jobs.aiAnalyticsDescription",
    icon: CpuChipIcon,
  },
  {
    titleKey: "jobs.projectCoordinationTitle",
    descKey: "jobs.projectCoordinationDescription",
    icon: ClipboardDocumentListIcon,
  },
];

const tiltStyles = ref<string[]>(
  Array(jobs.length).fill("transform: rotateX(0deg) rotateY(0deg);")
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
    id="jobs-section"
    class="pt-32 pb-36 bg-base-200 relative z-10 border-t border-base-300/20"
  >
    <div class="text-center mb-20 px-6">
      <h2
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 280,
              damping: 28,
              delay: 100,
            },
          },
        }"
        class="text-4xl font-bold text-base-content mb-3"
      >
        {{ t("jobs.title") }}
      </h2>
      <p
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 30,
              delay: 200,
            },
          },
        }"
        class="text-base-content/70 max-w-2xl mx-auto text-lg"
      >
        {{ t("jobs.description") }}
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 group"
    >
      <div
        v-for="(job, i) in jobs"
        :key="i"
        v-motion="{
          initial: { opacity: 0, y: 60 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 170,
              damping: 26,
              mass: 1,
              delay: 350 + i * 120,
            },
          },
        }"
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
            <component :is="job.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-semibold text-lg text-base-content">
            {{ t(job.titleKey) }}
          </h3>
          <p class="text-sm text-base-content/70 leading-relaxed">
            {{ t(job.descKey) }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-motion="{
        initial: { opacity: 0, y: 40 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 200,
            damping: 30,
            delay: 700,
          },
        },
      }"
      class="text-center mt-20 space-y-4"
    >
      <NuxtLink :to="localePath('/about')" class="btn btn-primary btn-lg group">
        <span>{{ t("jobs.aboutUsButton") }}</span>
        <ArrowRightIcon
          class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
        />
      </NuxtLink>
      <p class="text-sm text-base-content/60">
        {{ t("jobs.emailCallToAction") }}
        <a
          href="mailto:kontakt@rieger-systems.eu"
          class="underline text-primary"
          target="_blank"
        >
          kontakt@rieger-systems.eu
        </a>
      </p>
    </div>
  </section>
</template>
