<script setup>
import { useI18n } from "vue-i18n";
// import DiagramAmarawell from "~/components/sections/projects/DiagramAmarawell.vue";
const { t } = useI18n();

const key = "projects.amarawell";

// Dynamische Section/Listen-Erkennung, kein fixiertes Limit!
function getSections() {
  const result = [];
  let i = 1;
  while (true) {
    const title = t(`${key}.section${i}Title`);
    if (!title || title.startsWith("projects.")) break;
    const content = t(`${key}.section${i}Content`);
    const list = [];
    let j = 1;
    while (true) {
      const item = t(`${key}.section${i}ListItem${j}`);
      if (!item || item.startsWith("projects.")) break;
      list.push(item);
      j++;
    }
    // Nur speichern, wenn Content oder Liste existiert
    if (!content && !list.length) {
      i++;
      continue;
    }
    result.push({
      title,
      content:
        content && !content.startsWith("projects.") ? content : undefined,
      list: list.length ? list : undefined,
    });
    i++;
  }
  return result;
}

const project = {
  id: t(`${key}.id`),
  slug: t(`${key}.slug`),
  image: t(`${key}.image`),
  title: t(`${key}.title`),
  description: t(`${key}.description`),
  status: t(`${key}.status`),
  sections: getSections(),
};
</script>

<template>
  <div class="bg-base-300 min-h-screen py-16">
    <section class="max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg p-8">
      <div class="flex flex-col items-center mb-8">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-40 h-40 object-contain rounded-2xl mb-4 shadow"
        />
        <h1 class="text-4xl font-bold text-primary mb-2 text-center">
          {{ project.title }}
        </h1>
        <span class="badge badge-outline badge-primary text-sm mb-2">
          {{ project.status }}
        </span>
        <p class="text-base-content text-lg text-center mb-2">
          {{ project.description }}
        </p>
      </div>
      <div class="divide-y divide-base-200">
        <div v-for="(section, i) in project.sections" :key="i" class="py-6">
          <h2 class="text-xl font-semibold text-primary mb-2">
            {{ section.title }}
          </h2>
          <div v-if="section.content" class="text-base-content mb-2">
            <template v-if="section.content.includes('[DIAGRAM]')">
              <!-- Bei mehreren Platzhaltern, splitten und Diagramm einfügen -->
              <template
                v-for="(part, idx) in section.content.split('[DIAGRAM]')"
                :key="idx"
              >
                <!-- <DiagramAmarawell v-if="idx > 0" class="my-6" /> -->
                <span v-if="part.trim()">{{ part }}</span>
              </template>
            </template>
            <template v-else>
              {{ section.content }}
            </template>
          </div>
          <ul
            v-if="section.list"
            class="list-disc pl-6 space-y-1 text-base-content"
          >
            <li v-for="(item, j) in section.list" :key="j">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
