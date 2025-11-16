<script setup lang="ts">
import { type ContactDetail } from "@/types/cv"

defineProps<{
  details: ContactDetail[]
}>()
</script>

<template>
  <dl>
    <template v-for="(item, index) in details" :key="index">
      <dt>{{ item.label }}</dt>
      <dd>
        <a v-if="item.href" :href="item.href" target="_blank">
          {{ item.value }}
        </a>
        <span v-else>{{ item.value }}</span>
      </dd>
    </template>
  </dl>
</template>

<style scoped>
dl:not(:first-child) {
  margin-top: 1rem;
}

dl {
  display: grid;
  grid-template-columns: max-content auto;
  gap: 0.2rem 1rem;
}

dt {
  font-family: var(--font-body);
  font-weight: 600;
}

dd {
  margin: 0;
  align-content: center;
}
</style>
