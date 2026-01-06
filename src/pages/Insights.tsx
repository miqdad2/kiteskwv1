import { useState } from "react";
import { SEO } from "@/components/common/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";

interface InsightsContent {
  pageTitle: string;
  intro: string;
  allCategory: string;
  categories: string[];
  readMore: string;
  noArticles: string;
}

export default function Insights() {
  const { language } = useLanguage();
  const t = useContent<InsightsContent>('insights');
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filteredArticles = activeCategory === null
    ? articles
    : articles.filter((a) => a.categoryIndex === activeCategory);

  return (
    <>
      <SEO page="insights" />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="page-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Category Filters */}
        <section className="py-6 bg-background border-b border-border sticky top-[72px] z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={activeCategory === null ? "badge-category-active" : "badge-category hover:border-foreground/30 transition-colors"}
              >
                {t.allCategory}
              </button>
              {t.categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={activeCategory === index ? "badge-category-active" : "badge-category hover:border-foreground/30 transition-colors"}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArticles.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="group card-interactive overflow-hidden"
                  >
                    {/* Placeholder Image */}
                    <div className="aspect-video bg-secondary relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />
                      <span className="absolute top-4 start-4 badge-category">
                        {t.categories[article.categoryIndex]}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-body-sm mb-3">
                        <Calendar size={14} strokeWidth={1.5} />
                        <span>{article.date}</span>
                      </div>
                      <h3 className="font-heading text-h4 font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title[language]}
                      </h3>
                      <p className="text-muted-foreground text-body-sm mb-5 line-clamp-3">
                        {article.excerpt[language]}
                      </p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-foreground hover:text-accent group/btn">
                        {t.readMore}
                        <ArrowRight size={14} className="ms-1 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 rtl:rotate-180" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">{t.noArticles}</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
