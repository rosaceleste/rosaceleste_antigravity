---
description: Generate or update tests for the current feature or changed files using Vitest, Playwright and Chromatic.
---

# Generate Tests Workflow

Generate or update tests following the project's quality standards.

## Steps

1. **Identify the Scope**: Determine if you are testing business logic (Vitest) or user journeys (Playwright).
2. **Unit & Integration Tests (Vitest)**:
   - Create tests in `src/features/[feature]/__tests__` or adjacent to the file as `[name].test.ts(x)`.
   - Mock Supabase and external services using `vi.mock`.
   - Ensure high coverage for utility functions and hooks.
3. **End-to-End Tests (Playwright)**:
   - Create tests in `/tests/e2e`.
   - Focus on critical flows: Auth, Profile Creation, Onboarding.
   - Use the `test.use({ storageState: ... })` pattern for authenticated flows.
4. **Visual Regression (Chromatic)**:
   - Ensure all shadcn/ui wrappers and custom components have a `.stories.tsx` file.
   - Run `npm run build-storybook` to verify locally before pushing for Chromatic review.
5. **Execution**:
   - Run `npm run test` (Vitest) and `npx playwright test` to verify the new tests pass.

## Output

- New or updated test files (`.test.ts`, `.spec.ts`).
- Updated Storybook stories if UI components were changed.
- Report of test execution results.
