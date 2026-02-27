import { Product, Testimonial } from "@/types";

export const MOCK_PRODUCTS: Partial<Product>[] = [
    {
        id: '1',
        name: 'Tapiz de Pared "Calma"',
        slug: 'tapiz-calma',
        price: 4500,
        category: 'decoracion_pared',
        image_url: ['https://images.unsplash.com/photo-1544413647-b5156d953941?auto=format&fit=crop&q=80&w=400'],
        production_time_days: 15,
    },
    {
        id: '2',
        name: 'Individual de Mesa "Vínculo"',
        slug: 'individual-vinculo',
        price: 1200,
        category: 'decoracion_mesa',
        image_url: ['https://images.unsplash.com/photo-1617500603321-bc0004f1a4e1?auto=format&fit=crop&q=80&w=400'],
        production_time_days: 7,
    },
    {
        id: '3',
        name: 'Colgante para Plantas "Raíz"',
        slug: 'colgante-raiz',
        price: 2200,
        category: 'decoracion_pared',
        image_url: ['https://images.unsplash.com/photo-1594913366159-1832ebbee39a?auto=format&fit=crop&q=80&w=400'],
        production_time_days: 10,
    }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'María García',
        role: 'Alumna', // Added role to satisfy type
        content: 'Las clases de Daniela son un viaje de ida. No solo aprendí la técnica, sino que encontré un espacio de meditación activa increíble.',
        rating: 5,
        is_featured: true,
        created_at: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Lucía Pérez',
        role: 'Cliente', // Added role
        content: 'El tapiz que compré para mi living transformó totalmente el ambiente. Se nota el amor y la dedicación en cada nudo.',
        rating: 5,
        is_featured: true,
        created_at: new Date().toISOString(),
    }
];
