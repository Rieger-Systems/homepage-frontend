<template>
  <NuxtLink
    :to="to"
    class="transition duration-150 text-base-content/70 hover:text-primary hover:font-semibold"
    :class="{ 'text-primary font-semibold': isActive }"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const props = defineProps<{ to: string }>();
const route = useRoute();
const isActive = computed(() => route.path.startsWith(props.to));
</script>
