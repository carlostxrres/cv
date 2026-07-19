<script setup lang="ts">
import { computed } from "vue";
import { cv, labels } from "@/i18n";
import CvSection from "@/components/CvSection.vue";
import DetailsList from "@/components/DetailsList.vue";

const aboutMeParagraphs = computed(() =>
  cv.value.aboutMe.split("\n\n").filter((p) => p.trim()),
);
</script>

<template>
  <CvSection :title="labels.sections.aboutMe">
    <div>
      <p v-for="(paragraph, index) in aboutMeParagraphs" :key="index">
        {{ paragraph }}
      </p>

      <DetailsList :details="cv.contactDetails" />
    </div>
  </CvSection>
</template>

<style scoped>
p {
  text-indent: 0.5rem;
}
</style>
