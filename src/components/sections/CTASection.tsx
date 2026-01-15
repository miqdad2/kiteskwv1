import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const content = {
  en: {
    badge: "Enterprise Simulation Solutions",
    heading: "Ready to build long-term engineering capability?",
    subtitle: "Partner with the GCC's leading simulation experts to optimize performance, reduce risk, and accelerate innovation.",
    button: "Talk to Our Experts",
  },
  ar: {
    badge: "حلول محاكاة للمؤسسات",
    heading: "هل أنت مستعد لبناء قدرات هندسية طويلة المدى؟",
    subtitle: "شراكة مع خبراء المحاكاة الرائدين في دول مجلس التعاون الخليجي لتحسين الأداء وتقليل المخاطر وتسريع الابتكار.",
    button: "تحدث إلى خبرائنا",
  },
};

export function CTASection() {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  return (
    <section id="cta" className="relative py-28 lg:py-36 bg-[#0B1220] overflow-hidden">

      {/* 1. Background Gradient (Navy Toned) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 0%, #0F1A2E 0%, #0B1220 70%)'
        }}
      />

      {/* 2. Faint Noise Texture (2-3% Opacity) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Soft Top Transition Divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#fafafa] to-transparent z-10 opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-[720px] mx-auto text-center">

          <ScrollReveal>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/10 text-blue-100/90 mb-8 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-medium uppercase tracking-wider">{t.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-h2 sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance drop-shadow-sm">
              {t.heading}
            </h2>

            {/* Subtitle */}
            <p className="font-body text-lg sm:text-xl text-slate-300/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.subtitle}
            </p>

            {/* Trust Reinforcement Line */}
            <p className="font-body text-sm text-slate-400/80 max-w-2xl mx-auto mb-10 tracking-wide border-t border-white/5 pt-6 uppercase">
              {language === 'ar'
                ? "موثوق به من قبل الجامعات الرائدة والجهات الحكومية والمنظمات الصناعية في دول مجلس التعاون الخليجي"
                : "Trusted by leading universities, government entities, and industrial organizations across the GCC."
              }
            </p>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={150}>
            <Link to="/contact">
              <Button
                size="xl"
                className={cn(
                  "group relative h-14 px-8 text-base font-semibold rounded overflow-hidden transition-all duration-300",
                  "bg-white/5 text-white hover:bg-white hover:text-[#0B0F14] hover:scale-[1.01]", // Dark glass default -> White hover
                  "shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
                  "border border-white/20 hover:border-white"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.button}
                  {isRTL ? (
                    <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </span>
              </Button>
            </Link>
          </ScrollReveal>

        </div>
      </div>

    </section>
  );
}
