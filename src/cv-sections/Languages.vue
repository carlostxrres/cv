<script setup lang="ts">
import cv from "@/data/cv";
import CvSection from "@/components/CvSection.vue";
import DetailsList from "@/components/DetailsList.vue";
</script>

<template>
  <CvSection title="Languages">
    <DetailsList :details="cv.languages" />
  </CvSection>
</template>
