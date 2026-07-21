<script setup lang="ts">
import type { TimelineItem } from "@/types/cv";

defineProps<{
  bulletPoints: TimelineItem["bulletPoints"];
}>();
</script>

<template>
  <ul class="bullet-list">
    <li
      v-for="(bulletPoint, bulletPointIndex) in bulletPoints"
      :key="bulletPointIndex"
    >
      {{ bulletPoint }}
    </li>
  </ul>
</template>

<style scoped>
.bullet-list {
  list-style: disc none outside;
  list-style-type: disc;
  padding-left: var(--padding-left);
  --padding-left: 1.2rem;
  --translate-y: 0.4rem;
}

.bullet-list > li::before {
  content: "";
  position: absolute;
  width: 0.3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: var(--color-main);
  transform: translate(calc(-0.8 * var(--padding-left)), var(--translate-y));
}

.bullet-list > li:not(:last-child) {
  margin-bottom: 0.5rem;
}

ul.bullet-list > li:not(:last-child) {
  margin-bottom: 0;
}
</style>
