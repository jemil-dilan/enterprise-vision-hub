import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const f = translations.footer;
  const servicesList = t(f.servicesList, lang);
  const linkLabels = t(f.linkLabels, lang);
  const linkHrefs = ["/#accueil", "/#services", "/#apropos", "/equipe", "/#contact"];

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-background/70 text-sm">
          <div>
            <img src={logo} alt="D&C Agro" className="h-14 w-auto mb-3 brightness-0 invert" />
            <p className="leading-relaxed">{t(f.desc, lang)}</p>
            <p className="mt-2 italic text-background/50 text-xs">{t(f.motto, lang)}</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-background mb-3">{t(f.servicesTitle, lang)}</h4>
            <ul className="space-y-2">
              {servicesList.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-background mb-3">{t(f.linksTitle, lang)}</h4>
            <ul className="space-y-2">
              {linkLabels.map((label, i) => (
                <li key={label}>
                  {linkHrefs[i].startsWith("/#") ? (
                    <a href={linkHrefs[i].replace("/", "")} className="hover:text-secondary transition-colors">{label}</a>
                  ) : (
                    <Link to={linkHrefs[i]} className="hover:text-secondary transition-colors">{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-background/40 text-xs">
          © {new Date().getFullYear()} D&C Agro. {t(f.rights, lang)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
