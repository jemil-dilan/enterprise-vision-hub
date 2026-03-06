import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, CreditCard, Smartphone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: 50000,
    period: "/ mois",
    description: "Pour les petites entreprises et revendeurs débutants",
    features: [
      "Accès au catalogue complet",
      "Commandes en ligne",
      "Support par email",
      "Historique des commandes",
      "1 utilisateur",
    ],
    popular: false,
    cta: "Choisir Starter",
  },
  {
    name: "Business",
    icon: Star,
    price: 150000,
    period: "/ mois",
    description: "Pour les entreprises en croissance et agents maritimes",
    features: [
      "Tout le plan Starter",
      "Prix préférentiels (-10%)",
      "Support prioritaire",
      "Suivi des livraisons en temps réel",
      "5 utilisateurs",
      "Facturation mensuelle",
      "Accès API catalogue",
    ],
    popular: true,
    cta: "Choisir Business",
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: 350000,
    period: "/ mois",
    description: "Pour les grandes entreprises et flottes maritimes",
    features: [
      "Tout le plan Business",
      "Prix négociés sur mesure (-20%)",
      "Account manager dédié",
      "Livraison express gratuite",
      "Utilisateurs illimités",
      "Intégration ERP",
      "Rapports & analytics avancés",
      "SLA garanti 99.9%",
    ],
    popular: false,
    cta: "Contacter les ventes",
  },
];

const paymentMethods = [
  { icon: Smartphone, name: "Mobile Money", description: "MTN MoMo, Orange Money" },
  { icon: CreditCard, name: "Carte Bancaire", description: "Visa, Mastercard" },
  { icon: Building, name: "Virement Bancaire", description: "Transfert direct" },
];

const Subscriptions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        {/* Header */}
        <div className="bg-primary/5 py-12">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge variant="secondary" className="mb-4">Abonnements Tiers</Badge>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                Plans d'Abonnement
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Les tiers (revendeurs, agents, entreprises) doivent souscrire à un plan pour accéder à la plateforme d'achat en gros et bénéficier de tarifs préférentiels.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="container mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`bg-card rounded-lg shadow-card p-6 relative flex flex-col ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Le plus populaire
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    plan.popular ? "gradient-primary" : "bg-muted"
                  }`}>
                    <plan.icon size={22} className={plan.popular ? "text-primary-foreground" : "text-muted-foreground"} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-heading font-black text-primary">
                      {plan.price.toLocaleString("fr-FR")}
                    </span>
                    <span className="text-muted-foreground text-sm"> FCFA {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
              Moyens de Paiement Acceptés
            </h2>
            <p className="text-muted-foreground mb-8">
              Payez facilement avec le moyen qui vous convient
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div key={method.name} className="bg-card rounded-lg shadow-card p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                    <method.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-sm">{method.name}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{method.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Individual note */}
          <div className="mt-12 max-w-3xl mx-auto bg-primary/5 rounded-lg p-6 text-center">
            <h3 className="font-heading font-bold text-foreground mb-2">Vous êtes un particulier ?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Les particuliers peuvent acheter directement sur notre e-commerce sans abonnement. Créez simplement un compte gratuit pour commencer.
            </p>
            <Button variant="outline" onClick={() => window.location.href = "/catalogue"}>
              Accéder au Catalogue
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscriptions;
