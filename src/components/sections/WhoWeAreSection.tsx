import { Cpu, Cog, GraduationCap, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    label: "Who We Are",
    description: "KITES is a simulation-based engineering, training, and consulting institute dedicated to advancing engineering capabilities across the GCC. We bridge academic knowledge with real-world industrial applications through cutting-edge simulation technologies and expert-led training.",
    pillarsLabel: "Key Pillars",
    pillars: [
      { title: "Simulation Expertise", icon: Cpu },
      { title: "Engineering Consulting", icon: Cog },
      { title: "Training Excellence", icon: GraduationCap },
      { title: "Sustainable Solutions", icon: Leaf },
    ],
  },
  ar: {
    label: "من نحن",
    description: "يُعد معهد الكويت للتدريب والمحاكاة الهندسية جهة متخصصة في الحلول الهندسية القائمة على المحاكاة، والتدريب، والاستشارات، ويهدف إلى تطوير القدرات الهندسية في منطقة الخليج من خلال ربط المعرفة الأكاديمية بالتطبيقات الصناعية الواقعية باستخدام أحدث تقنيات المحاكاة.",
    pillarsLabel: "الركائز الأساسية",
    pillars: [
      { title: "الخبرة في المحاكاة", icon: Cpu },
      { title: "الاستشارات الهندسية", icon: Cog },
      { title: "التميز في التدريب", icon: GraduationCap },
      { title: "الحلول المستدامة", icon: Leaf },
    ],
  },
};

export function WhoWeAreSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Text Content */}
          <ScrollReveal>
            <div className="accent-line mb-8" />
            <h2 className="font-heading text-h2 sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
              {t.label}
            </h2>
            <p className="font-body text-body-lg lg:text-xl text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </ScrollReveal>

          {/* Right Column - Key Pillars */}
          <ScrollReveal delay={150}>
            <p className="font-body text-caption font-medium text-muted-foreground uppercase tracking-widest mb-8">
              {t.pillarsLabel}
            </p>
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={80}>
              {t.pillars.map((pillar, index) => (
                <StaggerItem key={pillar.title} index={index}>
                  <div className="group p-6 border border-border hover:border-foreground/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
                    <div className="w-10 h-10 border border-border flex items-center justify-center mb-5 group-hover:border-foreground/30 transition-colors duration-300">
                      <pillar.icon className="text-foreground/60" size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-body font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
