<script setup lang="ts">
import IconComponent from "@/components/IconComponent.vue";

defineProps<{
  label: string;
  href: string;
  icon: string;
}>();
</script>

<template>
  <a target="_blank" class="button-anchor button-icon" :href="href">
    <IconComponent :icon="icon" />
    <span>{{ label }}</span>
  </a>
</template>

<style scoped>
.button-anchor {
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  color: var(--color-text-2);
  border-radius: 8px;
  overflow: hidden;
}

.button-icon {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.button-icon svg {
  color: var(--color-main-2);
}
</style>
