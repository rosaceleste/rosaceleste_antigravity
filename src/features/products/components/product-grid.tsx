'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Product } from '@/types'
import { ProductCard } from './product-card'
import { Button } from '@/components/ui/button'

interface ProductGridProps {
    initialProducts: Product[]
}

type CategoryFilter = 'all' | 'decoracion_pared' | 'decoracion_mesa' | 'decoracion_hogar' | 'uso_personal'

const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'Todos' },
    { key: 'decoracion_pared', label: 'Decoración de pared' },
    { key: 'decoracion_mesa', label: 'Decoración de mesa' },
    { key: 'decoracion_hogar', label: 'Decoración del hogar' },
    { key: 'uso_personal', label: 'Uso personal' },
]

export function ProductGrid({ initialProducts }: ProductGridProps) {
    const [products, setProducts] = useState<Product[]>(initialProducts)
    const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all')
    const [sortBy, setSortBy] = useState<'popular' | 'price_asc' | 'price_desc'>('popular')

    // Auto-refresh every 30 seconds to pick up new products from the sheet
    const refreshProducts = useCallback(async () => {
        try {
            const res = await fetch('/api/products', { cache: 'no-store' })
            if (res.ok) {
                const data = await res.json()
                setProducts(data)
            }
        } catch {
            // Silently fail — keep showing current products
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(refreshProducts, 30_000)
        return () => clearInterval(interval)
    }, [refreshProducts])

    const filteredProducts = products
        .filter(p => {
            if (selectedCategory === 'all') return true
            if (selectedCategory === 'decoracion_hogar') {
                // "Decoración del hogar" catches both pared and mesa
                return p.category === 'decoracion_pared' || p.category === 'decoracion_mesa' || p.category === 'avanzado'
            }
            return p.category === selectedCategory
        })
        .sort((a, b) => {
            if (sortBy === 'price_asc') return a.price - b.price
            if (sortBy === 'price_desc') return b.price - a.price
            return 0
        })

    return (
        <div className="flex flex-col gap-8">
            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <Button
                            key={cat.key}
                            variant={selectedCategory === cat.key ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedCategory(cat.key)}
                            className="rounded-full"
                        >
                            {cat.label}
                        </Button>
                    ))}
                </div>

                {/* Sort */}
                <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm text-muted-foreground hidden md:block">Ordenar:</span>
                    <select
                        className="h-10 px-3 bg-background border border-border rounded-lg text-sm text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    >
                        <option value="popular">Más Popular</option>
                        <option value="price_asc">Precio: Menor a Mayor</option>
                        <option value="price_desc">Precio: Mayor a Menor</option>
                    </select>
                </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
            </p>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="py-24 text-center">
                    <p className="text-xl text-muted-foreground">No encontramos productos en esta categoría.</p>
                    <Button
                        variant="link"
                        onClick={() => setSelectedCategory('all')}
                        className="mt-4 text-primary"
                    >
                        Ver todos los productos
                    </Button>
                </div>
            )}
        </div>
    )
}
