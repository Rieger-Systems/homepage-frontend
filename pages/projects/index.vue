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
        Unsere Projekte
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
        Unsere Projekte sind innovative, ethisch verantwortungsvolle
        Technologien.
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-6"
    >
      <ProjectDisplay
        v-for="(project, key) in projectList"
        :key="project.id"
        v-motion="{
          initial: { opacity: 0, y: 60 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 150, // Softer spring for individual cards
              damping: 20, // Good damping for a subtle bounce
              mass: 1,
              delay: 350 + key * 100, // Starts after header, with clear staggering
            },
          },
        }"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
import ProjectDisplay from "~/components/sections/projects/ProjectDisplay.vue";

const projectList = Object.values(projects);
</script>
