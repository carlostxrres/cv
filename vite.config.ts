import { execSync } from "node:child_process";
import { URL, fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Date of the last commit that touched the CV content, so "Last updated"
// reflects content changes rather than build or view time
function lastContentUpdate(): string {
  try {
    const date = execSync("git log -1 --format=%cI -- src/data", {
      encoding: "utf8",
    }).trim();
    if (date) return date;
  } catch {
    // no git available (e.g. shallow environments): fall through
  }
  return new Date().toISOString();
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __BUILD_DATE__: JSON.stringify(lastContentUpdate()),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
