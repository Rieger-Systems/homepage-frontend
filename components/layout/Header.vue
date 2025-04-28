<template>
  <header class="bg-surface-0 dark:bg-surface-900 shadow-md">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"
    >
      <!-- Logo / Firmenname -->
      <NuxtLink to="/" class="text-primary-500 font-bold text-2xl">
        Rieger Systems
      </NuxtLink>

      <!-- Navigation -->
      <nav class="space-x-8 hidden md:flex">
        <NuxtLink to="/" class="text-p-text-color hover:text-primary-500"
          >Start</NuxtLink
        >
        <NuxtLink to="/about" class="text-p-text-color hover:text-primary-500"
          >Über uns</NuxtLink
        >
        <NuxtLink
          to="/produkte"
          class="text-p-text-color hover:text-primary-500"
          >Produkte</NuxtLink
        >
        <NuxtLink to="/kontakt" class="text-p-text-color hover:text-primary-500"
          >Kontakt</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
