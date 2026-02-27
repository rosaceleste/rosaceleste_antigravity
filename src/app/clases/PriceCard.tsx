
import React from 'react'

interface PriceCardProps {
    name: string
    price: string
    description: string
    notice?: string
}

export const PriceCard = ({ name, price, description, notice }: PriceCardProps) => (
    <div className="p-5 bg-white border border-[rgba(0,0,0,0.08)] rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h4 className="font-serif text-lg text-[#2C5F5D]">{name}</h4>
        <div className="font-bold text-xl text-[#1A1A1A] mt-1">{price}</div>
        <p className="text-sm text-[#4A4A4A] mt-1">({description})</p>
        {notice && <p className="text-xs text-[#C97D60] mt-2 italic">{notice}</p>}
    </div>
)
