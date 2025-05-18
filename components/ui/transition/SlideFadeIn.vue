<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  direction?: "up" | "down" | "left" | "right";
  distance?: number; // in px
  duration?: number; // in Sekunden
  delay?: number; // in Sekunden
  timing?: string; // optional: CSS timing function
}>();

const direction = props.direction ?? "up";
const distance = props.distance ?? 32;
const duration = props.duration ?? 0.6;
const delay = props.delay ?? 0;
const timing = props.timing ?? "cubic-bezier(0.4, 0, 0.2, 1)";

const transitionName = computed(() => {
  switch (direction) {
    case "left":
      return "slide-fade-left";
    case "right":
      return "slide-fade-right";
    case "down":
      return "slide-fade-down";
    default:
      return "slide-fade-up";
  }
});
const distancePx = computed(() => `${distance}px`);
const styleVars = computed(() => ({
  "--slide-distance": distancePx.value,
  "--slide-duration": `${duration}s`,
  "--slide-delay": `${delay}s`,
  "--slide-timing": timing,
}));
</script>

<template>
  <Transition :name="transitionName" appear>
    <div :style="styleVars">
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-up-enter-active,
.slide-fade-up-leave-active,
.slide-fade-down-enter-active,
.slide-fade-down-leave-active,
.slide-fade-left-enter-active,
.slide-fade-left-leave-active,
.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: opacity var(--slide-duration, 0.6s) var(--slide-delay, 0s),
    transform var(--slide-duration, 0.6s) var(--slide-delay, 0s);
  transition-timing-function: var(--slide-timing, cubic-bezier(0.4, 0, 0.2, 1));
}
.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
  opacity: 0;
  transform: translateY(var(--slide-distance, 32px));
}
.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
  opacity: 0;
  transform: translateY(calc(var(--slide-distance, 32px) * -1));
}
.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  opacity: 0;
  transform: translateX(var(--slide-distance, 32px));
}
.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  opacity: 0;
  transform: translateX(calc(var(--slide-distance, 32px) * -1));
}
</style>
