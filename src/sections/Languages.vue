<script setup lang="ts">
import { cv, labels } from "@/i18n";
import CvSection from "@/components/CvSection.vue";
import DetailsList from "@/components/DetailsList.vue";
</script>

<template>
  <CvSection :title="labels.sections.languages">
    <DetailsList :details="cv.languages" />
  </CvSection>
</template>
