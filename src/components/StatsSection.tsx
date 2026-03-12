import { motion } from "framer-motion";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const StatsSection = () => {
  const { lang } = useLanguage();
  const s = translations.stats;

  const stats = [
    { value: "500+", label: t(s.clients, lang) },
    { value: "15+", label: t(s.experience, lang) },
    { value: "4", label: t(s.keyServices, lang) },
    { value: "24/7", label: t(s.support, lang) },
  ];

  return (
    <section className="py-16 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-black text-primary-foreground">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
