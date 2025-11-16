<script setup lang="ts">
import cv from "@/assets/cv.ts";
import CvSection from "/src/components/CvSection.vue";
import DetailsList from "/src/components/DetailsList.vue";
</script>

<template>
  <CvSection title="Languages">
    <DetailsList :details="cv.languages" />
  </CvSection>
</template>
