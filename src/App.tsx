import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Catalog from "./pages/Catalog";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import ShipchandlerLogin from "./pages/ShipchandlerLogin";
import ShipchandlerCatalog from "./pages/ShipchandlerCatalog";
import Subscriptions from "./pages/Subscriptions";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
        <CartProvider>
          <LoadingScreen isLoading={isLoading} />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/equipe" element={<Team />} />
              <Route path="/catalogue" element={<Catalog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/connexion" element={<Login />} />
              <Route path="/inscription" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/shipchandler" element={<ShipchandlerLogin />} />
              <Route path="/shipchandler/catalogue" element={<ShipchandlerCatalog />} />
              <Route path="/abonnements" element={<Subscriptions />} />
              <Route path="/commande" element={<Checkout />} />
              <Route path="/paiement" element={<Payment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
