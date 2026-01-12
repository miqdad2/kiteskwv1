import { Cpu, Cog, GraduationCap, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    eyebrow: "ABOUT KITES",
    label: "Who We Are",
    description: "KITES is a simulation-based engineering, training, and consulting institute dedicated to advancing engineering capabilities across the GCC. We bridge academic knowledge with real-world industrial applications through cutting-edge simulation technologies and expert-led training.",
  },
  ar: {
    eyebrow: "عن كايتس",
    label: "من نحن",
    description: "يُعد معهد كايتس جهة متخصصة في الحلول الهندسية القائمة على المحاكاة، والتدريب، والاستشارات، ويهدف إلى تطوير القدرات الهندسية في منطقة الخليج من خلال ربط المعرفة الأكاديمية بالتطبيقات الصناعية الواقعية باستخدام أحدث تقنيات المحاكاة.",
  },
};

export function WhoWeAreSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-[#F8FAFC] border-y border-gray-100 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <span className="block text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">
            {t.eyebrow}
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-8 tracking-tight">
            {t.label}
          </h2>
          <div className="w-12 h-px bg-primary/20 mx-auto mb-10" />
          <p className="font-body text-xl text-muted-foreground leading-[1.8] font-normal italic opacity-90">
            {t.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
