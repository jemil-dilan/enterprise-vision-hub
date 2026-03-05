import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: integrate with Supabase auth
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/">
            <img src={logo} alt="D&C" className="h-16 mx-auto mb-4" />
          </Link>
          <h1 className="text-2xl font-heading font-bold text-foreground">Créer un compte</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Inscrivez-vous pour accéder à nos services
          </p>
        </div>

        <form onSubmit={handleRegister} className="bg-card rounded-lg shadow-card p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Nom complet</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input placeholder="Jean Dupont" value={form.name} onChange={(e) => update("name", e.target.value)} className="pl-10" required />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input type="email" placeholder="votre@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} className="pl-10" required />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Téléphone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input type="tel" placeholder="+225 XX XX XX XX" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="pl-10" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Confirmer le mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input type="password" placeholder="••••••••" value={form.confirmPassword} onChange={(e) => update("confirmPassword", e.target.value)} className="pl-10" required />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Inscription..." : "S'inscrire"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Déjà un compte ?{" "}
            <Link to="/connexion" className="text-primary hover:underline font-medium">
              Se connecter
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
