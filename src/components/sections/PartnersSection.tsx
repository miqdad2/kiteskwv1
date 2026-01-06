import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    heading: "Trusted by world-leading technology partners.",
    button: "View All Partners",
  },
  ar: {
    heading: "شراكات مع مزودي التكنولوجيا الرائدين عالميًا.",
    button: "عرض جميع الشركاء",
  },
};

const partners = [
  { name: "Siemens", abbr: "Si", id: "siemens" },
  { name: "Autodesk", abbr: "Ad", id: "autodesk" },
  { name: "ANSYS", abbr: "An", id: "ansys" },
  { name: "Dassault Systèmes", abbr: "DS", id: "dassault" },
  { name: "PTC", abbr: "PTC", id: "ptc" },
  { name: "Hexagon", abbr: "Hx", id: "hexagon" },
];

export function PartnersSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="partners" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-heading text-h2 sm:text-3xl lg:text-4xl font-semibold text-foreground max-w-2xl mx-auto">
            {t.heading}
          </h2>
        </ScrollReveal>

        {/* Partners Logo Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border mb-14" staggerDelay={60}>
          {partners.map((partner, index) => (
            <StaggerItem key={partner.name} index={index}>
              <Link
                to={`/partners/${partner.id}`}
                className="group flex items-center justify-center p-8 lg:p-10 bg-background hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Placeholder Logo */}
                <div className="text-center">
                  <span className="block font-heading text-2xl lg:text-3xl font-bold text-muted-foreground/40 group-hover:text-foreground/70 transition-colors duration-300">
                    {partner.abbr}
                  </span>
                  <span className="block font-body text-caption text-muted-foreground/30 mt-1 group-hover:text-muted-foreground transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Button */}
        <ScrollReveal delay={300} className="text-center">
          <Link to="/partners">
            <Button variant="outline" size="lg" className="group">
              {t.button}
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
