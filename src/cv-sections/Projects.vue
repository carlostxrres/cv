<script setup>
import cv from "/src/assets/cv.json";
import CvSection from "/src/components/CvSection.vue";
import TimelineList from "/src/components/TimelineList.vue";
</script>

<template>
  <CvSection title="Projects">
    <p>These are some of my public projects:</p>
    <TimelineList :items="cv.projects" />
  </CvSection>
</template>
