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

// Abstract technical SVG visuals with micro-animations
const ServiceVisual = ({ type }: { type: string }) => {
  const visuals: Record<string, React.ReactNode> = {
    "prototype-development": (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/20">
          {[...Array(11)].map((_, i) => (
            <line key={`h${i}`} x1="20" y1={15 + i * 12} x2="180" y2={15 + i * 12} className="opacity-0 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }} />
          ))}
          {[...Array(9)].map((_, i) => (
            <line key={`v${i}`} x1={20 + i * 20} y1="15" x2={20 + i * 20} y2="135" className="opacity-0 animate-fade-in" style={{ animationDelay: `${i * 100 + 500}ms` }} />
          ))}
        </g>
        <g stroke="currentColor" strokeWidth="1" className="text-foreground/40 animate-pulse-slow">
          <rect x="60" y="50" width="50" height="50" fill="none" />
          <rect x="80" y="30" width="50" height="50" fill="none" />
          <line x1="60" y1="50" x2="80" y2="30" />
          <line x1="110" y1="50" x2="130" y2="30" />
          <line x1="60" y1="100" x2="80" y2="80" />
          <line x1="110" y1="100" x2="130" y2="80" />
        </g>
      </svg>
    ),
    "consultation": (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/15">
          {[...Array(10)].map((_, i) =>
            [...Array(8)].map((_, j) => (
              <circle key={`dot${i}${j}`} cx={20 + i * 18} cy={15 + j * 17} r="1" fill="currentColor" className="opacity-0 animate-fade-in" style={{ animationDelay: `${(i + j) * 50}ms` }} />
            ))
          )}
        </g>
        <g stroke="currentColor" strokeWidth="1" className="text-foreground/50">
          <circle cx="40" cy="75" r="15" fill="none" className="animate-pulse-slow" style={{ animationDelay: '0s' }} />
          <circle cx="100" cy="45" r="12" fill="none" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <circle cx="100" cy="105" r="12" fill="none" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <circle cx="160" cy="75" r="15" fill="none" className="animate-pulse-slow" style={{ animationDelay: '3s' }} />
        </g>
        <g stroke="currentColor" strokeWidth="0.75" className="text-foreground/30">
          <path d="M55 68 L85 50" className="animate-draw" />
          <path d="M55 82 L85 100" className="animate-draw" style={{ animationDelay: '0.5s' }} />
          <path d="M115 50 L145 68" className="animate-draw" style={{ animationDelay: '1s' }} />
          <path d="M115 100 L145 82" className="animate-draw" style={{ animationDelay: '1.5s' }} />
        </g>
      </svg>
    ),
    "training": (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/20">
          <line x1="30" y1="120" x2="180" y2="120" />
          <line x1="30" y1="120" x2="30" y2="20" />
        </g>
        <path
          d="M30 115 Q60 110 75 95 T120 55 T170 25"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-foreground/40 animate-draw"
          strokeDasharray="300"
          strokeDashoffset="300"
        />
        <g className="text-foreground/40">
          <circle cx="45" cy="108" r="3" fill="currentColor" className="animate-pulse-slow" />
          <circle cx="135" cy="40" r="3" fill="currentColor" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </g>
      </svg>
    ),
    "software-distribution": (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/15">
          <path d="M20 75 H60 V45 H100" className="animate-draw" />
          <path d="M180 85 H150 V115 H110" className="animate-draw" style={{ animationDelay: '0.5s' }} />
        </g>
        <g stroke="currentColor" strokeWidth="1" className="text-foreground/40">
          <rect x="85" y="60" width="30" height="30" rx="2" fill="none" className="animate-pulse-slow" />
        </g>
        <g stroke="currentColor" strokeWidth="0.75" className="text-foreground/30">
          <rect x="70" y="20" width="20" height="15" rx="1" fill="none" />
          <rect x="110" y="115" width="20" height="15" rx="1" fill="none" />
        </g>
      </svg>
    ),
  };

  return (
    <div className="aspect-[4/3] border border-border/60 bg-gradient-to-br from-secondary/10 to-secondary/30 flex items-center justify-center p-8 overflow-hidden rounded-xl shadow-sm">
      {visuals[type] || null}
    </div>
  );
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
          <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground/90 mb-3">
                  {t.approach.label}
                </h2>
                <div className="h-0.5 w-8 bg-blue-600/30 mx-auto rounded-full" />
              </ScrollReveal>

              <StaggerContainer className="relative max-w-5xl mx-auto" staggerDelay={150}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-y-12 lg:gap-y-16 gap-x-6 lg:gap-x-8">
                  {t.approach.steps.map((step, index) => (
                    <StaggerItem key={index} index={index}>
                      <div className="flex flex-col items-center text-center group relative z-10">
                        {/* Number Badge */}
                        <span className="font-heading text-[10px] font-bold text-muted-foreground/30 mb-4 transition-colors group-hover:text-blue-600/60 bg-background px-2 relative z-20">
                          0{index + 1}
                        </span>

                        {/* Icon Circle */}
                        <div className="w-16 h-16 rounded-full border border-border bg-background flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_4px_20px_-4px_rgba(37,99,235,0.1)] group-hover:-translate-y-1 relative">
                          <div className="text-muted-foreground group-hover:text-blue-600 transition-colors duration-300">
                            {(() => {
                              const StepIcon = getIconByName(step.icon);
                              return <StepIcon size={22} strokeWidth={1.5} />;
                            })()}
                          </div>
                        </div>

                        {/* Text Content */}
                        <h3 className="font-heading text-sm font-bold text-foreground mb-3 tracking-tight group-hover:text-blue-900 transition-colors">
                          {step.label}
                        </h3>
                        <p className="font-body text-xs text-muted-foreground/80 leading-relaxed max-w-[180px] mx-auto">
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
                // Unified Layout Logic - Consistent spacing and structure for ALL items
                return (
                  <ScrollReveal key={service.id}>
                    {/* Consistent Divider */}
                    {index > 0 && <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-border/40 to-transparent my-0" />}

                    <div className="py-24 lg:py-32">
                      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Content Column */}
                        <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
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

                            {/* Strategic Insight Quote - Consistent styling */}
                            <p className="font-body text-lg leading-relaxed mb-10 border-l-[3px] border-blue-600/20 pl-6 py-1 italic text-muted-foreground">
                              "{service.solves}"
                            </p>

                            {/* 'How We Deliver' - Standardized List */}
                            <div className="mb-10">
                              <h4 className="text-[11px] font-bold uppercase text-muted-foreground/70 tracking-[0.15em] mb-5">How We Deliver</h4>
                              <ul className="space-y-4">
                                {service.how.map((item, i) => (
                                  <li key={i} className="flex items-start gap-4 text-[15px] text-foreground/80 group">
                                    <div className="w-5 h-5 rounded-full bg-secondary/50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-50/50 group-hover:text-blue-600 transition-colors">
                                      <Check size={12} strokeWidth={2.5} />
                                    </div>
                                    <span className="leading-relaxed border-b border-transparent group-hover:border-border/60 transition-colors">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* 'Business Impact' - Uniform Chips */}
                            <div>
                              <h4 className="text-[11px] font-bold uppercase text-muted-foreground/70 tracking-[0.15em] mb-5">Business Impact</h4>
                              <div className="flex flex-wrap gap-3">
                                {service.outcomes.map((outcome, i) => (
                                  <span key={i} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[11px] font-bold uppercase tracking-wide border border-border/60 bg-background text-muted-foreground/80 shadow-sm transition-all hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50/30">
                                    <CheckCircle2 size={13} className="text-emerald-500/70" /> {outcome}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Primary Action */}
                            <div className="mt-10 pt-10 border-t border-border/30">
                              <Link to={`/services/${service.id}`}>
                                <Button variant="outline" className="h-12 px-6 group min-w-[160px] shadow-sm hover:border-blue-200 hover:text-blue-700 hover:bg-white text-sm font-medium">
                                  Learn More <ArrowRight size={15} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Visual Column - Normalized Container */}
                        <div className={`${index % 2 === 1 ? "lg:order-1" : ""} lg:sticky lg:top-32 group`}>
                          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/40 bg-gradient-to-br from-secondary/5 to-secondary/20 shadow-subtle group-hover:shadow-elevated transition-all duration-700 flex items-center justify-center p-10">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <ServiceVisual type={service.id} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

          {/* Bridge CTA */}
          <section className="py-20 bg-gradient-to-b from-secondary/30 to-background border-y border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <ScrollReveal>
                <div className="inline-block p-4 rounded-full bg-secondary/50 mb-6">
                  <p className="text-sm font-medium text-muted-foreground tracking-wide">
                    {t.cta.bridge.text}
                  </p>
                </div>
                <div>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="group bg-background border-foreground/20 hover:border-foreground/40 min-w-[240px]">
                      {t.cta.bridge.btn}
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-24 lg:py-32 bg-[#0B0F14] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#101826] to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <ScrollReveal>
                <span className="block text-xs font-bold uppercase tracking-[0.15em] text-blue-400/80 mb-8 opacity-80">
                  {t.cta.final.trust}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8 tracking-tight">
                  {t.cta.final.title}
                </h2>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl" className="group border-white/20 hover:border-white/50 text-white hover:bg-white/5">
                    {t.cta.final.btn}
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
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
