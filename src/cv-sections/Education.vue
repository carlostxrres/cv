<script setup lang="ts">
import { cv, labels } from "@/i18n";
import CvSection from "@/components/CvSection.vue";
import TimelineList from "@/components/TimelineList.vue";
</script>

<template>
  <CvSection :title="labels.sections.education">
    <TimelineList :items="cv.education" />
  </CvSection>
</template>
