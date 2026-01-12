import { SEO } from "@/components/common/SEO";
import { SkipLink } from "@/components/common/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { getIconByName } from "@/lib/iconUtils";
import { cn } from "@/lib/utils";

const content = {
  en: {
    hero: {
      title: "Engineering Services",
      intro: "Integrated simulation, training, and consulting solutions designed to build lasting organizational capability.",
    },
    approach: {
      label: "Our Approach",
      steps: [
        { label: "Assess", icon: "Target", desc: "Understand requirements and organizational readiness." },
        { label: "Train", icon: "BookOpen", desc: "Build foundational and advanced competencies." },
        { label: "Implement", icon: "Settings", desc: "Deploy solutions with hands-on support." },
        { label: "Support", icon: "HeartHandshake", desc: "Ensure long-term adoption and success." },
      ]
    },
    services: [
      {
        id: "prototype-development",
        icon: "Cpu",
        category: "Engineering",
        title: "Prototype Development",
        solves: "Validate concepts before production through simulation-driven prototyping—reducing risk and accelerating innovation.",
        how: [
          "Concept validation and feasibility assessment",
          "Digital twin development",
          "Iterative testing and refinement"
        ],
        outcomes: ["Reduced Uncertainty", "Improved Workflows", "Design Confidence"]
      },
      {
        id: "consultation",
        icon: "LineChart",
        category: "Consulting",
        title: "Engineering Consultation",
        solves: "Expert guidance to help organizations make informed engineering decisions and navigate technical complexity.",
        how: [
          "Engineering process assessment",
          "Technology strategy development",
          "Simulation workflow optimization"
        ],
        outcomes: ["Informed Decisions", "Reduced Uncertainty", "Process Excellence"]
      },
      {
        id: "training",
        icon: "GraduationCap",
        category: "Capability Building",
        title: "Professional Training",
        solves: "Build simulation competency at every level—from foundational skills to advanced mastery.",
        how: [
          "Industry-certified programs",
          "Custom organizational training",
          "Ongoing capability development"
        ],
        outcomes: ["Sustainable Adoption", "Knowledge Transfer", "Team Capability"]
      },
      {
        id: "software-distribution",
        icon: "Leaf",
        category: "Technology",
        title: "Simulation Technology",
        solves: "Access proven platforms selected based on your engineering requirements—not vendor preference.",
        how: [
          "Multi-vendor technology access",
          "Needs-based platform selection",
          "Implementation and deployment"
        ],
        outcomes: ["Right-Fit Technology", "Complete Support", "Long-Term Success"]
      }
    ],
    cta: {
      bridge: {
        text: "Our team can help assess your engineering simulation needs.",
        btn: "Request an Assessment"
      },
      final: {
        trust: "Trusted by academic, government, and industrial organizations across the GCC",
        title: "Ready to build engineering capability?",
        btn: "Contact Us"
      }
    }
  },
  ar: {
    hero: {
      title: "الخدمات الهندسية",
      intro: "حلول متكاملة للمحاكاة والتدريب والاستشارات مصممة لبناء قدرات مؤسسية دائمة.",
    },
    approach: {
      label: "منهجيتنا",
      steps: [
        { label: "تقييم", icon: "Target", desc: "فهم المتطلبات والجاهزية المؤسسية." },
        { label: "تدريب", icon: "BookOpen", desc: "بناء الكفاءات الأساسية والمتقدمة." },
        { label: "تنفيذ", icon: "Settings", desc: "نشر الحلول مع دعم عملي." },
        { label: "دعم", icon: "HeartHandshake", desc: "ضمان التبني والنجاح طويل المدى." },
      ]
    },
    services: [
      {
        id: "prototype-development",
        icon: "Cpu",
        category: "هندسة",
        title: "تطوير النماذج الأولية",
        solves: "التحقق من المفاهيم قبل الإنتاج من خلال النمذجة القائمة على المحاكاة — لتقليل المخاطر وتسريع الابتكار.",
        how: [
          "التحقق من المفاهيم وتقييم الجدوى",
          "تطوير التوأم الرقمي",
          "الاختبار والتحسين التكراري"
        ],
        outcomes: ["تقليل عدم اليقين", "تحسين سير العمل", "ثقة في التصميم"]
      },
      {
        id: "consultation",
        icon: "LineChart",
        category: "استشارات",
        title: "الاستشارات الهندسية",
        solves: "توجيه متخصص لمساعدة المؤسسات على اتخاذ قرارات هندسية مستنيرة والتنقل في التعقيدات التقنية.",
        how: [
          "تقييم العمليات الهندسية",
          "تطوير استراتيجية التقنية",
          "تحسين سير عمل المحاكاة"
        ],
        outcomes: ["قرارات مستنيرة", "تقليل عدم اليقين", "تميز العمليات"]
      },
      {
        id: "training",
        icon: "GraduationCap",
        category: "بناء القدرات",
        title: "التدريب المهني",
        solves: "بناء كفاءة المحاكاة على جميع المستويات — من المهارات الأساسية إلى الإتقان المتقدم.",
        how: [
          "برامج معتمدة صناعياً",
          "تدريب مؤسسي مخصص",
          "تطوير القدرات المستمر"
        ],
        outcomes: ["تبني مستدام", "نقل المعرفة", "قدرات الفريق"]
      },
      {
        id: "software-distribution",
        icon: "Leaf",
        category: "تقنية",
        title: "تقنية المحاكاة",
        solves: "الوصول إلى منصات مثبتة مختارة بناءً على متطلباتك الهندسية — وليس تفضيل البائع.",
        how: [
          "الوصول لتقنيات متعددة البائعين",
          "اختيار المنصة بناءً على الاحتياجات",
          "التنفيذ والنشر"
        ],
        outcomes: ["التقنية المناسبة", "دعم كامل", "نجاح طويل المدى"]
      }
    ],
    cta: {
      bridge: {
        text: "فريقنا يمكنه مساعدتك في تقييم احتياجاتك من المحاكاة الهندسية.",
        btn: "اطلب تقييماً"
      },
      final: {
        trust: "موثوق بها من قبل المؤسسات الأكاديمية والحكومية والصناعية في دول مجلس التعاون الخليجي",
        title: "مستعد لبناء القدرات الهندسية؟",
        btn: "تواصل معنا"
      }
    }
  },
};



