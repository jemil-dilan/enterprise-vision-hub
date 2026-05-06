import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const FinalCTA = () => {
  const { lang } = useLanguage();
  const c = translations.finalCta;
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, hsl(161 70% 45% / 0.6) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(41 79% 50% / 0.5) 0%, transparent 45%)",
      }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 relative text-center max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
          {t(c.title, lang)}
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">{t(c.subtitle, lang)}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="gradient-accent text-secondary-foreground px-8 py-3.5 rounded-md font-heading font-bold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow">
            {t(c.primary, lang)} <ArrowRight size={18} />
          </Link>
          <Link to="/services" className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-md font-heading font-semibold hover:bg-primary-foreground/10 transition-colors">
            {t(c.secondary, lang)}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;