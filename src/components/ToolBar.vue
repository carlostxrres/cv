<script setup lang="ts">
import { computed } from "vue";
import IconAnchor from "@/components/IconAnchor.vue";
import { resumeGithub, resumePdfFor } from "@/data/urls";
import { LANGS, lang, setLang, labels } from "@/i18n";

const pdfHref = computed(() => resumePdfFor(lang.value));
</script>

<template>
  <div class="toolbar no-print">
    <div class="toolbar-section" role="group" aria-label="Language">
      <button
        v-for="option in LANGS"
        :key="option"
        type="button"
        :aria-pressed="option === lang"
        class="a-like"
        :class="{ active: option === lang }"
        @click="setLang(option)"
      >
        {{ option.toUpperCase() }}
      </button>
    </div>

    <div class="toolbar-section" role="group" aria-label="Actions">
      <IconAnchor :label="labels.seeInGithub" :href="resumeGithub" icon="github" />
      <IconAnchor :label="labels.seeAsPdf" :href="pdfHref" icon="pdf" />
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  background-color: var(--color-main-4);
  border-top: 1px solid var(--color-main-3);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.toolbar-section {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.toolbar-section:last-child {
  justify-content: end;
}

button.active {
  color: var(--color-main);
  font-weight: bold;
}
</style>
