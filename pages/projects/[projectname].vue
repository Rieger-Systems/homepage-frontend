<template>
  <div class="bg-base-300 min-h-screen py-16 animate-fade-in">
    <section class="max-w-screen-lg mx-auto px-6">
      <button
        @click="goBack"
        class="btn btn-ghost btn-sm text-base-content mb-8 animate-slide-down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Zurück
      </button>

      <template v-if="project">
        <div
          class="mb-12 bg-base-100 rounded-lg shadow-md p-8 animate-slide-up"
        >
          <div class="md:flex items-start gap-12">
            <div
              v-if="project.image"
              class="flex-shrink-0 rounded-lg shadow-md overflow-hidden w-full md:max-w-md animate-fade-in delay-100"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-auto object-cover"
              />
            </div>

            <div class="text-center md:text-left space-y-4 flex-1">
              <h1
                class="text-4xl font-bold text-primary animate-fade-in delay-200"
              >
                {{ project.title }}
              </h1>
              <div
                class="badge badge-outline badge-primary text-sm animate-fade-in delay-300"
              >
                Status: {{ project.status }}
              </div>
              <p
                class="text-lg text-base-content/80 leading-relaxed animate-fade-in delay-400"
              >
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div
            v-for="(section, index) in project.sections"
            :key="section.heading"
            class="collapse collapse-plus bg-base-100 rounded-md shadow-sm animate-slide-up"
            :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
          >
            <input type="checkbox" class="peer" />
            <div
              class="collapse-title text-lg font-semibold text-base-content peer-checked:bg-primary peer-checked:text-primary-content"
            >
              {{ section.heading }}
            </div>
            <div class="collapse-content bg-base-100 p-6">
              <p
                v-if="section.content"
                class="text-base-content text-opacity-80 leading-relaxed animate-fade-in delay-100"
              >
                {{ section.content }}
              </p>
              <ul
                v-if="section.list"
                class="list-disc pl-6 text-base-content text-opacity-80 animate-fade-in delay-100"
              >
                <li
                  v-for="item in section.list"
                  :key="item"
                  class="py-1 animate-fade-in delay-[calc(100ms_+_var(--index)_*_50ms)]"
                  :style="{ '--index': index }"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div
          class="text-center py-16 bg-base-100 rounded-lg shadow-md animate-fade-in"
        >
          <h1 class="text-2xl font-bold text-error mb-4 animate-pulse">
            Projekt nicht gefunden
          </h1>
          <p
            class="text-base-content text-opacity-70 animate-fade-in delay-200"
          >
            Das angeforderte Projekt existiert nicht oder wurde entfernt.
          </p>
          <button
            @click="goBack"
            class="btn btn-outline btn-error mt-6 animate-slide-up delay-300"
          >
            Zurück zur Projektübersicht
          </button>
        </div>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { projects } from "~/data/projects";
import type { Project } from "~/data/types/project";
import { onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const projectname = route.params.projectname as string;

const project: Project = projects[projectname];

if (project) {
  useSeoMeta({
    title: project.title,
    description: project.description,
  });
}

const goBack = () => {
  router.push("/projects");
};

// Animation für Listenelemente zurücksetzen, wenn Komponente neu gerendert wird
onMounted(() => {
  const listItems = document.querySelectorAll(".list-disc li");
  listItems.forEach((item, index) => {
    (item as HTMLElement).style.setProperty("--index", index.toString());
  });
});
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

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out both;
}
.animate-slide-down {
  animation: slide-down 0.4s ease-out both;
}
.animate-slide-up {
  animation: slide-up 0.4s ease-out both;
}
.animate-pulse {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
