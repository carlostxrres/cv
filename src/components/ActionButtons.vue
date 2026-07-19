<script setup lang="ts">
import { computed } from "vue";
import ButtonAnchor from "@/components/ButtonAnchor.vue";
import { resumeGithub, resumePdfFor } from "@/data/urls";
import { labels, lang } from "@/i18n";

const pdfHref = computed(() => resumePdfFor(lang.value));
</script>

<template>
  <div class="actions-area">
    <ButtonAnchor :label="labels.seeInGithub" :href="resumeGithub" icon="github" />
    <ButtonAnchor :label="labels.seeAsPdf" :href="pdfHref" icon="pdf" />
  </div>
</template>

<style scoped>
.actions-area {
  display: flex;
  gap: .5rem;
  flex-direction: column;
}

@media (width >= 343px) {
  .actions-area {
    flex-direction: row;
  }
}
</style>
