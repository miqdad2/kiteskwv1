import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { HeroKPI } from "@/components/home/HeroKPI";
import { FlowFieldCanvas } from "@/components/home/FlowFieldCanvas";
import { gsap } from "@/lib/gsap";

export function Hero() {
    const { language, isRTL } = useLanguage();
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);

    // Initial Load Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "cubic-bezier(0.4, 0, 0.2, 1)" }
            });

            // Set initial state to avoid FOUC
            gsap.set(".hero-element", { autoAlpha: 0, y: 15 });

            tl.to(".hero-element",
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.12,
                }
            );

            // Flow field fade in separately
            gsap.fromTo(".flow-field-bg",
                { opacity: 0 },
                { opacity: 0.2, duration: 1.5, ease: "power2.out", delay: 0.2 }
            );

        }, heroRef);

        return () => ctx.revert();
    }, []);

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
            headline: "SIMULATE EVERYTHING",
            description: "Advanced simulation, training, and sustainability solutions trusted by engineering leaders across the GCC.",
            ctaPrimary: "Talk to Our Experts",
            ctaSecondary: "Explore Capabilities",
        },
        ar: {
            headline: "حاكي كل شيء",
            description: "حلول محاكاة وتدريب واستدامة متطورة موثوقة من قادة الهندسة في دول مجلس التعاون الخليجي.",
            ctaPrimary: "تحدث إلى خبرائنا",
            ctaSecondary: "استكشف القدرات",
        },
    }[language];

    return (
        <section
            ref={heroRef}
            className="relative min-h-[100dvh] bg-gradient-to-b from-[#0B0F14] via-[#0E141B] to-[#0B0F14] overflow-hidden flex flex-col justify-center z-10"
        >

            {/* 1. LAYER: Background Noise - Z-0 */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* 2. LAYER: Flow Field Visual - Z-10 */}
            <div
                className="flow-field-bg absolute inset-0 z-10 opacity-0 transition-transform duration-75 ease-out will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
                <FlowFieldCanvas />
            </div>

            {/* 2.5 LAYER: Enhanced Contrast Gradient - Z-15 */}
            <div className="absolute inset-0 z-15 bg-gradient-to-r from-[#0B1015] via-[#0B1015]/80 to-transparent pointer-events-none" />


            {/* 3. LAYER: Content - Z-20 */}
            <div
                className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center h-full min-h-[inherit] will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >

                <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                    isRTL ? "text-right" : "text-left"
                )}>

                    {/* Main Content Column */}
                    <div className={cn(
                        "lg:col-span-8 flex flex-col justify-center",
                        "max-lg:text-center max-lg:items-center"
                    )}>

                        {/* Headline Block */}
                        <div className="mb-8">
                            {/* Primary Headline */}
                            <h1 className="hero-element font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white mb-6"
                                style={{
                                    textRendering: 'geometricPrecision',
                                    WebkitFontSmoothing: 'antialiased',
                                }}>
                                {content.headline}
                            </h1>

                            {/* Description */}
                            <p className="hero-element font-body text-base sm:text-lg lg:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mb-10">
                                {content.description}
                            </p>

                            {/* CTAs */}
                            <div className="hero-element flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                                {/* Primary CTA */}
                                <Link to="/contact" className="w-full sm:w-auto">
                                    <button className="group relative w-full sm:min-w-[180px] h-12 px-6 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 ease-out flex items-center justify-center rounded-sm text-sm font-medium tracking-wide">
                                        <span>{content.ctaPrimary}</span>
                                        <ArrowRight className={cn("w-4 h-4 transition-transform duration-300",
                                            isRTL ? "mr-2 group-hover:-translate-x-1 rotate-180" : "ml-2 group-hover:translate-x-1"
                                        )} />
                                    </button>
                                </Link>

                                {/* Secondary CTA */}
                                <Link
                                    to="/services"
                                    className="group/secondary inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    <span>{content.ctaSecondary}</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* KPI Strip */}
                <div className="hero-element relative z-20 mt-16 lg:mt-24 border-t border-white/5 pt-8">
                    <HeroKPI startDelay={100} />
                </div>

            </div>

        </section >
    );
}
