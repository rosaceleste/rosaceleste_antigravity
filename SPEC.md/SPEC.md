PRD: Sitio Web Rosaceleste
Product Requirements Document v1.1
**Última actualización:** 13 de Febrero, 2026

---

## 📊 ESTADO DE IMPLEMENTACIÓN - FASE 1 (MVP)

**Progreso General:** 80% Completado (Frontend MVP)
**Última Revisión:** 16 de Febrero, 2026

### Resumen de Estado por Categoría

| Categoría | Completado | Total | % | Estado |
|-----------|------------|-------|---|--------|
| **Infraestructura Técnica** | 9 | 10 | 90% | ✅ |
| **Homepage Sections** | 6 | 6 | 100% | ✅ |
| **Páginas del Sitio** | 4 | 6 | 66% | ✅ |
| **Base de Datos** | 1 | 3 | 33% | ⚠️ |
| **Formularios y Leads** | 0 | 3 | 0% | ❌ (Reemplazado por WhatsApp) |
| **Integraciones** | 3 | 6 | 50% | ⚠️ |
| **SEO y Performance** | 2 | 4 | 50% | ⚠️ |
| **Testing** | 1 | 2 | 50% | ⚠️ |

### Leyenda
- ✅ Completado (>70%)
- ⚠️ En Progreso / Parcial
- ❌ Pendiente / Despriorizado

### Elementos Críticos Pendientes (Bloqueantes para Launch)

1. **Base de Datos Supabase**
   - ⚠️ Integración completa de Productos (actualmente híbrido local/DB)
   - ❌ Tablas `leads` y `testimonials` (Testimonios usan data local)

2. **Páginas / Navegación**
   - ✅ `/clases` - IMPLEMENTADO
   - ✅ `/sobre-nosotros` - IMPLEMENTADO
   - ⚠️ `/experiencias` - Integrado como sección en Home (¿Página dedicada necesaria?)
   - ❌ `/contacto` - Despriorizado (Datos en Footer)

3. **Estrategia de Conversión (Pivot)**
   - ✅ **WhatsApp First**: Se priorizó conexión directa a WhatsApp sobre formularios complejos.
   - ❌ Formularios Zod/Resend: Despriorizados para MVP.

4. **Analytics**
   - ⚠️ PostHog (instalado)
   - ❌ GA4 / Clarity

---

1. Executive Summary
Visión del Producto
Crear una plataforma web para Rosaceleste que comunique la propuesta de valor del macramé consciente, facilite la comercialización de productos artesanales, y conecte a la comunidad de estudiantes con oportunidades de aprendizaje presencial y virtual.
Problema a Resolver
Rosaceleste actualmente carece de presencia digital estructurada que permita:
Mostrar su catálogo de productos de manera profesional
Capturar leads de potenciales estudiantes
Gestionar reservas de clases y experiencias grupales
Comunicar su filosofía de bienestar y creación consciente
Solución Propuesta
Landing page moderna con integración de e-commerce básico (fase 1) y sistema de pagos completo (fase 2), diseñada para convertir visitantes en clientes y estudiantes, con énfasis en la experiencia de usuario y la identidad de marca.

2. Product Vision & Goals
Objetivos de Negocio
Fase 1 (MVP - 6 semanas)
Incrementar visibilidad online de Rosaceleste
Generar mínimo 30 leads calificados mensuales
Facilitar 15 reservas de clases presenciales/mes vía WhatsApp
Establecer presencia digital profesional
Fase 2 (3-4 semanas post-MVP)
Habilitar ventas online directas con conversión del 2-3%
Reducir fricción en proceso de compra (eliminar dependencia de WhatsApp para pagos)
Incrementar ticket promedio en 20% mediante cross-selling
Métricas de Éxito (KPIs)
Métrica
Fase 1 Target
Fase 2 Target
Tráfico mensual
500 visitantes
1,000 visitantes
Tasa de conversión (leads)
6%
8%
Tasa de conversión (ventas)
N/A
2.5%
Tiempo en sitio
>2 min
>3 min
Bounce rate
<60%
<50%
Clics a WhatsApp
50+/mes
30+/mes


3. User Personas
Persona 1: "Ana la Principiante Curiosa"
Demografía: Mujer, 28-45 años, Colombia (ciudades principales)
Motivación: Busca hobby relajante, interés en mindfulness y creación manual
Pain points: No sabe por dónde empezar, miedo a frustración, busca guía paso a paso
Comportamiento: Investiga en redes sociales, lee testimonios, prefiere clases presenciales inicialmente
Job to be done: "Quiero aprender macramé sin frustrarme y sentir que creo algo hermoso"
Persona 2: "Laura la Compradora de Regalo"
Demografía: Mujer/Hombre, 25-50 años, busca regalos únicos
Motivación: Apoya emprendimientos locales, valora productos artesanales
Pain points: Difícil encontrar regalos significativos, necesita entrega a tiempo
Comportamiento: Compra impulsiva si conecta emocionalmente, sensible a tiempos de entrega
Job to be done: "Quiero regalar algo especial y consciente que refleje valores"
Persona 3: "Sofía la Estudiante Avanzada"
Demografía: Mujer, 30-55 años, ya tiene experiencia básica en macramé
Motivación: Perfeccionar técnica, proyectos complejos, comunidad
Pain points: Falta de recursos avanzados, soledad en el aprendizaje
Comportamiento: Busca clases virtuales para flexibilidad, valora comunidad online
Job to be done: "Quiero mejorar mis habilidades y conectar con otras tejedoras"

4. User Journey Maps
Journey: Ana (Principiante) → Reserva Clase Presencial
Etapa
Touchpoint
Acción
Emoción
Oportunidad
Descubrimiento
Instagram/Google
Ve foto de producto macramé
Curiosidad 😊
SEO optimizado, ads
Investigación
Landing page
Lee hero section y propuesta de valor
Interés 🤔
Copy claro sobre "sin frustración"
Consideración
Sección clases
Revisa opciones para principiantes
Esperanza 😌
Destacar "metodología amable"
Decisión
Formulario lead
Completa formulario con sus datos
Compromiso 😅
Formulario simple (5 campos)
Acción
WhatsApp
Agenda fecha con Daniela
Emoción 😄
Respuesta rápida, calendario visible
Post-compra
Comunidad
Recibe invitación a grupo WhatsApp
Pertenencia 🥰
Onboarding en comunidad

