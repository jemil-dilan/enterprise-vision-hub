import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AdvantagesSection = lazy(() => import("@/components/AdvantagesSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const FounderTeamSection = lazy(() => import("@/components/FounderTeamSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const RealisationsTeaser = lazy(() => import("@/components/RealisationsTeaser"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="h-32" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="D&C Agro | Shipchandler, Agro-industrie & Logistique en Afrique"
        description="D&C Agro : approvisionnement shipchandler 24/7, équipements agro-industriels, logistique et conseil. Partenaire de confiance des ports et exploitations."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "D&C Agro",
          url: "https://dnc-agro.lovable.app",
          logo: "https://dnc-agro.lovable.app/og-image.jpg",
          sameAs: [],
        }}
      />
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
        <AdvantagesSection />
        <StatsSection />
        <FounderTeamSection />
        <AboutSection />
        <RealisationsTeaser />
        <FinalCTA />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
