import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Index from "./pages/Index";
const Team = lazy(() => import("./pages/Team"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Catalog = lazy(() => import("./pages/Catalog"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Admin = lazy(() => import("./pages/Admin"));
const ShipchandlerLogin = lazy(() => import("./pages/ShipchandlerLogin"));
const ShipchandlerCatalog = lazy(() => import("./pages/ShipchandlerCatalog"));
const Subscriptions = lazy(() => import("./pages/Subscriptions"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Payment = lazy(() => import("./pages/Payment"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
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
            </Suspense>
            <WhatsAppFAB />
          </BrowserRouter>
        </CartProvider>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
