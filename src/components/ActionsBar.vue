<script setup lang="ts">
import ButtonAnchor from "@/components/ButtonAnchor.vue";
</script>

<template>
  <div class="actions-bar no-print">
    <ButtonAnchor
      label="See in GitHub"
      href="https://github.com/carlostxrres/cv"
      icon="github"
    />
    <ButtonAnchor
      label="See as PDF"
      href="https://raw.githubusercontent.com/carlostxrres/cv/d3c923f5067cc8f93a51333adf443f8201025f17/docs/carlos-torres-cv.pdf"
      icon="pdf"
    />
  </div>
</template>

<style scoped>
.actions-bar {
  position: fixed;
  inset: auto 0 0 0;
  background-color: var(--color-main-4);
  border-top: 1px solid var(--color-main-3);
  padding: 0.3rem 0.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

@media print {
  .actions-bar {
    display: none;
  }
}
</style>
