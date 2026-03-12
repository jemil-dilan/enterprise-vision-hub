import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, UtensilsCrossed, Wrench, Shirt, Fuel, Pill, LifeBuoy, Package, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const shipchandlerProducts = [
  { id: 101, name: "Pack Alimentation Équipage (30 jours)", category: "food", price: 1500000, unit: "pack", description: "Rations complètes pour 20 personnes" },
  { id: 102, name: "Viandes congelées - 100kg", category: "food", price: 450000, unit: "lot", description: "Assortiment boeuf, poulet, poisson" },
  { id: 103, name: "Conserves alimentaires variées", category: "food", price: 280000, unit: "caisse", description: "48 boîtes - légumes, fruits, viandes" },
  { id: 104, name: "Eau potable - 500L", category: "food", price: 75000, unit: "citerne", description: "Eau traitée et certifiée" },
  { id: 105, name: "Huile moteur marine 15W-40", category: "fuel", price: 180000, unit: "fût 200L", description: "Huile haute performance moteurs marins" },
  { id: 106, name: "Filtre à huile moteur principal", category: "parts", price: 95000, unit: "pièce", description: "Compatible moteurs MAN, Wärtsilä" },
  { id: 107, name: "Joint de culasse marine", category: "parts", price: 320000, unit: "pièce", description: "Acier inox haute résistance" },
  { id: 108, name: "Hélice de rechange 4 pales", category: "parts", price: 2800000, unit: "pièce", description: "Bronze, diamètre 1.2m" },
  { id: 109, name: "Combinaison de travail marine", category: "clothing", price: 35000, unit: "unité", description: "Imperméable, haute visibilité" },
  { id: 110, name: "Bottes de sécurité antidérapantes", category: "clothing", price: 28000, unit: "paire", description: "Embout acier, résistant chimiques" },
  { id: 111, name: "Gants de travail renforcés", category: "clothing", price: 8500, unit: "paire", description: "Cuir et kevlar" },
  { id: 112, name: "Casque de sécurité maritime", category: "clothing", price: 22000, unit: "unité", description: "Norme ISO 3873" },
  { id: 113, name: "Gasoil maritime - 5000L", category: "fuel", price: 3750000, unit: "livraison", description: "IFO 180, certifié MARPOL" },
  { id: 114, name: "Graisse marine polyvalente", category: "fuel", price: 45000, unit: "seau 20kg", description: "Résistante eau de mer" },
  { id: 115, name: "Trousse médicale navire Cat. A", category: "medical", price: 850000, unit: "kit", description: "Conforme réglementation maritime" },
  { id: 116, name: "Médicaments d'urgence", category: "medical", price: 320000, unit: "lot", description: "Anti-douleurs, antibiotiques, pansements" },
  { id: 117, name: "Gilet de sauvetage SOLAS", category: "safety", price: 65000, unit: "unité", description: "Approuvé SOLAS, lampe intégrée" },
  { id: 118, name: "Radeau de survie 20 personnes", category: "safety", price: 4500000, unit: "unité", description: "Certifié SOLAS, auto-gonflant" },
  { id: 119, name: "Extincteur CO2 5kg", category: "safety", price: 85000, unit: "unité", description: "Classe B et C, marine" },
  { id: 120, name: "Fusées de détresse (lot de 12)", category: "safety", price: 180000, unit: "lot", description: "Conformes SOLAS" },
];

interface CartItem { productId: number; quantity: number; }

const ShipchandlerCatalog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { lang } = useLanguage();
  const sc = translations.shipchandlerCatalog;

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { id: "all", label: t(sc.all, lang), icon: Package },
    { id: "food", label: t(sc.food, lang), icon: UtensilsCrossed },
    { id: "parts", label: t(sc.parts, lang), icon: Wrench },
    { id: "clothing", label: t(sc.clothing, lang), icon: Shirt },
    { id: "fuel", label: t(sc.fuel, lang), icon: Fuel },
    { id: "medical", label: t(sc.medical, lang), icon: Pill },
    { id: "safety", label: t(sc.safety, lang), icon: LifeBuoy },
  ];

  useEffect(() => {
    const access = sessionStorage.getItem("shipchandler_access");
    if (!access) navigate("/shipchandler");
  }, [navigate]);

  const shipInfo = JSON.parse(sessionStorage.getItem("shipchandler_access") || "{}");

  const filtered = shipchandlerProducts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = (productId: number) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.productId === productId);
      if (existing) return prev.map((c) => c.productId === productId ? { ...c, quantity: c.quantity + 1 } : c);
      return [...prev, { productId, quantity: 1 }];
    });
    const product = shipchandlerProducts.find((p) => p.id === productId);
    toast({ title: t(sc.addedToCart, lang), description: product?.name });
  };

  const cartTotal = cart.reduce((sum, item) => {
    const product = shipchandlerProducts.find((p) => p.id === item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="bg-primary/5 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground">{t(sc.title, lang)}</h1>
                <p className="text-muted-foreground text-sm mt-1">
                  {t(sc.vessel, lang)} : <span className="font-semibold text-foreground">{shipInfo.vesselName}</span> • IMO : {shipInfo.imoNumber} • Port : {shipInfo.port}
                </p>
              </div>
              <Button variant="outline" className="relative" onClick={() => setShowCart(!showCart)}>
                <ShoppingCart size={18} />
                <span className="ml-2">{t(sc.cart, lang)}</span>
                {cartCount > 0 && <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">{cartCount}</Badge>}
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          {showCart && cart.length > 0 && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-lg shadow-card p-6 mb-8">
              <h3 className="font-heading font-bold text-foreground mb-4">{t(sc.cartSummary, lang)}</h3>
              <div className="space-y-2">
                {cart.map((item) => {
                  const product = shipchandlerProducts.find((p) => p.id === item.productId);
                  return (
                    <div key={item.productId} className="flex justify-between items-center text-sm">
                      <span className="text-foreground">{product?.name} × {item.quantity}</span>
                      <span className="font-semibold text-foreground">{((product?.price || 0) * item.quantity).toLocaleString("fr-FR")} FCFA</span>
                    </div>
                  );
                })}
              </div>
              <hr className="border-border my-4" />
              <div className="flex justify-between items-center">
                <span className="font-heading font-bold text-foreground">Total</span>
                <span className="text-primary font-heading font-bold text-xl">{cartTotal.toLocaleString("fr-FR")} FCFA</span>
              </div>
              <div className="flex gap-3 mt-4">
                <Button className="flex-1" onClick={() => navigate("/shipchandler/commande")}>{t(sc.placeOrder, lang)} <ChevronRight size={16} /></Button>
                <Button variant="outline" onClick={() => setCart([])}>{t(sc.clear, lang)}</Button>
              </div>
            </motion.div>
          )}

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input placeholder={t(sc.search, lang)} value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.id ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                <cat.icon size={16} />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">{categories.find((c) => c.id === product.category)?.label}</Badge>
                  <Badge variant="outline" className="text-xs">{product.unit}</Badge>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1 text-sm leading-tight">{product.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{product.description}</p>
                <p className="text-primary font-bold text-lg mb-3">{product.price.toLocaleString("fr-FR")} FCFA</p>
                <Button className="w-full" size="sm" onClick={() => addToCart(product.id)}>
                  <ShoppingCart size={14} />
                  {t(sc.add, lang)}
                </Button>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Search size={48} className="mx-auto mb-4 opacity-30" />
              <p>{t(sc.noProducts, lang)}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShipchandlerCatalog;
