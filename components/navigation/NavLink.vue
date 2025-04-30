<template>
  <NuxtLink
    :to="to"
    class="transition duration-150 hover:text-primary"
    :class="isActive ? 'text-primary font-semibold' : 'text-base-content/70'"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const props = defineProps<{ to: string }>();
const route = useRoute();
const isActive = computed(() => route.path === props.to);
</script>
