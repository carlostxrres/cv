<script setup lang="ts">
import cv from "@/data/cv";
import CvSection from "@/components/CvSection.vue";
import TimelineList from "@/components/TimelineList.vue";
</script>

<template>
  <CvSection title="Volunteer experience">
    <TimelineList :items="cv.volunteering" />
  </CvSection>
</template>
