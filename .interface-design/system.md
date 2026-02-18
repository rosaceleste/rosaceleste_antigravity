# Design System

## Direction
**Personality:** Warmth & Approachability (Calidez y Accesibilidad)
**Foundation:** Warm (Soft Beige bases)
**Depth:** Subtle Shadows + Texture (Tactile feel)
**Radius:** Soft (8px - 12px) for containers, Full (Pill) for buttons

## Tokens

### Spacing
Base: 4px
Scale:
- 4px (1) - Micro spacing
- 8px (2) - Icon gaps
- 16px (4) - Component internal padding
- 24px (6) - Card padding
- 32px (8) - Block separation
- 64px (16) - Section spacing

### Colors
**Palette (Rosaceleste):**
- Deep Teal: #2C5F5D
- Soft Beige: #F5F1E8
- Terracotta: #C97D60
- Neutral Light: #FAFAFA
- Neutral Dark: #1A1A1A

**Semantic Map:**
--foreground: #1A1A1A (Neutral Dark)
--background: #FAFAFA (Neutral Light)
--primary: #2C5F5D (Deep Teal)
--primary-foreground: #FFFFFF
--secondary: #F5F1E8 (Soft Beige)
--secondary-foreground: #2C5F5D
--accent: #C97D60 (Terracotta)
--accent-foreground: #FFFFFF
--muted: #4A4A4A (Muted Grey)
--muted-foreground: #FAFAFA
--border: rgba(0, 0, 0, 0.08)
--input: rgba(0, 0, 0, 0.08)
--ring: #2C5F5D

### Radius
- sm: 4px
- md: 8px (Cards, Inputs)
- lg: 12px (Modals)
- full: 9999px (Buttons, Badges)

## Patterns

### Button
- Height: 40px (default), 48px (lg)
- Radius: Full (Pill shape)
- Class: `rounded-full`
- Variants:
    - Primary: `bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all`
    - Secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`
    - Outline: `border-primary text-primary hover:bg-secondary`

### Card
- Padding: 24px (p-6)
- Radius: 8px (rounded-md) or 12px (rounded-lg) for larger cards
- Border: `border border-border/50`
- Shadow: `shadow-sm` hover `shadow-md`
- Background: `bg-white` or `bg-secondary/30`

### Hero Section
- Background: `bg-background` with optional warm texture
- Text: Primary Heading (Serif), Secondary Text (Sans, Muted)
- Actions: Primary Button + Secondary/Outline Button
