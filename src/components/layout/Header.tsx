import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";
import kitesLogo from "@/assets/kites-logo.png";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { PartnersMegaMenu } from "./PartnersMegaMenu";

interface CommonContent {
  nav: {
    home: string;
    expertise: string;
    services: string;
    training: string;
    partners: string;
    insights: string;
    events: string;
    contact: string;
  };
  language: {
    switchToEnglish: string;
    switchToArabic: string;
    languageLabel: string;
  };
}

// Define navigation structure (hrefs stay the same across languages)
const navStructure = [
  { key: "home", href: "/" },
  { key: "expertise", href: "/expertise" },
  { key: "services", href: "/services", hasMegaMenu: true },
  { key: "training", href: "/training" },
  { key: "partners", href: "/partners", hasMegaMenu: true },
  // { key: "insights", href: "/insights" }, // Temporarily hidden
  { key: "events", href: "/events" },
  { key: "contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const common = useContent<CommonContent>('common');
  const location = useLocation();

  // Mega Menu State
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Mobile Accordion State
  const [expandedMobileNav, setExpandedMobileNav] = useState<string | null>(null);

  const toggleMobileNav = (key: string) => {
    setExpandedMobileNav(prev => prev === key ? null : key);
  };

  // Check if we are on the homepage
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Determine header appearance
  // If NOT homepage, always use the "scrolled" (solid/visible) style
  // If homepage, use scroll state to toggle between transparent and solid
  const shouldShowSolidHeader = !isHomePage || isScrolled || hoveredNav !== null; // Solid when mega menu is open too

  // Close mega menu on route change
  useEffect(() => {
    setHoveredNav(null);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-[40px] left-0 right-0 z-40 h-[var(--header-height)] flex items-center",
          "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          shouldShowSolidHeader
            ? "bg-[#0B0F14] backdrop-blur-md shadow-md border-b border-white/10"
            : "bg-[#0B0F14]/50 backdrop-blur-sm border-b border-white/5"
        )}
        onMouseLeave={() => setHoveredNav(null)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full transition-all duration-300">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 group gap-2 lg:gap-[8px]">
              <img
                src={kitesLogo}
                alt="KITES - Kuwait Institute for Training & Engineering Simulations"
                className="h-[60px] lg:h-[84px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* Full Text - Responsive Sizing & Weight */}
              <div className="flex flex-col items-start leading-tight group-hover:opacity-100 transition-opacity">
                <span className="font-heading font-semibold text-[14px] md:text-[13px] lg:text-[15px] text-white/95 lg:text-white tracking-normal uppercase drop-shadow-sm whitespace-nowrap">
                  Kuwait Institute for Training
                </span>
                <span className="font-heading font-semibold text-[14px] md:text-[13px] lg:text-[15px] text-white/95 lg:text-white tracking-normal uppercase drop-shadow-sm whitespace-nowrap">
                  and Engineering Simulations
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 h-full">
              {navStructure.map((item) => (
                <div
                  key={item.key}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredNav(item.hasMegaMenu ? item.key : null)}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => cn(
                      "relative py-2 font-body text-lg font-medium transition-colors duration-200 flex items-center gap-1",
                      "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-white after:origin-center after:transition-transform after:duration-300",
                      // Keep text interactions consistent
                      shouldShowSolidHeader
                        ? (isActive || hoveredNav === item.key ? "text-white after:scale-x-100 font-semibold" : "text-white/90 hover:text-white after:scale-x-0 hover:after:scale-x-100")
                        : (isActive || hoveredNav === item.key ? "text-white after:scale-x-100 font-semibold" : "text-white/90 hover:text-white after:scale-x-0 hover:after:scale-x-100")
                    )}
                  >
                    {common.nav[item.key as keyof typeof common.nav]}
                    {item.hasMegaMenu && (
                      <ChevronDown size={14} className={cn("transition-transform duration-200", hoveredNav === item.key ? "rotate-180" : "")} strokeWidth={2} />
                    )}
                  </NavLink>
                </div>
              ))}
            </nav>

            {/* Language Switcher - Desktop */}
            <div className="hidden lg:flex items-center gap-1 shrink-0 ms-4">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1.5 text-base font-body font-medium transition-colors duration-200",
                  language === "en" ? "text-white" : "text-white/60 hover:text-white/90"
                )}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => setLanguage("ar")}
                className={cn(
                  "px-3 py-1.5 text-base font-body font-medium transition-colors duration-200",
                  language === "ar" ? "text-white" : "text-white/60 hover:text-white/90"
                )}
                aria-label="Switch to Arabic"
              >
                AR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mega Menus Rendered Outside Container but inside Header relative context */}
        <ServicesMegaMenu
          isOpen={hoveredNav === 'services'}
          onClose={() => setHoveredNav(null)}
        />
        <PartnersMegaMenu
          isOpen={hoveredNav === 'partners'}
          onClose={() => setHoveredNav(null)}
        />

      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-200",
          isOpen ? "visible" : "invisible"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-primary/50 backdrop-blur-sm transition-opacity duration-200",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={cn(
            "absolute top-0 end-0 h-full w-full max-w-sm bg-[#0B0F14] transition-transform duration-200 ease-out",
            isOpen ? "translate-x-0 rtl:-translate-x-0" : "translate-x-full rtl:-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-[76px] px-6 border-b border-white/10">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-[14px]">
              <img
                src={kitesLogo}
                alt="KITES"
                className="h-[48px] w-auto"
              />
              <span className="font-heading font-bold text-[20px] text-white tracking-[0.08em] uppercase">
                KITES
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/90 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col py-6 px-6">
            {navStructure.map((item, index) => {
              // Render standard links
              if (!item.hasMegaMenu) {
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-primary-foreground/80 hover:text-primary-foreground font-body text-lg font-medium transition-colors duration-200 border-b border-primary-foreground/5 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {common.nav[item.key as keyof typeof common.nav]}
                  </Link>
                );
              }

              // Render Accordion for Mega Menu items
              const isExpanded = expandedMobileNav === item.key;
              return (
                <div key={item.key} className="border-b border-primary-foreground/5 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <button
                    onClick={() => toggleMobileNav(item.key)}
                    className="flex items-center justify-between w-full py-4 text-primary-foreground/80 hover:text-primary-foreground font-body text-lg font-medium transition-colors duration-200 text-left"
                  >
                    {common.nav[item.key as keyof typeof common.nav]}
                    <ChevronDown size={18} className={cn("transition-transform duration-200", isExpanded ? "rotate-180" : "")} />
                  </button>

                  {/* Mobile Submenu Content */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out bg-white/5 rounded-sm",
                    isExpanded ? "max-h-[500px] mb-4 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    {item.key === 'services' && (
                      <div className="flex flex-col p-2">
                        {['consultation', 'software-distribution', 'prototype-development', 'training'].map(id => (
                          <Link
                            key={id}
                            to={`/services/${id}`}
                            onClick={() => setIsOpen(false)}
                            className="py-3 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors"
                          >
                            {id === 'consultation' ? (language === 'ar' ? "الاستشارات الهندسية" : "Engineering Consulting") :
                              id === 'software-distribution' ? (language === 'ar' ? "البرمجيات والمنصات" : "Software & Platforms") :
                                id === 'prototype-development' ? (language === 'ar' ? "النماذج الأولية" : "Prototyping") : (language === 'ar' ? "التدريب المهني" : "Training")}
                          </Link>
                        ))}
                        <Link to="/services" onClick={() => setIsOpen(false)} className="mt-2 py-2 px-3 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                          {language === 'ar' ? "عرض جميع الخدمات" : "View All Services"}
                        </Link>
                      </div>
                    )}

                    {item.key === 'partners' && (
                      <div className="flex flex-col p-2">
                        <Link to="/partners" onClick={() => setIsOpen(false)} className="py-3 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors">
                          {language === 'ar' ? "الشركاء التقنيون" : "Technology Partners"}
                        </Link>
                        <Link to="/partners" onClick={() => setIsOpen(false)} className="py-3 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors">
                          {language === 'ar' ? "المؤسسات الأكاديمية والبحثية" : "Academic & Research"}
                        </Link>
                        <Link to="/partners" onClick={() => setIsOpen(false)} className="py-3 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors">
                          {language === 'ar' ? "الجهات الحكومية والصناعية" : "Government & Industrial"}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="absolute bottom-0 inset-x-0 p-6 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/40 text-xs font-body mb-3 uppercase tracking-wider">
              {common.language.languageLabel}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "flex-1 py-3 text-sm font-body font-medium border transition-colors duration-200",
                  language === "en"
                    ? "bg-primary-foreground text-primary border-primary-foreground"
                    : "bg-transparent text-primary-foreground/70 border-primary-foreground/30 hover:border-primary-foreground/50"
                )}
              >
                {common.language.switchToEnglish}
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={cn(
                  "flex-1 py-3 text-sm font-body font-medium border transition-colors duration-200",
                  language === "ar"
                    ? "bg-primary-foreground text-primary border-primary-foreground"
                    : "bg-transparent text-primary-foreground/70 border-primary-foreground/30 hover:border-primary-foreground/50"
                )}
              >
                {common.language.switchToArabic}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}