Journey: Laura (Compradora) → Compra Producto
Etapa
Touchpoint
Acción
Emoción
Oportunidad
Descubrimiento
Referido/Redes
Busca regalo único
Necesidad 😐
Social proof visible
Exploración
Catálogo productos
Navega entre portavasos, espejos, tapices
Fascinación 😍
Imágenes de alta calidad
Evaluación
Ficha producto
Lee descripción, ve tiempo de fabricación
Consideración 🤨
Destacar "hecho a mano", 15 días
Decisión
Botón CTA
Clic "Pedir por WhatsApp"
Urgencia 😬
Fase 2: Botón "Comprar ahora"
Compra
WhatsApp
Confirma pedido y hace transferencia
Satisfacción 😊
Fase 2: Checkout integrado


5. Technical Architecture
Stack Tecnológico
text
Frontend Framework: Next.js 14+ (App Router)
├── Styling: Tailwind CSS + HeroUI
├── State Management: Zustand
├── Animations: React Bits
├── Forms: React Hook Form + Zod
└── UI Components: ShadCN/UI + HeroUI

Backend & Services: Supabase
├── Authentication (futura implementación)
├── Database (PostgreSQL)
└── Storage (imágenes productos)

Payments: 
├── Fase 1: N/A (WhatsApp)
└── Fase 2: Mercado Pago API

Infrastructure:
├── Hosting: Vercel
├── Email: Resend
├── Analytics: PostHog + GA4 + Microsoft Clarity
└── Monitoring: Sentry

Quality Assurance:
├── E2E Tests: Playwright
├── Unit Tests: Vitest
└── Visual Tests: Chromatic + Storybook

Arquitectura de Información
text
/
├── / (Home)
│   ├── Hero Section
│   ├── Value Proposition
│   ├── Explora el Camino del Tejido
│   ├── Productos Populares (carousel)
│   ├── Experiencias de Bienestar
│   └── Testimonios
│
├── /productos
│   ├── Filtros (categoría, precio)
│   ├── Grid de productos
│   └── [slug] - Detalle de producto
│
├── /clases
│   ├── Presenciales Personalizadas
│   ├── Virtuales (link a NAS)
│   ├── Calendario embebido
│   └── Formulario de reserva
│
├── /experiencias
│   ├── Experiencias grupales mensuales
│   ├── Eventos especiales (cumpleaños)
│   └── CTA WhatsApp
│
├── /sobre-nosotros
│   ├── Historia de Rosaceleste
│   ├── Filosofía del macramé consciente
│   └── Daniela (fundadora)
│
└── /contacto
    └── Formulario + WhatsApp + Redes

Data Models (Supabase)
sql
-- Tabla: products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(100), -- 'decoracion_mesa', 'decoracion_pared', 'uso_personal', 'avanzado'
  subcategory VARCHAR(100), -- 'portavasos', 'tapices', etc.
  image_url TEXT[],
  production_time_days INT DEFAULT 15,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla: leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  country VARCHAR(100),
  city VARCHAR(100),
  interest_type VARCHAR(50), -- 'presencial', 'online', 'grupal', 'individual', 'producto'
  message TEXT,
  source VARCHAR(50), -- 'landing', 'productos', 'clases'
  status VARCHAR(50) DEFAULT 'new', -- 'new', 'contacted', 'converted', 'lost'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla: testimonials
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name VARCHAR(255),
  content TEXT NOT NULL,
  image_url TEXT,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Fase 2: orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50),
  shipping_address JSONB,
  total DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'paid', 'in_production', 'shipped', 'delivered'
  payment_method VARCHAR(50),
  payment_id VARCHAR(255), -- Mercado Pago transaction ID
  items JSONB NOT NULL, -- [{product_id, quantity, price}]
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);


6. Feature Requirements - FASE 1 (MVP)
6.1 Hero Section
**Estado:** ✅ IMPLEMENTADO (Refinado)
Prioridad: P0 (Crítico)
User Story: Como visitante nuevo, quiero entender inmediatamente qué ofrece Rosaceleste para decidir si explorar más.
Requisitos Funcionales:
Título principal: "Rosaceleste" con subtítulo "Macramé consciente para crear, pausar y habitarte desde la calma y la presencia"
Descripción: "Cursos, productos y experiencias de bienestar a través de la práctica creativa del tejido a mano"
3 CTAs principales:
"Ver Cursos" → scroll a sección clases
"Productos" → redirige a /productos
"Conectar por WhatsApp" → abre WhatsApp con mensaje pre-rellenado
Imagen hero de alta calidad (producto o persona tejiendo)
Responsive: En mobile, CTAs apilados verticalmente
Requisitos No Funcionales:
Carga de imagen optimizada (WebP, lazy loading)
First Contentful Paint < 1.5s
Animación de entrada sutil (fade-in) usando React Bits
Criterios de Aceptación:
✅ Hero visible sin scroll en desktop (above the fold)
✅ Todos los CTAs funcionales y rastreables (PostHog events)
✅ Imagen optimizada < 200KB
✅ Accesible (WCAG AA) con contraste adecuado

6.2 Value Proposition Section
**Estado:** ✅ IMPLEMENTADO
Prioridad: P0
User Story: Como visitante interesado, quiero entender los beneficios únicos de Rosaceleste.
Requisitos Funcionales:
3 bloques con ícono + título + descripción:
Productos hechos a mano: "Cada pieza nace del tiempo, la presencia y el respeto por el proceso creativo"
Aprendizaje consciente: "Cursos diseñados para aprender macramé paso a paso, desde la técnica y la atención plena"
Experiencias de bienestar: "El acto de tejer como herramienta para reducir el ruido mental..."
Layout: Grid 3 columnas (desktop), stack vertical (mobile)
Íconos custom o de biblioteca (Lucide/Heroicons)
Criterios de Aceptación:
✅ Copy exacto según documento
✅ Íconos alineados y consistentes con Design System
✅ Responsive en todos los breakpoints

