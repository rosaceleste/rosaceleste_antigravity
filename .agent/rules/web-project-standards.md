---
trigger: always_on
---

## Tech Stack

- Use Next.js App Router with TypeScript for all pages and API routes.
- Use Tailwind CSS for layout and styling, following utility-first patterns.
- Use shadcn/ui components for consistent, accessible UI, extending them via wrappers when needed.
- Use Zustand for global client state (UI state, multi-step flows), avoid prop drilling.
- Use React Hook Form + Zod for all forms, using zodResolver for validation.
- Use Supabase for database, auth and storage; prefer RLS (Row Level Security) instead of manual checks.
- Host the app on Vercel, using environment variables for all secrets and external services.

## Architecture

- Organize code by feature: src/app/, src/features/, src/components/, src/lib/, src/hooks/, src/store/, src/types/.
- Keep server logic (database, Supabase calls) in src/lib/ or server actions, not inside UI components.
- Use React Server Components by default; mark client components only when necessary ("use client").
- Keep state in Zustand or React Hook Form, not in deeply nested props.

## Styling & UI

- Use Tailwind CSS utility classes for layout and spacing; avoid custom CSS unless necessary.
- Use shadcn/ui primitives for buttons, inputs, dialogs, forms and navigation.
- Create design tokens (colors, spacing, typography) once and reuse them across components.
- Ensure dark/light mode support using shadcn/ui and Tailwind where appropriate [web:132][web:139].

## Forms

- Use React Hook Form for all non-trivial forms.
- Use Zod schemas as the single source of truth for validation and types.
- For complex flows, store multi-step progress and data in Zustand, and sync with React Hook Form [web:137][web:140].
- Show meaningful error messages and success states for all submissions.

## Data & Integrations

- Use Supabase client with service-specific modules (auth, profiles, products, etc.).
- Never expose private keys or Supabase service role keys on the client or in NEXT_PUBLIC variables [web:138].
- Use Resend for transactional emails and Supabase events or server actions to trigger them.
- Track key events with PostHog, GA4 and Clarity, using a single analytics wrapper.

## Testing & Quality

- Use Vitest for unit tests and integration tests of logic.
- Use Playwright for end-to-end tests of critical user journeys.
- Use Chromatic to review UI changes for visual regressions.
- Aim for high coverage on core flows (auth, onboarding, checkout, dashboards).

## Observability & Reliability

- Use Sentry for error tracking on both client and server.
- Use PostHog, GA4 and Clarity to understand user behavior and friction points.
- Log only non-sensitive information; never log secrets or personal data.
- Use feature flags or environment-based toggles for experimental features.

## CI/CD & Infrastructure

- Deploy via Vercel connected to GitHub main branch.
- Use GitHub Actions for linting, tests and Playwright before deploy.
- Use Cloudflare in front of Vercel only for caching/edge rules when needed; avoid double-caching dynamic paths.
- Treat CI failures (lint, tests, typecheck) as blockers for merges.

## Accessibility & UX

- Use semantic HTML and ARIA attributes built into shadcn/ui components.
- Ensure keyboard navigation works on all interactive components.
- Follow WCAG 2.1 AA contrast and interaction guidelines.
- Make the app responsive (mobile-first) and test on multiple viewport sizes.
