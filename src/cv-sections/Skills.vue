<script setup lang="ts">
import cv from "@/data/cv";
import CvSection from "@/components/CvSection.vue";
import TagList from "@/components/TagList.vue";
</script>

<template>
  <CvSection title="Hard skills">
    <TagList :tags="cv.skills" />
  </CvSection>
</template>
