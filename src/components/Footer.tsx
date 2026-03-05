const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-background/70 text-sm">
          <div>
            <h3 className="font-heading font-bold text-lg text-background mb-3">D&C</h3>
            <p className="leading-relaxed">
              Entreprise de production et développement spécialisée dans l'approvisionnement agro-industriel et maritime.
            </p>
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
              <li><a href="#accueil" className="hover:text-secondary transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#apropos" className="hover:text-secondary transition-colors">À Propos</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-background/40 text-xs">
          © {new Date().getFullYear()} D&C. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
