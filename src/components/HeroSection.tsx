import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Réflexion · Innovation · Solutions
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground leading-tight max-w-4xl mx-auto">
            Votre partenaire en{" "}
            <span className="text-secondary">production</span> et{" "}
            <span className="text-secondary">développement</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-body">
            Approvisionnement agro-industriel, services maritimes shipchandler et solutions logistiques sur mesure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="gradient-accent text-secondary-foreground px-8 py-3.5 rounded-md font-heading font-bold text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Découvrir nos services <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-md font-heading font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
