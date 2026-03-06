import { motion } from "framer-motion";
import { Ship, Tractor, Truck, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import serviceShip from "@/assets/service-ship.jpg";
import serviceAgri from "@/assets/service-agri.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";

const services = [
  {
    icon: Ship,
    title: "Shipchandler",
    description:
      "Approvisionnement des navires en équipements, pièces de rechange et produits alimentaires. Un service fiable et rapide pour la flotte maritime.",
    image: serviceShip,
    link: "/shipchandler",
  },
  {
    icon: Tractor,
    title: "Service Agricole",
    description:
      "Approvisionnement en matériels industriels pour les agro-industries. Nous accompagnons le développement agricole avec des équipements de qualité.",
    image: serviceAgri,
  },
  {
    icon: Truck,
    title: "Livraison & Logistique",
    description:
      "Gestion des livraisons avec suivi en temps réel. Vos commandes sont acheminées de manière sécurisée et ponctuelle.",
    image: serviceDelivery,
  },
  {
    icon: Briefcase,
    title: "Conseil & Projets",
    description:
      "Conseil en gestion de projets industriels, installation de matériels agricoles et accompagnement stratégique sur mesure.",
    image: serviceConsulting,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">
            Ce que nous offrons
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Nos Services
          </h2>
          <div className="w-16 h-1 gradient-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 ${service.link ? "cursor-pointer" : ""}`}
              onClick={() => service.link && navigate(service.link)}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-md gradient-primary flex items-center justify-center">
                    <service.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
