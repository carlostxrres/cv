<script setup>
import TagList from "/src/components/TagList.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul class="timeline-list">
    <li v-for="(item, index) in items" :key="index">
      <header class="space-between">
        <div>
          <span v-if="item.institution" class="institution">
            {{ item.institution }}
          </span>
          <span v-if="item.location" class="location">
            {{ item.location }}
          </span>
          <h3>
            {{ item.title }}
          </h3>
        </div>

        <div v-if="item.period || item.link" class="certificated">
          <span class="time">
            {{ item.period }}
          </span>

          <a v-if="item.link" :href="item.link.url" target="_blank">
            {{ item.link.text }}
          </a>
        </div>
      </header>

      <p v-if="item.description" v-html="item.description" />

      <ul
        v-if="item.bulletPoints && item.bulletPoints.length"
        class="list-regular list-condensed"
      >
        <li
          v-for="(bulletPoint, bulletPointIndex) in item.bulletPoints"
          :key="bulletPointIndex"
        >
          {{ bulletPoint }}
        </li>
      </ul>

      <TagList :tags="item.tags" />
    </li>
  </ul>
</template>

<style scoped>
h3 {
  /* font-family: var(--font-head); */
  font-family: var(--font-body);
  font-weight: bold;
  color: var(--color-main);
}

/**/

.timeline-list {
  list-style: circle none outside;
  padding-left: 1rem;
  position: relative;
  --padding-left: 1rem;
  --bullet-size: 0.6rem;
  --translate-y: 0.3rem;
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

/**/

.institution,
.location,
.time {
  font-family: var(--font-body);
  color: var(--color-main-2);
}

.institution,
.location {
  font-size: 0.7rem;
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
  font-size: 0.6rem;
  flex-shrink: 0;
}

/**/

.certificated {
  display: flex;
  align-items: end;
  flex-direction: column;
}

.certificated a {
  font-size: 0.6rem;
  color: var(--color-main-3);
  text-transform: uppercase;
}

dd.certificated {
  flex-direction: revert;
  justify-content: space-between;
}

/**/

.list-regular {
  list-style: disc none outside;
  list-style-type: disc;
  padding-left: var(--padding-left);
  --padding-left: 1rem;
  --translate-y: 0.4rem;
}

.list-regular > li::before {
  content: "";
  position: absolute;
  width: 0.3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: var(--color-main);
  transform: translate(calc(-0.8 * var(--padding-left)), var(--translate-y));
}

.list-regular > li:not(:last-child) {
  margin-bottom: 0.5rem;
}

ul .list-regular > li:not(:last-child) {
  margin-bottom: 0;
}

/**/

.space-between {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>
