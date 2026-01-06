import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";
import kitesLogo from "@/assets/kites-logo.png";

interface CommonContent {
  nav: {
    home: string;
    expertise: string;
    services: string;
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
  { key: "services", href: "/services" },
  { key: "partners", href: "/partners" },
  // { key: "insights", href: "/insights" }, // Temporarily hidden
  { key: "events", href: "/events" },
  { key: "contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const common = useContent<CommonContent>('common');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-primary/98 backdrop-blur-md shadow-md py-0"
            : "bg-primary py-2"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px] transition-all duration-300">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 group gap-[14px]">
              <img
                src={kitesLogo}
                alt="KITES - Kuwait Institute for Training & Engineering Simulations"
                className="h-[42px] lg:h-[52px] w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-heading font-bold text-[20px] lg:text-[24px] text-white tracking-[0.08em] uppercase drop-shadow-sm">
                KITES
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navStructure.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.href}
                  className={({ isActive }) => cn(
                    "relative py-2 text-primary-foreground/90 hover:text-primary-foreground font-body text-lg font-medium transition-colors duration-200",
                    "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-primary-foreground after:origin-center after:transition-transform after:duration-300",
                    isActive ? "after:scale-x-100 text-white font-semibold" : "after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {common.nav[item.key as keyof typeof common.nav]}
                </NavLink>
              ))}
            </nav>

            {/* Language Switcher - Desktop */}
            <div className="hidden lg:flex items-center gap-1 shrink-0 ms-4">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1.5 text-base font-body font-medium transition-colors duration-200",
                  language === "en" ? "text-primary-foreground" : "text-primary-foreground/50 hover:text-primary-foreground/80"
                )}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-primary-foreground/30">|</span>
              <button
                onClick={() => setLanguage("ar")}
                className={cn(
                  "px-3 py-1.5 text-base font-body font-medium transition-colors duration-200",
                  language === "ar" ? "text-primary-foreground" : "text-primary-foreground/50 hover:text-primary-foreground/80"
                )}
                aria-label="Switch to Arabic"
              >
                AR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
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
            "absolute top-0 end-0 h-full w-full max-w-sm bg-primary transition-transform duration-200 ease-out",
            isOpen ? "translate-x-0 rtl:-translate-x-0" : "translate-x-full rtl:-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-[72px] px-6 border-b border-primary-foreground/10">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-[14px]">
              <img
                src={kitesLogo}
                alt="KITES"
                className="h-[42px] w-auto"
              />
              <span className="font-heading font-bold text-[20px] text-white tracking-[0.08em] uppercase">
                KITES
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col py-6 px-6">
            {navStructure.map((item, index) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="py-4 text-primary-foreground/80 hover:text-primary-foreground font-body text-lg font-medium transition-colors duration-200 border-b border-primary-foreground/5 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {common.nav[item.key as keyof typeof common.nav]}
              </Link>
            ))}
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