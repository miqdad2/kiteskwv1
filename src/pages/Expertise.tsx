import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cpu, LineChart, Leaf, GraduationCap } from "lucide-react";

const content = {
  en: {
    title: "Our Expertise",
    intro: "Our expertise is built on advanced simulation, engineering knowledge, research, and practical experience, enabling us to solve complex challenges across industries.",
    areasTitle: "Core Expertise Areas",
    areas: [
      {
        icon: "cpu",
        title: "Simulation & CAE",
        description: "Advanced finite element analysis, computational modeling, and simulation-driven engineering.",
      },
      {
        icon: "chart",
        title: "Engineering Consulting",
        description: "Data-driven engineering consultation for design optimization, validation, and performance improvement.",
      },
      {
        icon: "leaf",
        title: "Sustainability & Environmental Analysis",
        description: "Life Cycle Assessment (LCA), sustainability evaluation, and environmental impact analysis.",
      },
      {
        icon: "graduation",
        title: "Training & Knowledge Transfer",
        description: "Professional training programs focused on practical skills and applied engineering tools.",
      },
    ],
    leadershipTitle: "Leadership & Impact",
    leadershipDescription: "Through research-driven methodologies and global partnerships, KITES empowers organizations to innovate confidently and responsibly.",
  },
  ar: {
    title: "خبراتنا",
    intro: "تعتمد خبراتنا على المحاكاة المتقدمة، والمعرفة الهندسية، والبحث العلمي، والخبرة العملية، مما يمكننا من معالجة التحديات المعقدة في مختلف القطاعات.",
    areasTitle: "مجالات الخبرة الأساسية",
    areas: [
      {
        icon: "cpu",
        title: "المحاكاة والتحليل الهندسي",
        description: "التحليل بالعناصر المحدودة، والنمذجة الحسابية، والهندسة القائمة على المحاكاة.",
      },
      {
        icon: "chart",
        title: "الاستشارات الهندسية",
        description: "استشارات هندسية قائمة على البيانات لتحسين التصميم والتحقق ورفع الأداء.",
      },
      {
        icon: "leaf",
        title: "الاستدامة والتحليل البيئي",
        description: "تقييم دورة الحياة، وتحليل الاستدامة، ودراسة الأثر البيئي.",
      },
      {
        icon: "graduation",
        title: "التدريب ونقل المعرفة",
        description: "برامج تدريب احترافية تركز على المهارات العملية والأدوات الهندسية التطبيقية.",
      },
    ],
    leadershipTitle: "الريادة والأثر",
    leadershipDescription: "من خلال منهجيات قائمة على البحث العلمي وشراكات عالمية، يمكّن KITES المؤسسات من الابتكار بثقة ومسؤولية.",
  },
};

const iconMap = {
  cpu: Cpu,
  chart: LineChart,
  leaf: Leaf,
  graduation: GraduationCap,
};

export default function Expertise() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Intro */}
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

      {/* Core Expertise Areas */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 justify-center mb-14">
            <div className="accent-line-sm" />
            <h2 className="font-heading text-h3 lg:text-h2 font-semibold text-foreground text-center">
              {t.areasTitle}
            </h2>
            <div className="accent-line-sm" />
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border max-w-5xl mx-auto">
            {t.areas.map((area, index) => {
              const IconComponent = iconMap[area.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="group p-10 lg:p-12 bg-background hover:bg-secondary/30 transition-colors duration-200"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-foreground/30 transition-colors duration-200">
                    <IconComponent className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-h4 lg:text-h3 font-semibold text-foreground mb-4">
                    {area.title}
                  </h3>
                  <p className="font-body text-body text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Impact */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="accent-line-light mx-auto mb-10" />
            <h2 className="font-heading text-h2 lg:text-3xl font-semibold text-primary-foreground mb-8">
              {t.leadershipTitle}
            </h2>
            <p className="font-body text-body-lg lg:text-xl text-primary-foreground/60 leading-relaxed">
              {t.leadershipDescription}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
