'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import ReactCountryFlag from "react-country-flag"
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Loader2 } from 'lucide-react'
import posthog from 'posthog-js'

// Country Data - Top LATAM + Global
const COUNTRIES = [
    { code: 'CO', name: 'Colombia', dial: '+57' },
    { code: 'MX', name: 'México', dial: '+52' },
    { code: 'AR', name: 'Argentina', dial: '+54' },
    { code: 'PE', name: 'Perú', dial: '+51' },
    { code: 'CL', name: 'Chile', dial: '+56' },
    { code: 'EC', name: 'Ecuador', dial: '+593' },
    { code: 'GT', name: 'Guatemala', dial: '+502' },
    { code: 'CU', name: 'Cuba', dial: '+53' },
    { code: 'BO', name: 'Bolivia', dial: '+591' },
    { code: 'DO', name: 'Rep. Dominicana', dial: '+1' },
    { code: 'HN', name: 'Honduras', dial: '+504' },
    { code: 'PY', name: 'Paraguay', dial: '+595' },
    { code: 'SV', name: 'El Salvador', dial: '+503' },
    { code: 'NI', name: 'Nicaragua', dial: '+505' },
    { code: 'CR', name: 'Costa Rica', dial: '+506' },
    { code: 'PA', name: 'Panamá', dial: '+507' },
    { code: 'UY', name: 'Uruguay', dial: '+598' },
    { code: 'VE', name: 'Venezuela', dial: '+58' },
    { code: 'US', name: 'Estados Unidos', dial: '+1' },
    { code: 'ES', name: 'España', dial: '+34' },
    { code: 'OTHER', name: 'Otro', dial: '' },
]

// Schema Validation
const formSchema = z.object({
    name: z.string().min(2, 'El nombre es requerido'),
    lastName: z.string().min(2, 'El apellido es requerido'),
    country: z.string().min(1, 'Selecciona un país'),
    whatsapp: z.string().refine((val) => {
        try {
            return isValidPhoneNumber(val)
        } catch (e) {
            return false
        }
    }, {
        message: 'WhatsApp debe incluir indicativo de país (ej: +57 para Colombia)',
    }),
    email: z.string().email('Email inválido'),
})

export function JoinCommunityForm({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            lastName: '',
            country: '',
            whatsapp: '',
            email: '',
        },
    })

    // Auto-fill phone prefix when country changes
    const selectedCountry = form.watch('country')
    useEffect(() => {
        if (selectedCountry) {
            const countryData = COUNTRIES.find(c => c.name === selectedCountry)
            if (countryData && countryData.dial) {
                const currentPhone = form.getValues('whatsapp')
                // Only set if empty or doesn't start with dial code
                if (!currentPhone || !currentPhone.startsWith(countryData.dial)) {
                    form.setValue('whatsapp', countryData.dial + ' ')
                }
            }
        }
    }, [selectedCountry, form])

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
            // Get PostHog distinct ID and session ID to pass to server for correlation
            const distinctId = posthog.get_distinct_id()
            const sessionId = posthog.get_session_id()

            // 1. Submit to API (Google Sheets + Supabase + Email)
            const response = await fetch('/api/join-community', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-POSTHOG-DISTINCT-ID': distinctId || '',
                    'X-POSTHOG-SESSION-ID': sessionId || '',
                },
                body: JSON.stringify(values),
            })

            const data = await response.json()

            if (!response.ok) throw new Error(data.error || 'Error al unirse')

            // Identify user in PostHog using email as distinct ID
            posthog.identify(values.email, {
                name: values.name,
                lastName: values.lastName,
                country: values.country,
                whatsapp: values.whatsapp,
            })

            // Capture successful form submission
            posthog.capture('community_form_submitted', {
                country: values.country,
                has_whatsapp: !!values.whatsapp,
            })

            // 2. Success Interaction
            setOpen(false)

            // 3. Open Community URL in new Tab
            window.open("https://nas.io/rosaceleste", "_blank", "noopener,noreferrer")

        } catch (error) {
            console.error(error)
            // Capture exception for error tracking
            posthog.captureException(error)
        } finally {
            setIsLoading(false)
        }
    }

    // Handle dialog open/close and track form opened event
    const handleOpenChange = (newOpen: boolean) => {
        if (newOpen && !open) {
            // Capture when user opens the community form dialog
            posthog.capture('community_form_opened')
        }
        setOpen(newOpen)
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-[#FAFAFA] to-[#F5F1E8] border-none shadow-2xl rounded-2xl p-8 max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mb-6 text-center">
                    <DialogTitle className="font-serif text-3xl text-[#2C5F5D] mb-2">
                        Únete a la Comunidad
                    </DialogTitle>
                    <DialogDescription className="text-[#4A4A4A] font-light">
                        Recibe inspiración, tutoriales y conecta con tejedoras de todo el mundo.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs uppercase tracking-widest text-[#1A1A1A]">Nombre</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ej: Ana" {...field} className="bg-white/80 border-[#1A1A1A]/10 focus:border-[#2C5F5D] rounded-lg h-11" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs uppercase tracking-widest text-[#1A1A1A]">Apellido</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ej: García" {...field} className="bg-white/80 border-[#1A1A1A]/10 focus:border-[#2C5F5D] rounded-lg h-11" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs uppercase tracking-widest text-[#1A1A1A]">País</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-white/80 border-[#1A1A1A]/10 focus:border-[#2C5F5D] rounded-lg h-11">
                                                <SelectValue placeholder="Selecciona tu país" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-white border-[#1A1A1A]/10 shadow-xl max-h-[300px]">
                                            {COUNTRIES.map((c) => (
                                                <SelectItem key={c.name} value={c.name} className="focus:bg-[#F5F1E8] focus:text-[#2C5F5D] cursor-pointer">
                                                    <div className="flex items-center gap-2">
                                                        {c.code !== 'OTHER' && (
                                                            <ReactCountryFlag countryCode={c.code} svg style={{ width: '1.2em', height: '1.2em' }} />
                                                        )}
                                                        <span>{c.name}</span>
                                                        <span className="text-gray-400 text-xs ml-auto">{c.dial}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="whatsapp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs uppercase tracking-widest text-[#1A1A1A]">WhatsApp</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="+57 300 123 4567"
                                            {...field}
                                            className="bg-white/80 border-[#1A1A1A]/10 focus:border-[#2C5F5D] rounded-lg h-11 font-mono text-sm"
                                        />
                                    </FormControl>
                                    <p className="text-[10px] text-gray-400 mt-1">
                                        *Debe incluir el código de país (ej: +57)
                                    </p>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs uppercase tracking-widest text-[#1A1A1A]">Correo Electrónico</FormLabel>
                                    <FormControl>
                                        <Input placeholder="tu@email.com" {...field} className="bg-white/80 border-[#1A1A1A]/10 focus:border-[#2C5F5D] rounded-lg h-11" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full relative overflow-hidden bg-gradient-to-r from-[#9D695A] via-[#2C5F5D] to-[#80C2AF] hover:opacity-90 text-white rounded-full h-12 mt-6 font-medium tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.02]"
                            disabled={isLoading}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Uniendo...
                                    </>
                                ) : (
                                    "¡UNIRME YA!"
                                )}
                            </span>
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
