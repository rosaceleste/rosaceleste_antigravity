// Site-wide constants and configuration
export const SITE_CONFIG = {
    name: 'Rosaceleste',
    tagline: 'Macramé consciente desde Colombia',
    description: 'Cursos, productos y experiencias de bienestar a través de la práctica creativa del tejido a mano.',
    url: 'https://rosaceleste.com',
    location: 'Guadalajara de Buga, Colombia',
} as const;

export const CONTACT = {
    whatsapp: {
        number: '+573017870521',
        displayNumber: '+57 301 787 0521',
        url: 'https://wa.me/573017870521',
    },
    email: 'rosacelestemacrame@gmail.com',
    social: {
        instagram: 'https://www.instagram.com/rosacelestemacrame',
        tiktok: 'https://www.tiktok.com/@rosacelestemacrame',
        youtube: 'https://www.youtube.com/@rosacelestemacrame',
    },
} as const;

export const WHATSAPP_MESSAGES = {
    general: 'Hola Rosaceleste! Me gustaría conocer más sobre...',
    classes: 'Hola! Me gustaría información sobre las clases de macramé.',
    products: 'Hola! Me interesa conocer más sobre los productos disponibles.',
    experiences: 'Hola! Me gustaría conocer más sobre las experiencias grupales y las próximas fechas disponibles.',
    booking: 'Hola! Me gustaría reservar una clase de macramé.',
} as const;

export const NAV_LINKS = [
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/productos' },
    { label: 'Clases', href: '/clases' },
    { label: 'Experiencias', href: '/experiencias' },
    { label: 'Sobre Mí', href: '/sobre-nosotros' },
] as const;

export const FOOTER_LINKS = {
    explore: [
        { label: 'Productos', href: '/productos' },
        { label: 'Clases', href: '/clases' },
        { label: 'Experiencias', href: '/experiencias' },
        { label: 'Sobre Mí', href: '/sobre-nosotros' },
        { label: 'Contacto', href: '#contacto' },
    ],
    legal: [
        { label: 'Términos y Condiciones', href: '/terminos' },
        { label: 'Política de Privacidad', href: '/privacidad' },
    ],
} as const;

export const PRODUCT_CATEGORIES = {
    decoracion_mesa: {
        title: 'Decoración de mesa',
        items: ['Portavasos/Portavelas', 'Individuales', 'Portaservilletas'],
    },
    decoracion_pared: {
        title: 'Decoración de pared',
        items: ['Telares', 'Tapices de hojas', 'Espejos', 'Lámparas', 'Portalibros', 'Portamacetas'],
    },
    uso_personal: {
        title: 'De uso personal',
        items: ['Chaleco', 'Bolsos'],
    },
    avanzado: {
        title: 'Cuando te conviertes en una experta',
        items: ['Camino de mesa', 'Cortinas', 'Telares grandes', 'Hamaca', 'Biombo'],
    },
} as const;
