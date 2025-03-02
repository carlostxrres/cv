<script setup>
defineProps({
  details: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <dl>
    <template v-for="(item, index) in details" :key="index">
      <dt>{{ item.label }}</dt>
      <dd>
        <slot :name="item.slotName" v-bind="item" v-if="item.slotName" />
        <a v-else-if="item.href" :href="item.href" target="_blank">
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
