<script setup>
import cv from "/src/assets/cv.json";
import CvSection from "/src/components/CvSection.vue";
import DetailsList from "/src/components/DetailsList.vue";
</script>

<template>
  <CvSection title="Languages">
    <DetailsList :details="cv.languages" />
  </CvSection>
</template>
