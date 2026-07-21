<script setup lang="ts">
import type { TimelineItem } from "@/types/cv";
import TagList from "@/components/TagList.vue";
import TimelineListHeader from "@/components/TimelineListHeader.vue";
import TimelineListBulletList from "@/components/TimelineListBulletList.vue";

defineProps<{
  items: readonly TimelineItem[];
}>();
</script>

<template>
  <ul class="timeline-list">
    <li v-for="(item, index) in items" :key="index">
      <TimelineListHeader
        :institution="item.institution"
        :location="item.location"
        :title="item.title"
        :period="item.period"
        :link="item.link"
      />

      <p v-if="item.description" v-html="item.description" />

      <TimelineListBulletList
        v-if="item.bulletPoints && item.bulletPoints.length"
        :bulletPoints="item.bulletPoints"
      />

      <TagList :tags="item.tags" />
    </li>
  </ul>
</template>

<style scoped>
.timeline-list {
  list-style: circle none outside;
  padding-left: var(--padding-left);
  position: relative;
  --padding-left: 1.4rem;
  --bullet-size: 0.6rem;
  --translate-y: 0.25rem;
}

.timeline-list::before {
  content: "";
  position: absolute;
  top: var(--translate-y);
  bottom: 0;
  left: calc(var(--bullet-size) / 2);
  border-left: 2px solid var(--color-main-3);
}

.timeline-list > li::before {
  content: "";
  position: absolute;
  width: var(--bullet-size);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid var(--color-main);
  background-color: white;
  transform: translate(calc(-1 * var(--padding-left)), var(--translate-y));
}

.timeline-list > li:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
