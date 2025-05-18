<template>
  <NuxtLink
    :to="to"
    class="transition duration-150 text-base-content/70 hover:text-primary inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
    :class="{ 'text-primary font-semibold': isActive }"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{ to: string }>();
const route = useRoute();

const isActive = computed(() => {
  if (props.to === "/") {
    return route.path === "/";
  } else {
    return route.path.startsWith(props.to);
  }
});
</script>
