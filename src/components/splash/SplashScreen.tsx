import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import splashLogoOutline from '@/assets/branding/splash_logo.png';
import splashLogoFilled from '@/assets/branding/splash_logo_filled.png';

interface SplashScreenProps {
    onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoOutlineRef = useRef<HTMLImageElement>(null);
    const logoFilledRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    // Fade out splash screen
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        duration: 0.6,
                        ease: 'power2.inOut',
                        onComplete
                    });
                }
            });

            // Set initial states
            gsap.set(logoOutlineRef.current, {
                opacity: 1
            });

            // Set the filled logo with a clip-path that starts from bottom
            gsap.set(logoFilledRef.current, {
                opacity: 1,
                clipPath: 'inset(100% 0% 0% 0%)' // Start completely hidden (will reveal from bottom)
            });

            // Animation sequence
            tl
                // Brief pause to show outline
                .to({}, { duration: 0.4 })
                // Bottom-to-top black fill animation
                .to(logoFilledRef.current, {
                    clipPath: 'inset(0% 0% 0% 0%)', // Reveal from bottom to top
                    duration: 1.2,
                    ease: 'power2.out'
                })
                // Hold the completed logo
                .to({}, { duration: 0.5 });

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
            aria-hidden="true"
        >
            <div className="relative w-[360px] h-auto sm:w-[420px] md:w-[480px]">
                {/* Outline logo (gray) */}
                <img
                    ref={logoOutlineRef}
                    src={splashLogoOutline}
                    alt=""
                    className="w-full h-auto"
                    aria-hidden="true"
                />

                {/* Filled logo (solid black) - revealed from bottom to top */}
                <div
                    ref={logoFilledRef}
                    className="absolute inset-0"
                    style={{
                        background: `url(${splashLogoFilled})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                    aria-hidden="true"
                />
            </div>
        </div>
    );
};
