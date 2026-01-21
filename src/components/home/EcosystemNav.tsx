import { useRef, useState, useLayoutEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    Globe,
    Briefcase,
    Box
} from "lucide-react";

type EcosystemMode = 'capabilities' | 'industries';

interface NavItem {
    id: string;
    label: string;
    icon: any; // Lucide icon
    path: string;
}

const services: NavItem[] = [
    { id: 'consultation', label: 'Consultation', icon: Briefcase, path: '/services/consultation' },
    { id: 'training', label: 'Training', icon: GraduationCap, path: '/services/training' },
    { id: 'software', label: 'Software Dist.', icon: Box, path: '/services/software-distribution' },
    { id: 'prototype', label: 'Prototype Dev.', icon: Wrench, path: '/services/prototype-development' },
];

const industries: NavItem[] = [
    { id: 'gov', label: 'Government & Public Sector', icon: Building2, path: '/contact' },
    { id: 'oil', label: 'Oil & Gas', icon: Factory, path: '/contact' },
    { id: 'aec', label: 'Architecture, Eng & Const.', icon: HardHat, path: '/contact' },
    { id: 'manufacturing', label: 'Industrial & Manufacturing', icon: Wrench, path: '/contact' },
    { id: 'energy', label: 'Energy & Utilities', icon: Zap, path: '/contact' },
];

