import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Smartphone, Building2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const Payment = () => {
  const navigate = useNavigate();
  const { items, total, count, clearCart } = useCart();
  const { toast } = useToast();
  const { lang } = useLanguage();
  const p = translations.payment;

  const paymentMethods = [
    { id: "mobile", label: t(p.mobileMoney, lang), icon: Smartphone, description: t(p.mobileDesc, lang) },
    { id: "card", label: t(p.card, lang), icon: CreditCard, description: t(p.cardDesc, lang) },
    { id: "bank", label: t(p.bank, lang), icon: Building2, description: t(p.bankDesc, lang) },
  ];

  const [selectedMethod, setSelectedMethod] = useState("mobile");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  if (count === 0 && !isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 pb-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{t(p.noOrder, lang)}</p>
            <Button onClick={() => navigate("/catalogue")}>{t(translations.checkout.viewCatalog, lang)}</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handlePayment = async () => {
    if (selectedMethod === "mobile" && !mobileNumber) {
      toast({ title: t(p.numberRequired, lang), description: t(p.enterMobile, lang), variant: "destructive" });
      return;
    }
    setIsProcessing(true);
    await new Promise((r) => setTimeout(r, 2500));
    setIsProcessing(false);
    setIsComplete(true);
    clearCart();
    sessionStorage.removeItem("checkout_info");
    toast({ title: t(p.confirmed, lang), description: t(p.orderSuccess, lang) });
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 pb-16 flex items-center justify-center min-h-[70vh]">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-card rounded-lg shadow-card p-10 max-w-md mx-4">
            <CheckCircle2 size={64} className="mx-auto text-secondary mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">{t(p.orderConfirmed, lang)}</h2>
            <p className="text-muted-foreground mb-6">{t(p.thankYou, lang)}</p>
            <Button onClick={() => navigate("/")} size="lg">{t(p.backHome, lang)}</Button>
          </motion.div>
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
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="mb-2"><ArrowLeft size={16} /> {t(translations.checkout.back, lang)}</Button>
            <h1 className="text-3xl font-heading font-bold text-foreground">{t(p.title, lang)}</h1>
            <p className="text-muted-foreground text-sm mt-1">{t(p.step2, lang)}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-lg shadow-card p-6">
                <h2 className="font-heading font-bold text-foreground mb-4">{t(p.methodTitle, lang)}</h2>
                <div className="grid gap-3">
                  {paymentMethods.map((method) => (
                    <button key={method.id} onClick={() => setSelectedMethod(method.id)} className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left ${selectedMethod === method.id ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/30"}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedMethod === method.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <method.icon size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{method.label}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {selectedMethod === "mobile" && (
                  <motion.div key="mobile" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-card rounded-lg shadow-card p-6 space-y-4">
                    <h3 className="font-heading font-semibold text-foreground">{t(p.mobileDetails, lang)}</h3>
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber">{t(p.mobilePhone, lang)} *</Label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                        <Input id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="+225 07 00 00 00" className="pl-10" />
                      </div>
                      <p className="text-xs text-muted-foreground">{t(p.mobileConfirm, lang)}</p>
                    </div>
                  </motion.div>
                )}
                {selectedMethod === "card" && (
                  <motion.div key="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-card rounded-lg shadow-card p-6 space-y-4">
                    <h3 className="font-heading font-semibold text-foreground">{t(p.cardDetails, lang)}</h3>
                    <div className="space-y-4">
                      <div className="space-y-2"><Label>{t(p.cardNumber, lang)}</Label><Input placeholder="4242 4242 4242 4242" /></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2"><Label>{t(p.expiry, lang)}</Label><Input placeholder="MM/AA" /></div>
                        <div className="space-y-2"><Label>CVV</Label><Input placeholder="123" /></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {selectedMethod === "bank" && (
                  <motion.div key="bank" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-card rounded-lg shadow-card p-6 space-y-3">
                    <h3 className="font-heading font-semibold text-foreground">{t(p.bankInfo, lang)}</h3>
                    <div className="bg-muted rounded-lg p-4 text-sm space-y-1">
                      <p><strong>{lang === "fr" ? "Banque" : "Bank"} :</strong> BICICI</p>
                      <p><strong>{t(p.bankHolder, lang)} :</strong> D&C AGRO SARL</p>
                      <p><strong>IBAN :</strong> CI93 0000 0000 0000 0000 0000 000</p>
                      <p><strong>{t(p.bankRef, lang)} :</strong> CMD-{Date.now().toString(36).toUpperCase()}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{t(p.bankTransferNote, lang)}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button size="lg" className="w-full sm:w-auto" onClick={handlePayment} disabled={isProcessing}>
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    {t(p.processing, lang)}
                  </span>
                ) : (
                  <>{t(p.confirm, lang)} — {total.toLocaleString("fr-FR")} FCFA</>
                )}
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
              <div className="bg-card rounded-lg shadow-card p-6 sticky top-24">
                <h2 className="font-heading font-bold text-foreground mb-4">{t(p.summary, lang)}</h2>
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

export default Payment;
