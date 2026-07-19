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
  <a target="_blank" class="button-icon a-like" :href="href">
    <IconComponent :icon="icon" />
    <span>{{ label }}</span>
  </a>
</template>

<style scoped>
.button-icon {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.button-icon svg {
  color: var(--color-main-2);
}
</style>