export function EcosystemNav() {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLButtonElement>(null);
    const [mode, setMode] = useState<EcosystemMode>('capabilities');
    const nodesRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const navigate = useNavigate();

    // Switch handler / Contact Handler
    const handleCenterClick = () => {
        if (mode === 'industries') {
            navigate('/contact');
            return;
        }
        setMode(prev => prev === 'capabilities' ? 'industries' : 'capabilities');
    };

    // Center Node Interactions
    const handleCenterHover = () => {
        if (!centerRef.current) return;

        // Scale & Lift
        gsap.to(centerRef.current, {
            scale: 1.02,
            y: -1,
            borderColor: "rgba(96, 165, 250, 0.6)", // Brand Blue (Blue-400), subtle opacity
            duration: 0.3,
            ease: "cubic-bezier(0.4, 0, 0.2, 1)"
        });

        // Arrow Animation (Target by class)
        gsap.to(".eco-arrow", {
            x: 5,
            color: "#60a5fa", // Brand Blue (Blue-400)
            duration: 0.3,
            ease: "cubic-bezier(0.4, 0, 0.2, 1)"
        });
    };

    const handleCenterLeave = () => {
        if (!centerRef.current) return;

        // Reset
        gsap.to(centerRef.current, {
            scale: 1,
            y: 0,
            borderColor: "rgba(255,255,255,0.3)", // Original
            duration: 0.25,
            ease: "cubic-bezier(0.4, 0, 0.2, 1)"
        });

        gsap.to(".eco-arrow", {
            x: 0,
            color: "currentColor", // Reset color
            duration: 0.25,
            ease: "cubic-bezier(0.4, 0, 0.2, 1)"
        });
    };

    const handleCenterDown = () => {
        if (!centerRef.current) return;
        gsap.to(centerRef.current, {
            scale: 0.98,
            duration: 0.08,
            ease: "power1.out"
        });
    };

    const handleCenterUp = () => {
        // Return to hover state if still hovering, or normal if not
        if (!centerRef.current) return;
        gsap.to(centerRef.current, {
            scale: 1.02, // Assuming still hovering
            duration: 0.2,
            ease: "power1.out"
        });
    };

    // Derived active items
    const activeItems = mode === 'capabilities' ? services : industries;
    const radius = mode === 'capabilities' ? 195 : 225;  // Increased from 180/210 for better spacing

    // ONE-TIME Entrance Animation + Continuous Rotation
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance
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

            // Subtle continuous rotation for rings
            gsap.to(".eco-parallax-ring", {
                rotation: 360,
                duration: 120, // Very slow
                repeat: -1,
                ease: "none"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Mode Switch Animation
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
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
        return () => ctx.revert();
    }, [mode]);

    // Parallax & Interactivity Handler
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        // Disable on likely touch/mobile devices check (simplified)
        if (window.matchMedia("(hover: none)").matches) return;

        const container = containerRef.current;
        if (!container) return;

        const { width, height, left, top } = container.getBoundingClientRect();
        // Normalized coordinates (-1 to 1)
        const x = ((e.clientX - left) / width) - 0.5;
        const y = ((e.clientY - top) / height) - 0.5;

        // Parallax Container Layers
        gsap.to(".eco-parallax-ring", {
            x: x * 15,
            y: y * 15,
            duration: 1.5,
            ease: "power2.out"
        });

        gsap.to(".eco-center", {
            x: x * 8,
            y: y * 8,
            duration: 1.2,
            ease: "power2.out"
        });

        // Nodes move slightly opposite or varied for depth
        gsap.to(".eco-node", {
            x: x * 6,
            y: y * 6,
            duration: 1.2,
            ease: "power2.out",
            overwrite: "auto" // Caution: Don't overwrite hover effects
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        // Reset Parallax
        gsap.to([".eco-parallax-ring", ".eco-center", ".eco-node"], {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1.2,
            ease: "power2.out"
        });
    }, []);

    // Node Interaction
    const handleNodeHover = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
        const target = e.currentTarget;

        // Contextual Focus: Dim others
        gsap.to(nodesRef.current.filter((_, i) => i !== index), {
            opacity: 0.4,
            scale: 0.98,
            duration: 0.3
        });

        // Magnetic / Active effect
        gsap.to(target, {
            opacity: 1,
            scale: 1.05,
            borderColor: "rgba(96, 165, 250, 0.5)", // Brand Blue
            backgroundColor: "rgba(96, 165, 250, 0.05)", // Very subtle blue tint
            duration: 0.3
        });
    };

    const handleNodeLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;

        // Reset Focus
        gsap.to(nodesRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3
        });

        // Reset Node
        gsap.to(target, {
            scale: 1,
            borderColor: "rgba(255,255,255,0.2)",
            backgroundColor: "rgba(255,255,255,0.05)",
            duration: 0.3
        });
    };

    const handleNodeClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, index: number) => {
        if (mode === 'industries') {
            e.preventDefault();
            const target = e.currentTarget;

            // Interaction: Scale up triggered node, fade out others
            gsap.to(target, { scale: 1.04, duration: 0.25, ease: "cubic-bezier(0.4, 0, 0.2, 1)" });
            gsap.to(nodesRef.current.filter((_, i) => i !== index), {
                opacity: 0.3,
                duration: 0.25
            });

            // Delayed Navigation
            setTimeout(() => {
                navigate(path);
            }, 300);
        }
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-[600px] flex items-center justify-center select-none eco-entrance"
        >

            {/* Background Rings - Parallax Layer + Slow Rotation */}
            <div className="eco-parallax-ring absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.045] eco-entrance">
                {/* Inner Decoration Ring */}
                <div
                    className="absolute border border-dashed border-white/20 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: radius * 1.4, height: radius * 1.4 }}
                />

                {/* Primary Alignment Ring - Passes through outer nodes */}
                <div
                    className="absolute border border-dashed border-white/10 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: radius * 2, height: radius * 2 }}
                />
            </div>

            {/* Central Node - Toggle */}
            <button
                ref={centerRef}
                onClick={handleCenterClick}
                onMouseEnter={handleCenterHover}
                onMouseLeave={handleCenterLeave}
                onMouseDown={handleCenterDown}
                onMouseUp={handleCenterUp}
                className={cn(
                    "eco-center eco-entrance relative z-20 w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center",
                    "bg-white/[0.05] backdrop-blur-sm border border-white/30",
                    "transition-colors duration-300",
                    "cursor-pointer group"
                )}
            >
                <Globe className="w-8 h-8 text-white/90 mb-2 transition-transform duration-300" strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-widest text-white/70 font-medium group-hover:text-white transition-colors duration-300">
                    {mode === 'capabilities' ? 'Our Services' : 'Explore Industries'}
                </span>
                <span className="absolute -bottom-8 text-[10px] text-white/50 tracking-widest uppercase transition-opacity duration-300 flex items-center gap-1 group-hover:text-white/80">
                    {mode === 'capabilities' ? 'Explore Our Services' : 'Start a Conversation'}
                    <span className="eco-arrow inline-block text-[10px] transition-colors duration-300">→</span>
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

                    // Compute percentage based offset for transform-free positioning
                    // Center is 50%, radius is px. 
                    // To leave transform free for GSAP, we use left/top + margin to position.
                    // x,y are relative to center (0,0).

                    return (
                        <Link
                            key={item.id}
                            ref={el => nodesRef.current[index] = el}
                            to={item.path}
                            onMouseEnter={(e) => handleNodeHover(e, index)}
                            onMouseLeave={handleNodeLeave}
                            onClick={(e) => handleNodeClick(e, item.path, index)}
                            className={cn(
                                "eco-node absolute",
                                "w-[120px] h-[120px] rounded-full",
                                "flex flex-col items-center justify-center text-center p-3",
                                "bg-white/[0.05] border border-white/20 backdrop-blur-sm pointer-events-auto group",
                                // "transition-all duration-200 ease-out", // Removiing CSS transition to let GSAP handle it fully to avoid conflict
                                "cursor-pointer"
                            )}
                            style={{
                                // Freeing up 'transform' for GSAP
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                marginLeft: '-60px',
                                marginTop: '-60px'
                            }}
                        >
                            <item.icon className="w-6 h-6 text-white/80 mb-2 pointer-events-none" strokeWidth={1.5} />
                            <span className="text-[10px] leading-relaxed text-white/70 font-medium uppercase tracking-wide pointer-events-none max-w-[90px]">
                                {item.label}
                            </span>
                            <span className="absolute -bottom-5 text-[9px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest uppercase pointer-events-none whitespace-nowrap">
                                {mode === 'capabilities' ? 'View Page' : 'Speak with our experts'}
                            </span>
                        </Link>
                    );
                })}
            </div>

        </div>
    );
}
