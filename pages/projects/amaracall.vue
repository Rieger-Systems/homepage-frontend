<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const key = "projects.amaracall";
const sectionCount = 10;
const listItemCount = 15;

function getSections() {
  const result = [];
  for (let i = 1; i <= sectionCount; i++) {
    const title = t(`${key}.section${i}Title`);
    if (!title || title.startsWith("projects.")) continue;
    const content = t(`${key}.section${i}Content`);
    const list = [];
    for (let j = 1; j <= listItemCount; j++) {
      const item = t(`${key}.section${i}ListItem${j}`);
      if (item && !item.startsWith("projects.")) list.push(item);
    }
    result.push({
      title,
      content:
        content && !content.startsWith("projects.") ? content : undefined,
      list: list.length ? list : undefined,
    });
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
          <p v-if="section.content" class="text-base-content mb-2">
            {{ section.content }}
          </p>
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
