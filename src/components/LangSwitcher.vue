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

button {
  cursor: pointer;
  padding: 0.5rem 0.6rem;
  font-size: 0.8rem;
  color: var(--color-text-2);
  border: none;
  border-radius: 8px;
}

button:hover {
  background-color: var(--color-main-transparent);
}

button.active {
  color: var(--color-main);
  font-weight: bold;
}
</style>
