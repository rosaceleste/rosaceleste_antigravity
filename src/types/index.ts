export type Category = 'decoracion_mesa' | 'decoracion_pared' | 'uso_personal' | 'avanzado';

export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    category: Category;
    subcategory?: string;
    image_url: string[];
    production_time_days: number;
    is_featured: boolean;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export type InterestType = 'presencial' | 'online' | 'grupal' | 'individual' | 'producto';

export interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    interest_type: InterestType;
    message?: string;
    source: 'landing' | 'productos' | 'clases';
    status: 'new' | 'contacted' | 'converted' | 'lost';
    created_at: string;
}

export interface Testimonial {
    id: string;
    student_name: string;
    content: string;
    image_url?: string;
    rating: number;
    is_featured: boolean;
    created_at: string;
}
