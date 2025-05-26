<template>
  <div class="mt-6 text-xs text-base-content/60 italic text-center">
    {{ t("products.priceNote") }}
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
