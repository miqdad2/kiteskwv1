import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const content = {
  en: {
    title: "Insights",
    intro: "Explore expert insights and thought leadership in simulation and engineering.",
    allCategory: "All",
    categories: [
      "Simulation & CAE",
      "Training & Education",
      "Sustainability",
      "Software & Tools",
      "Industry Insights",
      "Events & Announcements",
    ],
    readMore: "Read More",
    noArticles: "No articles found in this category.",
  },
  ar: {
    title: "الرؤى",
    intro: "اطّلع على مقالات ورؤى فكرية متخصصة في المحاكاة والهندسة.",
    allCategory: "الكل",
    categories: [
      "المحاكاة والتحليل الهندسي",
      "التدريب والتعليم",
      "الاستدامة",
      "البرمجيات والأدوات",
      "رؤى صناعية",
      "الفعاليات والإعلانات",
    ],
    readMore: "اقرأ المزيد",
    noArticles: "لا توجد مقالات في هذه الفئة.",
  },
};

// Placeholder articles for demonstration
const placeholderArticles = [
  { id: 1, categoryIndex: 0, date: "2024-01-15", titleEn: "The Future of CFD in Renewable Energy", titleAr: "مستقبل ديناميكا الموائع الحسابية في الطاقة المتجددة", excerptEn: "Exploring how computational fluid dynamics is revolutionizing wind and solar energy optimization.", excerptAr: "استكشاف كيف تُحدث ديناميكا الموائع الحسابية ثورة في تحسين طاقة الرياح والطاقة الشمسية." },
  { id: 2, categoryIndex: 1, date: "2024-01-10", titleEn: "Building a Simulation-Ready Workforce", titleAr: "بناء قوى عاملة جاهزة للمحاكاة", excerptEn: "Key strategies for training engineers in advanced simulation techniques.", excerptAr: "استراتيجيات رئيسية لتدريب المهندسين على تقنيات المحاكاة المتقدمة." },
  { id: 3, categoryIndex: 2, date: "2024-01-05", titleEn: "Sustainable Design Through Simulation", titleAr: "التصميم المستدام من خلال المحاكاة", excerptEn: "How simulation tools are enabling greener product development.", excerptAr: "كيف تُمكّن أدوات المحاكاة من تطوير منتجات أكثر استدامة." },
  { id: 4, categoryIndex: 3, date: "2023-12-20", titleEn: "Ansys 2024 R1: What's New", titleAr: "Ansys 2024 R1: ما الجديد", excerptEn: "A comprehensive overview of the latest features in Ansys simulation software.", excerptAr: "نظرة شاملة على أحدث الميزات في برنامج المحاكاة Ansys." },
  { id: 5, categoryIndex: 4, date: "2023-12-15", titleEn: "Digital Twins in Oil & Gas", titleAr: "التوائم الرقمية في النفط والغاز", excerptEn: "Industry applications of digital twin technology in the energy sector.", excerptAr: "تطبيقات صناعية لتقنية التوائم الرقمية في قطاع الطاقة." },
  { id: 6, categoryIndex: 5, date: "2023-12-01", titleEn: "Upcoming: MENA Simulation Summit 2024", titleAr: "قريباً: قمة المحاكاة في منطقة الشرق الأوسط وشمال أفريقيا 2024", excerptEn: "Join us at the region's premier simulation and engineering conference.", excerptAr: "انضم إلينا في أبرز مؤتمر للمحاكاة والهندسة في المنطقة." },
];

export default function Insights() {
  const { language } = useLanguage();
  const t = content[language];
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filteredArticles = activeCategory === null
    ? placeholderArticles
    : placeholderArticles.filter((a) => a.categoryIndex === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="accent-line-light mx-auto mb-10" />
            <h1 className="font-heading text-h1 sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
              {t.title}
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
                      {language === "en" ? article.titleEn : article.titleAr}
                    </h3>
                    <p className="text-muted-foreground text-body-sm mb-5 line-clamp-3">
                      {language === "en" ? article.excerptEn : article.excerptAr}
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
  );
}
