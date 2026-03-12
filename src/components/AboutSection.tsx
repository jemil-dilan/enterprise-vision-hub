import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const AboutSection = () => {
  const { lang } = useLanguage();
  const a = translations.about;
  const highlights = t(a.highlights, lang);

  return (
    <section id="apropos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">{t(a.tagline, lang)}</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">{t(a.title, lang)}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t(a.p1, lang)}</p>
            <p className="text-muted-foreground leading-relaxed">{t(a.p2, lang)}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-card rounded-lg p-8 shadow-card">
              <h3 className="text-lg font-heading font-bold text-foreground mb-6">{t(a.whyTitle, lang)}</h3>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
