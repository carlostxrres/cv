<script setup lang="ts">
import cv from "@/assets/cv.ts";
import CvSection from "@/components/CvSection.vue";
import TimelineList from "@/components/TimelineList.vue";
</script>

<template>
  <CvSection title="Education">
    <TimelineList :items="cv.education" />
  </CvSection>
</template>
