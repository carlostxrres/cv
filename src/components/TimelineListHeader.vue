<script setup lang="ts">
import type { TimelineItem } from "@/types/cv";

defineProps<{
  institution: TimelineItem["institution"];
  location: TimelineItem["location"];
  title: TimelineItem["title"];
  period: TimelineItem["period"];
  link: TimelineItem["link"];
}>();
</script>

<template>
  <header class="space-between">
    <div>
      <span v-if="institution" class="institution">
        {{ institution }}
      </span>
      <span v-if="location" class="location">
        {{ location }}
      </span>
      <h3>
        {{ title }}
      </h3>
    </div>

    <div v-if="period || link" class="header-end">
      <span class="time">
        {{ period }}
      </span>

      <a v-if="link" :href="link.url" target="_blank">
        {{ link.text }}
      </a>
    </div>
  </header>
</template>

<style scoped>
h3 {
  font-weight: bold;
  color: var(--color-main);
}

/**/

.institution,
.location,
.time {
  font-family: var(--font-body);
  color: var(--color-main-2);
}

.institution,
.location {
  font-size: .8rem;
}

.institution {
  font-weight: bold;
}

.location::before {
  content: " (";
}

.location::after {
  content: ")";
}

.time {
  margin-left: auto;
  text-align: end;
  font-size: .8rem;
  flex-shrink: 0;
}

/**/

header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.header-end {
  display: flex;
  align-items: end;
  flex-direction: column;
  flex-shrink: 0;
}

.header-end a {
  font-size: .6rem;
  color: var(--color-main-3);
  text-transform: uppercase;
  margin-right: calc(-1 * var(--a-padding));
}
</style>
