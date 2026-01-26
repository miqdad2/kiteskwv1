import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import splashLogo from "@/assets/branding/splash_logo.png";

interface IntroRevealProps {
    onComplete: () => void;
}

export function IntroReveal({ onComplete }: IntroRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const shineRef = useRef<HTMLDivElement>(null);
    const wordsRef = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
        // Set body background to site black to prevent white flash
        const originalBackground = document.body.style.background;
        document.body.style.background = "#0B0F14";
        document.body.style.overflow = "hidden";

        const container = containerRef.current;
        const logo = logoRef.current;
        const shine = shineRef.current;
        const words = wordsRef.current;

        if (!container || !logo || words.length === 0) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            gsap.set([logo, ...words], { opacity: 1, scale: 1, y: 0, rotationY: 0 });
            setTimeout(() => {
                gsap.to(container, {
                    opacity: 0,
                    duration: 0.01,
                    onComplete: () => {
                        document.body.style.overflow = "";
                        document.body.style.background = originalBackground;
                        onComplete();
                    },
                });
            }, 100);
            return;
        }

        // Create premium GSAP timeline
        const tl = gsap.timeline({
            onComplete: () => {
                container.setAttribute("aria-hidden", "true");
                document.body.style.overflow = "";
                // Delay restoring background to prevent flash
                setTimeout(() => {
                    document.body.style.background = originalBackground;
                }, 200);
                onComplete();
            },
        });

        // 1. Logo dramatic entrance with 3D rotation + scale
        const logoBounds = logo?.parentElement;
        if (logoBounds) {
            tl.fromTo(
                logoBounds,
                {
                    opacity: 0,
                    scale: 0.7,
                    rotationY: -90,
                    transformPerspective: 1000,
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }
            );
            // Ensure logo image is visible
            gsap.set(logo, { opacity: 1 });
        }

        // 2. Shine effect across logo
        if (shine) {
            tl.fromTo(
                shine,
                { x: "-100%", opacity: 0.6 },
                { x: "100%", opacity: 0, duration: 0.8, ease: "power2.inOut" },
                "-=0.6"
            );
        }

        // 3. Institution name - word by word with bounce
        tl.fromTo(
            words,
            {
                opacity: 0,
                y: 30,
                scale: 0.8,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.08, // Each word appears sequentially
                ease: "back.out(1.2)", // Adds subtle bounce
            },
            "-=0.4"
        );

        // 4. Hold with subtle pulse on logo
        tl.to(logo, {
            scale: 1.05,
            duration: 0.5,
            ease: "power1.inOut",
            yoyo: true,
            repeat: 1,
        });

        // 5. Elegant exit - fade entire container
        tl.to(container, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
        });

        return () => {
            tl.kill();
            document.body.style.overflow = "";
            document.body.style.background = originalBackground;
        };
    }, [onComplete]);

    // Split institution name into words for animation
    const institutionWords = [
        "KUWAIT",
        "INSTITUTE",
        "FOR",
        "TRAINING",
        "AND",
        "ENGINEERING",
        "SIMULATIONS",
    ];

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0B0F14 0%, #1a1f2e 40%, #2d3548 70%, #4a5568 100%)",
            }}
            role="presentation"
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                    animation: "gridMove 20s linear infinite",
                }} />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Logo container with shine effect */}
            <div className="relative mb-10 md:mb-12 lg:mb-14">
                <div className="bg-white shadow-2xl aspect-square flex items-center justify-center p-0">
                    <img
                        ref={logoRef}
                        src={splashLogo}
                        alt="KITES Logo"
                        className="w-[200px] h-auto opacity-0 md:w-[260px] lg:w-[340px]"
                        style={{
                            objectFit: "contain",
                            display: "block",
                            maxWidth: "100%",
                            maxHeight: "100%",
                        }}
                    />
                </div>
                {/* Shine overlay */}
                <div
                    ref={shineRef}
                    className="absolute inset-0 opacity-0 overflow-hidden"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        pointerEvents: "none",
                    }}
                />
            </div>

            {/* Institution Name - Word by word animation */}
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 px-6 max-w-5xl text-center md:gap-x-3 lg:gap-x-3.5">
                {institutionWords.map((word, index) => (
                    <span
                        key={index}
                        ref={(el) => {
                            if (el) wordsRef.current[index] = el;
                        }}
                        className="font-heading font-bold text-xl text-white tracking-wide uppercase opacity-0 drop-shadow-lg md:text-2xl lg:text-3xl"
                        style={{
                            textShadow: "2px 4px 12px rgba(0,0,0,0.5)",
                        }}
                    >
                        {word}
                    </span>
                ))}
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes gridMove {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(50px); }
                }
                
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0) translateX(0); 
                        opacity: 0.2;
                    }
                    50% { 
                        transform: translateY(-30px) translateX(20px); 
                        opacity: 0.4;
                    }
                }
            `}</style>
        </div>
    );
}
