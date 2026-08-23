import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    language: z.enum(["en", "ko"]).default("en")
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["ongoing", "planned", "paused", "completed"]),
    tags: z.array(z.string()).default([]),
    institution: z.string().optional(),
    startedAt: z.coerce.date(),
    endedAt: z.union([z.coerce.date(), z.literal("Current")]).optional(),
    image: z.string().optional(),
    links: z
      .object({
        paper: z.string().url().optional(),
        code: z.string().url().optional(),
        site: z.string().url().optional()
      })
      .default({}),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog, projects };

