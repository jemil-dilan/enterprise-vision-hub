import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, CreditCard, Smartphone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const planIcons = [Zap, Star, Crown];

const Subscriptions = () => {
  const { lang } = useLanguage();
  const s = translations.subscriptions;
  const plans = t(s.plans, lang);
  const paymentMethods = t(s.paymentMethods, lang);
  const pmIcons = [Smartphone, CreditCard, Building];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="bg-primary/5 py-12">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Badge variant="secondary" className="mb-4">{t(s.badge, lang)}</Badge>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">{t(s.title, lang)}</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">{t(s.subtitle, lang)}</p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan: any, i: number) => {
              const Icon = planIcons[i];
              const popular = i === 1;
              return (
                <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className={`bg-card rounded-lg shadow-card p-6 relative flex flex-col ${popular ? "ring-2 ring-primary" : ""}`}>
                  {popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">{t(s.popular, lang)}</Badge>}
                  <div className="text-center mb-6">
                    <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${popular ? "gradient-primary" : "bg-muted"}`}>
                      <Icon size={22} className={popular ? "text-primary-foreground" : "text-muted-foreground"} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-3xl font-heading font-black text-primary">{plan.price.toLocaleString("fr-FR")}</span>
                      <span className="text-muted-foreground text-sm"> FCFA {plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground"><Check size={16} className="text-primary mt-0.5 shrink-0" />{feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={popular ? "default" : "outline"}>{plan.cta}</Button>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">{t(s.paymentTitle, lang)}</h2>
            <p className="text-muted-foreground mb-8">{t(s.paymentSubtitle, lang)}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {paymentMethods.map((method: any, i: number) => {
                const MIcon = pmIcons[i];
                return (
                  <div key={method.name} className="bg-card rounded-lg shadow-card p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3"><MIcon size={22} className="text-primary" /></div>
                    <h3 className="font-heading font-bold text-foreground text-sm">{method.name}</h3>
                    <p className="text-muted-foreground text-xs mt-1">{method.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="mt-12 max-w-3xl mx-auto bg-primary/5 rounded-lg p-6 text-center">
            <h3 className="font-heading font-bold text-foreground mb-2">{t(s.individualTitle, lang)}</h3>
            <p className="text-muted-foreground text-sm mb-4">{t(s.individualText, lang)}</p>
            <Button variant="outline" onClick={() => window.location.href = "/catalogue"}>{t(s.accessCatalog, lang)}</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscriptions;
