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

    <small class="last-updated">Last updated on {{ currentDate }}</small>
  </div>
</template>

<style scoped>
/* Wider than mobile: two columns */
@media (width > 767px) {
  .page {
    position: relative;
    display: grid;
    grid-template-columns: 45% auto;
    color: var(--color-text-1);
  }
}

/* Desktop: make it look like a printed page */
@media (width > 1024px) {
  .page {
    max-width: 210mm;
    margin-block: 2rem;
    margin: 2rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1),
      0 25px 50px rgba(0, 0, 0, 0.05);
  }
}

/* Print: adapt to real A4 */
@media print {
  .page {
    aspect-ratio: 1 / sqrt(2);
    overflow: hidden;
    max-width: 54rem; /* adjust this to content */
  }
}

/**/

.aside,
.main {
  padding: 3rem 2.2rem;
}

.aside {
  background-color: var(--color-main-4);
  --tag-color: white;
}

.main {
  background-color: white;
  --tag-color: var(--color-main-4);
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
}
</style>
