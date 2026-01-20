import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { academicClients, commercialClients, keyClients, type Client } from "@/data/clients";
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const content = {
  en: {
    heading: "Organizations We Support",
    subtitle: "Partnering with leading academic institutions, government entities, and industrial organizations across the GCC.",
    academic: "Academic Partners",
    commercial: "Government & Industrial",
    keyInstitutions: "Key Institutions We Partner With",
    cta: "Interested in exploring how we support organizations like yours?",
    ctaButton: "Talk to Our Team",
    trustBand: "SUPPORTING ACADEMIC, GOVERNMENT & INDUSTRIAL LEADERS ACROSS THE GCC",
  },
  ar: {
    heading: "المؤسسات التي ندعمها",
    subtitle: "شراكة مع المؤسسات الأكاديمية الرائدة والجهات الحكومية والمنظمات الصناعية في دول مجلس التعاون الخليجي.",
    academic: "شركاء أكاديميون",
    commercial: "حكومي وصناعي",
    keyInstitutions: "مؤسسات رئيسية نتشارك معها",
    cta: "مهتم باستكشاف كيف ندعم مؤسسات مثل مؤسستك؟",
    ctaButton: "تحدث إلى فريقنا",
    trustBand: "ندعم قادة القطاعات الأكاديمية والحكومية والصناعية في دول الخليج",
  },
};

interface ClientGridProps {
  clients: Client[];
  isRTL?: boolean;
}

function ClientGrid({ clients, isRTL }: ClientGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Kill any existing animations to prevent conflicts when switching tabs
    gsap.killTweensOf(".client-item-anim");

    // Reset opacity before animating
    gsap.set(".client-item-anim", { opacity: 0, y: 15, scale: 0.98 });

    // Staggered entrance
    gsap.to(".client-item-anim", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: {
        amount: 0.8,
        grid: "auto",
        from: "start"
      },
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Refresh ScrollTrigger after DOM updates (tab switch)
    ScrollTrigger.refresh();

  }, [clients]); // Re-run when clients list changes (tab switch)

  return (
    <div
      ref={containerRef}
      className="group/grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className={cn(
            "client-item-anim group relative flex flex-col items-center justify-center p-6 text-center opacity-0",
            "bg-white border border-slate-100 rounded-lg",

            // Depth & Focus Interaction (Desktop)
            // Grid Hovered: Subtle dim on others
            "group-hover/grid:opacity-85 group-hover/grid:scale-[0.98]",

            // Active Item Hover: Lift & Depth
            "hover:!opacity-100 hover:!scale-[1.04] hover:!-translate-y-1",
            "hover:!shadow-[0_10px_30px_rgba(59,130,246,0.15)]",
            "hover:!border-primary/20",

            // Mobile Reset
            "sm:hover:!translate-y-0 sm:hover:!shadow-none sm:hover:!scale-100",
            "backface-visibility-hidden",

            // Active/Focus (Accessibility)
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:opacity-100 focus-visible:scale-100",

            isRTL
              ? "hover:border-r-primary/20"
              : "hover:border-l-primary/20"
          )}
          tabIndex={0}
        >
          {/* Logo Container */}
          <div className="flex items-center justify-center w-full h-20">
            <img
              src={client.logo}
              alt={client.name}
              width={140}
              height={80}
              loading="lazy"
              decoding="async"
              className={cn(
                "max-h-16 w-auto max-w-full object-contain transition-all duration-[300ms] ease-out",
                // Permanent Full Color
                "opacity-100 grayscale-0",
                // Simple Hover Scale
                "group-hover:scale-[1.02]"
              )}
            />
          </div>

          {/* Client Name */}
          <span className="mt-3 text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors line-clamp-2 text-center leading-tight">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ClientsSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(".clients-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Key Institutions Stagger
      gsap.fromTo(".key-client-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".key-clients-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA
      gsap.fromTo(".clients-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".clients-cta",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="clients" className="relative pb-16 sm:pb-24 lg:pb-32 bg-[#fafafa] overflow-hidden">

      {/* Trust Transition Band */}
      <div className="w-full border-b border-border/40 bg-white/50 backdrop-blur-sm py-4 sm:py-6 mb-12 sm:mb-16 lg:mb-20">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 sm:gap-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-12 sm:w-16 lg:w-32" />
          <span className="text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-500 text-center">
            {language === 'ar'
              ? "ندعم المؤسسات الأكاديمية والجهات الحكومية وقادة الصناعة عبر دول مجلس التعاون الخليجي"
              : "SUPPORTING ACADEMIC, GOVERNMENT & INDUSTRIAL LEADERS ACROSS THE GCC"
            }
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-12 sm:w-16 lg:w-32" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="clients-header text-center mb-10 sm:mb-16 opacity-0">
          <div className="accent-line mx-auto mb-6 sm:mb-8" />
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground max-w-2xl mx-auto mb-4 sm:mb-6">
            {t.heading}
          </h2>
          <p className="font-body text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            {t.subtitle}
          </p>
        </div>

        {/* Key Institutions Highlight */}
        <div className="mb-12 sm:mb-20 max-w-5xl mx-auto">
          <div className="text-center mb-4 sm:mb-6">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.keyInstitutions}
            </span>
          </div>
          <div className="key-clients-grid grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {keyClients.map((client) => (
              <div
                key={`key-${client.id}`}
                className="key-client-card bg-white p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-300 opacity-0"
              >
                <div className="h-12 sm:h-16 flex items-center justify-center mb-2 sm:mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={100}
                    height={60}
                    loading="eager"
                    decoding="async"
                    className="max-h-10 sm:max-h-14 w-auto max-w-full object-contain"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase text-primary tracking-wide">{client.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Tabs */}
        <Tabs defaultValue="academic" className="w-full max-w-6xl mx-auto mb-16 sm:mb-24" dir={isRTL ? "rtl" : "ltr"}>
          <div className="flex justify-center mb-8 sm:mb-12">
            <TabsList className="bg-white border border-gray-200 p-1 shadow-sm">
              <TabsTrigger value="academic" className="px-4 sm:px-8 text-xs sm:text-sm data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900">{t.academic}</TabsTrigger>
              <TabsTrigger value="commercial" className="px-4 sm:px-8 text-xs sm:text-sm data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900">{t.commercial}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="academic" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <ClientGrid clients={academicClients} isRTL={isRTL} />
          </TabsContent>

          <TabsContent value="commercial" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <ClientGrid clients={commercialClients} isRTL={isRTL} />
          </TabsContent>
        </Tabs>

        {/* Post-Clients CTA */}
        <div className="clients-cta text-center max-w-3xl mx-auto pt-8 sm:pt-10 border-t border-gray-200 opacity-0">
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-6 sm:mb-8 px-2">
            {t.cta}
          </h3>
          <Link
            to="/contact"
            className={cn(
              "inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 rounded-md",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            )}
          >
            {t.ctaButton}
          </Link>
        </div>

      </div>
    </section>
  );
}