6.3 Catálogo de Productos
**Estado:** ✅ IMPLEMENTADO (90% - Faltan filtros avanzados)
Prioridad: P0
User Story: Como compradora potencial, quiero explorar productos disponibles con imágenes, descripciones y precios.
Requisitos Funcionales:
Página /productos
Grid responsive de productos (3 cols desktop, 2 tablet, 1 mobile)
Cada ProductCard muestra:
Imagen principal del producto
Nombre del producto
Precio en COP ($XX,XXX)
Badge "Popular" si es destacado
Botón "Ver Detalles"
Filtros laterales (desktop) o drawer (mobile):
Por categoría: Decoración Mesa | Decoración Pared | Uso Personal | Avanzado
Orden: Más Popular | Precio: Menor a Mayor | Precio: Mayor a Menor
Sin paginación inicial (cargar todos, lazy loading de imágenes)
Detalle de Producto (/productos/[slug])
Galería de imágenes (carousel con thumbnails)
Nombre, precio, descripción detallada
Tiempo de producción: "Fabricación en 15 días hábiles"
Sección "¿Cómo se hace?": Copy sobre proceso artesanal
CTA principal: "Pedir por WhatsApp" → abre WhatsApp con mensaje:
text
Hola! Me interesa el producto [NOMBRE] de $[PRECIO]. 
¿Está disponible?


Productos relacionados (misma categoría)
Requisitos No Funcionales:
Imágenes almacenadas en Supabase Storage
CDN de Vercel para optimización automática
Alt text descriptivo en todas las imágenes
Lazy loading progresivo
Criterios de Aceptación:
✅ Catálogo carga desde Supabase (no hardcoded)
✅ Filtros funcionan sin reload de página
✅ WhatsApp CTA incluye información del producto
✅ Mobile-first: experiencia fluida en móvil
✅ Imágenes < 300KB cada una

6.4 Sistema de Reservas de Clases
**Estado:** ✅ IMPLEMENTADO (Versión WhatsApp simplificada)
Prioridad: P0
User Story: Como estudiante interesada, quiero ver disponibilidad de clases y reservar fácilmente.
Requisitos Funcionales:
Página /clases
Sección 1: Clases Presenciales Personalizadas
Copy: "No necesitas conocimientos previos..."
Lista de proyectos sugeridos por nivel:
Principiante: Portavasos, Portavelas, Individuales
Intermedio: Telares, Tapices, Espejos, Lámparas
Avanzado: Chaleco, Bolsos, Camino de mesa, Hamaca
Calendario embebido: Google Calendar público de Daniela
Iframe responsive
Fallback: Link "Ver disponibilidad" si iframe falla
Formulario de solicitud de reserva:
Campos: Nombre*, Email*, Teléfono*, País*, Ciudad*, Tipo de interés (select)*, Mensaje
Validación con Zod
Envío a Supabase (tabla leads)
Email automático a Daniela vía Resend
Confirmación visual: Toast success + "Te contactaremos en 24h"
Sección 2: Clases Virtuales
Copy breve sobre acceso a comunidad NAS
CTA: "Unirme a la Comunidad" → redirige a NAS (external link)
Embed de Google Calendar
tsx
<iframe
  src="https://calendar.google.com/calendar/embed?src=[CALENDAR_ID]&mode=WEEK"
  width="100%"
  height="600"
  frameborder="0"
  scrolling="no"
  className="rounded-lg"
></iframe>

Requisitos No Funcionales:
Formulario accesible (labels, focus states, error messages claros)
Rate limiting en envío (máximo 3 envíos por IP por hora)
GDPR-friendly: Checkbox de consentimiento para datos
Criterios de Aceptación:
✅ Calendario visible y navegable
✅ Formulario valida todos los campos requeridos
✅ Email enviado exitosamente a Daniela
✅ Lead guardado en Supabase
✅ Mensaje de éxito claro al usuario
✅ Tracking de evento "lead_captured" en PostHog

6.5 Experiencias de Bienestar
**Estado:** ⚠️ SECCIÓN EN HOMEPAGE (Links a /clases)
Prioridad: P1
User Story: Como persona interesada en eventos sociales, quiero conocer las experiencias grupales disponibles.
Requisitos Funcionales:
Sección en homepage o página dedicada /experiencias
Contenido:
Título: "Experiencias de bienestar"
Subtítulo: "Macramé vivencial donde el amor por el tejido sabe delicioso y se comparte"
Copy: "Sesiones mensuales de macramé acompañado de una deliciosa merienda..."
Copy: "¿Sabías que puedes celebrar tu cumpleaños haciendo algo diferente?"
Galería de fotos de talleres grupales (grid 2x2 o 3x3)
CTA: "Consultar Próxima Fecha" → WhatsApp con mensaje:
text
Hola! Me gustaría conocer más sobre las experiencias grupales y fechas disponibles.


Criterios de Aceptación:
✅ Galería con imágenes optimizadas
✅ CTA funcional a WhatsApp
✅ Responsive

6.6 Testimonios
**Estado:** ✅ IMPLEMENTADO (Data Local, sin avatares)
Prioridad: P1
User Story: Como visitante escéptico, quiero ver prueba social de estudiantes satisfechos.
Requisitos Funcionales:
Sección "Lo que dicen nuestras estudiantes"
Carousel de testimonios (auto-play cada 5s, pausable)
Cada testimonio:
Screenshot o texto del testimonio
Nombre de estudiante (opcional: foto)
Rating de estrellas (si aplica)
Mínimo 3 testimonios, máximo 8
Datos cargados desde Supabase (tabla testimonials)
Criterios de Aceptación:
✅ Carousel funciona en mobile y desktop
✅ Accesible: botones de navegación con aria-labels
✅ Pausable al hover

