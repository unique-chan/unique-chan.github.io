---
title: "Why I Am Keeping a Research Log"
description: "A small system for turning experiments, failed ideas, and open questions into durable knowledge."
publishedAt: 2026-07-25
tags: ["Research", "Workflow"]
language: "en"
draft: true # false로 해야 웹 사이트에 표시됨!
---

Research rarely moves in a straight line. A result that looks obvious in a finished paper may have started as a failed experiment, a confusing plot, or a question written in the margin.

This notebook is where I will keep those intermediate steps. The goal is not to publish polished conclusions every week. It is to make the reasoning behind the work visible and reusable.

## What belongs here

I plan to write about three kinds of things:

1. **Research notes** — concise explanations of papers, methods, and open problems.
2. **Engineering details** — implementation choices that are too specific for a paper but too useful to lose.
3. **Retrospectives** — what worked, what failed, and what I would change next time.

## A useful constraint

Each post should leave the reader with one idea they can test. That might be a hypothesis, a small piece of code, or a better way to frame a problem.

```python
def research_note(question, evidence, next_step):
    return {
        "question": question,
        "evidence": evidence,
        "next_step": next_step,
    }
```

This is the first entry. The next ones will be about the work itself.

