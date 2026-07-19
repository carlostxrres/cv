<script setup lang="ts">
import { computed } from "vue";
import ButtonAnchor from "@/components/ButtonAnchor.vue";
import LangSwitcher from "@/components/LangSwitcher.vue";
import { resumeGithub, resumePdfFor } from "@/data/urls";
import { labels, lang } from "@/i18n";
import ActionButtons from "@/components/ActionButtons.vue"

const pdfHref = computed(() => resumePdfFor(lang.value));
</script>

<template>
  <div class="actions-bar no-print">
    <LangSwitcher />
    <ActionButtons />
  </div>
</template>

<style scoped>
.actions-bar {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  background-color: var(--color-main-4);
  border-top: 1px solid var(--color-main-3);
  padding: .3rem 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