6.7 Footer & Navigation
**Estado:** ✅ IMPLEMENTADO
Prioridad: P0
User Story: Como usuario, quiero navegar fácilmente y encontrar información de contacto.
Requisitos Funcionales:
Navbar
Logo Rosaceleste (clickable → home)
Links: Inicio | Productos | Clases | Experiencias | Sobre Nosotros | Contacto
Mobile: Hamburger menu (drawer de HeroUI)
Sticky navbar con backdrop blur
Footer
Columna 1: Logo + tagline breve
Columna 2: Navegación
Productos
Clases
Experiencias
Sobre Nosotros
Columna 3: Contacto
WhatsApp: +57 XXX XXX XXXX
Email: hola@rosaceleste.com
Instagram, Facebook (íconos)
Columna 4: Legal
Términos y Condiciones (página simple)
Política de Privacidad
Copyright: "© 2026 Rosaceleste. Hecho con ❤️ en Colombia"
Criterios de Aceptación:
✅ Navbar sticky funciona en scroll
✅ Mobile menu smooth animation
✅ Footer responsive (stack en mobile)
✅ Todos los links funcionales

6.8 Formularios & Lead Capture
**Estado:** ❌ DESPRIORIZADO (Reemplazado por WhatsApp Strategy)
Prioridad: P2
Validación con Zod:
typescript
import { z } from 'zod';

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(7, 'Teléfono inválido'),
  country: z.string().min(2, 'Selecciona tu país'),
  city: z.string().min(2, 'Ingresa tu ciudad'),
  interestType: z.enum(['presencial', 'online', 'grupal', 'individual', 'producto']),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'Debes aceptar la política de privacidad')
});

Email Notification (Resend):
typescript
// Template para Daniela
const emailTemplate = `
Nueva solicitud de ${lead.interestType}

Nombre: ${lead.name}
Email: ${lead.email}
Teléfono: ${lead.phone}
Ubicación: ${lead.city}, ${lead.country}
Mensaje: ${lead.message || 'Sin mensaje adicional'}

---
Ver en panel: https://rosaceleste.com/admin/leads
`;

Criterios de Aceptación:
✅ Validación en tiempo real
✅ Mensajes de error claros en español
✅ Email enviado < 2 segundos
✅ Lead guardado en Supabase
✅ Confirmación visual al usuario

6.9 SEO & Performance
**Estado:** ❌ NO IMPLEMENTADO
Prioridad: P0
Requisitos SEO:
Meta tags dinámicos por página:
typescript
export const metadata = {
  title: 'Rosaceleste | Macramé Consciente',
  description: 'Cursos, productos y experiencias de bienestar a través del macramé. Aprende a tejer desde la calma y la presencia.',
  keywords: 'macramé, cursos de macramé, productos artesanales, bienestar, mindfulness, tejido a mano, Colombia',
  openGraph: {
    title: 'Rosaceleste | Macramé Consciente',
    description: 'Cursos, productos y experiencias de bienestar...',
    images: ['/og-image.jpg'],
    locale: 'es_CO',
    type: 'website',
  }
}


Sitemap.xml automático (Next.js)
Robots.txt
Schema.org markup para productos:
json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Portavasos Macramé",
  "image": "...",
  "description": "...",
  "offers": {
    "@type": "Offer",
    "price": "25000",
    "priceCurrency": "COP"
  }
}


Performance Targets:
Lighthouse Score > 90 (Performance)
First Contentful Paint < 1.5s
Largest Contentful Paint < 2.5s
Cumulative Layout Shift < 0.1
Time to Interactive < 3.5s
Optimizaciones:
Next.js Image component con lazy loading
Compresión WebP/AVIF
Code splitting automático
Prefetch de rutas críticas
Caching de imágenes en Vercel CDN

6.10 Analytics & Tracking
**Estado:** ⚠️ PARCIALMENTE IMPLEMENTADO (PostHog instalado)
Prioridad: P0
PostHog Events:
typescript
// Eventos críticos a trackear
posthog.capture('page_view', { page: pathname });
posthog.capture('product_viewed', { product_id, product_name, price });
posthog.capture('whatsapp_click', { source: 'product_page', product_name });
posthog.capture('lead_form_submitted', { interest_type });
posthog.capture('calendar_viewed');
posthog.capture('cta_clicked', { cta_text, location });

Google Analytics 4:
Page views
Events: add_to_cart (futuro), view_item, generate_lead
E-commerce tracking (Fase 2)
Microsoft Clarity:
Heatmaps de clics
Session recordings (sample 10%)
Scroll depth tracking
Criterios de Aceptación:
✅ PostHog integrado y verificado
✅ GA4 property creado y funcional
✅ Clarity instalado
✅ Conversiones de leads rastreables

7. Feature Requirements - FASE 2
7.1 Integración de Pagos (Mercado Pago)
Prioridad: P0 (Fase 2)
User Story: Como compradora, quiero pagar directamente desde el sitio sin usar WhatsApp.
Requisitos Funcionales:
Checkout Flow
Usuario en detalle de producto → "Comprar Ahora"
Modal/Página de checkout:
Resumen del producto
Formulario de datos de envío
Selector de método de pago (PSE, tarjeta, Nequi)
Integración con Mercado Pago:
Redirect a Mercado Pago Checkout Pro
O embedded checkout (Mercado Pago SDK)
Confirmación de pago → Página de éxito
Email de confirmación a cliente y Daniela
Configuración Mercado Pago
typescript
// lib/mercadopago.ts
import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});

// Crear preferencia de pago
const preference = {
  items: [
    {
      title: product.name,
      unit_price: product.price,
      quantity: 1,
    }
  ],
  payer: {
    email: customer.email,
  },
  back_urls: {
    success: 'https://rosaceleste.com/checkout/success',
    failure: 'https://rosaceleste.com/checkout/failure',
    pending: 'https://rosaceleste.com/checkout/pending'
  },
  auto_return: 'approved',
  notification_url: 'https://rosaceleste.com/api/webhooks/mercadopago'
};

Webhooks:
Endpoint /api/webhooks/mercadopago para recibir notificaciones de pago
Actualizar estado de orden en Supabase
Enviar email de confirmación vía Resend
Criterios de Aceptación:
✅ Checkout funciona con PSE, tarjetas débito/crédito
✅ Webhook actualiza orden correctamente
✅ Emails enviados automáticamente
✅ Manejo de errores claro (pago rechazado, timeout)
✅ Testing en sandbox antes de producción

