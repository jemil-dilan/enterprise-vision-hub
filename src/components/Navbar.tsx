import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();
  const n = translations.nav;

  const navLinks = [
    { label: t(n.home, lang), href: "/" },
    { label: t(n.services, lang), href: "/#services" },
    { label: t(n.catalog, lang), href: "/catalogue" },
    { label: t(n.about, lang), href: "/#apropos" },
    { label: t(n.team, lang), href: "/equipe" },
    { label: t(n.faq, lang), href: "/faq" },
    { label: t(n.contact, lang), href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href.replace("/", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="D&C Agro" className="h-16 w-auto drop-shadow-md" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href.replace("/", "")}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            title={lang === "fr" ? "Switch to English" : "Passer en Français"}
          >
            <Globe size={16} />
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <a
            href="/#contact"
            className="gradient-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t(n.quote, lang)}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.href}
                    href={link.href.replace("/", "")}
                    className="text-foreground/80 hover:text-primary font-medium"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-foreground/80 hover:text-primary font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <button
                onClick={() => { toggleLang(); setIsOpen(false); }}
                className="flex items-center gap-1.5 text-foreground/80 hover:text-primary font-medium"
              >
                <Globe size={16} />
                {lang === "fr" ? "English" : "Français"}
              </button>
              <a
                href="/#contact"
                className="gradient-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t(n.quote, lang)}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
