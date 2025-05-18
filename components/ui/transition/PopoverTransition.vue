<script setup lang="ts">
const props = defineProps({
  open: { type: Boolean, default: true }, // Sichtbarkeit steuern (optional, default: true)
  duration: { type: Number, default: 0.25 }, // Sekunden
  delay: { type: Number, default: 0 }, // Sekunden
  timing: { type: String, default: "cubic-bezier(0.4, 0, 0.2, 1)" },
});
</script>

<template>
  <Transition name="fade-scale" appear>
    <div
      v-if="props.open"
      class="popover"
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
.fade-scale-enter-active,
.fade-scale-leave-active {
  /* Fallback, überschrieben durch inline-style */
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
