---
description: Review environment variables and third-party integrations (Supabase, Resend, Sentry, PostHog, GA4, Clarity, Polar, Vercel, Cloudflare).
---

# Environment & Integrations Audit Workflow

Audit the configuration and security of third-party services and environment variables.

## Audit Checklist

### 1. Secrets & Environment Variables
- [ ] Verify that no service role keys or private secrets are exposed in the codebase.
- [ ] Check `next.config.js` for accidental environment leakage.
- [ ] Ensure `.env.example` is updated with necessary (but non-sensitive) variable names.

### 2. Monitoring & Observability
- [ ] **Sentry**: Verify DSN is correctly configured for both client and server.
- [ ] **Analytics**: Check if PostHog, GA4, and Clarity are initialized through a single wrapper.
- [ ] **Logging**: Ensure no PII (Personally Identifiable Information) is being logged.

### 3. Services & Infrastructure
- [ ] **Supabase**: Verify project URL and public anon key. Check if RLS is enabled for all public tables.
- [ ] **Resend**: Verify API keys and sender identities.
- [ ] **Vercel/Cloudflare**: Review caching rules in `next.config.js` or edge functions to avoid double-caching.

## Steps

1. Run a grep search for common sensitive patterns (e.g., `key-`, `sk_`, `sb-`).
2. Verify service initialization calls in `src/lib/` or `src/components/analytics`.
3. Document any findings and provide remediation steps for security vulnerabilities.
