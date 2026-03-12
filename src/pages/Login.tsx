import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { lang } = useLanguage();
  const l = translations.login;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/"><img src={logo} alt="D&C" className="h-16 mx-auto mb-4" /></Link>
          <h1 className="text-2xl font-heading font-bold text-foreground">{t(l.title, lang)}</h1>
          <p className="text-muted-foreground text-sm mt-1">{t(l.subtitle, lang)}</p>
        </div>

        <form onSubmit={handleLogin} className="bg-card rounded-lg shadow-card p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">{t(l.email, lang)}</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" required />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">{t(l.password, lang)}</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 pr-10" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted-foreground">
              <input type="checkbox" className="rounded border-input" />
              {t(l.remember, lang)}
            </label>
            <Link to="/mot-de-passe-oublie" className="text-primary hover:underline">{t(l.forgot, lang)}</Link>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>{loading ? t(l.loading, lang) : t(l.submit, lang)}</Button>

          <p className="text-center text-sm text-muted-foreground">
            {t(l.noAccount, lang)}{" "}
            <Link to="/inscription" className="text-primary hover:underline font-medium">{t(l.register, lang)}</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
