import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const heroContent = {
  en: {
    institution: "Kuwait Institute for Training & Engineering Simulations",
    title: "SIMULATE EVERYTHING",
    subtitle: "Simulation-based engineering, training, and sustainability solutions trusted across the GCC.",
    ctaPrimary: "Contact Our Experts",
    ctaSecondary: "Explore Our Capabilities",
    proofStrip: [
      "Engineering Simulation",
      "Sustainability & Life Cycle Assessment",
      "Professional Training",
      "Global Technology Partnerships",
    ],
  },
  ar: {
    institution: "معهد الكويت للتدريب والمحاكاة الهندسية",
    title: "حاكي كل شيء",
    subtitle: "حلول هندسية وتدريبية واستدامية قائمة على المحاكاة، موثوقة في جميع أنحاء الخليج.",
    ctaPrimary: "تواصل مع خبرائنا",
    ctaSecondary: "استعرض إمكانياتنا",
    proofStrip: [
      "المحاكاة الهندسية",
      "الاستدامة وتقييم دورة الحياة",
      "التدريب الاحترافي",
      "شراكات تقنية عالمية",
    ],
  },
};

export function HeroSection() {
  const { language } = useLanguage();
  const content = heroContent[language];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
      {/* Subtle Technical Grid - Low opacity, non-intrusive */}
      <div className="absolute inset-0 opacity-[0.025]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Institutional Identifier */}
          <p className="font-body text-eyebrow uppercase text-primary-foreground/40 mb-10 animate-fade-in">
            {content.institution}
          </p>

          {/* Accent Line */}
          <div 
            className="w-12 h-px bg-primary-foreground/20 mx-auto mb-14 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          />

          {/* Main Title - Dominant, Enterprise-Grade */}
          <h1 
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-display xl:text-display-lg font-bold text-primary-foreground tracking-[-0.035em] mb-10 animate-fade-in leading-[1.02]"
            style={{ animationDelay: "200ms" }}
          >
            {content.title}
          </h1>

          {/* Subtitle - Clear & Readable */}
          <p 
            className="font-body text-lg sm:text-xl lg:text-body-lg text-primary-foreground/50 max-w-2xl mx-auto mb-16 lg:mb-20 leading-relaxed animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            {content.subtitle}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 lg:mb-20 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="group min-w-[220px] border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                {content.ctaPrimary}
                <ArrowRight size={18} className="ms-2 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </Button>
            </Link>
            <Link to="/expertise">
              <Button variant="ghost" size="xl" className="min-w-[220px] text-primary-foreground/45 hover:text-primary-foreground hover:bg-primary-foreground/5 border border-transparent hover:border-primary-foreground/10">
                {content.ctaSecondary}
              </Button>
            </Link>
          </div>

          {/* Proof Strip */}
          <div 
            className="animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-primary-foreground/35 tracking-wide">
              {content.proofStrip.map((item, index) => (
                <span key={index} className="flex items-center">
                  {index > 0 && <span className="hidden sm:inline me-8 text-primary-foreground/15">·</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div 
        className="absolute bottom-10 lg:bottom-14 inset-x-0 flex justify-center animate-fade-in"
        style={{ animationDelay: "800ms" }}
      >
        <div className="w-px h-14 lg:h-16 bg-gradient-to-b from-primary-foreground/10 to-transparent" />
      </div>
    </section>
  );
}
