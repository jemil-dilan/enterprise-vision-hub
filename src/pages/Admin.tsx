import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard, Package, ShoppingCart, Users, Truck, BarChart3, Settings, LogOut, Menu, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

const menuItems = [
  { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { id: "products", label: "Produits", icon: Package },
  { id: "orders", label: "Commandes", icon: ShoppingCart },
  { id: "users", label: "Utilisateurs", icon: Users },
  { id: "deliveries", label: "Livraisons", icon: Truck },
  { id: "stats", label: "Statistiques", icon: BarChart3 },
  { id: "settings", label: "Paramètres", icon: Settings },
];

const statsCards = [
  { label: "Commandes", value: "156", change: "+12%", color: "text-primary" },
  { label: "Produits", value: "89", change: "+5", color: "text-secondary" },
  { label: "Clients", value: "342", change: "+28", color: "text-primary" },
  { label: "Revenus", value: "4.2M FCFA", change: "+18%", color: "text-secondary" },
];

const recentOrders = [
  { id: "CMD-001", client: "Maritime SA", product: "Cordage maritime", status: "Livré", amount: "135 000 FCFA" },
  { id: "CMD-002", client: "AgroPlus", product: "Motopompe 5CV", status: "En transit", amount: "350 000 FCFA" },
  { id: "CMD-003", client: "NaviCargo", product: "Kit sécurité", status: "En préparation", amount: "210 000 FCFA" },
  { id: "CMD-004", client: "FertiCo", product: "Semences maïs", status: "Livré", amount: "84 000 FCFA" },
  { id: "CMD-005", client: "TransOcean", product: "Peinture anti-fouling", status: "En transit", amount: "170 000 FCFA" },
];

const statusColor: Record<string, string> = {
  "Livré": "bg-secondary/10 text-secondary",
  "En transit": "bg-primary/10 text-primary",
  "En préparation": "bg-accent/10 text-accent-foreground",
};

const Admin = () => {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="D&C" className="h-10" />
            <span className="font-heading font-bold text-foreground text-sm">Admin</span>
          </Link>
          <button className="md:hidden text-foreground" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="p-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                active === item.id
                  ? "gradient-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-border">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
              <LogOut size={18} />
              Déconnexion
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4">
          <button className="md:hidden text-foreground" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <h2 className="font-heading font-bold text-foreground text-lg capitalize">
            {menuItems.find((m) => m.id === active)?.label}
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              A
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6">
          {active === "dashboard" && (
            <>
              {/* Stats */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {statsCards.map((s) => (
                  <div key={s.label} className="bg-card rounded-lg p-5 shadow-card border border-border">
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className={`text-2xl font-heading font-bold ${s.color} mt-1`}>{s.value}</p>
                    <p className="text-xs text-secondary mt-1">{s.change}</p>
                  </div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-card rounded-lg shadow-card border border-border">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h3 className="font-heading font-bold text-foreground">Commandes récentes</h3>
                  <Button variant="outline" size="sm">Voir tout</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-muted-foreground font-medium">ID</th>
                        <th className="text-left p-3 text-muted-foreground font-medium">Client</th>
                        <th className="text-left p-3 text-muted-foreground font-medium hidden sm:table-cell">Produit</th>
                        <th className="text-left p-3 text-muted-foreground font-medium">Statut</th>
                        <th className="text-right p-3 text-muted-foreground font-medium">Montant</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                          <td className="p-3 font-medium text-foreground">{order.id}</td>
                          <td className="p-3 text-foreground">{order.client}</td>
                          <td className="p-3 text-muted-foreground hidden sm:table-cell">{order.product}</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[order.status] || ""}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="p-3 text-right font-medium text-foreground">{order.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {active !== "dashboard" && (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center">
                <Package size={48} className="mx-auto mb-4 opacity-30" />
                <p className="font-heading font-semibold">Section {menuItems.find((m) => m.id === active)?.label}</p>
                <p className="text-sm mt-1">Cette section sera bientôt disponible</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
