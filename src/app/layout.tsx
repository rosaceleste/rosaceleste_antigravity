import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/components/providers/root-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rosaceleste.com'),
  title: {
    default: "Rosaceleste | El Camino del Tejido",
    template: "%s | Rosaceleste"
  },
  description: "Macramé consciente y experiencias de bienestar artesanal. Aprende a tejer desde la calma y la presencia.",
  keywords: ["macramé", "tejido", "bienestar", "cursos", "decoración", "artesanía", "colombia"],
  authors: [{ name: "Rosaceleste" }],
  creator: "Rosaceleste",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://rosaceleste.com",
    title: "Rosaceleste | El Camino del Tejido",
    description: "Macramé consciente y experiencias de bienestar artesanal.",
    siteName: "Rosaceleste",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public
        width: 1200,
        height: 630,
        alt: "Rosaceleste - Macramé Consciente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosaceleste | El Camino del Tejido",
    description: "Macramé consciente y experiencias de bienestar artesanal.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-[#FAFAFA] text-[#1A1A1A]`}
      >
        <RootProvider>
          <Navbar />
          <main className="pt-24 min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </RootProvider>
      </body>
    </html>
  );
}
