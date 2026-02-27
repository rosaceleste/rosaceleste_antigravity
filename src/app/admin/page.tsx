'use client'

import React, { useState } from 'react'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

export default function AdminPage() {
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')
    const [logs, setLogs] = useState<string[]>([])

    const handleSync = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('loading')
        setMessage('Iniciando sincronización...')
        setLogs([])

        try {
            const response = await fetch('/api/admin/migrate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-secret': password
                }
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.details || data.error || 'Error desconocido')
            }

            setStatus('success')
            setMessage(`¡Éxito! ${data.message}`)
            const resultLogs = [
                `Productos procesados: ${data.results.products.success} (Errores: ${data.results.products.error})`,
                `Testimonios procesados: ${data.results.testimonials.success} (Errores: ${data.results.testimonials.error})`
            ]
            setLogs(resultLogs)

        } catch (error) {
            setStatus('error')
            setMessage(error instanceof Error ? error.message : 'Error desconocido')
        }
    }

    return (
        <main className="min-h-screen pt-32 pb-24 bg-[#FAFAFA]">
            <Container>
                <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                    <h1 className="text-2xl font-serif text-[#2C5F5D] mb-6 text-center">
                        Panel de Administración
                    </h1>

                    <form onSubmit={handleSync} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-neutral-600">
                                Contraseña de Administrador
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Ingresa la contraseña"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#2C5F5D] hover:bg-[#1F4543] text-white"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Sincronizando...' : 'Sincronizar Catálogo'}
                        </Button>
                    </form>

                    {message && (
                        <div className={`mt-6 p-4 rounded-lg text-sm ${status === 'success' ? 'bg-green-50 text-green-700' :
                            status === 'error' ? 'bg-red-50 text-red-700' : 'bg-neutral-50 text-neutral-600'
                            }`}>
                            <p className="font-medium">{message}</p>
                            {logs.length > 0 && (
                                <ul className="mt-2 list-disc list-inside space-y-1 opacity-90">
                                    {logs.map((log, i) => (
                                        <li key={i}>{log}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
                        <p className="text-xs text-neutral-400">
                            Usa este panel para actualizar la web con los últimos cambios de tu Google Sheet.
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    )
}
