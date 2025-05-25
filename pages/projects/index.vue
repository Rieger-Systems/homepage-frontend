<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ProjectDisplay from "~/components/sections/projects/ProjectDisplay.vue";
import { useLocalePath } from "#i18n";

const { t } = useI18n();
const localePath = useLocalePath();

// Nur noch die drei gewünschten Projekte:
const projectSlugs = ["amara", "amarawell", "amaracall"];

const maxFeatures = 3;

// Features-Array-Assembler (bricht bei erstem leerem Key ab)
function getFeatures(slug: string): string[] {
  const arr = [];
  for (let i = 0; i < maxFeatures; i++) {
    const val = t(`projects.${slug}.features.${i}`);
    if (!val || val === `projects.${slug}.features.${i}`) break;
    arr.push(val);
  }
  return arr;
}

// Liste für die Grid-Übersicht
const projectList = projectSlugs.map((slug) => ({
  id: t(`projects.${slug}.id`),
  slug: t(`projects.${slug}.slug`),
  title: t(`projects.${slug}.title`),
  subtitle: t(`projects.${slug}.subtitle`),
  description: t(`projects.${slug}.description`),
  short: t(`projects.${slug}.short`),
  features: getFeatures(slug),
  status: t(`projects.${slug}.status`),
  image: t(`projects.${slug}.image`),
  sections: [],
}));
</script>

<template>
  <section id="projects" class="py-24 bg-base-100 border-t border-base-200">
    <div class="text-center mb-16 px-6">
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
        class="text-3xl font-bold text-base-content mb-3"
      >
        {{ t("projects.index.title") }}
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
        class="text-lg text-base-content/70 max-w-xl mx-auto"
      >
        {{ t("projects.index.description") }}
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6"
    >
      <ProjectDisplay
        v-for="(project, key) in projectList"
        :key="project.slug"
        :project="project"
        v-motion="{
          initial: { opacity: 0, y: 60 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 150,
              damping: 20,
              mass: 1,
              delay: 350 + key * 100,
            },
          },
        }"
      />
    </div>
  </section>
</template>
