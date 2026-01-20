import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

// Import SVG assets
import dassaultLogo from '@/assets/partners/dassault.svg';
import solidworksLogo from '@/assets/partners/solidworks.svg';
import simuliaLogo from '@/assets/partners/simulia.svg';
import mscLogo from '@/assets/partners/msc.svg';
import driveworksLogo from '@/assets/partners/driveworks.svg';
import simlabLogo from '@/assets/partners/simlab.svg';
import crealityLogo from '@/assets/partners/creality.svg';
import maxqdaLogo from '@/assets/partners/maxqda.svg';
import simaproLogo from '@/assets/partners/simapro.svg';
import herowearLogo from '@/assets/partners/herowear.svg';
import chaosLogo from '@/assets/partners/chaos.svg';
import cypeLogo from '@/assets/partners/cype.svg';
import ansysLogo from '@/assets/partners/ansys.svg';

const partners = [
    { name: 'Dassault Systèmes', logo: dassaultLogo, id: 'dassault' },
    { name: 'SOLIDWORKS', logo: solidworksLogo, id: 'solidworks' },
    { name: 'SIMULIA', logo: simuliaLogo, id: 'simulia' },
    { name: 'ANSYS', logo: ansysLogo, id: 'ansys' },
    { name: 'MSC Software', logo: mscLogo, id: 'msc' },
    { name: 'DriveWorks', logo: driveworksLogo, id: 'driveworks' },
    { name: 'SimLab Soft', logo: simlabLogo, id: 'simlab' },
    { name: 'CreaLity', logo: crealityLogo, id: 'creality' },
    { name: 'MAXQDA', logo: maxqdaLogo, id: 'maxqda' },
    { name: 'SimaPro', logo: simaproLogo, id: 'simapro' },
    { name: 'HEROWEAR', logo: herowearLogo, id: 'herowear' },
    { name: 'Chaos', logo: chaosLogo, id: 'chaos' },
    { name: 'CYPE', logo: cypeLogo, id: 'cype' },
];

export function PartnerLogos() {
    const { isRTL } = useLanguage();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Triplicate partners to ensure seamless loop
    const marqueePartners = [...partners, ...partners, ...partners];

    return (
        <div
            className="w-full relative overflow-hidden group select-none"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)'
            }}
            dir="ltr" // Force LTR for the scrolling container itself
        >
            <div
                className={cn(
                    "flex items-center gap-16 sm:gap-20 lg:gap-24 py-8 w-max", // Increased spacing: gap-16 -> gap-24
                    // Base animation
                    "animate-marquee",
                    // Pause on hover
                    "group-hover:[animation-play-state:paused]",
                    // Reduced motion
                    "motion-reduce:animate-none motion-reduce:translate-x-0"
                )}
                style={{
                    '--marquee-duration': '80s',
                    animationDirection: isRTL ? 'reverse' : 'normal'
                } as React.CSSProperties}
            >
                {marqueePartners.map((partner, index) => (
                    <div
                        key={`${partner.id}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center px-4 transition-all duration-300"
                    >
                        {/* Fixed height container: h-14 (mob) -> h-20 (tab) -> h-24 (desk) */}
                        <div className="relative h-14 sm:h-20 lg:h-24 w-auto min-w-[120px] flex items-center justify-center">
                            <img
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className={cn(
                                    "h-full w-auto object-contain max-h-full transition-all duration-300 ease-in-out",
                                    // Visual Normalization: increased max-width to allow larger logos to breathe
                                    "max-w-[180px] sm:max-w-[200px] lg:max-w-[240px]",
                                    // Interaction: subtle scale only
                                    "transition-all duration-300",
                                    "hover:scale-105"
                                )}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
