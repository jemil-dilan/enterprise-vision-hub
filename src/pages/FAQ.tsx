import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, t } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const FAQ = () => {
  const { lang } = useLanguage();
  const f = translations.faq;
  const faqItems = t(f.categories, lang);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">{t(f.title, lang)}</h1>
            <p className="text-muted-foreground">{t(f.subtitle, lang)}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8 max-w-3xl">
          {faqItems.map((section: any) => (
            <div key={section.category} className="mb-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 gradient-primary rounded-full" />
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.questions.map((item: any, i: number) => (
                  <AccordionItem key={i} value={`${section.category}-${i}`} className="bg-card rounded-lg border px-4">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-12 bg-card rounded-lg p-8 text-center shadow-card">
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">{t(f.notFound, lang)}</h3>
            <p className="text-muted-foreground mb-6">{t(f.supportAvailable, lang)}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="gap-2"><MessageCircle size={16} />{t(f.liveChat, lang)}</Button>
              <Button variant="outline" className="gap-2"><Mail size={16} />{t(f.sendEmail, lang)}</Button>
              <Button variant="outline" className="gap-2"><Phone size={16} />{t(f.callUs, lang)}</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
