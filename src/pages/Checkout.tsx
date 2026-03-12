import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, User, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, count } = useCart();
  const { toast } = useToast();
  const { lang } = useLanguage();
  const c = translations.checkout;

  const [form, setForm] = useState({ fullName: "", email: "", phone: "", address: "", city: "", notes: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.address || !form.city) {
      toast({ title: t(c.requiredFields, lang), description: t(c.fillRequired, lang), variant: "destructive" });
      return;
    }
    sessionStorage.setItem("checkout_info", JSON.stringify(form));
    navigate("/paiement");
  };

  if (count === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 pb-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{t(c.emptyCart, lang)}</p>
            <Button onClick={() => navigate("/catalogue")}>{t(c.viewCatalog, lang)}</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="bg-primary/5 py-8">
          <div className="container mx-auto px-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="mb-2"><ArrowLeft size={16} /> {t(c.back, lang)}</Button>
            <h1 className="text-3xl font-heading font-bold text-foreground">{t(c.title, lang)}</h1>
            <p className="text-muted-foreground text-sm mt-1">{t(c.step1, lang)}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.form initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-lg shadow-card p-6 space-y-4">
                <h2 className="font-heading font-bold text-foreground flex items-center gap-2"><User size={18} /> {t(c.personalInfo, lang)}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t(c.fullName, lang)} *</Label>
                    <Input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Jean Dupont" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t(c.email, lang)}</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jean@example.com" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="phone">{t(c.phone, lang)} *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+225 07 00 00 00" className="pl-10" required />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-card p-6 space-y-4">
                <h2 className="font-heading font-bold text-foreground flex items-center gap-2"><MapPin size={18} /> {t(c.deliveryAddress, lang)}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address">{t(c.address, lang)} *</Label>
                    <Input id="address" name="address" value={form.address} onChange={handleChange} placeholder="Rue, quartier..." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">{t(c.city, lang)} *</Label>
                    <Input id="city" name="city" value={form.city} onChange={handleChange} placeholder="Abidjan" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">{t(c.notes, lang)}</Label>
                  <Textarea id="notes" name="notes" value={form.notes} onChange={handleChange} placeholder={t(c.notesPlaceholder, lang)} rows={3} />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">{t(c.continuePayment, lang)} <ArrowRight size={16} /></Button>
            </motion.form>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
              <div className="bg-card rounded-lg shadow-card p-6 sticky top-24">
                <h2 className="font-heading font-bold text-foreground mb-4">{t(c.summary, lang)}</h2>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-foreground truncate mr-2">{item.product.name} × {item.quantity}</span>
                      <span className="font-semibold text-foreground whitespace-nowrap">{(item.product.price * item.quantity).toLocaleString("fr-FR")} F</span>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <span className="font-heading font-bold">Total</span>
                  <span className="text-primary font-heading font-bold text-xl">{total.toLocaleString("fr-FR")} FCFA</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
