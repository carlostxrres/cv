import { computed, ref, watchEffect } from "vue";

import cvCa from "@/data/cv-ca";
import cvEn from "@/data/cv-en";
import cvEs from "@/data/cv-es";
import type { Lang } from "@/types/i18n";
import { labels as allLabels } from "./labels";

export const LANGS = ["en", "ca", "es"] as const;

const cvByLang = { en: cvEn, ca: cvCa, es: cvEs } as const;

function initialLang(): Lang {
  const param = new URLSearchParams(location.search).get("lang");
  return (LANGS as readonly string[]).includes(param ?? "")
    ? (param as Lang)
    : "en";
}

export const lang = ref<Lang>(initialLang());
export const cv = computed(() => cvByLang[lang.value]);
export const labels = computed(() => allLabels[lang.value]);

export function setLang(next: Lang) {
  lang.value = next;
  const url = new URL(location.href);
  url.searchParams.set("lang", next);
  history.replaceState(null, "", url);
}

// Runs once at startup (covers ?lang= deep links) and again on every switch
watchEffect(() => {
  document.documentElement.lang = lang.value;
  document.title = labels.value.documentTitle;
});
