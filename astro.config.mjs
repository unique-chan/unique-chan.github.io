import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://unique-chan.github.io",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true
    }
  }
});

