<script setup lang="ts">
import { LANGS, lang, setLang } from "@/i18n";
</script>

<template>
  <div class="lang-switcher" role="group" aria-label="Language">
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
</template>

<style scoped>
.lang-switcher {
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;
}

button.active {
  color: var(--color-main);
  font-weight: bold;
}
</style>
