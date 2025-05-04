<template>
  <div
    class="collapse collapse-arrow join-item bg-base-200 border border-base-300 rounded-xl shadow-sm transition-all duration-300 group hover:shadow-md hover:border-primary"
  >
    <input type="checkbox" />
    <div
      class="collapse-title text-[1.05rem] leading-snug font-semibold text-base-content/90 flex items-center justify-between gap-3 group-open:text-primary transition-colors"
    >
      {{ question }}
    </div>
    <div
      class="collapse-content text-sm leading-relaxed text-base-content/80 pt-1"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ question: string }>();
</script>
