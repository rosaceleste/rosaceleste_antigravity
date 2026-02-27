# Reporte de Tokens de Diseño: Rosaceleste

Este reporte detalla el sistema visual de Rosaceleste, diseñado para transmitir calma, presencia y artesanía consciente a través de una paleta cálida y una tipografía premium.

---

## 🎨 1. Paleta de Colores

La paleta se divide en colores de marca para identidad y colores de sistema para la interfaz (UI).

### 1.1 Colores de Marca (Brand)
Estos colores definen la identidad visual y se usan para resaltar elementos clave.

| Token | Valor Hex | Uso |
| :--- | :--- | :--- |
| **Primary** | `#2C5F5D` | Deep Teal. Color principal usado en CTAs, logos y títulos importantes. |
| **Secondary** | `#F5F1E8` | Soft Beige. Usado en fondos de secciones y áreas que requieren calidez. |
| **Accent** | `#C97D60` | Terracotta. Color de acento para destacar badges, enlaces o detalles especiales. |

### 1.2 Colores de Interfaz (System)
Aseguran la legibilidad y la estructura de la aplicación.

| Token | Valor Hex | Uso |
| :--- | :--- | :--- |
| **Background** | `#FAFAFA` | Neutral Light Canvas. Fondo principal de todas las páginas. |
| **Foreground** | `#1A1A1A` | Neutral Dark Text. Color base para el texto del cuerpo y lectura. |
| **Muted** | `#4A4A4A` | Texto secundario o leyendas con menor jerarquía visual. |
| **Card** | `#FFFFFF` | Fondo de contenedores, tarjetas de productos y modales. |
| **Border** | `rgba(0,0,0,0.08)` | Líneas de división y bordes de inputs sutiles. |

---

## ✍️ 2. Tipografía

El sistema tipográfico combina la elegancia de una serif con la claridad de una sans-serif moderna.

### 2.1 Serif: Playfair Display
*   **Token:** `--font-serif` / `font-serif`
*   **Origen:** Google Fonts
*   **Uso:** Títulos (H1, H2, H3) y elementos de marca. Transmite elegancia y un aire clásico/artesanal.

### 2.2 Sans-Serif: Inter
*   **Token:** `--font-sans` / `font-sans`
*   **Origen:** Google Fonts
*   **Uso:** Texto de cuerpo, botones, navegación y formularios. Optimizado para legibilidad en pantallas digitales.

---

## 📐 3. Primitivas de UI (Layout & Shape)

| Categoría | Token | Valor |
| :--- | :--- | :--- |
| **Radius** | `--radius` | `0.5rem` (8px). Esquinas redondeadas suaves. |
| **Espaciado Navbar** | `pt-24` | Padding superior fijo en el layout para evitar solapamiento. |
| **Gaps Típicos** | Tailwind Utilities | Se usan múltiplos de 4 (gap-4, gap-8, gap-12) para consistencia. |

---

## ✨ 4. Animaciones y Micro-Interacciones

El proyecto utiliza un sistema mixto de animaciones para mejorar la experiencia de usuario:

*   **Marquee:** Animaciones de texto e imágenes deslizantes infinitas (ej. Slider de logos).
*   **Gradient:** Fondo animado suavemente para añadir dinamismo (`.animate-gradient`).
*   **Framer Motion:** Transiciones de escala en botones flotantes (`hover:scale-110`) y aparición suave de modales (`initial/animate/exit`).
*   **Backdrop Blur:** Efecto de cristal esmerilado en el Navbar y modales para mantener el foco.

---

## 🛠️ 5. Implementación Técnica

Estos tokens están centralizados principalmente en:
1.  **`src/app/globals.css`**: Definición de variables CSS nativas (`:root`).
2.  **`src/app/layout.tsx`**: Carga de tipografías de Google y aplicación de clases globales al `<body>`.
3.  **Tailwind Utility Classes**: Consumo de estos tokens mediante clases como `bg-primary`, `text-secondary`, `font-serif`, etc.
