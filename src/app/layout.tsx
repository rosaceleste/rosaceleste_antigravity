import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/components/providers/root-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { FloatingVideo } from "@/components/layout/FloatingVideo";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rosaceleste.vercel.app'),
  title: {
    default: 'Rosaceleste | Macramé Consciente',
    template: '%s | Rosaceleste',
  },
  description: 'Cursos, productos y experiencias de bienestar a través del macramé. Aprende a tejer desde la calma y la presencia.',
  keywords: ['macramé', 'cursos de macramé', 'productos artesanales', 'bienestar', 'mindfulness', 'tejido a mano', 'Colombia', 'Buga'],
  authors: [{ name: 'Daniela Sierra — Rosaceleste' }],
  openGraph: {
    title: 'Rosaceleste | Macramé Consciente',
    description: 'Cursos, productos y experiencias de bienestar a través del macramé.',
    url: 'https://rosaceleste.vercel.app',
    siteName: 'Rosaceleste',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Rosaceleste — Macramé Consciente',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rosaceleste | Macramé Consciente',
    description: 'Cursos, productos y experiencias de bienestar a través del macramé.',
    images: ['/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `,
          }}
        />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <RootProvider>
          <Navbar />
          <main className="pt-24 min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <FloatingVideo />
          <FloatingWhatsApp />
        </RootProvider>
      </body>
    </html>
  );
}
