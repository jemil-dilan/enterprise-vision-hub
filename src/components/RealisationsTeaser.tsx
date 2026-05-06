import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import img1 from "@/assets/service-ship.jpg";
import img2 from "@/assets/service-agri.jpg";
import img3 from "@/assets/service-delivery.jpg";

const images = [img1, img2, img3];

const RealisationsTeaser = () => {
  const { lang } = useLanguage();
  const r = translations.realisations;
  const items = t(r.items, lang);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-[0.18em] mb-2">{t(r.tagline, lang)}</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">{t(r.title, lang)}</h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={images[i]} alt={it.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">{it.subtitle}</p>
                <h3 className="font-heading font-bold text-xl">{it.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisationsTeaser;