import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Target, Quote } from "lucide-react";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const FounderTeamSection = () => {
  const { lang } = useLanguage();
  const f = translations.founder;
  const achievements = t(f.achievements, lang);
  const teamRoles = t(f.teamRoles, lang);
  const icons = [TrendingUp, Award, Users, Target];

  return (
    <section id="fondateur" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">{t(f.tagline, lang)}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">{t(f.visionTitle, lang)}</h2>

          <div className="bg-card rounded-lg p-8 md:p-12 shadow-card max-w-3xl mx-auto relative">
            <Quote size={40} className="text-primary/20 absolute top-6 left-6" />
            <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-black text-2xl">DC</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-1">{t(f.founderRole, lang)}</h3>
            <p className="text-secondary font-semibold text-sm mb-6">D&C Agro</p>
            <blockquote className="text-muted-foreground leading-relaxed italic text-lg border-l-4 border-primary pl-6 text-left">
              "{t(f.quote, lang)}"
            </blockquote>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card rounded-lg p-6 shadow-card text-center">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary-foreground" />
                </div>
                <p className="text-3xl font-heading font-black text-primary">{item.value}</p>
                <p className="text-foreground font-heading font-bold mt-1 text-sm">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">{t(f.teamTagline, lang)}</p>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8">{t(f.teamTitle, lang)}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {teamRoles.map((role, i) => (
              <motion.div key={role} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-card rounded-lg p-4 shadow-card">
                <div className="w-14 h-14 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                  <Users size={20} className="text-muted-foreground" />
                </div>
                <p className="text-foreground font-heading font-bold text-xs">{role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderTeamSection;