7.2 Carrito de Compras
Prioridad: P1 (Fase 2)
User Story: Como compradora, quiero agregar múltiples productos antes de pagar.
Requisitos Funcionales:
Botón "Agregar al Carrito" en lugar de "Pedir por WhatsApp"
Ícono de carrito en navbar con badge (cantidad de items)
Drawer lateral de carrito (desliza desde la derecha)
Lista de productos agregados
Cantidad ajustable (+ / -)
Subtotal y total
Botón "Proceder al Pago"
Estado global con Zustand:
typescript
interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}


Criterios de Aceptación:
✅ Carrito persiste en localStorage
✅ Badge actualiza en tiempo real
✅ Animaciones suaves (React Bits)
✅ Mobile-friendly

7.3 Panel de Administración (Dashboard)
Prioridad: P2 (Fase 2)
User Story: Como Daniela (admin), quiero gestionar productos, ver leads y órdenes desde un panel.
Requisitos Funcionales:
Ruta protegida: /admin
Autenticación con Supabase Auth (email/password)
Dashboard con métricas clave:
Leads capturados (últimos 30 días)
Órdenes recibidas
Productos más vendidos
Gráfica de ventas (PostHog o Chart.js)
Secciones:
Productos
Tabla con CRUD completo
Crear/Editar/Eliminar productos
Upload de imágenes múltiples
Toggle "Destacado" / "Activo"
Leads
Tabla filtrable (por status, fecha, tipo de interés)
Marcar como "Contactado" / "Convertido" / "Perdido"
Exportar CSV
Órdenes
Lista de órdenes con estados
Ver detalle de orden
Actualizar estado manualmente
Botón "Notificar cliente" (envía email)
Tecnologías:
Supabase Row Level Security (RLS) para protección de datos
React Table para tablas complejas
Drag & drop de imágenes (react-dropzone)
Criterios de Aceptación:
✅ Solo usuarios autenticados pueden acceder
✅ CRUD funcional en productos
✅ Leads visualizables y actualizables
✅ Órdenes sincronizadas con webhooks de Mercado Pago

7.4 Email Marketing Automation
Prioridad: P2 (Fase 2)
User Story: Como Daniela, quiero automatizar emails de seguimiento a leads.
Requisitos Funcionales:
Integración con Resend + plantillas de email
Flujos automatizados:
Welcome Email: Enviado al capturar lead
Asunto: "¡Bienvenida a Rosaceleste! 🌸"
Contenido: Introducción, link a comunidad WhatsApp, próxima experiencia grupal
Carrito Abandonado (si aplica):
Enviado 24h después de agregar producto sin comprar
Post-Compra:
Confirmación de orden
Actualización de estado (en producción → enviado → entregado)
Criterios de Aceptación:
✅ Emails con diseño responsive (plantilla HTML)
✅ Tracking de aperturas (Resend analytics)
✅ Unsubscribe link incluido

8. Design System Implementation
8.1 Tokens & Configuration
Ya tienes el Design System completo definido. Aquí la estrategia de implementación:
Prioridad de Implementación
Sprint 1: Configuración base (tailwind.config, HeroUI provider, theme)
Sprint 2: Componentes UI (Button, Card, Input)
Sprint 3: Componentes complejos (Navbar, Modal, Forms)
Sprint 4: Páginas y layouts
Estructura de Archivos
text
src/
├── styles/
│   ├── globals.css         # Tailwind base + custom styles
│   └── tokens.css          # CSS variables del DS
├── lib/
│   ├── theme.ts            # Configuración HeroUI
│   └── utils.ts            # cn() utility
├── components/
│   ├── ui/                 # Componentes base reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductDetail.tsx
│   └── forms/
│       ├── LeadForm.tsx
│       └── ContactForm.tsx

8.2 Storybook para Documentación
Setup:
bash
npx storybook@latest init

Stories prioritarias:
Button variants (Primary, Secondary, Ghost)
ProductCard
LeadForm
Navbar (desktop + mobile)
Chromatic Integration:
GitHub Actions para CI/CD visual testing
Review de cambios visuales en cada PR

9. Development Roadmap
Timeline Overview
text
FASE 1 (MVP): 6 semanas
├── Sprint 1 (Semana 1-2): Setup + Design System + Homepage
├── Sprint 2 (Semana 3-4): Catálogo de Productos + Detalle
└── Sprint 3 (Semana 5-6): Clases, Experiencias, Forms, Testing

FASE 2: 3-4 semanas
├── Sprint 4 (Semana 7-8): Pagos + Carrito
└── Sprint 5 (Semana 9-10): Dashboard Admin + Optimizaciones


FASE 1 - Sprint 1 (Semanas 1-2)
**Estado:** ✅ 80% COMPLETADO
Objetivos:
Proyecto configurado y desplegable
Design System implementado
Homepage funcional
Tareas Técnicas:
Setup Inicial (3 días)
Crear proyecto Next.js 14 con App Router
Configurar Tailwind CSS + HeroUI
Configurar Supabase (proyecto, tablas, storage)
Configurar Vercel (deploy preview automático)
Setup Sentry, PostHog, GA4, Clarity
Configurar ESLint, Prettier, Husky
Design System (2 días)
Implementar tokens en tailwind.config.js
Crear componentes base: Button, Card, Input
Setup Storybook + primera historia (Button)
Configurar Chromatic en GitHub Actions
Homepage (4 días)
Layout base (Navbar + Footer)
Hero Section con CTAs funcionales
Value Proposition Section
Sección "Explora el Camino del Tejido"
Carousel de Productos Populares (datos mock)
Sección Experiencias de Bienestar
Sección Testimonios (datos mock)
Responsive testing en todos breakpoints
Criterios de Aceptación Sprint 1:
✅ Homepage deployada en Vercel (staging)
✅ Design System funcional y documentado en Storybook
✅ Analytics trackeando page views
✅ Lighthouse Score > 85

