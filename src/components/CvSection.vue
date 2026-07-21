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
  font-family: var(--font-body);
  flex-direction: column;
  display: flex;
  gap: .5lh;
}

section:not(:first-child) {
  margin-top: 1.6rem;
}

h2 {
  font-family: var(--font-body);
  font-weight: bold;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid var(--color-main);
  color: var(--color-main);
}
</style>
