import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/common/SEO";
import { SkipLink } from "@/components/common/SkipLink";
import { Layout } from "@/components/layout/Layout";
import { Cpu, LineChart, Leaf, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const content = {
  en: {
    hero: {
      eyebrow: "Enterprise Simulation Capabilities",
      title: "Our Expertise",
      intro: "Our expertise is built on advanced simulation, engineering knowledge, research, and practical experience, enabling us to solve complex challenges across industries.",
    },
    areasTitle: "Core Expertise Areas",
    areas: [
      {
        icon: "cpu",
        title: "Simulation & CAE",
        description: "De-risk innovation with high-fidelity digital verification before physical prototyping.",
        outcome: "Reduce prototyping costs by up to 40%."
      },
      {
        icon: "chart",
        title: "Engineering Consulting",
        description: "Optimize complex systems through rigorous data validation and physics-based modeling.",
        outcome: "Actionable reliability improvements."
      },
      {
        icon: "leaf",
        title: "Sustainability Analysis",
        description: "Ensure regulatory compliance and minimize environmental footprint with LCA studies.",
        outcome: "Global environmental standard adherence."
      },
      {
        icon: "graduation",
        title: "Training & Knowledge",
        description: "Build internal capability with applied technical mastery in simulation tools.",
        outcome: "Empowered, self-sufficient engineering teams."
      },
    ],
    industries: {
      title: "Industries We Support",
      list: ["Energy & Oil & Gas", "Infrastructure & Construction", "Manufacturing", "Academia & Research", "Government & Public Sector"]
    },
    methodology: {
      title: "Our Approach",
      steps: [
        { title: "Simulation-Led", desc: "Digital verification before physical prototypes." },
        { title: "Data-Driven", desc: "Decisions backed by rigorous computational analysis." },
        { title: "Validation-Focused", desc: "Ensuring real-world accuracy and reliability." },
      ]
    },
    leadershipTitle: "Leadership & Impact",
    leadershipDescription: "Through research-driven methodologies and global partnerships, KITES empowers organizations to innovate confidently and responsibly.",
    metrics: [
      { label: "Regional Experience", value: "15+ Years" },
      { label: "Simulation Projects", value: "100+" },
      { label: "Enterprise Clients", value: "30+" }
    ]
  },
  ar: {
    hero: {
      eyebrow: "قدرات المحاكاة للمؤسسات",
      title: "خبراتنا",
      intro: "تعتمد خبراتنا على المحاكاة المتقدمة، والمعرفة الهندسية، والبحث العلمي، والخبرة العملية، مما يمكننا من معالجة التحديات المعقدة في مختلف القطاعات.",
    },
    areasTitle: "مجالات الخبرة الأساسية",
    areas: [
      {
        icon: "cpu",
        title: "المحاكاة والتحليل الهندسي",
        description: "تقليل مخاطر الابتكار من خلال التحقق الرقمي عالي الدقة قبل النماذج الأولية المادية.",
        outcome: "تقليل تكاليف النماذج الأولية بنسبة تصل إلى 40٪."
      },
      {
        icon: "chart",
        title: "الاستشارات الهندسية",
        description: "تحسين الأنظمة المعقدة من خلال التحقق الدقيق من البيانات والنمذجة القائمة على الفيزياء.",
        outcome: "تحسينات عملية وموثوقة."
      },
      {
        icon: "leaf",
        title: "الاستدامة والتحليل البيئي",
        description: "ضمان الامتثال التنظيمي وتقليل البصمة البيئية من خلال دراسات تقييم دورة الحياة.",
        outcome: "الامتثال للمعايير البيئية العالمية."
      },
      {
        icon: "graduation",
        title: "التدريب ونقل المعرفة",
        description: "بناء القدرات الداخلية من خلال الإتقان التقني التطبيقي في أدوات المحاكاة.",
        outcome: "فرق هندسية متمكنة ومكتفية ذاتياً."
      },
    ],
    industries: {
      title: "الصناعات التي ندعمها",
      list: ["الطاقة والنط والغاز", "البنية التحتية والإنشاءات", "التصنيع", "الأوساط الأكاديمية والبحثية", "القطاع الحكومي والعام"]
    },
    methodology: {
      title: "نهجنا",
      steps: [
        { title: "قائم على المحاكاة", desc: "التحقق الرقمي قبل النماذج الأولية المادية." },
        { title: "مدفوع بالبيانات", desc: "قرارات مدعومة بتحليل حسابي دقيق." },
        { title: "التركيز على التحقق", desc: "ضمان الدقة والموثوقية في العالم الحقيقي." },
      ]
    },
    leadershipTitle: "الريادة والأثر",
    leadershipDescription: "من خلال منهجيات قائمة على البحث العلمي وشراكات عالمية، يمكّن KITES المؤسسات من الابتكار بثقة ومسؤولية.",
    metrics: [
      { label: "خبرة إقليمية", value: "+15 عاماً" },
      { label: "مشاريع محاكاة", value: "+100" },
      { label: "عملاء مؤسسيين", value: "+30" }
    ]
  },
};

const iconMap = {
  cpu: Cpu,
  chart: LineChart,
  leaf: Leaf,
  graduation: GraduationCap,
};

export default function Expertise() {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  return (
    <>
      <SEO page="expertise" />
      <SkipLink />
      <Layout>

        {/* Page Hero - Unified Dark Enterprise Style */}
        <section className="relative pt-32 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#0B0F14]" id="main-content">
          {/* Deep Navy Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B0F14] to-[#101826]" />
          {/* Subtle Noise */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay pointer-events-none z-0" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="inline-block mb-4 sm:mb-6 lg:mb-8">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-300 bg-white/5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                    {t.hero.eyebrow}
                  </span>
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-[1.05] tracking-tight">
                  {t.hero.title}
                </h1>
                <p className="font-body text-base sm:text-lg lg:text-xl text-slate-400/90 max-w-2xl mx-auto font-light px-2 sm:px-0">
                  {t.hero.intro}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Expertise Areas */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="font-heading text-2xl font-semibold text-slate-800 tracking-wide uppercase text-sm">
                {t.areasTitle}
              </h2>
              <div className="h-px w-16 bg-blue-600 mx-auto mt-4 opacity-50" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {t.areas.map((area, index) => {
                const IconComponent = iconMap[area.icon as keyof typeof iconMap];
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div
                      className="group relative p-8 lg:p-12 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-slate-100 cursor-default"
                    >
                      {/* Left Accent Line */}
                      <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="flex flex-col h-full">
                        <div className="mb-8 flex items-start justify-between">
                          <div className="w-14 h-14 rounded-2xl bg-slate-50/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50">
                            <IconComponent className="w-7 h-7 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" strokeWidth={1.5} />
                          </div>
                        </div>

                        <h3 className="font-heading text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                          {area.title}
                        </h3>
                        <p className="font-body text-slate-600 mb-8 flex-grow text-[16px]">
                          {area.description}
                        </p>

                        {/* Outcome Statement */}
                        <div className="pt-6 border-t border-slate-100 mt-auto">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
                            {area.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Industries Section */}
            <div className="max-w-5xl mx-auto mt-24 text-center">
              <h3 className="font-heading text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">{t.industries.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {t.industries.list.map((industry, i) => (
                  <span key={i} className="inline-block px-5 py-2.5 bg-slate-50 text-slate-600 text-sm font-medium rounded-full border border-slate-100/80 hover:border-slate-300 transition-colors cursor-default">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Methodology Section - "Our Approach" */}
        <section className="py-24 bg-slate-50 border-t border-slate-200/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4">{t.methodology.title}</h2>
                  <div className="h-0.5 w-12 bg-blue-600 mx-auto opacity-20" />
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-px bg-slate-200 z-0" />

                {t.methodology.steps.map((step, idx) => (
                  <ScrollReveal key={idx} delay={idx * 150} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-sm font-bold text-slate-400 mb-6 shadow-sm group-hover:border-blue-500 transition-colors">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-wide">{step.title}</h3>
                    <p className="text-slate-600 font-body text-sm max-w-[240px]">{step.desc}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Impact */}
        <section className="py-24 lg:py-32 bg-[#0B1220] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2E] to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent mx-auto mb-8" />
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                  {t.leadershipTitle}
                </h2>
                <p className="font-body text-lg lg:text-xl text-slate-400/90 font-light mb-16">
                  {t.leadershipDescription}
                </p>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
                  {t.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-3xl lg:text-4xl font-bold text-white mb-2">{metric.value}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
