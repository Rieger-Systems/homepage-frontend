import { ref, onMounted, onBeforeUnmount } from "vue";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const activeId = ref(sectionIds[0] || "");

  let animationFrame: number;

  const update = () => {
    const scrollPosition = window.scrollY;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (!el) continue;

      const top = el.getBoundingClientRect().top + window.scrollY;

      if (scrollPosition + offset >= top) {
        activeId.value = sectionIds[i];
        break;
      }
    }

    animationFrame = requestAnimationFrame(update);
  };

  onMounted(() => {
    animationFrame = requestAnimationFrame(update);
  });

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrame);
  });

  return { activeId };
}
