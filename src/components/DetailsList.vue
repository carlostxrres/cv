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
        <span v-if="typeof item.value === 'string'">{{ item.value }}</span>
        <a v-else :href="item.value.url" target="_blank">
          {{ item.value.text }}
        </a>
      </dd>
    </template>
  </dl>
</template>

<style scoped>
p + dl,
ul + dl {
  margin-top: 1lh;
}

dl:not(:last-child) {
  margin-bottom: 1lh;
}

dl {
  display: grid;
  grid-template-columns: max-content auto;
  gap: 0.4rem 1rem;
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
