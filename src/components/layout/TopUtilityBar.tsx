import { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import gsap from "gsap";

// Social media icons - using lucide-react compatible ones
import { Youtube, Instagram, Twitter, Linkedin } from "lucide-react";

interface TopUtilityBarProps {
    isMobileMenuOpen: boolean;
}

export function TopUtilityBar({ isMobileMenuOpen }: TopUtilityBarProps) {
    const { language } = useLanguage();
    const barRef = useRef<HTMLDivElement>(null);

    // GSAP fade-in animation on mount
    useEffect(() => {
        if (barRef.current) {
            gsap.fromTo(
                barRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.4,
                    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
                }
            );
        }
    }, []);

    const isRTL = language === "ar";

    return (
        <div
            ref={barRef}
            className={cn(
                "fixed top-0 left-0 right-0 z-50",
                "w-full h-[40px]",
                "bg-black/90 backdrop-blur-sm border-b border-white/10",
                "items-center",
                // Hide on mobile when menu is open
                isMobileMenuOpen ? "hidden lg:flex" : "flex"
            )}
            dir={isRTL ? "rtl" : "ltr"}
            style={{
                "--utility-bar-height": "40px"
            } as React.CSSProperties}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div
                    className={cn(
                        "flex items-center justify-between h-full gap-4",
                        isRTL && "flex-row-reverse"
                    )}
                >
                    {/* Contact Information - Left (LTR) / Right (RTL) */}
                    <div
                        className={cn(
                            "flex items-center gap-3 md:gap-6",
                            isRTL && "flex-row-reverse"
                        )}
                    >
                        {/* Email */}
                        <a
                            href="mailto:info@kites-kw.com"
                            className={cn(
                                "flex items-center gap-1.5 md:gap-2 text-white/80 hover:text-white transition-colors duration-200 min-h-[44px]",
                                isRTL && "flex-row-reverse"
                            )}
                            aria-label={isRTL ? "البريد الإلكتروني" : "Email"}
                        >
                            <Mail size={14} strokeWidth={1.5} className="shrink-0" />
                            <span className="text-xs md:text-sm font-medium hidden sm:inline">
                                info@kites-kw.com
                            </span>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+96522092260"
                            className={cn(
                                "flex items-center gap-1.5 md:gap-2 text-white/80 hover:text-white transition-colors duration-200 min-h-[44px]",
                                isRTL && "flex-row-reverse"
                            )}
                            aria-label={isRTL ? "الهاتف" : "Phone"}
                            dir="ltr"
                        >
                            <Phone size={14} strokeWidth={1.5} className="shrink-0" />
                            <span className="text-xs md:text-sm font-medium">
                                (+965) 22092260
                            </span>
                        </a>
                    </div>

                    {/* Social Media Icons - Right (LTR) / Left (RTL) */}
                    <div
                        className={cn(
                            "flex items-center gap-2 md:gap-3",
                            isRTL && "flex-row-reverse"
                        )}
                    >
                        {[
                            {
                                Icon: Youtube,
                                label: isRTL ? "يوتيوب" : "YouTube",
                                href: "#",
                            },
                            {
                                Icon: Instagram,
                                label: isRTL ? "انستغرام" : "Instagram",
                                href: "#",
                            },
                            {
                                Icon: Twitter,
                                label: "X",
                                href: "#",
                            },
                            {
                                Icon: Linkedin,
                                label: isRTL ? "لينكد إن" : "LinkedIn",
                                href: "#",
                            },
                        ].map(({ Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 text-white/70 hover:text-white transition-colors duration-200 min-h-[44px] min-w-[44px]"
                                aria-label={label}
                            >
                                <Icon size={16} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
