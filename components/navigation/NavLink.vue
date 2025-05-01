<template>
  <NuxtLink
    :to="to"
    class="transition duration-150 hover:text-primary"
    :class="[
      { 'text-primary font-semibold': isActive },
      'text-base-content/70',
    ]"
    v-slot="{ href, navigate, isActive: nuxtActive }"
  >
    <a :href="href" @click="navigate">
      <slot />
    </a>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ to: string }>();
const route = useRoute();
const isActive = computed(() => route.path === props.to);
</script>
