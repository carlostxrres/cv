<script setup lang="ts">
import cv from "@/data/cv";
import CvSection from "@/components/CvSection.vue";
import TimelineList from "@/components/TimelineList.vue";
</script>

<template>
  <CvSection title="Projects">
    <p>These are some of my public projects:</p>
    <TimelineList :items="cv.projects" />
  </CvSection>
</template>
