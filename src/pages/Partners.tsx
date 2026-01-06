import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const content = {
  en: {
    title: "Our Partners",
    intro: "We collaborate with world-leading technology providers to deliver best-in-class engineering, simulation, training, and sustainability solutions across the GCC.",
    categories: [
      {
        id: "engineering",
        name: "Engineering & Simulation Software",
      },
      {
        id: "sustainability",
        name: "Sustainability & Environmental Solutions",
      },
      {
        id: "research",
        name: "Research & Analytics Software",
      },
    ],
  },
  ar: {
    title: "شركاؤنا",
    intro: "نتعاون مع مزودي التكنولوجيا الرائدين عالميًا لتقديم أفضل حلول الهندسة والمحاكاة والتدريب والاستدامة في منطقة الخليج.",
    categories: [
      {
        id: "engineering",
        name: "برمجيات الهندسة والمحاكاة",
      },
      {
        id: "sustainability",
        name: "حلول الاستدامة والبيئة",
      },
      {
        id: "research",
        name: "برمجيات البحث والتحليل",
      },
    ],
  },
};

// Partner data organized by category
const partners = {
  engineering: [
    { id: "siemens", name: "Siemens", abbr: "Si" },
    { id: "autodesk", name: "Autodesk", abbr: "Ad" },
    { id: "ansys", name: "ANSYS", abbr: "An" },
    { id: "dassault", name: "Dassault Systèmes", abbr: "DS" },
    { id: "ptc", name: "PTC", abbr: "PTC" },
    { id: "hexagon", name: "Hexagon", abbr: "Hx" },
  ],
  sustainability: [
    { id: "schneider", name: "Schneider Electric", abbr: "SE" },
    { id: "envizi", name: "Envizi", abbr: "Ev" },
    { id: "sphera", name: "Sphera", abbr: "Sp" },
  ],
  research: [
    { id: "matlab", name: "MathWorks", abbr: "MW" },
    { id: "tableau", name: "Tableau", abbr: "Tb" },
    { id: "esri", name: "Esri", abbr: "Es" },
    { id: "alteryx", name: "Alteryx", abbr: "Ax" },
  ],
};

export default function Partners() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="page-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Partner Categories */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {t.categories.map((category) => (
              <div key={category.id}>
                {/* Category Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-4">
                    <div className="accent-line-sm" />
                    <h2 className="font-heading text-h3 sm:text-h2 font-semibold text-foreground">
                      {category.name}
                    </h2>
                  </div>
                </div>

                {/* Partner Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-px bg-border">
                  {partners[category.id as keyof typeof partners]?.map((partner) => (
                    <Link
                      key={partner.id}
                      to={`/partners/${partner.id}`}
                      className="group flex items-center justify-center p-8 lg:p-10 bg-background hover:bg-secondary/50 transition-colors duration-200"
                    >
                      {/* Placeholder Logo */}
                      <div className="text-center">
                        <span className="block font-heading text-h2 lg:text-4xl font-bold text-muted-foreground/30 group-hover:text-foreground/70 transition-colors duration-200">
                          {partner.abbr}
                        </span>
                        <span className="block font-body text-body-sm text-muted-foreground/40 mt-2 group-hover:text-muted-foreground transition-colors duration-200">
                          {partner.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
