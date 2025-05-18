<script setup lang="ts">
import { computed, useSlots } from "vue";

const props = defineProps({
  tag: { type: String, default: "div" },
  class: { type: String, default: "grid grid-cols-3 gap-4" },
  duration: { type: Number, default: 0.5 }, // Sekunden
  leaveDuration: { type: Number, default: 0.3 },
  distance: { type: Number, default: 24 }, // px
  stagger: { type: Number, default: 50 }, // ms
});

const slots = useSlots();
const children = slots.default?.() ?? [];

const getStaggerStyle = (index: number) =>
  `--stagger-delay: ${index * props.stagger}ms;`;
</script>

<template>
  <TransitionGroup
    :name="'stagger-fade'"
    :tag="props.tag"
    :class="props.class"
    appear
  >
    <template v-for="(child, i) in children" :key="child.key ?? i">
      <div :style="getStaggerStyle(i)">
        <!-- Nur falls du Slot-Name brauchst, sonst kannst du diese Zeile entfernen -->
        <slot
          :name="
            typeof child.type === 'object' && 'name' in child.type
              ? child.type.name
              : undefined
          "
        />
        <component :is="child" />
      </div>
    </template>
  </TransitionGroup>
</template>

<style scoped>
.stagger-fade-enter-active {
  transition: all var(--duration, 0.5s) cubic-bezier(0.4, 0, 0.2, 1);
}
.stagger-fade-leave-active {
  transition: all var(--leave-duration, 0.3s) cubic-bezier(0.4, 0, 0.2, 1);
}
.stagger-fade-enter-from,
.stagger-fade-leave-to {
  opacity: 0;
  transform: translateY(var(--distance, 24px));
}
.stagger-fade-enter-active > * {
  transition-delay: var(--stagger-delay, 0ms);
}
</style>
