import { useState } from "react";
import { Search, Filter, ShoppingCart, Ship, Tractor, Truck, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { id: "all", label: "Tous", icon: Filter },
  { id: "agricole", label: "Agricole", icon: Tractor },
  { id: "livraison", label: "Livraison", icon: Truck },
  { id: "conseil", label: "Conseil", icon: Briefcase },
];

const mockProducts = [
  { id: 1, name: "Cordage maritime 20mm", category: "shipchandler", price: 45000, image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400", inStock: true },
  { id: 2, name: "Peinture anti-fouling", category: "shipchandler", price: 85000, image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400", inStock: true },
  { id: 3, name: "Motopompe agricole 5CV", category: "agricole", price: 350000, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", inStock: true },
  { id: 4, name: "Semences maïs hybride 25kg", category: "agricole", price: 28000, image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400", inStock: false },
  { id: 5, name: "Kit irrigation goutte-à-goutte", category: "agricole", price: 120000, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400", inStock: true },
  { id: 6, name: "Service livraison express", category: "livraison", price: 15000, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400", inStock: true },
  { id: 7, name: "Consultation projet industriel", category: "conseil", price: 75000, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400", inStock: true },
  { id: 8, name: "Bouée de sauvetage", category: "shipchandler", price: 32000, image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400", inStock: true },
];

const Catalog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState<number[]>([]);

  const filtered = mockProducts.filter((p) => {
    if (p.category === "shipchandler") return false;
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = (id: number) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        {/* Header */}
        <div className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Catalogue de Produits
            </h1>
            <p className="text-muted-foreground">
              Découvrez notre gamme complète de produits et services
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Rechercher un produit..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="relative">
                <ShoppingCart size={18} />
                <span className="ml-2">Panier</span>
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <cat.icon size={16} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                      <Badge variant="destructive">Rupture de stock</Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {categories.find((c) => c.id === product.category)?.label}
                  </Badge>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold text-lg mb-3">
                    {product.price.toLocaleString("fr-FR")} FCFA
                  </p>
                  <Button
                    className="w-full"
                    disabled={!product.inStock}
                    onClick={() => addToCart(product.id)}
                  >
                    <ShoppingCart size={16} />
                    Ajouter au panier
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Search size={48} className="mx-auto mb-4 opacity-30" />
              <p>Aucun produit trouvé</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
