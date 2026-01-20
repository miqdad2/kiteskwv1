import { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import {
    Cpu,
    Wrench,
    GraduationCap,
    Leaf,
    Building2,
    Factory,
    HardHat,
    Zap,
    Globe
} from "lucide-react";

type EcosystemMode = 'capabilities' | 'industries';

interface NavItem {
    id: string;
    label: string;
    icon: any; // Lucide icon
    path: string;
}

const capabilities: NavItem[] = [
    { id: 'simulation', label: 'Simulation', icon: Cpu, path: '/services/simulation' },
    { id: 'engineering', label: 'Engineering', icon: Wrench, path: '/services/engineering' },
    { id: 'training', label: 'Training', icon: GraduationCap, path: '/services/training' },
    { id: 'sustainability', label: 'Sustainability', icon: Leaf, path: '/services/sustainability' },
];

const industries: NavItem[] = [
    { id: 'gov', label: 'Government & Public Sector', icon: Building2, path: '/industries/government' },
    { id: 'oil', label: 'Oil & Gas', icon: Factory, path: '/industries/oil-gas' }, // Factory for Oil/Gas generic
    { id: 'aec', label: 'Architecture, Eng & Const.', icon: HardHat, path: '/industries/aec' },
    { id: 'manufacturing', label: 'Industrial & Manufacturing', icon: Wrench, path: '/industries/manufacturing' },
    { id: 'energy', label: 'Energy & Utilities', icon: Zap, path: '/industries/energy' },
];

export function EcosystemNav() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mode, setMode] = useState<EcosystemMode>('capabilities');

    // Switch handler
    const toggleMode = () => {
        setMode(prev => prev === 'capabilities' ? 'industries' : 'capabilities');
    };

    // Derived active items
    const activeItems = mode === 'capabilities' ? capabilities : industries;
    const radius = mode === 'capabilities' ? 140 : 160;

    // ONE-TIME Entrance Animation
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance: from opacity 0, y 12. Staggered.
            gsap.fromTo(".eco-entrance",
                { opacity: 0, y: 12 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "cubic-bezier(0.4, 0, 0.2, 1)"
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []); // Empty dependency = Runs once on mount

    // Mode Switch Animation (Crossfade)
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate nodes when mode changes (Simple crossfade/refresh look)
            gsap.fromTo(".eco-node",
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    stagger: 0.04,
                    ease: "power2.out"
                }
            );
        }, containerRef);
        // Note: We don't revert here to avoid clearing the state, just animating the new items
        return () => ctx.revert();
    }, [mode]);

    return (
        <div ref={containerRef} className="relative w-full h-[400px] flex items-center justify-center select-none eco-entrance">

            {/* Background Rings - Dashed, low contrast */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 eco-entrance">
                <div className="absolute w-[280px] h-[280px] border border-dashed border-white/30 rounded-full" />
                <div className="absolute w-[360px] h-[360px] border border-dashed border-white/20 rounded-full" />
            </div>

            {/* Central Node - Toggle */}
            <button
                onClick={toggleMode}
                className={cn(
                    "eco-center eco-entrance relative z-20 w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center",
                    "bg-white/[0.05] backdrop-blur-sm border border-white/20",
                    "hover:border-white/40 hover:bg-white/[0.08] transition-all duration-300",
                    "active:scale-98 cursor-pointer group"
                )}
            >
                <Globe className="w-8 h-8 text-white/90 mb-2 group-hover:scale-105 transition-transform duration-300" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-widest text-white/70 font-medium group-hover:text-white transition-colors duration-300">
                    {mode === 'capabilities' ? 'Our Capabilities' : 'Key Industries'}
                </span>
                <span className="absolute -bottom-6 text-[9px] text-white/30 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to Switch
                </span>
            </button>

            {/* Satellite Nodes */}
            <div className="absolute inset-0 pointer-events-none">
                {activeItems.map((item, index) => {
                    const total = activeItems.length;
                    const angle = (index * (360 / total)) - 90; // Start from top
                    const radian = (angle * Math.PI) / 180;
                    const x = Math.cos(radian) * radius;
                    const y = Math.sin(radian) * radius;

                    return (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={cn(
                                "eco-node absolute left-1/2 top-1/2 -ml-[45px] -mt-[45px]",
                                "w-[90px] h-[90px] rounded-full",
                                "flex flex-col items-center justify-center text-center p-2",
                                "bg-white/[0.05] border border-white/20 backdrop-blur-sm pointer-events-auto",
                                "hover:bg-white/[0.08] hover:border-white/50",
                                "transition-all duration-200 ease-out",
                                "active:scale-98"
                            )}
                            style={{
                                transform: `translate(${x}px, ${y}px)`
                            }}
                        >
                            <item.icon className="w-5 h-5 text-white/80 mb-2 group-hover:scale-105 transition-transform duration-300" strokeWidth={1.5} />
                            <span className="text-[8px] leading-tight text-white/70 font-medium uppercase tracking-wide">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>

        </div>
    );
}
