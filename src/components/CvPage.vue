<script setup lang="ts">
import { computed } from "vue";
import { labels, lang } from "@/i18n";
import { resumeWeb } from "@/data/urls";
import Header from "@/sections/Header.vue";
import AboutMe from "@/sections/AboutMe.vue";
import Education from "@/sections/Education.vue";
import Projects from "@/sections/Projects.vue";
import Work from "@/sections/Work.vue";
import Languages from "@/sections/Languages.vue";
import Skills from "@/sections/Skills.vue";
import Volunteering from "@/sections/Volunteering.vue";

const lastUpdated = computed(() =>
  new Date(__BUILD_DATE__).toLocaleString(labels.value.dateLocale, {
    month: "long",
    year: "numeric",
  }),
);

const latestVersionUrl = computed(() => `${resumeWeb}?lang=${lang.value}`);
const displayUrl = resumeWeb.replace(/^https?:\/\//, "").replace(/\/$/, "");
</script>

<template>
  <div class="page">
    <aside class="aside">
      <Header />
      <AboutMe />
      <Education />
      <Projects />
    </aside>

    <main class="main">
      <Work />
      <Volunteering />
      <Skills />
      <Languages />
    </main>
  </div>

  <div class="last-updated">
    <p>{{ labels.lastUpdatedOn }} {{ lastUpdated }}</p>
    <p class="print-only">
      {{ labels.latestVersionAt }}
      <a :href="latestVersionUrl">{{ displayUrl }}</a>
    </p>
  </div>
</template>

<style scoped>
.page {
  color: var(--color-text-1);
}

/* Wider than mobile: two columns */
@media (width >= 768px) {
  .page {
    display: grid;
    grid-template-columns: 45% auto;
  }
}

/* Desktop: make it look like a printed page */
@media (width >= 1024px) {
  .page {
    max-width: 210mm;
    margin-block: 2rem;
    margin: 2rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1),
      0 25px 50px rgba(0, 0, 0, 0.05);
  }
}

/* Print: let content flow; pagination is handled by print.css paged-media rules */
@media print {
  .page {
    max-width: 100%;
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

/* .last-updated */

.last-updated {
  font-size: small;
  font-style: italic;
  color: var(--color-main-3);
  text-align: end;
  padding: 1rem;
}

.last-updated p {
  margin-block: .5lh;
}

/* Desktop: show it fixed on top of the action bar */
@media (width >= 1024px) {
  .last-updated {
    position: fixed;
    right: 0;
    bottom: 2rem;
  }
}

/* Print: static flow after the last section (absolute/fixed misbehave across pages) */
@media print {
  .last-updated {
    text-align: end;
    padding: 0.5rem 1rem;
  }
}
</style>
