<template>
  <aside
    v-motion-slide-left
    class="hidden xl:block fixed top-32 left-8 z-30"
    :aria-label="t('about.ariaLabels.pageNavigation')"
  >
    <ul class="border-l border-base-300 pl-3 space-y-2 text-sm font-medium">
      <li v-for="(item, i) in sections" :key="item.id">
        <a
          v-motion-fade
          :style="{ transitionDelay: `${0.08 + i * 0.06}s` }"
          :href="'#' + item.id"
          class="group flex items-center gap-2 pl-3 py-1.5 rounded-r-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          :aria-current="activeId === item.id ? 'location' : undefined"
          :class="[
            activeId === item.id
              ? 'text-primary font-semibold bg-primary/10 border-l-2 border-primary'
              : 'text-base-content/60 hover:text-primary hover:bg-base-200/50',
          ]"
        >
          <span
            class="w-2 h-2 rounded-full transition-colors"
            :class="[
              activeId === item.id
                ? 'bg-primary'
                : 'bg-base-content/30 group-hover:bg-primary',
            ]"
          />
          {{ item.label }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"; // useI18n importieren

const props = defineProps<{ activeId: string }>();
const { t } = useI18n(); // t initialisieren

// Das sections Array wird jetzt dynamisch aus den I18n-Texten aufgebaut
const sections = [
  { id: "claim", label: t("about.sections.claim") },
  { id: "vision", label: t("about.sections.vision") },
  { id: "identity", label: t("about.sections.identity") },
  { id: "values", label: t("about.sections.values") },
  { id: "ethics", label: t("about.sections.ethics") },
];
</script>
