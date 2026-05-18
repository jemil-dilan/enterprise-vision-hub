import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { lang } = useLanguage();
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "D&C Agro",
    image: "https://dnc-agro.lovable.app/og-image.jpg",
    url: "https://dnc-agro.lovable.app/contact",
    telephone: "+237698737950",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Akwa, MTN Commercial, face Restaurant La Petite Villageoise",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    areaServed: "CM",
    sameAs: [],
  };
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={lang === "fr" ? "Contact D&C Agro Douala | Devis Shipchandler sous 24h" : "Contact D&C Agro Douala | Shipchandler Quote within 24h"}
        description={lang === "fr"
          ? "Contactez D&C Agro à Douala (Akwa) : devis shipchandler, agro-industriel ou logistique au Cameroun. Réponse sous 24h, WhatsApp +237 698 737 950."
          : "Contact D&C Agro in Douala (Akwa): shipchandler, agro-industrial or logistics quote in Cameroon. Reply within 24h, WhatsApp +237 698 737 950."}
        canonical="/contact"
        keywords={lang === "fr"
          ? "contact D&C Agro Douala, devis shipchandler Cameroun, devis agro-industriel, contact entreprise Douala Akwa, WhatsApp shipchandler"
          : "contact D&C Agro Douala, shipchandler quote Cameroon, agro-industrial quote, Douala Akwa company contact, WhatsApp shipchandler"}
        jsonLd={localBusinessJsonLd}
      />
      <Navbar />
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, hsl(161 70% 45% / 0.5), transparent 45%), radial-gradient(circle at 75% 50%, hsl(41 79% 50% / 0.4), transparent 45%)",
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="container mx-auto px-4 relative text-center"
        >
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">D&C Agro</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">
            {lang === "fr" ? "Contactez-" : "Contact "}<span className="text-gradient-gold">{lang === "fr" ? "nous" : "us"}</span>
          </h1>
          <p className="text-primary-foreground/80 mt-5 max-w-2xl mx-auto text-lg">
            {lang === "fr"
              ? "Une question, un devis, un partenariat ? Notre équipe vous répond sous 24 heures."
              : "A question, a quote, a partnership? Our team replies within 24 hours."}
          </p>
        </motion.div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;