import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">
            Parlons de votre projet
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Contactez-nous
          </h2>
          <div className="w-16 h-1 gradient-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              N'hésitez pas à nous contacter pour toute demande de renseignement,
              devis ou partenariat. Notre équipe est à votre disposition.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md gradient-primary flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">contact@dc-enterprise.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md gradient-primary flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <p className="text-foreground font-medium">+123 456 789 00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md gradient-primary flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="text-foreground font-medium">Zone Industrielle, Ville</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card rounded-lg p-8 shadow-card space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Nom complet
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Décrivez votre besoin..."
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-primary text-primary-foreground py-3 rounded-md font-heading font-bold text-sm hover:opacity-90 transition-opacity"
            >
              {submitted ? "✓ Message envoyé !" : "Envoyer le message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
