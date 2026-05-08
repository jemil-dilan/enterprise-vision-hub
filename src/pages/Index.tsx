import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import StatsSection from "@/components/StatsSection";
import FounderTeamSection from "@/components/FounderTeamSection";
import AboutSection from "@/components/AboutSection";
import RealisationsTeaser from "@/components/RealisationsTeaser";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <ServicesSection />
      <AdvantagesSection />
      <StatsSection />
      <FounderTeamSection />
      <AboutSection />
      <RealisationsTeaser />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
