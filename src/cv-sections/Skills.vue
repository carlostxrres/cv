<script setup lang="ts">
import { cv, labels } from "@/i18n";
import CvSection from "@/components/CvSection.vue";
import TagList from "@/components/TagList.vue";
</script>

<template>
  <CvSection :title="labels.sections.skills">
    <TagList :tags="cv.skills" />
  </CvSection>
</template>
