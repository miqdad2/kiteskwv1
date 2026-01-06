import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import kitesLogo from "@/assets/kites-logo.png";

const navItems = {
  en: [
    { label: "Home", href: "/", isRoute: true },
    { label: "Expertise", href: "/expertise", isRoute: true },
    { label: "Services", href: "/services", isRoute: true },
    { label: "Partners", href: "/partners", isRoute: true },
    { label: "Insights", href: "/insights", isRoute: true },
    { label: "Events", href: "/events", isRoute: true },
    { label: "Contact", href: "/contact", isRoute: true },
  ],
  ar: [
    { label: "الرئيسية", href: "/", isRoute: true },
    { label: "الخبرات", href: "/expertise", isRoute: true },
    { label: "الخدمات", href: "/services", isRoute: true },
    { label: "الشركاء", href: "/partners", isRoute: true },
    { label: "الرؤى", href: "/insights", isRoute: true },
    { label: "الفعاليات", href: "/events", isRoute: true },
    { label: "تواصل معنا", href: "/contact", isRoute: true },
  ],
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

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

  const currentNav = navItems[language];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-200",
          isScrolled
            ? "bg-primary/98 backdrop-blur-sm"
            : "bg-primary"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img 
                src={kitesLogo} 
                alt="KITES - Kuwait Institute for Training & Engineering Simulations" 
                className="h-10 lg:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {currentNav.map((item) => 
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="relative px-4 py-2 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm font-medium transition-colors duration-200 after:absolute after:bottom-1 after:start-4 after:end-4 after:h-px after:bg-primary-foreground after:scale-x-0 after:origin-end after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-start"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative px-4 py-2 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm font-medium transition-colors duration-200 after:absolute after:bottom-1 after:start-4 after:end-4 after:h-px after:bg-primary-foreground after:scale-x-0 after:origin-end after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-start"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            {/* Language Switcher - Desktop */}
            <div className="hidden lg:flex items-center gap-1 shrink-0">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1.5 text-sm font-body font-medium transition-colors duration-200",
                  language === "en" ? "text-primary-foreground" : "text-primary-foreground/50 hover:text-primary-foreground/80"
                )}
              >
                EN
              </button>
              <span className="text-primary-foreground/30">|</span>
              <button
                onClick={() => setLanguage("ar")}
                className={cn(
                  "px-3 py-1.5 text-sm font-body font-medium transition-colors duration-200",
                  language === "ar" ? "text-primary-foreground" : "text-primary-foreground/50 hover:text-primary-foreground/80"
                )}
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
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
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
          <div className="flex items-center justify-between h-16 px-4 border-b border-primary-foreground/10">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
              <img 
                src={kitesLogo} 
                alt="KITES" 
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col py-6 px-4">
            {currentNav.map((item, index) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-4 text-primary-foreground/80 hover:text-primary-foreground font-body text-base font-medium transition-colors duration-200 border-b border-primary-foreground/5 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-4 text-primary-foreground/80 hover:text-primary-foreground font-body text-base font-medium transition-colors duration-200 border-b border-primary-foreground/5 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="absolute bottom-0 inset-x-0 p-6 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/40 text-xs font-body mb-3 uppercase tracking-wider">
              Language
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
                English
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
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}