FASE 1 - Sprint 2 (Semanas 3-4)
**Estado:** ⚠️ 60% COMPLETADO
Objetivos:
Catálogo de productos funcional
CMS de productos en Supabase
Detalle de producto con CTA WhatsApp
Tareas Técnicas:
Database & CMS (2 días)
Crear tabla products en Supabase
Seed inicial con 10-15 productos del catálogo Canva
Setup Supabase Storage para imágenes
Upload de las ~40 fotos a Storage
Página /productos (3 días)
ProductGrid component con fetching de Supabase
ProductCard component con imagen, precio, CTA
Filtros por categoría (client-side)
Orden por precio / popularidad
Loading states y error handling
Lazy loading de imágenes
Detalle de Producto (3 días)
Ruta dinámica /productos/[slug]
Galería de imágenes (carousel)
Información completa del producto
Badge "Tiempo de fabricación: 15 días"
CTA "Pedir por WhatsApp" con deep link
Productos relacionados (misma categoría)
Testing (1 día)
Unit tests (Vitest) para filtros y sorting
E2E test (Playwright): Navegación producto → detalle → WhatsApp
Visual regression tests (Chromatic)
Criterios de Aceptación Sprint 2:
✅ Catálogo muestra productos reales desde Supabase
✅ Filtros funcionan sin bugs
✅ WhatsApp CTA incluye info del producto
✅ Imágenes optimizadas (WebP, lazy loading)
✅ Tests passing en CI/CD

FASE 1 - Sprint 3 (Semanas 5-6)
**Estado:** ❌ 0% COMPLETADO - EN CURSO
Objetivos:
Sistema de reservas de clases
Formularios de captura de leads
Experiencias de bienestar
Optimizaciones finales
Tareas Técnicas:
Página /clases (4 días)
Layout con 2 secciones (Presenciales / Virtuales)
Copy según documento (proyectos sugeridos)
Embed de Google Calendar (responsive)
Formulario de reserva con React Hook Form + Zod
Validación en tiempo real
Integración con Resend para email a Daniela
Guardar lead en Supabase (tabla leads)
Toast de confirmación al usuario
Página /experiencias (2 días)
Copy según documento
Galería de fotos de talleres
CTA WhatsApp para consultar fechas
Optimizaciones (2 días)
SEO: Meta tags dinámicos por página
Schema.org markup para productos
Sitemap.xml automático
Optimización de Core Web Vitals
Comprimir imágenes adicionales
Lighthouse audit en todas las páginas
Testing Final (2 días)
E2E flows completos:
Home → Productos → Detalle → WhatsApp
Home → Clases → Formulario → Confirmación
Accessibility audit (Wave, axe DevTools)
Cross-browser testing (Chrome, Safari, Firefox, Edge)
Mobile testing (iOS Safari, Chrome Android)
Deploy a Producción (1 día)
Setup dominio personalizado (si aplica)
Configurar variables de entorno en Vercel
Deploy a producción
Monitoreo en Sentry (verificar errores)
Verificar analytics en PostHog/GA4
Criterios de Aceptación Sprint 3 (MVP Completo):
✅ Todas las páginas funcionales y responsive
✅ Formularios envían emails correctamente
✅ Leads guardados en Supabase
✅ WhatsApp CTAs funcionales en todos los touchpoints
✅ Lighthouse Score > 90 en todas las páginas
✅ WCAG AA compliance
✅ Zero errores críticos en Sentry
✅ Analytics trackeando eventos clave

FASE 2 - Sprint 4 (Semanas 7-8)
Objetivos:
Integración de pagos con Mercado Pago
Carrito de compras funcional
Checkout completo
Tareas Técnicas:
Mercado Pago Setup (2 días)
Crear cuenta Mercado Pago vendedor
Obtener credenciales (Access Token)
Configurar webhooks en Mercado Pago dashboard
Testing en sandbox
Carrito (3 días)
Store de Zustand para carrito
Botón "Agregar al Carrito" en productos
Drawer de carrito (HeroUI Drawer)
Ajuste de cantidades (+/-)
Persistencia en localStorage
Checkout Flow (4 días)
Página /checkout con formulario de envío
Validación de datos (React Hook Form + Zod)
Crear preferencia de pago en API route
Redirect a Mercado Pago Checkout Pro
Páginas de confirmación (success/failure/pending)
Endpoint /api/webhooks/mercadopago
Actualizar orden en Supabase al recibir pago
Enviar emails de confirmación (Resend)
Testing Pagos (2 días)
Testing en sandbox con tarjetas de prueba
E2E test: Agregar al carrito → Checkout → Pago → Confirmación
Manejo de errores (pago rechazado, timeout)
Criterios de Aceptación Sprint 4:
✅ Pagos funcionan en sandbox (PSE, tarjetas)
✅ Webhook sincroniza estado de orden
✅ Emails enviados automáticamente
✅ Carrito persiste entre sesiones
✅ Testing exhaustivo antes de producción

FASE 2 - Sprint 5 (Semanas 9-10)
Objetivos:
Dashboard administrativo
Optimizaciones finales
Documentación
Tareas Técnicas:
Admin Dashboard (5 días)
Setup Supabase Auth (email/password para Daniela)
Ruta protegida /admin
Dashboard con métricas clave
CRUD de productos (tabla, formularios)
Upload de imágenes múltiples
Gestión de leads (tabla filtrable)
Gestión de órdenes (actualizar estados)
Exportar leads a CSV
Email Automation (2 días)
Plantilla HTML responsive para emails
Email de bienvenida (lead capturado)
Email de confirmación de orden
Email de actualización de estado
Documentación (2 días)
README.md del proyecto
Documentación de API routes
Guía de uso del admin dashboard
Onboarding para Daniela
Optimizaciones Finales (2 días)
Audit de performance final
Security review (OWASP checklist)
Setup de backups automáticos (Supabase)
Configurar alertas en Sentry (errores críticos)
Criterios de Aceptación Sprint 5 (FASE 2 COMPLETA):
✅ Admin dashboard funcional y seguro
✅ Email automation operando
✅ Documentación completa
✅ Performance optimizada
✅ Backup strategy implementada
✅ Proyecto entregado y onboarding completado

10. Testing Strategy
10.1 Unit & Component Tests (Vitest)
Componentes a testear:
Filtros de productos (lógica de filtrado)
Carrito (agregar, remover, calcular total)
Validación de formularios (schemas de Zod)
Coverage target: >70%

