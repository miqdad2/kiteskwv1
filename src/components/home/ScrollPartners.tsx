import React, { useEffect, useRef } from 'react';
import { partners } from '@/data/partners';
import { useLanguage } from '@/contexts/LanguageContext';
import { gsap } from "@/lib/gsap";

export function ScrollPartners() {
    const { isRTL } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    // Configuration
    const BASE_SCALE = 0.95; // Requested: Adjacent ~0.95
    const ACTIVE_SCALE = 1.25; // Requested: Center 1.25
    const SCROLL_SPEED = 0.65; // User requested ~0.65 speed (previously was ~0.4)

    // Ensure we have enough copies for seamless loop
    // 5-6 items * 4 sets should effectively fill typical screens + buffer
    const marqueePartners = [...partners, ...partners, ...partners, ...partners];

    useEffect(() => {
        if (!trackRef.current || !containerRef.current) return;

        const track = trackRef.current;
        const totalWidth = track.scrollWidth;
        const singleSetWidth = totalWidth / 4; // Since we quadrupled the list

        // Use a GSAP context for easy cleanup
        const ctx = gsap.context(() => {

            // 1. Infinite Scroll Tween
            // We use xPercent/x for better performance.
            // For RTL we move positive, for LTR we move negative.
            const direction = isRTL ? 1 : -1;

            // Immediate setup
            gsap.set(track, { x: 0 });

            const scrollTween = gsap.to(track, {
                x: isRTL ? singleSetWidth : -singleSetWidth,
                duration: singleSetWidth / (100 * SCROLL_SPEED), // Calculate duration based on speed constant
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => {
                        return parseFloat(x) % singleSetWidth; // Seamless reset math
                    })
                }
            });


            // 2. Scaling Logic using GSAP Ticker
            // This runs every frame to update scales based on position relative to viewport center
            gsap.ticker.add(() => {
                if (!containerRef.current) return;

                const viewportCenter = window.innerWidth / 2;
                const containerRect = containerRef.current.getBoundingClientRect();
                const containerCenter = containerRect.left + containerRect.width / 2;

                // Optimization: Only run if container is visible? (Not strict requirement but good practice)

                itemsRef.current.forEach((item) => {
                    if (!item) return;

                    const rect = item.getBoundingClientRect();
                    const itemCenter = rect.left + rect.width / 2;

                    // Distance from visual center of the screen
                    const dist = Math.abs(itemCenter - viewportCenter);

                    // Logic for scale:
                    // Max scale at dist 0.
                    // Min scale (base) at some distance X (e.g., 300px).
                    // Use a smooth falloff.

                    const maxDist = 350; // Distance where effect fades to base

                    if (dist < maxDist) {
                        // Normalize distance (0 to 1)
                        const progress = 1 - (dist / maxDist);
                        // Easing for sharper peak
                        const eased = Math.pow(progress, 1.5);

                        const scale = BASE_SCALE + (ACTIVE_SCALE - BASE_SCALE) * eased;
                        item.style.transform = `scale(${scale})`;
                        item.style.filter = `brightness(${1 + eased * 0.1}) grayscale(0%)`; // Slight brightness boost at center
                        item.style.zIndex = Math.round(progress * 10).toString(); // Ensure center item overlaps nicely if needed
                    } else {
                        item.style.transform = `scale(${BASE_SCALE})`;
                        item.style.filter = "brightness(1) grayscale(0%)";
                        item.style.zIndex = "0";
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [isRTL]);

    return (
        <div
            ref={containerRef}
            className="w-full relative overflow-hidden py-20 bg-white select-none" // Adjusted padding
            dir="ltr" // Always LTR for DOM structure, we handle visually via transforms
        >
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

            <div
                ref={trackRef}
                className="flex items-center w-max will-change-transform"
            >
                {marqueePartners.map((partner, index) => (
                    <div
                        key={`${partner.id}-${index}`}
                        ref={el => itemsRef.current[index] = el}
                        className="flex-shrink-0 px-8 lg:px-12 flex justify-center origin-center" // Consistent spacing
                        style={{
                            width: '280px', // Fixed width for consistent calculation
                        }}
                    >
                        <div className="relative h-20 sm:h-24 flex items-center justify-center transition-transform will-change-transform">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-full w-auto object-contain"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
