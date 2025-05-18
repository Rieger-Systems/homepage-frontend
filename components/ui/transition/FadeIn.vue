<script setup lang="ts">
const props = defineProps({
  duration: { type: Number, default: 0.5 }, // Sekunden
  delay: { type: Number, default: 0 }, // Sekunden
  timing: { type: String, default: "ease" }, // z. B. "ease", "ease-in-out"
});
</script>

<template>
  <Transition name="fade" appear>
    <div
      :style="{
        transitionDuration: `${props.duration}s`,
        transitionDelay: `${props.delay}s`,
        transitionTimingFunction: props.timing,
      }"
    >
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  /* Diese werden durch Inline-Style überschrieben, sind aber fallback */
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
