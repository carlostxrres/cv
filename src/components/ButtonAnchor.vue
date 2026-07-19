<script setup lang="ts">
import IconComponent from "@/components/IconComponent.vue";
import type { IconName } from "@/types/icons";

defineProps<{
  label: string;
  href: string;
  icon: IconName;
}>();
</script>

<template>
  <a target="_blank" class="a-like" :href="href">
    <IconComponent :icon="icon" />
    <span>{{ label }}</span>
  </a>
</template>

<style scoped>
a {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

a svg {
  color: var(--color-main-2);
}
</style>
