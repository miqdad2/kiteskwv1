import { useRef, useLayoutEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { gsap } from "@/lib/gsap";
import { CustomEase } from "gsap/all";

// Register CustomEase if not already registered globally, or just use the cubic-bezier string directly in ease
gsap.registerPlugin(CustomEase);

interface KPI {
    id: string;
    value: number;
    suffix: string;
    label: {
        en: string;
        ar: string;
    };
}

const kpiData: KPI[] = [
    {
        id: "engineers",
        value: 80,
        suffix: "+",
        label: { en: "ENGINEERS TRAINED", ar: "مهندس تم تدريبهم" },
    },
    {
        id: "clients",
        value: 30,
        suffix: "+",
        label: { en: "ENTERPRISE CLIENTS", ar: "عميل مؤسسي" },
    },
    {
        id: "partners",
        value: 10,
        suffix: "+",
        label: { en: "GLOBAL PARTNERS", ar: "شريك عالمي" },
    },
    {
        id: "countries",
        value: 7,
        suffix: "",
        label: { en: "COUNTRIES SERVED", ar: "دول نخدمها" },
    },
];

interface HeroKPIProps {
    startDelay?: number;
}

export function HeroKPI({ startDelay = 0 }: HeroKPIProps) {
    const { language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Container Entrance & Positioning (Shift up -24px)
            gsap.fromTo(containerRef.current,
                { y: 16, opacity: 0 },
                {
                    y: -24,
                    opacity: 1,
                    duration: 0.8,
                    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
                    delay: startDelay / 1000
                }
            );

            if (itemsRef.current.length) {
                itemsRef.current.forEach((item, index) => {
                    if (!item) return;

                    const valueElement = item.querySelector('.kpi-value');
                    const accentElement = item.querySelector('.kpi-accent');
                    const dataValue = kpiData[index].value;

                    // Animate the counter value only
                    const counter = { val: 0 };
                    const tl = gsap.timeline({
                        delay: startDelay / 1000 + (index * 0.1),
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 85%",
                            once: true,
                        },
                    });

                    // 1. Accent In
                    tl.to(accentElement, {
                        scaleX: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    }, 0);

                    // 2. Count Up
                    tl.to(counter, {
                        val: dataValue,
                        duration: 1.4,
                        ease: CustomEase.create("custom", "0.4, 0, 0.2, 1"),
                        onUpdate: () => {
                            if (valueElement && valueElement.firstChild) {
                                // Update text node only, preserve accent span
                                valueElement.firstChild.textContent = Math.floor(counter.val) + kpiData[index].suffix;
                            }
                        }
                    }, 0);

                    // 3. Accent Out (Fade)
                    tl.to(accentElement, {
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    }, ">-0.4");
                });
            }

        }, containerRef);

        return () => ctx.revert();
    }, [startDelay]);

    return (
        <div
            ref={containerRef}
            className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-24 pointer-events-auto"
        >
            <div className="w-full p-8 border border-[rgba(255,255,255,0.22)] rounded-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-20">
                    {kpiData.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => (itemsRef.current[index] = el)}
                            className="flex flex-col items-center sm:items-start text-center sm:text-left"
                        >
                            <span className="kpi-value font-heading font-bold text-3xl sm:text-4xl text-white mb-1 tabular-nums relative block">
                                0{item.suffix}
                                <span className="kpi-accent absolute -bottom-1 left-0 w-full h-[2px] bg-[#60a5fa] origin-left scale-x-0 opacity-0" />
                            </span>
                            <span className="kpi-label font-body font-medium text-[10px] sm:text-xs tracking-widest text-white/50 uppercase">
                                {language === "ar" ? item.label.ar : item.label.en}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
