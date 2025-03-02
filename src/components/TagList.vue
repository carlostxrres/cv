<script setup>
defineProps({
  tags: {
    type: Array,
  },
});
</script>

<template>
  <ul v-if="tags && tags.length" class="tags">
    <li v-for="(tag, tagIndex) in tags" :key="tagIndex">
      {{ tag }}
    </li>
  </ul>
</template>

<style scoped>
.tags {
  display: flex;
  gap: 0.3rem 0.4rem;
  align-items: start;
  flex-wrap: wrap;
  margin-block: 0.5rem;

  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: bold;
}

.tags li {
  color: var(--color-main-2);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}
</style>

<style>
.main .tags li {
  background-color: var(--color-main-4);
}

.aside .tags li {
  background-color: white;
}
</style>
