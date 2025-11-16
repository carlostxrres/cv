<script setup lang="ts">
import cv from "@/assets/cv.ts";
import CvSection from "/src/components/CvSection.vue";
import TimelineList from "/src/components/TimelineList.vue";
</script>

<template>
  <CvSection title="Volunteer experience">
    <TimelineList :items="cv.volunteering" />
  </CvSection>
</template>
