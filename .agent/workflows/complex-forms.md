---
description: Design and implement complex or multi-step forms using the standard pattern.
---

# Complex Forms Workflow (React Hook Form + Zod + Zustand + shadcn/ui)

Design and implement complex or multi-step forms using the standard pattern.

## Steps

1. Clarify the form goal, steps and fields, including validation rules and error messages.
2. Define Zod schemas for each form or step, representing the expected data shape and constraints.
3. Create React Hook Form instances using zodResolver for validation.
4. Use Zustand to:
   - Store multi-step form progress.
   - Persist form data between steps or page reloads when required.
5. Use shadcn/ui components (Input, Textarea, Select, Button, Form components) with Tailwind for layout [web:134][web:136][web:139].
6. Ensure accessibility:
   - Labels and descriptions for all fields.
   - Clear error messages and focus management.
7. Add Vitest tests for validation logic and Playwright tests for the full form flow.

## Output

- The form components and hooks, wired up with React Hook Form, Zod and Zustand.
- Example usage showing how to integrate the form into a page.
- Notes on how to extend or reuse this pattern for future forms.