const Services = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  return (
    <>
      <SEO page="services" />
      <SkipLink />
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          {/* Page Hero */}
          <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 bg-primary relative overflow-hidden">
            {/* Subtle noise texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <ScrollReveal className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight">
                  {t.hero.title}
                </h1>
                <p className="font-body text-base sm:text-lg lg:text-xl text-primary-foreground/80 leading-relaxed font-light px-2 sm:px-0">
                  {t.hero.intro}
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Methodology Strip - Unified Enterprise Process */}
          <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center mb-14 sm:mb-16 lg:mb-20">
                <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  {t.approach.label}
                </h2>
                <div className="h-px w-12 bg-border mx-auto" />
              </ScrollReveal>

              <StaggerContainer className="relative max-w-5xl mx-auto" staggerDelay={150}>
                {/* Horizontal Connector Line (Desktop Only) */}
                <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-y-14 lg:gap-y-16 gap-x-8 lg:gap-x-10">
                  {t.approach.steps.map((step, index) => (
                    <StaggerItem key={index} index={index}>
                      <div className="flex flex-col items-center text-center group relative z-10">
                        {/* Number Badge */}
                        <span className="font-heading text-[10px] font-semibold text-muted-foreground/40 mb-4 bg-background px-3 relative z-20">
                          0{index + 1}
                        </span>

                        {/* Icon Circle */}
                        <div className="w-14 h-14 rounded-full border border-border bg-white flex items-center justify-center mb-5 transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-sm relative">
                          <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {(() => {
                              const StepIcon = getIconByName(step.icon);
                              return <StepIcon size={20} strokeWidth={1.5} />;
                            })()}
                          </div>
                        </div>

                        {/* Text Content */}
                        <h3 className="font-heading text-sm font-semibold text-foreground mb-2 tracking-tight">
                          {step.label}
                        </h3>
                        <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-[160px] mx-auto">
                          {step.desc}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </section>

          {/* Services List - Standardized Enterprise System */}
          <section className="bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {t.services.map((service, index) => {
                const diagramMapping: Record<string, string> = {
                  "prototype-development": "/images/services/prototype-development-diagram.png",
                  "consultation": "/images/services/engineering-consultation-diagram.png",
                  "training": "/images/services/professional-training-diagram.png",
                  "software-distribution": "/images/services/simulation-technology-diagram.png",
                };

                return (
                  <ScrollReveal key={service.id}>
                    {/* Consistent Divider */}
                    {index > 0 && <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-border/40 to-transparent my-0" />}

                    <div className="py-24 lg:py-32">
                      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Content Column - Standardized Left Alignment */}
                        <div className="relative">
                          <div className="max-w-xl">
                            {/* Category Tag */}
                            <div className="flex items-center gap-3 mb-6">
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-secondary/50 text-muted-foreground border border-border/50">
                                {service.category}
                              </span>
                            </div>

                            {/* Title - Unified Typography */}
                            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-8">
                              {service.title}
                            </h2>

                            {/* Strategic Insight Quote - Enhanced authority */}
                            <p className="font-body text-lg leading-[1.8] mb-10 border-l-[3px] border-blue-600/25 pl-6 py-2 italic text-foreground/70 font-medium max-w-lg">
                              "{service.solves}"
                            </p>

                            {/* 'How We Deliver' - With Step Numbers */}
                            <div className="mb-10">
                              <h4 className="text-[11px] font-semibold uppercase text-muted-foreground/70 tracking-[0.15em] mb-6">How We Deliver</h4>
                              <ul className="space-y-5">
                                {service.how.map((item, i) => (
                                  <li key={i} className="flex items-start gap-4 text-[15px] text-foreground/80 group">
                                    <span className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-semibold text-gray-500">
                                      {i + 1}
                                    </span>
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* 'Typical Outcomes' - With Background Tint */}
                            <div>
                              <h4 className="text-[11px] font-semibold uppercase text-muted-foreground/70 tracking-[0.15em] mb-5">Typical Outcomes</h4>
                              <div className="flex flex-wrap gap-2.5">
                                {service.outcomes.map((outcome, i) => (
                                  <span key={i} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[11px] font-semibold uppercase tracking-wide bg-gray-50 border border-gray-200 text-gray-600">
                                    <CheckCircle2 size={13} className="text-emerald-500/80" /> {outcome}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Primary Action - Text-based CTA with improved affordance */}
                            <div className="mt-10 pt-8 border-t border-border/30">
                              <Link
                                to={`/services/${service.id}`}
                                className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-primary transition-colors duration-300 group"
                              >
                                <span>Learn more</span>
                                <ArrowRight size={15} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Visual Column - Diagram Illustration */}
                        <div className="lg:sticky lg:top-32">
                          <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50/50 flex items-center justify-center p-4 lg:p-6">
                            <img
                              src={diagramMapping[service.id]}
                              alt={`${service.title} Process Diagram`}
                              className="w-full h-auto max-w-[520px] object-contain grayscale opacity-90"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

          {/* Bridge CTA - Assessment Prompt */}
          <section className="py-24 lg:py-28 bg-gradient-to-b from-secondary/20 to-background border-y border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center max-w-2xl mx-auto">
                <p className="font-body text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t.cta.bridge.text}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <span>{t.cta.bridge.btn}</span>
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-28 lg:py-36 bg-[#0B0F14] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#101826] to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <ScrollReveal>
                <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-6">
                  {t.cta.final.trust}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 tracking-tight">
                  {t.cta.final.title}
                </h2>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group border border-white/20 hover:border-white/40 px-8 py-4 rounded"
                >
                  <span>{t.cta.final.btn}</span>
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
