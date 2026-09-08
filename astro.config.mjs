import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

export default defineConfig({
  site: "https://drvirlenio.com.br",
  outDir: "./docs",
  build: {
    format: "directory"
  },
  integrations: [vue()]
});

