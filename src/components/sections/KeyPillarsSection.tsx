import { Cpu, Cog, GraduationCap, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

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
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Header
            gsap.fromTo(".pillar-header",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate Cards Stagger
            gsap.fromTo(".pillar-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pillar-grid",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="key-pillars" className="py-24 lg:py-32 bg-white border-t border-soft relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="pillar-header text-center mb-20 opacity-0">
                    <p className="font-body text-caption font-medium text-[#2563eb]/80 uppercase tracking-[0.2em] mb-4">
                        {t.pillarsLabel}
                    </p>
                    <div className="h-px w-12 bg-[#2563eb] mx-auto" />
                </div>

                <div className="pillar-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {t.pillars.map((pillar, index) => (
                        <div key={pillar.title} className="pillar-card opacity-0">
                            <div className="group h-full p-8 bg-white border border-gray-100 border-t-2 border-t-transparent rounded-xl transition-all duration-300 ease-executive shadow-sm hover:shadow-xl hover:border-gray-200 hover:border-t-[#2563eb] hover:-translate-y-1 text-center flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#2563eb]/5 group-hover:border-[#2563eb]/10 group-hover:scale-105 transition-all duration-300 ease-executive">
                                    <pillar.icon className="text-gray-400 group-hover:text-[#2563eb] transition-colors duration-300 ease-executive" size={28} strokeWidth={1.25} />
                                </div>
                                <h3 className="font-heading text-lg font-semibold text-foreground tracking-tight">
                                    {pillar.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
