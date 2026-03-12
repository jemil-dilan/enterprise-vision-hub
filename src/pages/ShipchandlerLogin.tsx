import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ship, Anchor, User, Hash, MapPin, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const ShipchandlerLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { lang } = useLanguage();
  const s = translations.shipchandlerLogin;

  const [form, setForm] = useState({
    vesselName: "", imoNumber: "", captainName: "", flag: "", port: "", arrivalDate: "", vesselType: "", agentName: "", agentPhone: "", agentEmail: "",
  });

  const handleChange = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    sessionStorage.setItem("shipchandler_access", JSON.stringify(form));
    setTimeout(() => { setLoading(false); navigate("/shipchandler/catalogue"); }, 800);
  };

  const types = t(s.types, lang);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="bg-primary/5 py-12">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4"><Ship size={32} className="text-primary-foreground" /></div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">{t(s.title, lang)}</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">{t(s.subtitle, lang)}</p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8 max-w-2xl">
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} onSubmit={handleSubmit} className="bg-card rounded-lg shadow-card p-6 md:p-8 space-y-6">
            <h2 className="text-xl font-heading font-bold text-foreground flex items-center gap-2"><Anchor size={20} className="text-primary" />{t(s.vesselId, lang)}</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t(s.vesselName, lang)} *</label>
                <div className="relative"><Ship className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} /><Input placeholder="MV Ocean Star" value={form.vesselName} onChange={(e) => handleChange("vesselName", e.target.value)} className="pl-10" required /></div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t(s.imoNumber, lang)} *</label>
                <div className="relative"><Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} /><Input placeholder="IMO 1234567" value={form.imoNumber} onChange={(e) => handleChange("imoNumber", e.target.value)} className="pl-10" required /></div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t(s.captainName, lang)} *</label>
                <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} /><Input placeholder={lang === "fr" ? "Capitaine Dupont" : "Captain Smith"} value={form.captainName} onChange={(e) => handleChange("captainName", e.target.value)} className="pl-10" required /></div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t(s.flag, lang)}</label>
                <Input placeholder="France" value={form.flag} onChange={(e) => handleChange("flag", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t(s.port, lang)} *</label>
                <div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} /><Input placeholder={lang === "fr" ? "Port de Douala" : "Port of Douala"} value={form.port} onChange={(e) => handleChange("port", e.target.value)} className="pl-10" required /></div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t(s.arrivalDate, lang)} *</label>
                <div className="relative"><Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} /><Input type="date" value={form.arrivalDate} onChange={(e) => handleChange("arrivalDate", e.target.value)} className="pl-10" required /></div>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-foreground mb-1 block">{t(s.vesselType, lang)}</label>
                <Select onValueChange={(v) => handleChange("vesselType", v)}>
                  <SelectTrigger><SelectValue placeholder={t(s.selectType, lang)} /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(types).map(([key, label]: [string, any]) => (
                      <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <hr className="border-border" />

            <h2 className="text-xl font-heading font-bold text-foreground flex items-center gap-2"><User size={20} className="text-primary" />{t(s.agentSection, lang)}</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="text-sm font-medium text-foreground mb-1 block">{t(s.agentName, lang)}</label><Input placeholder={lang === "fr" ? "Agence Maritime XYZ" : "Maritime Agency XYZ"} value={form.agentName} onChange={(e) => handleChange("agentName", e.target.value)} /></div>
              <div><label className="text-sm font-medium text-foreground mb-1 block">{t(s.agentPhone, lang)}</label><Input placeholder="+237 6XX XXX XXX" value={form.agentPhone} onChange={(e) => handleChange("agentPhone", e.target.value)} /></div>
              <div className="md:col-span-2"><label className="text-sm font-medium text-foreground mb-1 block">{t(s.agentEmail, lang)}</label><Input type="email" placeholder="agent@maritime.com" value={form.agentEmail} onChange={(e) => handleChange("agentEmail", e.target.value)} /></div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={loading}>{loading ? t(s.verifying, lang) : t(s.accessCatalog, lang)}</Button>
          </motion.form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShipchandlerLogin;
