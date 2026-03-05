import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    category: "Général",
    questions: [
      { q: "Quels services propose D&C ?", a: "D&C propose des services de shipchandler (approvisionnement de navires), d'approvisionnement agricole en matériels industriels, de livraison et logistique, ainsi que du conseil en gestion de projets industriels." },
      { q: "Dans quelles zones géographiques intervenez-vous ?", a: "Nous intervenons principalement en Afrique de l'Ouest, avec une couverture étendue pour les services maritimes internationaux." },
      { q: "Comment puis-je contacter D&C ?", a: "Vous pouvez nous contacter via le formulaire de contact sur notre site, par email ou par téléphone. Nos coordonnées sont disponibles en bas de chaque page." },
    ],
  },
  {
    category: "Commandes & Livraisons",
    questions: [
      { q: "Comment passer une commande ?", a: "Parcourez notre catalogue, ajoutez les produits au panier, puis validez votre commande. Vous recevrez une confirmation par email avec un numéro de suivi." },
      { q: "Quel est le délai de livraison ?", a: "Les délais varient selon le service : 24-48h pour les livraisons locales, 3-7 jours pour les approvisionnements maritimes, et sur devis pour les projets spéciaux." },
      { q: "Puis-je suivre ma commande en temps réel ?", a: "Oui, une fois votre commande expédiée, vous recevez un lien de suivi par email et SMS pour suivre l'acheminement en temps réel." },
      { q: "Quels sont les modes de paiement acceptés ?", a: "Nous acceptons les virements bancaires, le paiement mobile (Orange Money, MTN Money) et les cartes de crédit." },
    ],
  },
  {
    category: "Shipchandler",
    questions: [
      { q: "Quels types de produits proposez-vous pour les navires ?", a: "Nous fournissons des équipements de pont, pièces de rechange, produits alimentaires, produits d'entretien, équipements de sécurité et matériel de navigation." },
      { q: "Pouvez-vous approvisionner un navire en urgence ?", a: "Oui, nous proposons un service d'approvisionnement express pour les urgences maritimes, disponible 24/7 dans les ports partenaires." },
    ],
  },
  {
    category: "Service Agricole",
    questions: [
      { q: "Quels types de matériels agricoles proposez-vous ?", a: "Nous proposons des motopompes, systèmes d'irrigation, semences, engrais, et équipements de transformation pour les agro-industries." },
      { q: "Proposez-vous un service d'installation ?", a: "Oui, notre équipe technique assure l'installation, la mise en service et la formation sur l'utilisation des équipements fournis." },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Foire aux Questions
            </h1>
            <p className="text-muted-foreground">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8 max-w-3xl">
          {faqItems.map((section) => (
            <div key={section.category} className="mb-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 gradient-primary rounded-full" />
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.questions.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${section.category}-${i}`}
                    className="bg-card rounded-lg border px-4"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Support CTA */}
          <div className="mt-12 bg-card rounded-lg p-8 text-center shadow-card">
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
              Vous n'avez pas trouvé votre réponse ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe support est disponible pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="gap-2">
                <MessageCircle size={16} />
                Chat en ligne
              </Button>
              <Button variant="outline" className="gap-2">
                <Mail size={16} />
                Envoyer un email
              </Button>
              <Button variant="outline" className="gap-2">
                <Phone size={16} />
                Nous appeler
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
