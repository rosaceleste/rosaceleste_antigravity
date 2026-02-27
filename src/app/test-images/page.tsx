'use client'

import React from 'react'

const targetUrls = [
    { name: "Tapiz Montaña", url: "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/tapiz-montana-1.jpg" },
    { name: "Portavasos corazón", url: "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/portavasos-corazon-1.jpg" },
    { name: "Chalecos", url: "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/chalecos-1.jpg" },
    { name: "Individuales redondos ancestral", url: "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/individuales-redondos-ancestral-1.jpg" }
];

export default function TestImagesPage() {
    return (
        <div style={{ padding: '40px', background: 'white', color: 'black' }}>
            <h1>Muestrario de Imágenes (Directas)</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {targetUrls.map((img) => (
                    <div key={img.name} style={{ border: '1px solid #ccc', padding: '10px' }}>
                        <h3>{img.name}</h3>
                        <img
                            src={img.url}
                            alt={img.name}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            onError={(e) => {
                                console.error(`Error loading ${img.name}:`, img.url);
                                e.currentTarget.style.border = '5px solid red';
                            }}
                            onLoad={() => console.log(`Loaded ${img.name}`)}
                        />
                        <p style={{ wordBreak: 'break-all', fontSize: '10px' }}>{img.url}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
