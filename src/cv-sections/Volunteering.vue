<script setup lang="ts">
import { cv, labels } from "@/i18n";
import CvSection from "@/components/CvSection.vue";
import TimelineList from "@/components/TimelineList.vue";
</script>

<template>
  <CvSection :title="labels.sections.volunteering">
    <TimelineList :items="cv.volunteering" />
  </CvSection>
</template>
