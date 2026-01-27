import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import {
    Users,
    Globe,
    Award,
    TrendingUp,
    Target,
    Zap,
    ArrowRight,
    Activity
} from "lucide-react";

// --- Types ---
interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

// --- Content ---
const content = {
    en: {
        intro: {
            label: "Our DNA",
            title: "Engineering the Future",
            desc: "Bridging the gap between academic theory and industrial reality."
        },
        items: [
            {
                id: "mission",
                label: "Our Mission",
                text: "Upskilling talent and driving engineering advancement through simulation.",
                icon: Target
            },
            {
                id: "vision",
                label: "Global Vision",
                text: "Positioning the GCC as a leader in smart, sustainable engineering.",
                icon: Globe
            },
            {
                id: "process",
                label: "Our Process",
                steps: ["Analyze", "Simulate", "Optimize"],
                icon: Activity
            }
        ]
    },
    ar: {
        intro: {
            label: "هويتنا",
            title: "هندسة المستقبل",
            desc: "سد الفجوة بين النظرية الأكاديمية والواقع الصناعي."
        },
        items: [
            {
                id: "mission",
                label: "رسالتنا",
                text: "تطوير الكفاءات وقيادة التقدم الهندسي من خلال المحاكاة.",
                icon: Target
            },
            {
                id: "vision",
                label: "رؤية عالمية",
                text: "ترسيخ مكانة الخليج كرائد في الهندسة الذكية والمستدامة.",
                icon: Globe
            },
            {
                id: "process",
                label: "نهجنا",
                steps: ["تحليل", "محاكاة", "تحسين"],
                icon: Activity
            }
        ]
    }
};

// --- Sub-Components ---
const BentoCard = ({ children, className, delay = 0 }: BentoCardProps) => {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-500",
                "bento-card opacity-0 translate-y-8", // Initial state for GSAP
                className
            )}
            data-delay={delay}
        >
            {/* Hover Spotlight (Subtle Grey) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,0,0,0.03),transparent_40%)] pointer-events-none -z-1" />

            {children}
        </div>
    );
};

export function ProcessBentoGrid() {
    const { language, isRTL } = useLanguage();
    const t = content[language];
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Interaction: Mouse Move for Spotlight ---
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const cards = containerRef.current?.getElementsByClassName("bento-card");
        if (!cards) return;

        for (const card of cards) {
            const rect = (card as HTMLElement).getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
            (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        }
    };

    // --- Animation: Scroll Reveal ---
    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.batch(".bento-card", {
                start: "top 85%",
                onEnter: (elements) => {
                    gsap.to(elements, {
                        opacity: 1,
                        y: 0,
                        stagger: 0.15,
                        duration: 0.8,
                        ease: "power3.out"
                    });
                },
                once: true
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const missionItem = t.items.find(i => i.id === 'mission')!;
    const visionItem = t.items.find(i => i.id === 'vision')!;
    const processItem = t.items.find(i => i.id === 'process')!;

    return (
        <div
            ref={containerRef}
            className="w-full max-w-7xl mx-auto py-8"
            onMouseMove={handleMouseMove}
        >
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* 1. HERO TEXT CARD (Large, 6 cols) */}
                <BentoCard className="md:col-span-6 lg:col-span-8 flex flex-col justify-between min-h-[300px] bg-neutral-50/50">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
                            <Zap className="w-3 h-3 text-secondary" />
                            {t.intro.label}
                        </span>
                        <h3 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 text-balance">
                            {t.intro.title}
                        </h3>
                        <p className="font-body text-xl text-gray-500 max-w-lg leading-relaxed">
                            {t.intro.desc}
                        </p>
                    </div>
                    {/* Decorative abstract lines */}
                    <div className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.03]">
                        <svg viewBox="0 0 200 200" className="w-full h-full stroke-current text-black fill-none">
                            <path d="M0,200 Q100,0 200,200" strokeWidth="2" />
                            <path d="M-50,200 Q50,-50 150,200" strokeWidth="2" />
                            <path d="M50,200 Q150,50 250,200" strokeWidth="2" />
                        </svg>
                    </div>
                </BentoCard>

                {/* 2. STATS CARD (Compact, 3 cols) - Reusing Logic */}
                <BentoCard className="md:col-span-3 lg:col-span-4 bg-zinc-900 text-white flex flex-col justify-center items-center text-center relative overflow-hidden group">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />

                    <div className="relative z-10">
                        <Users className="w-8 h-8 text-gray-400 mb-4 mx-auto" strokeWidth={1.5} />
                        <div className="text-5xl font-bold font-heading mb-1 tracking-tight">
                            500+
                        </div>
                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                            Engineers Trained
                        </p>
                    </div>
                </BentoCard>

                {/* 3. MISSION CARD (Medium, 4 cols) */}
                <BentoCard className="md:col-span-3 lg:col-span-4 flex flex-col">
                    <div className="mb-auto">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-gray-700">
                            <missionItem.icon size={20} />
                        </div>
                        <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                            {missionItem.label}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-body">
                            {missionItem.text}
                        </p>
                    </div>
                </BentoCard>

                {/* 4. PROCESS CARD (Large, 4 cols) - Animated */}
                <BentoCard className="md:col-span-6 lg:col-span-4 bg-gray-50 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Activity size={120} />
                    </div>

                    <div className="relative z-10">
                        <h4 className="font-heading text-lg font-semibold text-text-deep-neutral mb-8">
                            {processItem.label}
                        </h4>

                        <div className="space-y-4">
                            {processItem.steps.map((step, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400 shadow-sm">
                                        {i + 1}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{step}</span>
                                    {/* Animated Line */}
                                    <div className="flex-1 h-px bg-gray-200 overflow-hidden">
                                        <div
                                            className="h-full bg-gray-400 w-full -translate-x-full"
                                            style={{
                                                animation: `slideRight 2s infinite ease-in-out ${i * 0.4}s`
                                                // Note: Needs global keyframes or style tag. 
                                                // I'll add a style tag to this component for simplicity.
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </BentoCard>

                {/* 5. VISION CARD (Medium, 4 cols) */}
                <BentoCard className="md:col-span-6 lg:col-span-4 flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-gray-700">
                        <visionItem.icon size={20} />
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                        {visionItem.label}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-body">
                        {visionItem.text}
                    </p>
                </BentoCard>

            </div>

            <style>{`
                @keyframes slideRight {
                    0% { transform: translateX(-100%); }
                    50%, 100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}

