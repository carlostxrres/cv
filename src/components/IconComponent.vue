<script setup lang="ts">
type IconName = "github" | "pdf";

defineProps<{
  icon: IconName;
}>();

const ICON_PATHS: Record<IconName, string[]> = {
  github: [
    "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",
  ],
  pdf: [
    "M14 3v4a1 1 0 0 0 1 1h4",
    "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4",
    "M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6",
    "M17 18h2",
    "M20 15h-3v6",
    "M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z",
  ],
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path v-for="(path, index) in ICON_PATHS[icon]" :key="index" :d="path" />
  </svg>
</template>
