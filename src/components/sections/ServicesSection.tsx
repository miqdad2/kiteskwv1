import { Boxes, MessageSquare, GraduationCap, Package, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    label: "Our Services",
    services: [
      {
        id: "prototype-development",
        title: "Prototype Development",
        description: "From concept to functional, validated prototypes.",
        icon: Boxes,
      },
      {
        id: "consultation",
        title: "Consultation",
        description: "Simulation-driven engineering and environmental consulting.",
        icon: MessageSquare,
      },
      {
        id: "training",
        title: "Training",
        description: "Professional training programs for engineers and organizations.",
        icon: GraduationCap,
      },
      {
        id: "software-distribution",
        title: "Software Distribution",
        description: "Access to world-leading engineering and simulation software.",
        icon: Package,
      },
    ],
  },
  ar: {
    label: "خدماتنا",
    services: [
      {
        id: "prototype-development",
        title: "تطوير النماذج الأولية",
        description: "من الفكرة إلى نماذج أولية عملية ومختبرة.",
        icon: Boxes,
      },
      {
        id: "consultation",
        title: "الاستشارات",
        description: "استشارات هندسية وبيئية قائمة على المحاكاة.",
        icon: MessageSquare,
      },
      {
        id: "training",
        title: "التدريب",
        description: "برامج تدريب احترافية للمهندسين والمؤسسات.",
        icon: GraduationCap,
      },
      {
        id: "software-distribution",
        title: "توزيع البرمجيات",
        description: "توفير أفضل برمجيات الهندسة والمحاكاة عالميًا.",
        icon: Package,
      },
    ],
  },
};

export function ServicesSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-heading text-h2 sm:text-4xl lg:text-5xl font-semibold text-foreground">
            {t.label}
          </h2>
        </ScrollReveal>

        {/* Services Grid - 4 Cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border" staggerDelay={100}>
          {t.services.map((service, index) => (
            <StaggerItem key={service.id} index={index}>
              <Link
                to={`/services/${service.id}`}
                className="group block bg-background p-8 text-center hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-border mx-auto flex items-center justify-center mb-6 group-hover:border-foreground/30 transition-colors duration-300">
                  <service.icon 
                    className="text-foreground/60" 
                    size={22} 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-heading text-h4 font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-body-sm text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <ArrowRight 
                  className="mx-auto text-foreground/30 group-hover:text-foreground/60 transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" 
                  size={18} 
                  strokeWidth={1.5} 
                />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
