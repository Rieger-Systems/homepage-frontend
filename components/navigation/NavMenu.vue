<template>
  <div class="flex flex-col md:flex-row gap-4 md:gap-10 text-sm tracking-wide">
    <NavLink
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      @click="$emit('select')"
    >
      <span class="whitespace-nowrap">{{ item.label }}</span>
    </NavLink>
  </div>
</template>

<script setup lang="ts">
defineEmits(["select"]);

const navItems = [
  { to: "/products", label: "Leistungen" },
  { to: "/projects", label: "Projekte" },
  { to: "/about", label: "Über uns" },
  { to: "/contact", label: "Kontakt" },
];
</script>
