import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    heading: "Our Clients",
  },
  ar: {
    heading: "عملاؤنا",
  },
};

const clients = [
  // Energy & Industrial
  { name: "KPC", fullName: "Kuwait Petroleum Corporation" },
  { name: "KNPC", fullName: "Kuwait National Petroleum Company" },
  { name: "KOC", fullName: "Kuwait Oil Company" },
  { name: "KIPIC", fullName: "Kuwait Integrated Petroleum Industries" },
  // Academic
  { name: "KU", fullName: "Kuwait University" },
  { name: "KISR", fullName: "Kuwait Institute for Scientific Research" },
  // Commercial
  { name: "EQUATE", fullName: "EQUATE Petrochemical Company" },
  { name: "PIC", fullName: "Petrochemical Industries Company" },
];

export function ClientsSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="clients" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-heading text-h2 sm:text-4xl lg:text-5xl font-semibold text-foreground">
            {t.heading}
          </h2>
        </ScrollReveal>

        {/* Clients Logo Grid - Static */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border max-w-4xl mx-auto" staggerDelay={60}>
          {clients.map((client, index) => (
            <StaggerItem key={client.name} index={index}>
              <div className="group flex flex-col items-center justify-center p-8 lg:p-10 bg-background hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-0.5">
                {/* Client Abbreviation as Logo Placeholder */}
                <span className="font-heading text-h4 lg:text-h3 font-bold text-foreground/60 group-hover:text-foreground transition-colors duration-300 mb-2">
                  {client.name}
                </span>
                {/* Full Name */}
                <span className="font-body text-caption text-muted-foreground text-center leading-tight">
                  {client.fullName}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
