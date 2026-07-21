<script setup lang="ts">
import { cv, labels } from "@/i18n";
</script>

<template>
  <div class="cv-header">
    <img class="pic" src="/pic.jpg" :alt="labels.pictureAlt" />

    <div class="cv-header-text">
      <h1>{{ cv.name }} {{ cv.lastName }}</h1>
      <p class="title">{{ cv.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.cv-header {
  margin-bottom: auto;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}

.pic {
  max-width: 100%;
  flex: 0 0 3.5rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
}

.cv-header-text {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.title {
  color: var(--color-main-2);
}

h1 {
  font-family: var(--font-head);
  font-size: 1.4rem;
  font-weight: 200;
}
</style>
