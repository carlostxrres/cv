<script setup lang="ts">
import CvSection from "/src/components/CvSection.vue";
import Header from "/src/cv-sections/Header.vue";
import AboutMe from "/src/cv-sections/AboutMe.vue";
import Education from "/src/cv-sections/Education.vue";
// import Projects from "/src/cv-sections/Projects.vue";
import Work from "/src/cv-sections/Work.vue";
import Languages from "/src/cv-sections/Languages.vue";
// import Volunteering from "/src/cv-sections/Volunteering.vue";

const currentDate = new Date().toLocaleString("en-US", {
  month: "long",
  year: "numeric",
});
</script>

<template>
  <div class="page">
    <aside class="aside">
      <Header />
      <AboutMe />
      <Education />
      <!-- <Projects /> -->
    </aside>

    <main class="main">
      <Work />
      <Languages />
      <!-- <Volunteering /> -->
    </main>

    <div class="last-updated">Last updated on {{ currentDate }}</div>
  </div>
</template>

<style scoped>
.page {
  /* Set A4 paper dimensions */
  --a4-height: 29.7cm;
  --a4-width: 21cm;
  width: var(--a4-width);
  height: var(--a4-height);

  /* Center the page in the screen */
  max-width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  scrollbar-width: thin;

  /* Add realistic paper page features */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1),
    0 25px 50px rgba(0, 0, 0, 0.05);

  /* Organize inner contents */
  position: relative;
  display: grid;
  grid-template-columns: 47% auto;
  padding: var(--outter-margin) var(--inner-margin);
  color: var(--color-text-1);
}

/* Make page responsive */
@media (max-width: 767px) {
  .page {
    grid-template-columns: 1fr;
  }
}

/**/

.aside,
.main {
  padding: 3rem 2.2rem;
}

.aside {
  background-color: var(--color-main-4);
}

.main {
  background-color: white;
}

/**/

.last-updated {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  background-color: white;

  font-style: italic;
  color: var(--color-main-3);
  font-size: 0.6rem;
}
</style>
