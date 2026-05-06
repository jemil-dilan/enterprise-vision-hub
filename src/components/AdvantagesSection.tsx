import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, HeartHandshake } from "lucide-react";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [ShieldCheck, Zap, Award, HeartHandshake];

const AdvantagesSection = () => {
  const { lang } = useLanguage();
  const a = translations.advantages;
  const items = t(a.items, lang);

  return (
    <section className="py-24 bg-muted/40 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-[0.18em] mb-2">{t(a.tagline, lang)}</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">{t(a.title, lang)}</h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((it, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-all border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{it.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;