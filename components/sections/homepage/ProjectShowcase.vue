<template>
  <section class="py-24 bg-base-300 relative z-10">
    <div class="text-center mb-16 px-6">
      <h2
        class="text-4xl font-bold text-base-content mb-4"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              delay: 100,
            },
          },
        }"
      >
        Projekt im Fokus
      </h2>
      <p
        class="text-lg text-base-content/70 max-w-xl mx-auto"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 180,
              damping: 22,
              delay: 200,
            },
          },
        }"
      >
        Unsere zentrale Lösung – technologiegetrieben, menschenzentriert und mit
        klarem Fokus auf ethische Standards und europäische Souveränität.
      </p>
    </div>

    <div class="max-w-xl mx-auto px-6">
      <NuxtLink
        v-if="highlightedProject"
        :to="`/projects/${highlightedProject.slug}`"
        class="card bg-base-200 shadow-md rounded-lg overflow-hidden"
        v-motion="{
          initial: { opacity: 0, y: 40, scale: 0.95 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 120,
              damping: 18,
              delay: 300,
            },
          },
        }"
      >
        <div class="card-body p-6">
          <h3 class="card-title text-xl font-semibold text-primary">
            {{ highlightedProject.title }}
          </h3>
          <p class="text-base-content/80 leading-relaxed text-sm mb-4">
            {{ highlightedProject.description }}
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-sm">
              Mehr erfahren
              <ArrowRightIcon class="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </NuxtLink>
      <div
        v-else
        class="text-center text-warning mt-4"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 150,
              damping: 20,
              delay: 300,
            },
          },
        }"
      >
        Das zentrale Projekt konnte nicht geladen werden.
      </div>
    </div>

    <div class="text-center mt-12">
      <NuxtLink
        to="/projects"
        class="btn btn-outline btn-primary rounded-full hover:scale-105 transition-transform"
        v-motion="{
          initial: { opacity: 0, scale: 0.9 },
          visibleOnce: {
            opacity: 1,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 120,
              damping: 18,
              delay: 400,
            },
          },
        }"
      >
        Zu den anderen Projekten
        <ArrowRightIcon class="w-5 h-5 ml-2" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types/project";

const highlightedProject: Project | undefined = projects["amara"];
</script>
