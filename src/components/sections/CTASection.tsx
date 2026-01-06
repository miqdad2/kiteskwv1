import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    heading: "Ready to unlock your potential with simulation-based solutions?",
    button: "Contact Us",
  },
  ar: {
    heading: "هل أنت مستعد لإطلاق إمكاناتك من خلال حلول المحاكاة المتقدمة؟",
    button: "تواصل معنا",
  },
};

export function CTASection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="contact" className="py-28 lg:py-36 bg-primary relative overflow-hidden">
      {/* Subtle geometric accents */}
      <div className="absolute top-1/2 start-0 w-20 h-px bg-primary-foreground/5" />
      <div className="absolute top-1/2 end-0 w-20 h-px bg-primary-foreground/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Accent Line */}
          <ScrollReveal>
            <div className="w-8 h-px bg-primary-foreground/20 mx-auto mb-12" />
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={100}>
            <h2 className="font-heading text-h2 sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary-foreground leading-snug mb-14 text-balance">
              {t.heading}
            </h2>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={200}>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="group">
                {t.button}
                <ArrowRight size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
