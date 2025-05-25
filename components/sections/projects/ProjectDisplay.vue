<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Project } from "~/types/project";
import { useLocalePath } from "#i18n";

const props = defineProps<{ project: Project }>();
const { t } = useI18n();
const localePath = useLocalePath(); // localePath initialisieren
</script>

<template>
  <NuxtLink
    :to="localePath(`/projects/${project.slug}`)"
    class="card w-full bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md overflow-hidden relative group"
    :aria-label="t('projects.aria.moreInfo', { title: project.title })"
  >
    <span class="absolute top-2 right-2 badge badge-sm badge-primary z-10">
      {{ t(`projects.status.${project.status}`) }}
    </span>

    <figure class="relative overflow-hidden">
      <img
        :src="project.image"
        :alt="t('projects.aria.imageAlt', { title: project.title })"
        class="w-full h-48 object-cover rounded-t-md transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300"
      ></div>
    </figure>

    <div class="card-body p-4">
      <h3
        class="card-title text-xl font-semibold text-primary group-hover:text-primary/50 transition-colors duration-300"
      >
        {{ project.title }}
      </h3>
      <p class="text-base-content text-opacity-70 text-sm mb-2">
        {{ project.description }}
      </p>
      <button
        class="btn btn-sm btn-ghost text-primary group-hover:text-primary/50 transition-colors duration-300 w-full justify-end"
        :aria-label="t('projects.readMore')"
      >
        {{ t("projects.readMore") }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  </NuxtLink>
</template>
