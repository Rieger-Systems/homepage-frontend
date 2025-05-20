<template>
  <div class="bg-base-300 min-h-screen py-16">
    <section class="max-w-screen-lg mx-auto px-6">
      <button
        @click="goBack"
        v-motion="{
          initial: { opacity: 0, y: -20 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 30,
              delay: 50,
            },
          },
        }"
        class="btn btn-ghost btn-sm text-base-content mb-8"
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
          v-motion="{
            initial: { opacity: 0, y: 30 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 180,
                damping: 25,
                delay: 150, // Starts after the back button
              },
            },
          }"
          class="mb-12 bg-base-100 rounded-lg shadow-md p-8"
        >
          <div class="md:flex items-start gap-12">
            <div
              v-if="project.image"
              v-motion="{
                initial: { opacity: 0, scale: 0.95 },
                enter: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 150,
                    damping: 20,
                    delay: 250, // Image appears slightly later than its container
                  },
                },
              }"
              class="flex-shrink-0 rounded-lg shadow-md overflow-hidden w-full md:max-w-md"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-auto object-cover"
              />
            </div>

            <div class="text-center md:text-left space-y-4 flex-1">
              <h1
                v-motion="{
                  initial: { opacity: 0, y: 20 },
                  enter: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 200,
                      damping: 25,
                      delay: 350, // Title after image
                    },
                  },
                }"
                class="text-4xl font-bold text-primary"
              >
                {{ project.title }}
              </h1>
              <div
                v-motion="{
                  initial: { opacity: 0, y: 10 },
                  enter: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 200,
                      damping: 25,
                      delay: 450, // Badge after title
                    },
                  },
                }"
                class="badge badge-outline badge-primary text-sm"
              >
                Status: {{ project.status }}
              </div>
              <p
                v-motion="{
                  initial: { opacity: 0, y: 10 },
                  enter: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 200,
                      damping: 25,
                      delay: 550, // Description after badge
                    },
                  },
                }"
                class="text-lg text-base-content/80 leading-relaxed"
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
            v-motion="{
              initial: { opacity: 0, y: 30 },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150, // Softer spring for collapsible sections
                  damping: 20,
                  delay: 650 + index * 120, // Staggered after the main project info
                },
              },
            }"
            class="collapse collapse-plus bg-base-100 rounded-md shadow-sm"
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
                class="text-base-content text-opacity-80 leading-relaxed"
              >
                {{ section.content }}
              </p>
              <ul
                v-if="section.list"
                class="list-disc pl-6 text-base-content text-opacity-80"
              >
                <li v-for="item in section.list" :key="item" class="py-1">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div
          v-motion="{
            initial: { opacity: 0, y: 30 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 180,
                damping: 25,
                delay: 150,
              },
            },
          }"
          class="text-center py-16 bg-base-100 rounded-lg shadow-md"
        >
          <h1 class="text-2xl font-bold text-error mb-4 animate-pulse">
            Projekt nicht gefunden
          </h1>
          <p
            v-motion="{
              initial: { opacity: 0, y: 10 },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 25,
                  delay: 300,
                },
              },
            }"
            class="text-base-content text-opacity-70"
          >
            Das angeforderte Projekt existiert nicht oder wurde entfernt.
          </p>
          <button
            @click="goBack"
            v-motion="{
              initial: { opacity: 0, y: 20 },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 25,
                  delay: 450,
                },
              },
            }"
            class="btn btn-outline btn-error mt-6"
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
// Removed onMounted as direct v-motion with key provides index to delay
// and the specific list item animation approach has been simplified.

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
</script>

<style scoped>
/* Only keep the @keyframes for 'pulse' as it's not a v-motion preset */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* All other @keyframes and animation classes have been removed */
</style>
