<script setup lang="ts">
import { computed } from "vue";
import IconAnchor from "@/components/IconAnchor.vue";
import { resumeGithub, resumePdfFor } from "@/data/urls";
import { labels, lang } from "@/i18n";

const pdfHref = computed(() => resumePdfFor(lang.value));
</script>

<template>
  <div class="actions-area">
    <IconAnchor :label="labels.seeInGithub" :href="resumeGithub" icon="github" />
    <IconAnchor :label="labels.seeAsPdf" :href="pdfHref" icon="pdf" />
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
