import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { HeroKPI } from "@/components/home/HeroKPI";
import { FlowFieldCanvas } from "@/components/home/FlowFieldCanvas";

export function Hero() {
    const { language, isRTL } = useLanguage();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const content = {
        en: {
            headline: "Engineering Simulation Solutions",
            subheadline: "Delivered Through Expertise, Training, and Partnership",
            description1: "Multi-vendor simulation platforms supported by structured training, consulting, and long-term engineering support.",
            description2: "Trusted by universities, government agencies, and industrial organizations across the GCC.",
            ctaPrimary: "Get an Engineering Assessment",
            ctaSecondary: "Explore Our Capabilities",
        },
        ar: {
            headline: "حلول المحاكاة الهندسية",
            subheadline: "تُقدَّم من خلال الخبرة والتدريب والشراكة",
            description1: "منصات محاكاة متعددة البائعين مدعومة بتدريب منظم واستشارات ودعم هندسي طويل المدى.",
            description2: "موثوق بها من قبل الجامعات والجهات الحكومية والمؤسسات الصناعية في دول مجلس التعاون الخليجي.",
            ctaPrimary: "احصل على تقييم هندسي",
            ctaSecondary: "استكشف قدراتنا",
        },
    }[language];

    return (
        <section
            className="relative min-h-screen bg-gradient-to-b from-[#0B0F14] via-[#0E141B] to-[#0B0F14] overflow-hidden flex flex-col justify-center pb-12 z-10"
            style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}
        >

            {/* 1. LAYER: Background Noise - Z-0 */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* 2. LAYER: Flow Field Visual - Z-10 */}
            <div
                className="absolute inset-0 z-10 opacity-20 transition-transform duration-75 ease-out will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
                <FlowFieldCanvas />
            </div>

            {/* 2.5 LAYER: Enhanced Contrast Gradient - Z-15 */}
            <div className="absolute inset-0 z-15 bg-gradient-to-r from-[#0B0F14]/95 via-[#0B0F14]/70 to-[#0B0F14]/30 pointer-events-none" />
            <div className="absolute inset-0 z-15 bg-gradient-to-b from-transparent via-transparent to-[#0B0F14]/50 pointer-events-none" />

            {/* 3. LAYER: Content - Z-20 */}
            <div
                className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >

                <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",
                    isRTL ? "text-right" : "text-left"
                )}>

                    {/* Main Content Column */}
                    <div className={cn(
                        "lg:col-span-8 flex flex-col justify-center",
                        "max-lg:text-center max-lg:items-center"
                    )}>

                        {/* Headline Block */}
                        <div className="mb-8 sm:mb-10">
                            {/* Primary Headline */}
                            <h1 className="font-heading font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.1] tracking-tight text-white mb-3 sm:mb-4 animate-hero-up opacity-0"
                                style={{
                                    animationDelay: '100ms',
                                    textRendering: 'geometricPrecision',
                                    WebkitFontSmoothing: 'antialiased',
                                }}>
                                {content.headline}
                            </h1>

                            {/* Subheadline - Smaller, lighter */}
                            <p className="font-heading font-medium text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[1.75rem] xl:text-[2rem] leading-[1.2] tracking-tight text-white/70 animate-hero-up opacity-0"
                                style={{ animationDelay: '200ms' }}>
                                {content.subheadline}
                            </p>
                        </div>

                        {/* Description - Two calm lines */}
                        <div className="space-y-4 mb-8 sm:mb-10 max-w-2xl animate-hero-fade opacity-0"
                            style={{ animationDelay: '350ms' }}>
                            <p className="font-body text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed">
                                {content.description1}
                            </p>
                            <p className="font-body text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed">
                                {content.description2}
                            </p>

                            {/* Authority Reinforcement Line */}
                            <p className="font-heading font-medium text-xs sm:text-sm text-white/40 uppercase tracking-widest pt-4 border-t border-white/10">
                                {language === 'ar'
                                    ? "دعم البرامج الهندسية الأكاديمية والحكومية والصناعية عبر دول مجلس التعاون الخليجي."
                                    : "Supporting academic, government, and industrial engineering programs across the GCC."}
                            </p>
                        </div>

                        {/* CTAs - Clear hierarchy with proper interaction feedback */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 w-full sm:w-auto animate-hero-scale opacity-0"
                            style={{ animationDelay: '500ms' }}>
                            {/* Primary CTA - Dark Glass Default, White Hover (Inversion) */}
                            <Link to="/contact" className="w-full sm:w-auto">
                                <button className="group relative w-full sm:min-w-[240px] h-12 sm:h-14 px-8 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white hover:text-[#0B0F14] hover:border-white hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.98] transition-all duration-300 ease-out flex items-center justify-center rounded text-[15px] sm:text-base tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                                    <span>{content.ctaPrimary}</span>
                                    <ArrowRight className={cn("w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300",
                                        isRTL ? "mr-3 group-hover:-translate-x-1 rotate-180" : "ml-3 group-hover:translate-x-1"
                                    )} />
                                </button>
                            </Link>

                            {/* Secondary CTA - Strictly Text Link (No Button Style) */}
                            <Link
                                to="/services"
                                className="group/secondary relative inline-flex items-center justify-center py-2 px-1 rounded transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                            >
                                <span className={cn(
                                    "font-body font-medium text-sm sm:text-[15px] text-white/70 group-hover/secondary:text-white transition-colors duration-200",
                                    "border-b border-transparent group-hover/secondary:border-white/60 pb-0.5" // Subtle underline on hover
                                )}>
                                    {content.ctaSecondary}
                                </span>
                                <ArrowRight className={cn(
                                    "w-4 h-4 ml-2 text-white/50 group-hover/secondary:text-white transition-all duration-300",
                                    isRTL
                                        ? "rotate-180 group-hover/secondary:-translate-x-1"
                                        : "group-hover/secondary:translate-x-1"
                                )} />
                            </Link>
                        </div>

                    </div>

                    {/* Visual Spacer (Right Side) */}
                    <div className="hidden lg:block lg:col-span-4 h-[400px]">
                        {/* The flow field background fills this visually */}
                    </div>

                </div>

                {/* KPI Strip - Anchored at Bottom of Hero Content */}
                <div className="relative z-20 mt-12 lg:mt-16">
                    <HeroKPI startDelay={700} />
                </div>

            </div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0B0F14] to-transparent pointer-events-none z-10" />

        </section >
    );
}
