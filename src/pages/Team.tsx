import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Target } from "lucide-react";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const Team = () => {
  const { lang } = useLanguage();
  const tp = translations.teamPage;
  const accomplishments = t(tp.accomplishments, lang);
  const members = t(tp.members, lang);
  const icons = [TrendingUp, Award, Users, Target];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-2">{t(tp.tagline, lang)}</p>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground">{t(tp.heroTitle, lang)}</h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">{t(tp.motto, lang)}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">{t(tp.achieveTagline, lang)}</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t(tp.achieveTitle, lang)}</h2>
            <div className="w-16 h-1 gradient-accent mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {accomplishments.map((item: any, i: number) => {
              const Icon = icons[i];
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card rounded-lg p-6 shadow-card text-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4"><Icon size={22} className="text-primary-foreground" /></div>
                  <p className="text-3xl font-heading font-black text-primary">{item.value}</p>
                  <h3 className="font-heading font-bold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">{t(tp.founderTagline, lang)}</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">{t(tp.visionTitle, lang)}</h2>
              <div className="bg-card rounded-lg p-8 md:p-12 shadow-card">
                <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-black text-3xl">DC</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">{t(tp.founderRole, lang)}</h3>
                <p className="text-secondary font-semibold text-sm mb-6">D&C Agro</p>
                <blockquote className="text-muted-foreground leading-relaxed italic text-lg border-l-4 border-primary pl-6 text-left">
                  "{t(translations.founder.quote, lang)}"
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em] mb-2">{t(tp.teamTagline, lang)}</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t(tp.teamTitle, lang)}</h2>
            <div className="w-16 h-1 gradient-accent mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {members.map((member: any, i: number) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center">
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center"><Users size={24} className="text-muted-foreground" /></div>
                <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                <p className="text-secondary font-semibold text-xs uppercase tracking-wider mt-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-3">{member.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-10 italic">{t(tp.photosNote, lang)}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
