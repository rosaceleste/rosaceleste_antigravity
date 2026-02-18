# Rosaceleste | El Camino del Tejido

Proyecto de sitio web para Rosaceleste, enfocado en macramé consciente y experiencias de bienestar artesanal.

## 🚀 Tecnologías Principales

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS 4.
- **UI**: HeroUI + shadcn/ui.
- **Backend/Auth**: Supabase + SSR helpers.
- **Estado**: Zustand.
- **Formularios**: React Hook Form + Zod.
- **Analytics**: PostHog, GA4, Clarity (Wrapper integrado).
- **Pruebas**: Vitest (Unitarias) y Playwright (E2E).

## 🛠️ Configuración Inicial

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Variables de Entorno**:
   Crea un archivo `.env.local` con las siguientes claves:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
   NEXT_PUBLIC_POSTHOG_KEY=tu_hosthog_key
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
   ```

3. **Correr en desarrollo**:
   ```bash
   npm run dev
   ```

## 🧪 Pruebas

- **Unitarias (Vitest)**: `npm run test` or `npx vitest`
- **E2E (Playwright)**: `npx playwright test`

## 📁 Estructura del Proyecto

- `src/app`: Rutas del App Router.
- `src/features`: Lógica y componentes agrupados por dominio de negocio (e.g., `home`, `products`).
- `src/components`: Componentes UI genéricos y de layout.
- `src/lib`: Configuraciones de servicios de terceros (Supabase, Analytics).
- `src/types`: Definiciones de interfaces de TypeScript.

## 📈 Roadmap - Fase 1 (MVP)

- [x] Landing Page con Hero Section y Propuesta de Valor.
- [x] Catálogo de Productos (Renderizado con datos mock/Supabase adapter).
- [x] Formulario de reservación y captación de leads.
- [x] Integración base con Supabase.

## 🚀 Deployment

To deploy to production:

```bash
npx vercel --prod
```

Ensure all environment variables are set in the Vercel dashboard.
