import { SEO } from "@/components/common/SEO";
import { SkipLink } from "@/components/common/SkipLink";
import { Layout } from "@/components/layout/Layout";
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
        solves: "Validate technical concepts before production through simulation-driven prototyping—reducing risk and supporting engineering innovation.",
        how: [
          "Technical feasibility and concept validation",
          "High-fidelity digital twin development",
          "Iterative simulation-driven refinement"
        ],
        outcomes: ["Reduced Uncertainty", "Workflow Optimization", "Design Reliability"]
      },
      {
        id: "consultation",
        icon: "LineChart",
        category: "Consulting",
        title: "Engineering Consultation",
        solves: "Expert advisory to help organizations navigate technical complexity and make evidence-based engineering decisions.",
        how: [
          "Institutional process assessment",
          "Simulation technology strategy",
          "Workflow integration and optimization"
        ],
        outcomes: ["Process Excellence", "Strategic Clarity", "Technical Readiness"]
      },
      {
        id: "training",
        icon: "GraduationCap",
        category: "Capability Building",
        title: "Professional Training",
        solves: "Establish and scale simulation competency—from foundational engineering skills to advanced system mastery.",
        how: [
          "Industry-certified curriculum delivery",
          "Custom organizational capability mapping",
          "Ongoing technical competency development"
        ],
        outcomes: ["Sustainable Adoption", "Institutional Knowledge", "Operational Capacity"]
      },
      {
        id: "software-distribution",
        icon: "Leaf",
        category: "Technology",
        title: "Simulation Technology",
        solves: "Access proven engineering platforms selected based on objective requirements rather than vendor preference.",
        how: [
          "Requirements-led platform selection",
          "Multi-vendor technology integration",
          "Deployment and technical support"
        ],
        outcomes: ["Right-Fit Technology", "Integrated Workflow", "Long-Term Capability"]
      }
    ],
    cta: {
      bridge: {
        text: "Our engineering team provides comprehensive assessments to determine organizational simulation requirements.",
        btn: "Request a Technical Assessment"
      },
      final: {
        trust: "Established partner to academic, government, and industrial entities across the GCC region",
        title: "Ready to establish advanced engineering capability?",
        btn: "Contact KITES"
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
        solves: "التحقق من المفاهيم التقنية قبل الإنتاج من خلال النمذجة القائمة على المحاكاة — لتقليل المخاطر ودعم الابتكار الهندسي.",
        how: [
          "الجدوى التقنية والتحقق من المفاهيم",
          "تطوير التوائم الرقمية عالية الدقة",
          "التحسين الفني التكراري القائم على المحاكاة"
        ],
        outcomes: ["تقليل عدم اليقين", "تحسين سير العمل", "وثوقية التصميم"]
      },
      {
        id: "consultation",
        icon: "LineChart",
        category: "استشارات",
        title: "الاستشارات الهندسية",
        solves: "توجيه استشاري متخصص لمساعدة المؤسسات على التنقل في التعقيدات التقنية واتخاذ قرارات هندسية قائمة على الأدلة.",
        how: [
          "تقييم العمليات المؤسسية",
          "استراتيجية تقنيات المحاكاة",
          "تكامل وتحسين سير العمل"
        ],
        outcomes: ["تميز العمليات", "وضوح استراتيجي", "الجاهزية التقنية"]
      },
      {
        id: "training",
        icon: "GraduationCap",
        category: "بناء القدرات",
        title: "التدريب المهني",
        solves: "تأسيس وتوسيع كفاءات المحاكاة — من المهارات الهندسية الأساسية إلى الإتقان المتقدم للأنظمة.",
        how: [
          "تقديم مناهج معتمدة صناعياً",
          "رسم خرائط القدرات المؤسسية المخصصة",
          "تطوير الكفاءات التقنية المستمر"
        ],
        outcomes: ["تبني مستدام", "معرفة مؤسسية", "القدرة التشغيلية"]
      },
      {
        id: "software-distribution",
        icon: "Leaf",
        category: "تقنية",
        title: "تقنية المحاكاة",
        solves: "الوصول إلى منصات هندسية مثبتة مختارة بناءً على متطلبات موضوعية بدلاً من تفضيل البائع.",
        how: [
          "اختيار المنصات بناءً على المتطلبات",
          "تكامل التقنيات متعددة البائعين",
          "النشر والدعم الفني"
        ],
        outcomes: ["التقنية المناسبة", "سير عمل متكامل", "قدرات طويلة المدى"]
      }
    ],
    cta: {
      bridge: {
        text: "يوفر فريقنا الهندسي تقييمات شاملة لتحديد متطلبات المحاكاة المؤسسية.",
        btn: "اطلب تقييماً فنياً"
      },
      final: {
        trust: "شريك مؤسس للكيانات الأكاديمية والحكومية والصناعية في منطقة الخليج",
        title: "مستعد لبناء القدرات الهندسية المتقدمة؟",
        btn: "تواصل مع كايتس"
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
      <Layout>
        {/* Page Hero */}
        <section className="pt-32 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 bg-primary relative overflow-hidden">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight">
                {t.hero.title}
              </h1>
              <p className="font-body text-base sm:text-lg lg:text-xl text-primary-foreground/80 font-light px-2 sm:px-0">
                {t.hero.intro}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Methodology Strip - Unified Enterprise Process */}
        <section className="py-24 sm:py-28 lg:py-32 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground/80 mb-6">
                {t.approach.label}
              </h2>
              <div className="h-px w-16 bg-blue-600/20 mx-auto" />
            </ScrollReveal>

            <StaggerContainer className="relative max-w-5xl mx-auto" staggerDelay={150}>
              {/* Horizontal Connector Line (Desktop Only) */}
              <div className="hidden lg:block absolute top-[62px] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-y-16 lg:gap-y-20 gap-x-10">
                {t.approach.steps.map((step, index) => (
                  <StaggerItem key={index} index={index}>
                    <div className="flex flex-col items-center text-center group relative z-10">
                      {/* Number Badge */}
                      <span className="font-heading text-[10px] font-bold text-muted-foreground/30 mb-5 bg-background px-4 relative z-20 tracking-widest">
                        0{index + 1}
                      </span>

                      {/* Icon Circle */}
                      <div className="w-16 h-16 rounded-full border border-gray-100 bg-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-blue-600/20 group-hover:shadow-subtle relative">
                        <div className="text-muted-foreground/60 group-hover:text-blue-600 transition-colors duration-300">
                          {(() => {
                            const StepIcon = getIconByName(step.icon);
                            return <StepIcon size={22} strokeWidth={1} />;
                          })()}
                        </div>
                      </div>

                      {/* Text Content */}
                      <h3 className="font-heading text-[13px] font-bold text-foreground mb-3 tracking-wide uppercase">
                        {step.label}
                      </h3>
                      <p className="font-body text-[13px] text-muted-foreground max-w-[170px] mx-auto opacity-80">
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

                  <div className="py-32 lg:py-40">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                      {/* Content Column - Standardized Left Alignment */}
                      <div className="relative">
                        <div className="max-w-xl">
                          {/* Category Tag */}
                          <div className="flex items-center gap-3 mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-sm bg-secondary/40 text-muted-foreground border border-border/40">
                              {service.category}
                            </span>
                          </div>

                          {/* Title - Unified Typography */}
                          <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-10 leading-[1.1]">
                            {service.title}
                          </h2>

                          {/* Strategic Insight Quote - Enhanced authority */}
                          <p className="font-body text-lg leading-[1.8] mb-12 border-l-[3px] border-blue-600/20 pl-8 py-2 italic text-foreground/60 font-medium max-w-lg">
                            "{service.solves}"
                          </p>

                          {/* 'How We Deliver' - With Step Numbers */}
                          <div className="mb-12">
                            <h4 className="text-[11px] font-bold uppercase text-muted-foreground/60 tracking-[0.2em] mb-8">How We Deliver</h4>
                            <ul className="space-y-6">
                              {service.how.map((item, i) => (
                                <li key={i} className="flex items-start gap-5 text-[15px] text-foreground/80 group">
                                  <span className="w-6 h-6 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold text-gray-400">
                                    {i + 1}
                                  </span>
                                  <span className="leading-relaxed opacity-90">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* 'Business Impact' - Refined Scannability */}
                          <div>
                            <h4 className="text-[11px] font-bold uppercase text-muted-foreground/60 tracking-[0.2em] mb-6">Business Impact</h4>
                            <div className="flex flex-wrap gap-3">
                              {service.outcomes.map((outcome, i) => (
                                <span key={i} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md text-[11px] font-bold uppercase tracking-wide bg-gray-50/50 border border-gray-100 text-gray-500 hover:bg-white hover:border-gray-200 transition-all duration-300">
                                  <CheckCircle2 size={13} className="text-emerald-500/60" /> {outcome}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Primary Action - Conversion-aware Text Link */}
                          <div className="mt-14 pt-10 border-t border-border/20">
                            <Link
                              to={`/services/${service.id}`}
                              className="inline-flex items-center text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 group tracking-wide"
                            >
                              <span>{language === 'ar' ? "استكشاف تفاصيل الخدمة" : "Explore service details"}</span>
                              <ArrowRight size={15} className={`ml-3 transition-transform duration-300 ${isRTL ? "rotate-180 group-hover:-translate-x-1.5" : "group-hover:translate-x-1.5"}`} />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Visual Column - Refined Diagram Illustration */}
                      <div className="lg:sticky lg:top-40">
                        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/30 flex items-center justify-center p-8 lg:p-12">
                          <img
                            src={diagramMapping[service.id]}
                            alt={`${service.title} Process Diagram`}
                            className="w-full h-auto max-w-[500px] object-contain grayscale opacity-[0.85]"
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
        <section className="py-28 lg:py-36 bg-gradient-to-b from-secondary/15 to-background border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto">
              <p className="font-body text-base sm:text-lg text-muted-foreground/80 mb-10 italic">
                {t.cta.bridge.text}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300 group px-6 py-2 border-b-2 border-primary/10 hover:border-primary/40"
              >
                <span>{t.cta.bridge.btn}</span>
                <ArrowRight size={16} className={`ml-3 transition-transform duration-300 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 lg:py-48 bg-[#0B0F14] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1725] to-transparent/50 opacity-80" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 mb-10">
                {t.cta.final.trust}
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-14 tracking-tighter leading-[1.1]">
                {t.cta.final.title}
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] text-white/90 hover:text-white transition-all duration-300 group border border-white/10 hover:bg-white/5 hover:border-white/30 px-10 py-5 rounded-sm"
              >
                <span>{t.cta.final.btn}</span>
                <ArrowRight size={18} className={`ml-3 transition-transform duration-300 ${isRTL ? "rotate-180 group-hover:-translate-x-1.5" : "group-hover:translate-x-1.5"}`} />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
