<template>
  <div
    class="fixed top-0 left-0 h-1 bg-primary z-[999] transition-all duration-200"
    :style="{ width: `${progress}%` }"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const progress = ref(0);

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  progress.value = Math.min(100, (scrollTop / docHeight) * 100);
}

onMounted(() => {
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateProgress);
});
</script>
