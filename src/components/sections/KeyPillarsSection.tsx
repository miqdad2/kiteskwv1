import { Cpu, Cog, GraduationCap, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
    en: {
        pillarsLabel: "Key Pillars",
        pillars: [
            { title: "Simulation Expertise", icon: Cpu },
            { title: "Engineering Consulting", icon: Cog },
            { title: "Training Excellence", icon: GraduationCap },
            { title: "Sustainable Solutions", icon: Leaf },
        ],
    },
    ar: {
        pillarsLabel: "الركائز الأساسية",
        pillars: [
            { title: "الخبرة في المحاكاة", icon: Cpu },
            { title: "الاستشارات الهندسية", icon: Cog },
            { title: "التميز في التدريب", icon: GraduationCap },
            { title: "الحلول المستدامة", icon: Leaf },
        ],
    },
};

export function KeyPillarsSection() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="key-pillars" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <ScrollReveal className="text-center mb-16">
                    <p className="font-body text-caption font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
                        {t.pillarsLabel}
                    </p>
                    <div className="h-px w-12 bg-border mx-auto" />
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={100}>
                    {t.pillars.map((pillar, index) => (
                        <StaggerItem key={pillar.title} index={index}>
                            <div className="group h-full p-8 bg-white border border-gray-100 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:border-gray-200 hover:-translate-y-1 text-center flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-gray-100 transition-colors duration-300">
                                    <pillar.icon className="text-gray-400 group-hover:text-primary transition-colors duration-300" size={28} strokeWidth={1.25} />
                                </div>
                                <h3 className="font-heading text-lg font-semibold text-foreground tracking-tight">
                                    {pillar.title}
                                </h3>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
