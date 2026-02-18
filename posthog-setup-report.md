# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your Rosaceleste Next.js 16 App Router project. The integration includes client-side event tracking via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), server-side tracking with `posthog-node`, a reverse proxy configuration for reliable event delivery, and comprehensive event tracking across all major user interaction points.

## Summary of Changes

### Core Infrastructure Files

| File | Change |
|------|--------|
| `instrumentation-client.ts` | Created - PostHog client-side initialization (Next.js 15.3+ recommended approach) |
| `src/lib/posthog-server.ts` | Created - Server-side PostHog client for API routes |
| `next.config.ts` | Updated - Added PostHog reverse proxy rewrites and `skipTrailingSlashRedirect` |
| `src/components/providers/analytics-provider.tsx` | Updated - Removed duplicate PostHog initialization (now handled by instrumentation-client.ts) |
| `.env.local` | Updated - Added `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables |

### Event Tracking Implementation

| Event Name | Description | File |
|------------|-------------|------|
| `community_form_opened` | User opened the community join dialog (top of funnel) | `src/components/JoinCommunityForm.tsx` |
| `community_form_submitted` | User successfully submitted the join community form (conversion event) | `src/components/JoinCommunityForm.tsx` |
| `lead_captured` | Server-side event when a new community lead is successfully saved | `src/app/api/join-community/route.ts` |
| `product_whatsapp_clicked` | User clicked to order a product via WhatsApp (conversion intent) | `src/features/products/components/product-details.tsx` |
| `product_shared` | User shared a product link by copying to clipboard | `src/features/products/components/product-details.tsx` |
| `product_image_changed` | User clicked on thumbnail to change main product image | `src/features/products/components/product-details.tsx` |
| `product_card_whatsapp_clicked` | User clicked to buy product from catalog card via WhatsApp | `src/features/products/components/product-card.tsx` |
| `hero_cta_clicked` | User clicked on hero section CTA buttons (Ver Productos or Explorar Cursos) | `src/features/home/components/hero-section.tsx` |
| `class_booking_clicked` | User clicked to book a class via WhatsApp | `src/app/clases/page.tsx` (via `ClassBookingButton.tsx`) |
| `whatsapp_nav_clicked` | User clicked the WhatsApp connect button in navbar | `src/components/layout/navbar.tsx` |
| `social_link_clicked` | User clicked on social media links in footer (Instagram, TikTok, YouTube) | `src/components/layout/footer.tsx` |
| `cookie_consent_accepted` | User accepted cookie consent banner | `src/components/layout/cookie-banner.tsx` |

### Additional Features

- **User Identification**: Users are identified by email upon community form submission (both client and server-side)
- **Session Correlation**: Client-side distinct ID and session ID are passed to server-side events for proper correlation
- **Error Tracking**: `posthog.captureException()` is called on form submission errors
- **Reverse Proxy**: PostHog requests are proxied through `/ingest/*` to avoid ad-blockers

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- **Analytics basics**: [https://us.posthog.com/project/313119/dashboard/1289046](https://us.posthog.com/project/313119/dashboard/1289046)

### Insights
- **Community Lead Generation** (Trends): [https://us.posthog.com/project/313119/insights/YoScn64I](https://us.posthog.com/project/313119/insights/YoScn64I)
- **Product Conversion Intent** (Bar Chart): [https://us.posthog.com/project/313119/insights/5XHWFWxp](https://us.posthog.com/project/313119/insights/5XHWFWxp)
- **Hero CTA Engagement** (Pie Chart): [https://us.posthog.com/project/313119/insights/v2hxUcDA](https://us.posthog.com/project/313119/insights/v2hxUcDA)
- **Social & Navigation Engagement** (Trends): [https://us.posthog.com/project/313119/insights/qjhhmHWh](https://us.posthog.com/project/313119/insights/qjhhmHWh)
- **Community Form Conversion Funnel** (Funnel): [https://us.posthog.com/project/313119/insights/WQObOEVM](https://us.posthog.com/project/313119/insights/WQObOEVM)

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

## Dependencies Installed

- `posthog-node` - Server-side PostHog SDK for Node.js API routes

## Environment Variables

Make sure these environment variables are set in your production environment:

```
NEXT_PUBLIC_POSTHOG_KEY=phc_OEh6B0QJKFol47khKJCiRl1qH1KeZUsPIDhsNSOCQf7
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```
