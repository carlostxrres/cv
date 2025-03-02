<script setup>
import cv from "/src/assets/cv.json";
import CvSection from "/src/components/CvSection.vue";
import TimelineList from "/src/components/TimelineList.vue";
</script>

<template>
  <CvSection title="Education">
    <TimelineList :items="cv.education" />
  </CvSection>
</template>
