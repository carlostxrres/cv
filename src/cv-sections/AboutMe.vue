<script setup lang="ts">
import cv from "@/data/cv";
import CvSection from "@/components/CvSection.vue";
import DetailsList from "@/components/DetailsList.vue";

const aboutMeParagraphs = cv.aboutMe.split("\n\n").filter((p) => p.trim());
</script>

<template>
  <CvSection title="About me">
    <div>
      <p v-for="(paragraph, index) in aboutMeParagraphs" :key="index">
        {{ paragraph }}
      </p>

      <DetailsList :details="cv.contactDetails" />
    </div>
  </CvSection>
</template>

<style scoped>
p {
  text-indent: 0.5rem;
}
</style>
