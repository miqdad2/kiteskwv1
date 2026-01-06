import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";

const content = {
  en: {
    backToPartners: "Back to Partners",
    aboutTitle: "About",
    aboutDescription: "is a globally recognized provider of advanced software solutions used by engineers, researchers, and organizations worldwide to design, simulate, analyze, and optimize complex systems.",
    solutionsTitle: "Solutions & Applications",
    solutions: [
      "Engineering design and simulation",
      "Advanced analysis and validation",
      "Industry-specific applications",
    ],
    supportTitle: "KITES Support",
    supportDescription: "KITES provides licensing, technical support, training, and consultation services to ensure successful implementation and optimal use of",
    supportDescriptionEnd: "solutions.",
    ctaTitle: "Ready to get started?",
    ctaDescription: "Contact our team to learn more about how we can help you implement and maximize your investment in",
    ctaContact: "Contact Us",
    ctaQuote: "Get a Quote",
  },
  ar: {
    backToPartners: "العودة إلى الشركاء",
    aboutTitle: "عن",
    aboutDescription: "شركة عالمية رائدة في توفير حلول برمجية متقدمة تُستخدم من قبل المهندسين والباحثين والمؤسسات لتصميم ومحاكاة وتحليل الأنظمة المعقدة.",
    solutionsTitle: "الحلول والتطبيقات",
    solutions: [
      "التصميم والمحاكاة الهندسية",
      "التحليل المتقدم والتحقق",
      "تطبيقات صناعية متخصصة",
    ],
    supportTitle: "دعم KITES",
    supportDescription: "يقدم معهد KITES خدمات الترخيص، والدعم الفني، والتدريب، والاستشارات لضمان التطبيق الناجح والاستخدام الأمثل لحلول",
    supportDescriptionEnd: ".",
    ctaTitle: "هل أنت مستعد للبدء؟",
    ctaDescription: "تواصل مع فريقنا لمعرفة المزيد حول كيفية مساعدتك في تنفيذ واستثمار حلول",
    ctaContact: "تواصل معنا",
    ctaQuote: "احصل على عرض سعر",
  },
};

// Partner data
const partners: Record<string, { name: string; abbr: string; category: string }> = {
  siemens: { name: "Siemens", abbr: "Si", category: "engineering" },
  autodesk: { name: "Autodesk", abbr: "Ad", category: "engineering" },
  ansys: { name: "ANSYS", abbr: "An", category: "engineering" },
  dassault: { name: "Dassault Systèmes", abbr: "DS", category: "engineering" },
  ptc: { name: "PTC", abbr: "PTC", category: "engineering" },
  hexagon: { name: "Hexagon", abbr: "Hx", category: "engineering" },
  schneider: { name: "Schneider Electric", abbr: "SE", category: "sustainability" },
  envizi: { name: "Envizi", abbr: "Ev", category: "sustainability" },
  sphera: { name: "Sphera", abbr: "Sp", category: "sustainability" },
  matlab: { name: "MathWorks", abbr: "MW", category: "research" },
  tableau: { name: "Tableau", abbr: "Tb", category: "research" },
  esri: { name: "Esri", abbr: "Es", category: "research" },
  alteryx: { name: "Alteryx", abbr: "Ax", category: "research" },
};

export default function PartnerDetail() {
  const { partnerId } = useParams<{ partnerId: string }>();
  const { language } = useLanguage();
  const t = content[language];

  const partner = partnerId ? partners[partnerId] : null;

  if (!partner) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-2xl text-foreground mb-4">
              {language === "en" ? "Partner not found" : "الشريك غير موجود"}
            </h1>
            <Link to="/partners">
              <Button variant="outline">
                <ArrowLeft size={16} strokeWidth={1.5} className="me-2 rtl:rotate-180" />
                {t.backToPartners}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Partner Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} className="rtl:rotate-180" />
            {t.backToPartners}
          </Link>

          <div className="max-w-4xl">
            {/* Partner Logo Placeholder */}
            <div className="w-28 h-28 lg:w-36 lg:h-36 border border-border bg-background flex items-center justify-center mb-8">
              <span className="font-heading text-4xl lg:text-5xl font-bold text-muted-foreground/50">
                {partner.abbr}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              {partner.name}
            </h1>
          </div>
        </div>
      </section>

      {/* About the Partner */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6 tracking-tight">
              {t.aboutTitle} {partner.name}
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {partner.name} {t.aboutDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions & Applications */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-8 tracking-tight">
              {t.solutionsTitle}
            </h2>
            <ul className="space-y-4">
              {t.solutions.map((solution, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 font-body text-lg text-muted-foreground"
                >
                  <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* KITES Support */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6 tracking-tight">
              {t.supportTitle}
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t.supportDescription} {partner.name} {t.supportDescriptionEnd}
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-primary-foreground mb-4 tracking-tight">
              {t.ctaTitle}
            </h2>
            <p className="font-body text-lg text-primary-foreground/70 mb-8">
              {t.ctaDescription} {partner.name}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto group">
                  {t.ctaContact}
                  <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 group"
                >
                  {t.ctaQuote}
                  <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}