10.2 E2E Tests (Playwright)
User Flows críticos:
Happy Path - Compra de Producto (Fase 2)
typescript
test('usuario compra producto exitosamente', async ({ page }) => {
  await page.goto('/productos');
  await page.click('text=Portavasos Macramé');
  await page.click('button:has-text("Agregar al Carrito")');
  await page.click('[aria-label="Abrir carrito"]');
  await page.click('text=Proceder al Pago');
  // Fill checkout form...
  await page.click('text=Pagar con Mercado Pago');
  // Assertions en página de éxito
});


Captura de Lead - Reserva de Clase
typescript
test('usuario solicita clase presencial', async ({ page }) => {
  await page.goto('/clases');
  await page.fill('input[name="name"]', 'Ana García');
  await page.fill('input[name="email"]', 'ana@example.com');
  // ...
  await page.click('button:has-text("Enviar Solicitud")');
  await expect(page.locator('text=Te contactaremos pronto')).toBeVisible();
});


Ejecución: CI/CD en cada PR + nightly runs

10.3 Visual Regression (Chromatic)
Componentes en Storybook:
Todos los componentes UI (Button, Card, Input, etc.)
ProductCard en diferentes estados
Navbar (desktop/mobile)
Forms con errores de validación
Workflow:
Push a GitHub → GitHub Actions ejecuta Chromatic
Review de cambios visuales en Chromatic dashboard
Aprobación manual antes de merge

11. Success Metrics & KPIs
Fase 1 (MVP)
Métrica
Target
Herramienta
Tráfico mensual
500 visitantes únicos
GA4
Leads generados
30/mes
Supabase (tabla leads)
Tasa de conversión (leads)
6%
PostHog
Clics a WhatsApp
50+/mes
PostHog event tracking
Tiempo promedio en sitio
>2 min
GA4 + Clarity
Bounce rate
<60%
GA4
Lighthouse Performance
>90
Lighthouse CI
Accessibility Score
100
Lighthouse CI

Fase 2
Métrica
Target
Herramienta
Tráfico mensual
1,000 visitantes
GA4
Ventas online
10-15/mes
Supabase (órdenes)
Tasa de conversión (ventas)
2.5%
GA4 E-commerce
Ticket promedio
$80,000 COP
Supabase analytics
Tasa de abandono de carrito
<70%
PostHog funnels
Tiempo hasta primera compra
<48h desde lead
Custom tracking
Customer Satisfaction
>4.5/5
Post-purchase survey


12. Risk Management
Riesgos Técnicos
Riesgo
Probabilidad
Impacto
Mitigación
Mercado Pago downtime
Media
Alto
Fallback a WhatsApp manual, status page
Supabase outage
Baja
Alto
Backups diarios, cache en CDN
Imágenes no optimizadas afectan performance
Alta
Medio
Automatizar compresión (Sharp), WebP obligatorio
Google Calendar no embebible
Media
Bajo
Fallback a link externo
Spam de formularios
Alta
Medio
reCAPTCHA v3 invisible, rate limiting

Riesgos de Negocio
Riesgo
Probabilidad
Impacto
Mitigación
Bajo tráfico inicial
Alta
Alto
Plan de marketing (SEO, ads, redes sociales)
Usuarios no completan formulario de lead
Media
Alto
A/B testing de formulario (largo vs corto)
Alta tasa de abandono en checkout
Media
Alto
Checkout en 1 página, guest checkout
Daniela saturada de leads
Baja
Medio
Automatizar respuestas iniciales con email


13. Launch Checklist
Pre-Launch (Fase 1)
Técnico:
Todas las páginas responsive (mobile/tablet/desktop)
Forms funcionando y validados
Analytics instalado y verificado (PostHog, GA4, Clarity)
SEO: Meta tags, sitemap, robots.txt
Performance: Lighthouse score >90
Accessibility: WCAG AA compliance
Error tracking: Sentry configurado
SSL habilitado (HTTPS)
Contenido:
Todos los productos cargados en Supabase (mínimo 12)
Imágenes optimizadas y subidas
Copy revisado y sin typos
Testimonios reales (mínimo 3)
Legal: Términos y Condiciones, Política de Privacidad
Testing:
E2E tests passing
Cross-browser testing (Chrome, Safari, Firefox)
Mobile testing (iOS, Android)
WhatsApp links verificados en dispositivos reales
Marketing:
Post de lanzamiento en Instagram preparado
Email a lista actual de clientes (si existe)
Google Business Profile actualizado
Link en bio de Instagram

Pre-Launch (Fase 2)
Técnico:
Mercado Pago en producción (salir de sandbox)
Webhooks configurados y testeados
Emails transaccionales funcionando
Admin dashboard accesible solo para Daniela
Legal & Compliance:
Política de devoluciones publicada
Información de envíos clara
Cumplimiento con normativas de e-commerce en Colombia
Testing de Pagos:
Compra de prueba real con tarjeta de crédito
Compra de prueba con PSE
Verificar emails de confirmación
Verificar actualización de estado en admin

14. Post-Launch Plan
Semana 1-2 Post-Launch
Monitoreo intensivo: Revisar Sentry diariamente para errores
Analytics review: Verificar que todos los eventos se trackean
User feedback: Encuesta rápida a primeros usuarios (opcional)
Hotfixes: Resolver bugs críticos en <24h
Mes 1
A/B Testing: Testar variaciones de CTAs (color, texto)
Content Marketing: Publicar primer blog post sobre macramé (SEO)
Social Proof: Agregar testimonios nuevos de estudiantes
Mes 2-3
Optimización de conversión: Analizar funnel con PostHog, identificar drop-offs
Email Marketing: Implementar flujo de nurturing para leads no convertidos
SEO: Crear contenido adicional (guías, tutoriales)
Trimestre 1
Feature Iteration: Basado en feedback, priorizar features de Fase 3 (si aplica)
Expansion: Considerar marketplace externo (Instagram Shop, Etsy)
Community Building: Fortalecer comunidad en WhatsApp/NAS

