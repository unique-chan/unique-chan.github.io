# Research portfolio

An English-first research portfolio and Markdown blog built with Astro.

## Edit your information

- Profile and external links: `src/config.ts`
- Publications: `src/data/publications.ts`
- Research directions: `src/data/projects.ts`
- CV: `src/pages/cv.astro`
- Blog posts: `src/content/blog/*.md`

## Local development

```sh
npm install
npm run dev
```

Run `npm run build` before publishing. Pushing to `main` deploys the site through GitHub Actions.



### 논문목록 편집

src/data/publications.ts


### 블로그 편집

content/blog

### 블로그 탭 편집

src/pages/blog/index.astro

### 연구 타픽 (Interest) 편집

src/data/projects.ts