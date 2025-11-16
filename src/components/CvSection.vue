<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<style scoped>
section {
  font-family: var(--font-narrow);
  flex-direction: column;
  margin-block: 1rem;
  display: flex;
  gap: 0.5rem;
}

h2 {
  font-family: var(--font-body);
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid var(--color-main);
  color: var(--color-main);
}
</style>
