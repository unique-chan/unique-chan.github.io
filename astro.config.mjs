import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://unique-chan.github.io",
  output: "static",
  markdown: {
    // $inline$ and $$display$$ in posts; KaTeX renders them at build time,
    // so no math JS ships to the browser — only the stylesheet.
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "github-dark",
      wrap: true
    }
  }
});

