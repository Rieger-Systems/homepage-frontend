<template>
  <section
    id="projects"
    class="py-24 bg-base-100 border-t border-base-200 animate-fade-in"
  >
    <div class="text-center mb-16 px-6">
      <h2 class="text-3xl font-bold text-base-content mb-3">Unsere Projekte</h2>
      <p class="text-lg text-base-content/70 max-w-xl mx-auto">
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
        :project="project"
        class="animate-slide-up"
        :style="{ animationDelay: `${key * 0.15}s` }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
import ProjectDisplay from "~/components/sections/projects/ProjectDisplay.vue";

const projectList = Object.values(projects);
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out both;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out both;
}
</style>