15. Maintenance & Support
Mantenimiento Continuo
Mensual:
Backup manual de Supabase (adicional a automáticos)
Review de analytics y KPIs
Actualizar productos destacados
Publicar nuevo testimonio
Trimestral:
Actualizar dependencias de npm (security patches)
Lighthouse audit y optimizaciones
Review de SEO (keywords, rankings)
Anual:
Renovar dominio y certificados
Major version updates (Next.js, React)
Rediseño parcial (si se requiere)
Soporte a Daniela
Documentación entregada:
Manual de uso del admin dashboard (video + escrito)
Guía de respuesta a leads (templates)
Troubleshooting común
Canal de soporte:
Email: dev@rosaceleste.com
Tiempo de respuesta: <48h para bugs no críticos, <4h para críticos

16. Budget & Resources
Costos Mensuales Estimados (Fase 1)
Servicio
Costo Mensual (USD)
Notas
Vercel
$0 (Hobby)
Gratis hasta 100GB bandwidth
Supabase
$0 (Free tier)
Gratis hasta 500MB DB + 1GB storage
Mercado Pago
Comisión por venta
~3.5% + $0.50 por transacción
Resend
$0 (Free tier)
Gratis hasta 3,000 emails/mes
PostHog
$0 (Free tier)
Gratis hasta 1M eventos/mes
Sentry
$0 (Free tier)
Gratis hasta 5K errores/mes
Dominio
~$12/año
.com
TOTAL FASE 1
~$1/mes
Sin comisiones de venta

Costos Mensuales Estimados (Fase 2)
Servicio
Costo Mensual (USD)
Todo lo anterior
$1
Mercado Pago (15 ventas)
~$50 en comisiones
TOTAL FASE 2
~$51/mes

Nota: Costos escalarán si tráfico/ventas aumentan significativamente

17. Appendix
A. Glosario Técnico
MVP: Minimum Viable Product (producto mínimo viable)
CTA: Call to Action (llamado a la acción)
E2E: End-to-End (pruebas de extremo a extremo)
RLS: Row Level Security (seguridad a nivel de fila en Supabase)
Webhook: Endpoint que recibe notificaciones automáticas de servicios externos
B. Referencias
Next.js Documentation
HeroUI Components
Mercado Pago Developers
Supabase Docs

---

## 18. PRÓXIMOS PASOS Y PLAN DE ACCIÓN

**Actualizado:** 13 de Febrero, 2026

### Inmediato (Esta Semana)
1. ✅ **Completar rediseño del homepage** (En progreso)
   - Actualizar paleta de colores
   - Integrar Magic UI components
   - Optimizar secciones existentes

### Corto Plazo (Próximas 2 Semanas)

#### Semana 1: Base de Datos y Configuración
- [ ] **Crear/Verificar tablas en Supabase**
  - Verificar schema completo de `products`
  - Crear tabla `leads` (CRÍTICO)
  - Crear tabla `testimonials`
  - Seed de datos iniciales (mínimo 12 productos)

- [ ] **Configurar Resend**
  - Obtener API key
  - Crear templates de email
  - Configurar dominio de envío

- [ ] **Configurar Analytics**
  - Finalizar configuración PostHog
  - Instalar Google Analytics 4
  - Instalar Microsoft Clarity
  - Implementar tracking de eventos clave

#### Semana 2: Página /clases (PRIORIDAD P0)
- [ ] **Implementar página /clases**
  - Layout con 2 secciones (Presenciales/Virtuales)
  - Copy según documento
  - Google Calendar embebido
  - Formulario de reserva con React Hook Form + Zod
  - Integración Supabase (guardar leads)
  - Integración Resend (email a Daniela)
  - Toast de confirmación

### Mediano Plazo (Semanas 3-4)

#### Páginas Restantes
- [ ] **Implementar /experiencias**
  - Galería de fotos de talleres
  - Copy completo
  - CTA WhatsApp

- [ ] **Implementar /sobre-nosotros**
  - Historia de Rosaceleste
  - Filosofía del macramé consciente
  - Información sobre Daniela

- [ ] **Implementar /contacto**
  - Formulario de contacto
  - Información de contacto
  - Integración WhatsApp y redes sociales

#### SEO y Performance
- [ ] **SEO Básico**
  - Meta tags dinámicos por página
  - Sitemap.xml automático
  - Robots.txt
  - Schema.org markup para productos

- [ ] **Optimizaciones**
  - Optimización de imágenes (WebP, lazy loading)
  - Lighthouse audit (target > 90)
  - Core Web Vitals

#### Testing
- [ ] **Testing Crítico**
  - E2E: Home → Productos → WhatsApp
  - E2E: Clases → Formulario → Confirmación
  - Accessibility audit (WCAG AA)
  - Cross-browser testing

### Largo Plazo (Mes 2+)

#### Completar MVP
- [ ] Verificar todos los criterios de aceptación Sprint 3
- [ ] Deploy a producción
- [ ] Monitoreo post-lanzamiento
- [ ] Recolección de feedback inicial

#### Preparación Fase 2
- [ ] Planificación de integración Mercado Pago
- [ ] Diseño de carrito de compras
- [ ] Diseño de dashboard administrativo

---

## 19. REGISTRO DE CAMBIOS

### v1.1 - 13 de Febrero, 2026
- ✅ Agregado: Sección de estado de implementación con progreso general (40%)
- ✅ Agregado: Indicadores de estado en todas las secciones de features (6.1-6.10)
- ✅ Agregado: Indicadores de progreso en sprints del roadmap
- ✅ Agregado: Sección de próximos pasos y plan de acción
- ✅ Agregado: Registro de cambios
- 📝 Identificado: Elementos críticos pendientes para MVP
- 📝 Priorizado: Tareas por urgencia e impacto

### v1.0 - 10 de Febrero, 2026
- Documento inicial creado
- Definición completa de requisitos FASE 1 y FASE 2
- Roadmap de desarrollo
- Especificaciones técnicas

---

Documento creado: Febrero 10, 2026
Versión: 1.1
Última actualización: Febrero 13, 2026
Próxima revisión: Post-Rediseño Homepage (Semana actual)

