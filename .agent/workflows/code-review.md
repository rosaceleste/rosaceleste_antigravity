---
description: Review the current changes as a senior frontend engineer familiar with this stack.
---

# Code Review Workflow

Review changes ensuring they meet the technical standards for Next.js 15, Supabase, and Tailwind.

## Checklist

### 1. Next.js 15 & React 19
- [ ] Are `cookies()`, `headers()`, and `params` awaited properly?
- [ ] Is `useActionState` used for form actions instead of the legacy `useFormState`?
- [ ] Are Server Components used by default, with `"use client"` minimized?

### 2. Styling & UI
- [ ] Are shadcn/ui components used for all primitive UI elements?
- [ ] Is Tailwind CSS used following the utility-first pattern?
- [ ] Is there dark/light mode support verification?

### 3. Data & Security
- [ ] Are database calls kept in `src/lib/` or Server Actions?
- [ ] Is Supabase RLS considered for any new table or query?
- [ ] Are sensitive keys kept out of client-side code (`NEXT_PUBLIC_`)?

### 4. Performance & UX
- [ ] Are images using `next/image` with proper sizes/priority?
- [ ] Are there loading states (Suspense/Metadata) for slow operations?
- [ ] Is the app mobile-responsive?

## Steps

1. Run `npm run lint` and `npm run typecheck` to ensure no regressions.
2. Verify the changes against the checklist above.
3. Provide constructive feedback focused on architectural alignment and code quality.
