import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 relative overflow-hidden">
      <img src={logo} alt="" className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none brightness-0 invert" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-background/70 text-sm">
          <div>
            <img src={logo} alt="D&C Agro" className="h-14 w-auto mb-3 brightness-0 invert" />
            <p className="leading-relaxed">
              Entreprise de production et développement spécialisée dans l'approvisionnement agro-industriel et maritime.
            </p>
            <p className="mt-2 italic text-background/50 text-xs">Réflexion · Innovation · Solutions</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-background mb-3">Services</h4>
            <ul className="space-y-2">
              <li>Shipchandler</li>
              <li>Service Agricole</li>
              <li>Livraison & Logistique</li>
              <li>Conseil & Projets</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-background mb-3">Liens</h4>
            <ul className="space-y-2">
              <li><a href="/#accueil" className="hover:text-secondary transition-colors">Accueil</a></li>
              <li><a href="/#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="/#apropos" className="hover:text-secondary transition-colors">À Propos</a></li>
              <li><Link to="/equipe" className="hover:text-secondary transition-colors">Notre Équipe</Link></li>
              <li><a href="/#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-background/40 text-xs">
          © {new Date().getFullYear()} D&C Agro. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
