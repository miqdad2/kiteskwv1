import { SEO } from "@/components/common/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { partners as allPartners, type Partner } from "@/data/partners";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ArrowLeft } from "lucide-react";

interface PartnersContent {
  pageTitle: string;
  intro: string;
  categories: {
    engineering: string;
    sustainability: string;
    research: string;
    manufacturing: string;
  };
}

// Define category order
const categoryOrder: Array<Partner['category']> = ['engineering', 'sustainability', 'research', 'manufacturing'];

// Default content fallback (simulating content hook response behavior for new keys)
const defaultContent = {
  categories: {
    engineering: "Engineering & Simulation Software",
    sustainability: "Sustainability & Environmental Solutions",
    research: "Research & Analytics Software",
    manufacturing: "Advanced Manufacturing & Innovation"
  }
};

export default function Partners() {
  const { language } = useLanguage();
  const t = useContent<PartnersContent>('partners');

  // Fallback for new category label if content file isn't updated yet
  const getCategoryTitle = (id: string) => {
    // @ts-ignore - straightforward fallback
    return t?.categories?.[id] || defaultContent.categories[id as keyof typeof defaultContent.categories];
  };

  return (
    <>
      <SEO page="partners" />
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          {/* Dark Hero Section - Matches Services & Expertise */}
          <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-48 lg:pb-32 bg-primary relative overflow-hidden">
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <ScrollReveal className="max-w-4xl mx-auto text-center">
                {/* Breadcrumb - Consistent with Services */}
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground font-heading text-[10px] sm:text-xs uppercase tracking-widest mb-4 sm:mb-6 lg:mb-10 transition-colors"
                >
                  <ArrowLeft size={12} className="rtl:rotate-180" />
                  {language === "en" ? "Back to Home" : "العودة للرئيسية"}
                </Link>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight leading-tight">
                  {t.pageTitle}
                </h1>
                <p className="font-body text-base sm:text-lg lg:text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                  {t.intro}
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Partner Categories */}
          <section className="py-12 sm:py-16 lg:py-28 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-12 sm:space-y-16 lg:space-y-32">
                {categoryOrder.map((categoryId) => {
                  const categoryPartners = allPartners.filter(p => p.category === categoryId);

                  return (
                    <div key={categoryId}>
                      {/* Category Header */}
                      <ScrollReveal className="mb-8 sm:mb-12 border-b border-border/40 pb-4 sm:pb-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="h-6 sm:h-8 w-1 bg-blue-600 rounded-full" />
                          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                            {t.categories[categoryId]}
                          </h2>
                        </div>
                      </ScrollReveal>

                      {/* Partner Card Grid */}
                      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {categoryPartners.map((partner, index) => (
                          <StaggerItem key={partner.id} index={index}>
                            <Link
                              to={`/partners/${partner.id}`}
                              className="group block h-full bg-card hover:bg-card/80 border border-border/60 hover:border-blue-500/30 rounded-xl p-6 lg:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                              <div className="flex flex-col h-full">
                                {/* Logo Container */}
                                <div className="h-16 mb-6 flex items-center justify-start">
                                  {partner.logo ? (
                                    <img
                                      src={partner.logo}
                                      alt={`${partner.name} logo`}
                                      className="h-full w-auto object-contain max-w-[140px] transition-all duration-300"
                                    />
                                  ) : (
                                    <div className="w-16 h-16 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center text-xl font-heading font-bold text-muted-foreground group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                      {partner.abbr}
                                    </div>
                                  )}
                                </div>

                                {/* Content */}
                                <div className="mt-auto">
                                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                                    {partner.name}
                                  </h3>
                                  {partner.desc && (
                                    <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                      {partner.desc}
                                    </p>
                                  )}
                                </div>

                                {/* Hover Reveal - Bottom Edge */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </Link>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
