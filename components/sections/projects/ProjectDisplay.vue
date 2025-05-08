<template>
  <NuxtLink
    :to="`/projects/${project.slug}`"
    class="card w-full bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md overflow-hidden relative"
  >
    <span class="absolute top-2 right-2 badge badge-sm badge-primary z-10">
      {{ project.status }}
    </span>

    <figure class="relative">
      <img
        :src="project.image"
        alt="Project Image"
        class="w-full h-48 object-cover rounded-t-md"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 hover:opacity-50 transition-opacity duration-300"
      ></div>
    </figure>
    <div class="card-body p-4">
      <h3
        class="card-title text-xl font-semibold text-primary hover:text-secondary transition-colors duration-300"
      >
        {{ project.title }}
      </h3>
      <p class="text-base-content text-opacity-70 text-sm">
        {{ project.description }}
      </p>
      <button
        class="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-300 w-full justify-end"
      >
        Mehr erfahren
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

<script setup lang="ts">
import { defineProps } from "vue";
import type { Project } from "~/data/types/project";

const props = defineProps<{ project: Project }>();
</script>
