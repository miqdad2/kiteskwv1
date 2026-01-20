import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface KPI {
    id: string;
    value: string;
    label: {
        en: string;
        ar: string;
    };
}

const kpiData: KPI[] = [
    {
        id: "engineers",
        value: "80+",
        label: { en: "ENGINEERS TRAINED", ar: "مهندس تم تدريبهم" },
    },
    {
        id: "clients",
        value: "30+",
        label: { en: "ENTERPRISE CLIENTS", ar: "عميل مؤسسي" },
    },
    {
        id: "partners",
        value: "10+",
        label: { en: "GLOBAL PARTNERS", ar: "شريك عالمي" },
    },
    {
        id: "countries",
        value: "7",
        label: { en: "COUNTRIES SERVED", ar: "دول نخدمها" },
    },
];

interface HeroKPIProps {
    startDelay?: number;
}

export function HeroKPI({ startDelay = 0 }: HeroKPIProps) {
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timerRef.current = setTimeout(() => {
                        setIsVisible(true);
                        observer.disconnect();
                    }, startDelay);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
            clearTimeout(timerRef.current);
        };
    }, [startDelay]);

    return (
        <div
            ref={containerRef}
            className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-24 pointer-events-auto"
        >
            <div
                className={cn(
                    "w-full pt-8 border-t border-white/10",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transition: 'opacity 1s ease-out, transform 1s ease-out', transitionDelay: '0ms' }}
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-20">
                    {kpiData.map((item, index) => (
                        <div
                            key={item.id}
                            className={cn(
                                "flex flex-col items-center sm:items-start text-center sm:text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <span className="font-heading font-bold text-3xl sm:text-4xl text-white mb-1">
                                {item.value}
                            </span>
                            <span className="font-body font-medium text-[10px] sm:text-xs tracking-widest text-white/50 uppercase">
                                {language === "ar" ? item.label.ar : item.label.en}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
