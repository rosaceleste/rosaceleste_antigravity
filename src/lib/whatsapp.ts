// WhatsApp URL generator with proper encoding
export function getWhatsAppUrl(message: string, phone: string = '+573017870521'): string {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

// Predefined WhatsApp links
export const whatsappLinks = {
    general: getWhatsAppUrl('Hola Rosaceleste! Me gustaría conocer más sobre...'),
    classes: getWhatsAppUrl('Hola! Me gustaría información sobre las clases de macramé.'),
    products: getWhatsAppUrl('Hola! Me interesa conocer más sobre los productos disponibles.'),
    experiences: getWhatsAppUrl('Hola! Me gustaría conocer más sobre las experiencias grupales y las próximas fechas disponibles.'),
    booking: getWhatsAppUrl('Hola! Me gustaría reservar una clase de macramé.'),
} as const;
