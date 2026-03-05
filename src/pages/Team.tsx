import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Target } from "lucide-react";

const accomplishments = [
  {
    icon: TrendingUp,
    value: "500+",
    title: "Clients Servis",
    description: "Des centaines d'entreprises nous font confiance pour leurs besoins en approvisionnement.",
  },
  {
    icon: Award,
    value: "15+",
    title: "Années d'Expérience",
    description: "Plus d'une décennie de savoir-faire dans les secteurs agro-industriel et maritime.",
  },
  {
    icon: Users,
    value: "50+",
    title: "Collaborateurs",
    description: "Une équipe dévouée et qualifiée au service de nos partenaires.",
  },
  {
    icon: Target,
    value: "98%",
    title: "Taux de Satisfaction",
    description: "L'excellence opérationnelle au cœur de chaque mission.",
  },
];

const founderSection = {
  name: "Fondateur & Directeur Général",
  quote:
    "Chez D&C, nous croyons que la réflexion, l'innovation et les solutions concrètes sont les piliers de tout développement durable. Notre ambition est de bâtir un réseau d'approvisionnement fiable pour l'industrie africaine.",
};

const teamMembers = [
  {
    name: "Directeur des Opérations",
    role: "Opérations",
    description: "Supervise l'ensemble des activités logistiques et d'approvisionnement.",
  },
  {
    name: "Responsable Shipchandler",
    role: "Maritime",
    description: "Coordonne les ravitaillements de navires et les partenariats portuaires.",
  },
  {
    name: "Responsable Agricole",
    role: "Agro-industrie",
    description: "Gère les approvisionnements en matériels et équipements agricoles.",
  },
  {
    name: "Responsable Commercial",
    role: "Développement",
    description: "Développe les relations clients et les nouveaux marchés.",
  },
  {
    name: "Responsable Logistique",
    role: "Logistique",
    description: "Assure le suivi et la coordination des livraisons.",
  },
  {
    name: "Responsable Conseil",
    role: "Conseil",
    description: "Accompagne les clients dans leurs projets industriels et stratégiques.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-2">
              Notre Équipe & Réalisations
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground">
              Les Hommes Derrière D&C
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Réflexion · Innovation · Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accomplishments */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">
              Nos Réalisations
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Ce Que Nous Avons Accompli
            </h2>
            <div className="w-16 h-1 gradient-accent mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {accomplishments.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-primary-foreground" />
                </div>
                <p className="text-3xl font-heading font-black text-primary">{item.value}</p>
                <h3 className="font-heading font-bold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">
                Le Fondateur
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                Vision & Leadership
              </h2>
              <div className="bg-card rounded-lg p-8 md:p-12 shadow-card">
                <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-black text-3xl">DC</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                  {founderSection.name}
                </h3>
                <p className="text-secondary font-semibold text-sm mb-6">D&C Agro</p>
                <blockquote className="text-muted-foreground leading-relaxed italic text-lg border-l-4 border-primary pl-6 text-left">
                  "{founderSection.quote}"
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">
              Notre Équipe
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Les Piliers de D&C
            </h2>
            <div className="w-16 h-1 gradient-accent mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <Users size={24} className="text-muted-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                <p className="text-secondary font-semibold text-xs uppercase tracking-wider mt-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mt-3">{member.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-10 italic">
            Les photos et noms réels seront ajoutés prochainement.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
