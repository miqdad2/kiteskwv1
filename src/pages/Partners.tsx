import { SEO } from "@/components/common/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { partners as allPartners, type Partner } from "@/data/partners";

interface PartnersContent {
  pageTitle: string;
  intro: string;
  categories: {
    engineering: string;
    sustainability: string;
    research: string;
  };
}

// Define category order
const categoryOrder: Array<Partner['category']> = ['engineering', 'sustainability', 'research'];

export default function Partners() {
  const { language } = useLanguage();
  const t = useContent<PartnersContent>('partners');

  return (
    <>
      <SEO page="partners" />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Page Header */}
        <section className="page-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="accent-line-light mx-auto mb-10" />
              <h1 className="font-heading text-h1 sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
                {t.pageTitle}
              </h1>
              <p className="font-body text-body-lg text-primary-foreground/60 leading-relaxed">
                {t.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {categoryOrder.map((categoryId) => {
                const categoryPartners = allPartners.filter(p => p.category === categoryId);

                return (
                  <div key={categoryId}>
                    {/* Category Header */}
                    <div className="mb-12">
                      <div className="flex items-center gap-4">
                        <div className="accent-line-sm" />
                        <h2 className="font-heading text-h3 sm:text-h2 font-semibold text-foreground">
                          {t.categories[categoryId]}
                        </h2>
                      </div>
                    </div>

                    {/* Partner Logo Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-px bg-border">
                      {categoryPartners.map((partner) => (
                        <Link
                          key={partner.id}
                          to={`/partners/${partner.id}`}
                          className="group flex items-center justify-center p-8 lg:p-10 bg-background hover:bg-secondary/50 transition-colors duration-200"
                        >
                          <div className="w-16 h-16 border border-border flex items-center justify-center bg-background group-hover:border-foreground/20 transition-colors">
                            <span className="font-heading text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                              {partner.abbr}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
