<script setup lang="ts">
import Header from "@/cv-sections/Header.vue";
import AboutMe from "@/cv-sections/AboutMe.vue";
import Education from "@/cv-sections/Education.vue";
import Work from "@/cv-sections/Work.vue";
import Languages from "@/cv-sections/Languages.vue";
import Skills from "@/cv-sections/Skills.vue";

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
      <Skills class="no-print" />
      <Languages />
      <!-- <Volunteering /> -->
    </main>

    <div class="last-updated">Last updated on {{ currentDate }}</div>
  </div>
</template>

<style scoped>
.page {
  /* Set A4 paper dimensions */
  aspect-ratio: 1 / sqrt(2);
  overflow: auto;
  max-width: 54rem; /* adjust this to content */

  /* Add realistic paper page features */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1),
    0 25px 50px rgba(0, 0, 0, 0.05);

  /* Center */
  margin: auto;

  /* Organize inner contents */
  position: relative;
  display: grid;
  grid-template-columns: 45% auto;
  color: var(--color-text-1);
}

@media print {
  .page {
    box-shadow: unset;
  }
}

/* Make page responsive */
@media (max-width: 767px) {
  .page {
    aspect-ratio: unset;
    box-shadow: unset;
    grid-template-columns: 1fr;

    margin-bottom: 3rem;
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
