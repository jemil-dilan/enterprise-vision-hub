import { motion } from "framer-motion";
import { Ship, Tractor, Truck, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import serviceShip from "@/assets/service-ship.jpg";
import serviceAgri from "@/assets/service-agri.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";

const Services = () => {
  const { lang } = useLanguage();
  const s = translations.services;

  const items = [
    {
      id: "shipchandler", icon: Ship, title: t(s.shipchandler.title, lang), desc: t(s.shipchandler.desc, lang), img: serviceShip,
      points: lang === "fr"
        ? ["Pièces de rechange & équipements de pont", "Produits alimentaires & d'entretien", "Service d'urgence 24/7 dans les ports partenaires", "Documentation et conformité douanière"]
        : ["Spare parts & deck equipment", "Food & maintenance supplies", "24/7 emergency service in partner ports", "Documentation & customs compliance"],
    },
    {
      id: "agro", icon: Tractor, title: t(s.agricultural.title, lang), desc: t(s.agricultural.desc, lang), img: serviceAgri,
      points: lang === "fr"
        ? ["Motopompes, irrigation, semences, engrais", "Équipements de transformation agro-industriels", "Conseil et dimensionnement technique", "Mise en service et formation"]
        : ["Pumps, irrigation, seeds, fertilizers", "Agro-industrial processing equipment", "Technical advice and sizing", "Commissioning and training"],
    },
    {
      id: "logistique", icon: Truck, title: t(s.delivery.title, lang), desc: t(s.delivery.desc, lang), img: serviceDelivery,
      points: lang === "fr"
        ? ["Suivi en temps réel des expéditions", "Réseau multi-sites Afrique de l'Ouest & Centrale", "Solutions express & sur mesure", "Optimisation coûts et délais"]
        : ["Real-time shipment tracking", "Multi-site network across West & Central Africa", "Express & tailor-made solutions", "Cost & lead-time optimization"],
    },
    {
      id: "conseil", icon: Briefcase, title: t(s.consulting.title, lang), desc: t(s.consulting.desc, lang), img: serviceConsulting,
      points: lang === "fr"
        ? ["Études de faisabilité et audits techniques", "Gestion de projets industriels clé en main", "Installation et accompagnement", "Stratégie d'approvisionnement long terme"]
        : ["Feasibility studies and technical audits", "Turnkey industrial project management", "Installation and follow-up", "Long-term sourcing strategy"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 30% 40%, hsl(161 70% 45% / 0.5) 0%, transparent 45%), radial-gradient(circle at 70% 60%, hsl(41 79% 50% / 0.4) 0%, transparent 45%)",
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="container mx-auto px-4 relative text-center"
        >
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">D&C Agro</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">
            {lang === "fr" ? "Nos " : "Our "}<span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-primary-foreground/80 mt-5 max-w-2xl mx-auto text-lg">
            {lang === "fr"
              ? "Quatre métiers complémentaires au service de l'industrie, de l'agriculture et de la flotte maritime africaine."
              : "Four complementary expertises serving African industry, agriculture and maritime fleet."}
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <div className="container mx-auto px-4 py-20 space-y-24 max-w-6xl">
        {items.map((it, i) => (
          <motion.section
            key={it.id} id={it.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover group">
              <img src={it.img} alt={it.title} className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 w-12 h-12 rounded-lg gradient-accent flex items-center justify-center shadow-glow">
                <it.icon size={22} className="text-secondary-foreground" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{it.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{it.desc}</p>
              <ul className="space-y-3 mb-8">
                {it.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-secondary mt-0.5 shrink-0" />
                    <span className="text-foreground/85 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 gradient-accent text-secondary-foreground px-6 py-3 rounded-md font-heading font-bold text-sm hover:opacity-90 transition-opacity">
                {lang === "fr" ? "Demander un devis" : "Request a quote"} <ArrowRight size={16} />
              </Link>
            </div>
          </motion.section>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Services;