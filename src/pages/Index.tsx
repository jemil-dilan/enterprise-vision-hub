import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
