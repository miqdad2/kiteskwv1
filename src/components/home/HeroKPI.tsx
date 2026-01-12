import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { GraduationCap, Building2, Handshake, Globe } from "lucide-react";

interface KPI {
    id: string;
    icon: React.ElementType;
    label: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string;
    };
}

const kpiData: KPI[] = [
    {
        id: "training",
        icon: GraduationCap,
        label: { en: "Training Excellence", ar: "التميز في التدريب" },
        description: { en: "Structured professional and academic training", ar: "تدريب مهني وأكاديمي منظم" },
    },
    {
        id: "clients",
        icon: Building2,
        label: { en: "Institutional Trust", ar: "ثقة المؤسسات" },
        description: { en: "Universities, ministries, and public institutions", ar: "جامعات ووزارات ومؤسسات عامة" },
    },
    {
        id: "partners",
        icon: Handshake,
        label: { en: "Technology Partners", ar: "شركاء التقنية" },
        description: { en: "MSC, ANSYS ecosystem, Altair, and others", ar: "MSC و ANSYS و Altair وغيرها" },
    },
    {
        id: "reach",
        icon: Globe,
        label: { en: "Regional Reach", ar: "انتشار إقليمي" },
        description: { en: "Active projects across GCC markets", ar: "مشاريع نشطة في أسواق الخليج" },
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
            className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16 pointer-events-auto"
        >
            <div
                className={cn(
                    "w-full rounded-lg bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-4 sm:p-6 md:p-8 overflow-hidden relative",
                    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:z-10",
                    isVisible ? "opacity-100 translate-y-0 before:animate-[shimmer_2s_ease-in-out_forwards]" : "opacity-0 translate-y-4"
                )}
                style={{ transition: 'opacity 1s ease-out, transform 1s ease-out', transitionDelay: '0ms' }}
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-20">
                    {kpiData.map((item, index) => (
                        <KPICard
                            key={item.id}
                            item={item}
                            isVisible={isVisible}
                            language={language}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function KPICard({
    item,
    isVisible,
    language,
    delay,
}: {
    item: KPI;
    isVisible: boolean;
    language: string;
    delay: number;
}) {
    const Icon = item.icon;

    return (
        <div
            className={cn(
                "flex flex-col items-center text-center space-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" strokeWidth={1.5} />
            </div>

            {/* Label */}
            <div className="font-heading font-semibold text-xs sm:text-sm text-white tracking-tight">
                {language === "ar" ? item.label.ar : item.label.en}
            </div>

            {/* Description */}
            <div className="text-[9px] sm:text-[10px] font-body text-white/45 font-medium leading-snug max-w-[130px] sm:max-w-[150px]">
                {language === "ar" ? item.description.ar : item.description.en}
            </div>
        </div>
    );
}
