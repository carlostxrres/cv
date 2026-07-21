<script setup lang="ts">
import type { Tag } from "@/types/cv";

defineProps<{
  tags?: readonly Tag[];
}>();
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

  font-family: var(--font-mono);
  font-size: .8rem;
  font-weight: bold;
}

p + .tags,
ul + .tags {
  margin-top: 1lh;
}

.tags:not(:last-child) {
  margin-bottom: 1lh;
}

.tags li {
  color: var(--color-main-2);
  padding: 0.2rem 0.4rem;
  border-radius: var(--border-radius);
  background-color: var(--tag-color);
}
</style>
