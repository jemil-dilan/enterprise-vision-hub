import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/context/CartContext";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, clearCart, total, count } = useCart();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const c = translations.cart;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart size={18} />
          {count > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">{count}</Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-heading">
            <ShoppingCart size={20} /> {t(c.title, lang)} ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground text-center">
            <div>
              <ShoppingCart size={48} className="mx-auto mb-3 opacity-30" />
              <p>{t(c.empty, lang)}</p>
            </div>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    {item.product.image && (
                      <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-md object-cover flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground truncate">{item.product.name}</h4>
                      <p className="text-primary font-bold text-sm">{item.product.price.toLocaleString("fr-FR")} FCFA</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}><Minus size={12} /></Button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}><Plus size={12} /></Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 ml-auto text-destructive" onClick={() => removeItem(item.product.id)}><Trash2 size={14} /></Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="pt-4 space-y-4">
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-heading font-bold text-foreground">{t(c.total, lang)}</span>
                <span className="text-primary font-heading font-bold text-xl">{total.toLocaleString("fr-FR")} FCFA</span>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => navigate("/commande")}>{t(c.order, lang)} <ArrowRight size={16} /></Button>
                <Button variant="outline" onClick={clearCart}>{t(c.clear, lang)}</Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
