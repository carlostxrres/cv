<script setup lang="ts">
import ButtonAnchor from "@/components/ButtonAnchor.vue";
import { resumeGithub, resumePdf } from "@/data/urls";
</script>

<template>
  <div class="actions-bar no-print">
    <ButtonAnchor label="See in GitHub" :href="resumeGithub" icon="github" />
    <ButtonAnchor label="See as PDF" :href="resumePdf" icon="pdf" />
  </div>
</template>

<style scoped>
.actions-bar {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  background-color: var(--color-main-4);
  border-top: 1px solid var(--color-main-3);
  padding: 0.3rem 0.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (width >= 343px) {
  .actions-bar {
    flex-direction: row;
  }
}
</style>
