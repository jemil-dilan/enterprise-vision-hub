import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Expertise dans le domaine agro-industriel",
  "Services maritimes shipchandler fiables",
  "Livraison avec suivi en temps réel",
  "Accompagnement et conseil personnalisé",
  "Réseau de partenaires étendu",
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">
              Qui sommes-nous
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              À Propos de D&C
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              D&C est une entreprise de production et développement spécialisée dans
              l'approvisionnement des agro-industries en matériels industriels. Nous
              proposons également des services de shipchandler pour le ravitaillement
              des navires, ainsi que des solutions logistiques complètes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre mission est de renforcer la chaîne d'approvisionnement de nos
              clients grâce à un service professionnel, fiable et adapté à leurs
              besoins spécifiques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-lg p-8 shadow-card">
              <h3 className="text-lg font-heading font-bold text-foreground mb-6">
                Pourquoi nous choisir ?
              </h3>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-accent mt-0.5 shrink-0"
                    />
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
