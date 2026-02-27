# Roadmap de Implementación - Rosaceleste MVP

Basado en la revisión del código y el plan de implementación, los siguientes _Issues_ (tareas principales) y _Sub-issues_ (subtareas) representan el trabajo pendiente para finalizar el MVP del proyecto web.

Como la conexión con Linear no arrojó el proyecto correcto, usaremos este documento para rastrear el progreso de las asignaciones que ejecutaré una por una.

---

## 🚀 Issue 1: Rendimiento y Optimización de Carga (Performance)
El objetivo de este issue es mejorar los Core Web Vitals, reduciendo el CLS (Cumulative Layout Shift) y optimizando el FCP (First Contentful Paint).

- [x] **Sub-issue 1.1:** Arreglar anclaje de altura en `SkeletonCard.tsx` para evitar saltos en la interfaz cuando cargan las imágenes (CLS). _(N/A - Componente no existe en la versión actual)_
- [x] **Sub-issue 1.2:** Implementar carga perezosa (`dynamic` import de Next.js) para componentes visuales pesados que no son críticos para el primer renderizado, como `AuroraBackground` y `cobe` (globo terráqueo). _(N/A - Componentes no existen en la versión actual)_
- [x] **Sub-issue 1.3:** Verificar y, de ser necesario, optimizar la inicialización tardía de los scripts de analítica (PostHog, GA4, Clarity) para no bloquear el hilo principal. _(Refactorizado usando `next/script`)_

---

## 🔍 Issue 2: SEO, Metadatos y Accesibilidad
Asegurar que el proyecto esté listo para indexación y compartir en redes sociales de manera óptima.

- [x] **Sub-issue 2.1:** Revisar y generar los archivos estáticos de SEO necesarios: `sitemap.ts` (dinámico para productos y estático para páginas clave) y `robots.txt`.
- [x] **Sub-issue 2.2:** Asegurarse de que el RootLayout tenga valores base sólidos para Open Graph (`og:image`, `twitter:card`). _(Nota: Los placeholders están listos, las imágenes reales deben ser subidas a `/public` como `og-image.jpg` y `og-home.jpg`)_.
- [x] **Sub-issue 2.3:** Implementar metadatos dinámicos (`generateMetadata`) en las páginas de producto individual (`/productos/[slug]`).
- [x] **Sub-issue 2.4:** Agregar _Schema.org markup_ (JSON-LD) básico para `Organization` en el index y `Product` en los detalles de productos.

---

## 🧪 Issue 3: End-to-End Testing (Playwright)
Validar que los flujos críticos de usuario no se rompan tras las actualizaciones de la base de datos y refactorizaciones de componentes.

- [x] **Sub-issue 3.1:** Configurar Playwright y crear un test suite básico de navegación (apertura del home, clases, acerca de).
- [x] **Sub-issue 3.2:** Crear un test para el formulario de la "Comunidad" simulando la captura del lead.
- [x] **Sub-issue 3.3:** Crear un test para el flujo de producto: Navegar del Home -> Lista de Productos -> Detalle de un Producto -> Clic en el botón CTA de "Comprar / WhatsApp" garantizando que el enlace se forme correctamente.

---

## 🧹 Issue 4: Limpieza y Despliegue (Deploy Prep)
Preparación final antes del lanzamiento a producción en Vercel.

- [ ] **Sub-issue 4.1:** Ejecutar `npm run build` y limpiar cualquier _Warning_ de React/Next.js (incluyendo problemas de hidratación si los hubiera).
- [ ] **Sub-issue 4.2:** Limpieza de código muerto (eliminar importaciones sin uso, variables no declaradas o consolas).
- [ ] **Sub-issue 4.3:** Actualizar el archivo `README.md` y la documentación local si es necesario.

---

### Instrucciones para Desarrollo:
Dime por cuál de estos *Issues* quieres que comience (ejemplo: _"Empieza por el Issue 1"_) y yo desarrollaré una por una las tareas correspondientes, sometiéndolas a tu revisión.
