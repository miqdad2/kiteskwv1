import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Users, Briefcase, GraduationCap, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const metrics = {
    en: [
        { id: 1, value: 50, suffix: "+", label: "Enterprise Projects", icon: Briefcase },
        { id: 2, value: 1000, suffix: "+", label: "Engineers Trained", icon: GraduationCap },
        { id: 3, value: 12, suffix: "", label: "Strategic Partners", icon: Users },
        { id: 4, value: 6, suffix: "", label: "GCC Countries Served", icon: Globe },
    ],
    ar: [
        { id: 1, value: 50, suffix: "+", label: "مشروع مؤسسي", icon: Briefcase },
        { id: 2, value: 1000, suffix: "+", label: "مهندس متدرب", icon: GraduationCap },
        { id: 3, value: 12, suffix: "", label: "شريك استراتيجي", icon: Users },
        { id: 4, value: 6, suffix: "", label: "دول خليجية نخدمها", icon: Globe },
    ]
};

export function ImpactMetrics() {
    const { language } = useLanguage();
    const data = metrics[language];
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".metric-item", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            // Count Up Animation
            data.forEach((item, index) => {
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: item.value,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                    },
                    onUpdate: () => {
                        const el = document.getElementById(`metric-val-${index}`);
                        if (el) el.innerText = Math.floor(obj.val) + item.suffix;
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [language]);

    return (
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-gray-100 pt-16">
            {data.map((item, index) => (
                <div key={item.id} className="metric-item flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                        <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tabular-nums" id={`metric-val-${index}`}>
                        0
                    </div>
                    <p className="font-body text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
}
