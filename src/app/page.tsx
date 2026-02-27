import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/features/home/components/hero-section";
import { ValueProposition } from "@/features/home/components/value-proposition";
import { NarrativeSection } from "@/features/home/components/narrative-section";
import { ProductCarousel } from "@/features/home/components/product-carousel";
import { ExperiencesSection } from "@/features/home/components/experiences-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rosaceleste | Macramé y Bienestar Creativo",
  description: "Descubre el arte del macramé consciente. Productos hechos a mano, clases y experiencias de bienestar en Buga, Colombia.",
  openGraph: {
    title: "Rosaceleste | Macramé y Bienestar Creativo",
    description: "Conecta con tu creatividad a través del tejido. Productos, talleres y experiencias.",
    images: ["/og-home.jpg"],
  },
};

export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rosaceleste",
              url: "https://rosaceleste.com",
              logo: "https://rosaceleste.com/logo.png",
              description: "Macramé consciente y experiencias de bienestar artesanal.",
              sameAs: [
                "https://www.instagram.com/rosaceleste.macrame",
              ]
            })
          }}
        />
        <HeroSection />
        <ValueProposition />
        <NarrativeSection />
        <ProductCarousel />
        <ExperiencesSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
