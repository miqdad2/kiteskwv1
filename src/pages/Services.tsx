import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Boxes, MessageSquare, GraduationCap, Package, ArrowRight, Target, Cpu, CheckCircle, Rocket, Shield, Zap, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    pageTitle: "Services",
    intro: "Our services support engineers and organizations throughout the entire engineering lifecycle.",
    learnMore: "Learn More",
    approach: {
      label: "Our Approach",
      steps: [
        { icon: Target, label: "Define", description: "Requirements & scope" },
        { icon: Cpu, label: "Simulate", description: "Model & analyze" },
        { icon: CheckCircle, label: "Validate", description: "Test & verify" },
        { icon: Rocket, label: "Implement", description: "Deploy & support" },
      ],
    },
    categories: {
      "prototype-development": "CORE SERVICE",
      "consultation": "CONSULTING",
      "training": "TRAINING",
      "software-distribution": "DISTRIBUTION",
    },
    bridgeCta: {
      title: "Not sure which service fits your needs?",
      subtitle: "Talk to our experts.",
      button: "Request Consultation",
    },
    finalCta: {
      title: "Ready to discuss your engineering challenges?",
      subtitle: "Let's explore how simulation-driven solutions can transform your projects.",
      button: "Contact Us",
    },
    outcomes: {
      label: "Service Outcomes",
      items: [
        { icon: Shield, label: "Risk reduction" },
        { icon: Zap, label: "Faster validation" },
        { icon: BarChart3, label: "Better decisions" },
        { icon: Settings, label: "Scalable implementation" },
      ],
    },
    services: [
      {
        id: "prototype-development",
        title: "Prototype Development",
        authority: "Accelerate innovation cycles by validating concepts before committing to full-scale production.",
        description: "From concept to functional, validated prototypes. We transform ideas into tangible solutions using advanced simulation and rapid prototyping technologies.",
        features: [
          "Concept validation and feasibility studies",
          "3D modeling and digital twins",
          "Functional prototype creation",
          "Testing and iteration cycles",
        ],
        outcomes: ["Risk reduction", "Faster validation"],
        icon: Boxes,
      },
      {
        id: "consultation",
        title: "Consultation",
        authority: "Make data-driven engineering decisions backed by simulation expertise and environmental insight.",
        description: "Simulation-driven engineering and environmental consulting. Expert guidance to optimize your processes and achieve sustainable outcomes.",
        features: [
          "Engineering process optimization",
          "Environmental impact assessment",
          "Technology strategy development",
          "Regulatory compliance support",
        ],
        outcomes: ["Better decisions", "Risk reduction"],
        icon: MessageSquare,
      },
      {
        id: "training",
        title: "Training",
        authority: "Build lasting organizational capability through structured, industry-aligned professional development.",
        description: "Professional training programs for engineers and organizations. Hands-on courses designed to elevate skills and drive performance.",
        features: [
          "Certified professional programs",
          "Custom corporate training",
          "Simulation software workshops",
          "Leadership development",
        ],
        outcomes: ["Scalable implementation", "Better decisions"],
        icon: GraduationCap,
      },
      {
        id: "software-distribution",
        title: "Software Distribution",
        authority: "Deploy proven, enterprise-grade tools with comprehensive support for seamless integration.",
        description: "Access to world-leading engineering and simulation software. Authorized distribution with full technical support and implementation services.",
        features: [
          "Licensed enterprise software",
          "Implementation and deployment",
          "Technical support and maintenance",
          "Training and onboarding",
        ],
        outcomes: ["Faster validation", "Scalable implementation"],
        icon: Package,
      },
    ],
  },
  ar: {
    pageTitle: "الخدمات",
    intro: "تم تصميم خدماتنا لدعم المهندسين والمؤسسات في جميع مراحل دورة العمل الهندسية.",
    learnMore: "اعرف المزيد",
    approach: {
      label: "منهجيتنا",
      steps: [
        { icon: Target, label: "تحديد", description: "المتطلبات والنطاق" },
        { icon: Cpu, label: "محاكاة", description: "النمذجة والتحليل" },
        { icon: CheckCircle, label: "التحقق", description: "الاختبار والتأكد" },
        { icon: Rocket, label: "التنفيذ", description: "النشر والدعم" },
      ],
    },
    categories: {
      "prototype-development": "خدمة أساسية",
      "consultation": "استشارات",
      "training": "تدريب",
      "software-distribution": "توزيع",
    },
    bridgeCta: {
      title: "غير متأكد من الخدمة المناسبة لاحتياجاتك؟",
      subtitle: "تحدث إلى خبرائنا.",
      button: "طلب استشارة",
    },
    finalCta: {
      title: "هل أنت مستعد لمناقشة تحدياتك الهندسية؟",
      subtitle: "دعنا نستكشف كيف يمكن للحلول القائمة على المحاكاة أن تحوّل مشاريعك.",
      button: "تواصل معنا",
    },
    outcomes: {
      label: "نتائج الخدمة",
      items: [
        { icon: Shield, label: "تقليل المخاطر" },
        { icon: Zap, label: "تحقق أسرع" },
        { icon: BarChart3, label: "قرارات أفضل" },
        { icon: Settings, label: "تنفيذ قابل للتوسع" },
      ],
    },
    services: [
      {
        id: "prototype-development",
        title: "تطوير النماذج الأولية",
        authority: "تسريع دورات الابتكار من خلال التحقق من المفاهيم قبل الالتزام بالإنتاج الكامل.",
        description: "من الفكرة إلى نماذج أولية عملية ومختبرة. نحول الأفكار إلى حلول ملموسة باستخدام تقنيات المحاكاة المتقدمة والنمذجة السريعة.",
        features: [
          "التحقق من المفاهيم ودراسات الجدوى",
          "النمذجة ثلاثية الأبعاد والتوائم الرقمية",
          "إنشاء نماذج أولية وظيفية",
          "دورات الاختبار والتكرار",
        ],
        outcomes: ["تقليل المخاطر", "تحقق أسرع"],
        icon: Boxes,
      },
      {
        id: "consultation",
        title: "الاستشارات",
        authority: "اتخذ قرارات هندسية مبنية على البيانات مدعومة بخبرة المحاكاة والرؤية البيئية.",
        description: "استشارات هندسية وبيئية قائمة على المحاكاة. توجيه متخصص لتحسين عملياتك وتحقيق نتائج مستدامة.",
        features: [
          "تحسين العمليات الهندسية",
          "تقييم الأثر البيئي",
          "تطوير استراتيجية التكنولوجيا",
          "دعم الامتثال التنظيمي",
        ],
        outcomes: ["قرارات أفضل", "تقليل المخاطر"],
        icon: MessageSquare,
      },
      {
        id: "training",
        title: "التدريب",
        authority: "بناء قدرات مؤسسية دائمة من خلال تطوير مهني منظم ومتوافق مع الصناعة.",
        description: "برامج تدريب احترافية للمهندسين والمؤسسات. دورات تطبيقية مصممة لرفع المهارات وتحسين الأداء.",
        features: [
          "برامج مهنية معتمدة",
          "تدريب مؤسسي مخصص",
          "ورش عمل برمجيات المحاكاة",
          "تطوير القيادة",
        ],
        outcomes: ["تنفيذ قابل للتوسع", "قرارات أفضل"],
        icon: GraduationCap,
      },
      {
        id: "software-distribution",
        title: "توزيع البرمجيات",
        authority: "نشر أدوات مؤسسية مثبتة مع دعم شامل للتكامل السلس.",
        description: "توفير أفضل برمجيات الهندسة والمحاكاة عالميًا. توزيع معتمد مع دعم فني كامل وخدمات التنفيذ.",
        features: [
          "برمجيات مؤسسية مرخصة",
          "التنفيذ والنشر",
          "الدعم الفني والصيانة",
          "التدريب والإعداد",
        ],
        outcomes: ["تحقق أسرع", "تنفيذ قابل للتوسع"],
        icon: Package,
      },
    ],
  },
};

// Abstract technical SVG visuals for each service
const ServiceVisual = ({ type }: { type: string }) => {
  const visuals: Record<string, React.ReactNode> = {
    "prototype-development": (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 3D Wireframe Cube */}
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/20">
          {/* Grid lines */}
          {[...Array(11)].map((_, i) => (
            <line key={`h${i}`} x1="20" y1={15 + i * 12} x2="180" y2={15 + i * 12} />
          ))}
          {[...Array(9)].map((_, i) => (
            <line key={`v${i}`} x1={20 + i * 20} y1="15" x2={20 + i * 20} y2="135" />
          ))}
        </g>
        {/* 3D Cube wireframe */}
        <g stroke="currentColor" strokeWidth="1" className="text-foreground/40">
          {/* Front face */}
          <rect x="60" y="50" width="50" height="50" fill="none" />
          {/* Back face */}
          <rect x="80" y="30" width="50" height="50" fill="none" />
          {/* Connecting lines */}
          <line x1="60" y1="50" x2="80" y2="30" />
          <line x1="110" y1="50" x2="130" y2="30" />
          <line x1="60" y1="100" x2="80" y2="80" />
          <line x1="110" y1="100" x2="130" y2="80" />
        </g>
        {/* Dimension annotations */}
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/30">
          <line x1="60" y1="110" x2="110" y2="110" />
          <line x1="60" y1="108" x2="60" y2="112" />
          <line x1="110" y1="108" x2="110" y2="112" />
        </g>
      </svg>
    ),
    "consultation": (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flow diagram / Process chart */}
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/15">
          {/* Background grid dots */}
          {[...Array(10)].map((_, i) => 
            [...Array(8)].map((_, j) => (
              <circle key={`dot${i}${j}`} cx={20 + i * 18} cy={15 + j * 17} r="1" fill="currentColor" />
            ))
          )}
        </g>
        {/* Process nodes */}
        <g stroke="currentColor" strokeWidth="1" className="text-foreground/40">
          <circle cx="40" cy="75" r="15" fill="none" />
          <circle cx="100" cy="45" r="12" fill="none" />
          <circle cx="100" cy="105" r="12" fill="none" />
          <circle cx="160" cy="75" r="15" fill="none" />
        </g>
        {/* Connecting arrows */}
        <g stroke="currentColor" strokeWidth="0.75" className="text-foreground/30">
          <path d="M55 68 L85 50" />
          <path d="M55 82 L85 100" />
          <path d="M115 50 L145 68" />
          <path d="M115 100 L145 82" />
          {/* Arrow heads */}
          <polygon points="85,50 80,48 80,52" fill="currentColor" className="text-foreground/30" />
          <polygon points="85,100 80,98 80,102" fill="currentColor" className="text-foreground/30" />
        </g>
      </svg>
    ),
    "training": (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Learning curve / Progress visualization */}
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/20">
          {/* Axis */}
          <line x1="30" y1="120" x2="180" y2="120" />
          <line x1="30" y1="120" x2="30" y2="20" />
          {/* Axis ticks */}
          {[...Array(6)].map((_, i) => (
            <line key={`xt${i}`} x1={30 + i * 30} y1="120" x2={30 + i * 30} y2="123" />
          ))}
          {[...Array(5)].map((_, i) => (
            <line key={`yt${i}`} x1="27" y1={120 - i * 25} x2="30" y2={120 - i * 25} />
          ))}
        </g>
        {/* Learning curve */}
        <path 
          d="M30 115 Q60 110 75 95 T120 55 T170 25" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          className="text-foreground/40"
        />
        {/* Data points */}
        <g className="text-foreground/40">
          <circle cx="45" cy="108" r="3" fill="currentColor" />
          <circle cx="75" cy="85" r="3" fill="currentColor" />
          <circle cx="105" cy="60" r="3" fill="currentColor" />
          <circle cx="135" cy="40" r="3" fill="currentColor" />
          <circle cx="165" cy="28" r="3" fill="currentColor" />
        </g>
        {/* Milestone markers */}
        <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" className="text-foreground/20">
          <line x1="75" y1="85" x2="75" y2="120" />
          <line x1="135" y1="40" x2="135" y2="120" />
        </g>
      </svg>
    ),
    "software-distribution": (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Network / Integration diagram */}
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/15">
          {/* Circuit-like background */}
          <path d="M20 75 H60 V45 H100" />
          <path d="M20 85 H50 V115 H90" />
          <path d="M180 75 H140 V45 H100" />
          <path d="M180 85 H150 V115 H110" />
        </g>
        {/* Central hub */}
        <g stroke="currentColor" strokeWidth="1" className="text-foreground/40">
          <rect x="85" y="60" width="30" height="30" rx="2" fill="none" />
          {/* Inner detail */}
          <rect x="92" y="67" width="16" height="16" rx="1" fill="none" />
        </g>
        {/* Connected nodes */}
        <g stroke="currentColor" strokeWidth="0.75" className="text-foreground/30">
          {/* Top nodes */}
          <rect x="70" y="20" width="20" height="15" rx="1" fill="none" />
          <rect x="110" y="20" width="20" height="15" rx="1" fill="none" />
          {/* Bottom nodes */}
          <rect x="70" y="115" width="20" height="15" rx="1" fill="none" />
          <rect x="110" y="115" width="20" height="15" rx="1" fill="none" />
          {/* Side nodes */}
          <rect x="25" y="67" width="20" height="15" rx="1" fill="none" />
          <rect x="155" y="67" width="20" height="15" rx="1" fill="none" />
        </g>
        {/* Connection lines */}
        <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/25">
          <line x1="80" y1="35" x2="92" y2="60" />
          <line x1="120" y1="35" x2="108" y2="60" />
          <line x1="80" y1="115" x2="92" y2="90" />
          <line x1="120" y1="115" x2="108" y2="90" />
          <line x1="45" y1="75" x2="85" y2="75" />
          <line x1="155" y1="75" x2="115" y2="75" />
        </g>
      </svg>
    ),
  };

  return (
    <div className="aspect-[4/3] border border-border bg-secondary/20 flex items-center justify-center p-8">
      {visuals[type] || null}
    </div>
  );
};

const Services = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-3xl mx-auto text-center">
              <div className="h-px w-16 bg-primary-foreground/40 mx-auto mb-6" />
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
                {t.pageTitle}
              </h1>
              <p className="font-body text-lg lg:text-xl text-primary-foreground/70 leading-relaxed">
                {t.intro}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Approach Strip */}
        <section className="py-12 lg:py-16 bg-secondary/50 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-10">
              <span className="font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {t.approach.label}
              </span>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10" staggerDelay={100}>
              {t.approach.steps.map((step, index) => (
                <StaggerItem key={index} index={index}>
                  <div className="text-center group">
                    {/* Step number and icon */}
                    <div className="relative inline-flex items-center justify-center mb-4">
                      <div className="w-14 h-14 border border-border flex items-center justify-center bg-background group-hover:border-foreground/30 transition-colors duration-300">
                        <step.icon className="text-foreground/60" size={22} strokeWidth={1.5} />
                      </div>
                      {/* Connector line (except last) */}
                      {index < t.approach.steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 start-full w-full h-px bg-border -translate-y-1/2 ms-3" />
                      )}
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-1">
                      {step.label}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-0">
              {t.services.map((service, index) => (
                <ScrollReveal key={service.id}>
                  {/* Section divider */}
                  {index > 0 && (
                    <div className="py-12 lg:py-16">
                      <div className="h-px bg-border" />
                    </div>
                  )}
                  
                  <div className="py-8 lg:py-12">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                      {/* Content */}
                      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                        {/* Category label */}
                        <span className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-6 border border-border px-3 py-1.5 bg-secondary/30">
                          {t.categories[service.id as keyof typeof t.categories]}
                        </span>
                        
                        {/* Title with icon */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 border border-border flex items-center justify-center bg-background">
                            <service.icon className="text-foreground/70" size={26} strokeWidth={1.5} />
                          </div>
                          <h2 className="font-heading text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
                            {service.title}
                          </h2>
                        </div>
                        
                        {/* Authority line */}
                        <p className="font-body text-base lg:text-lg text-foreground/80 leading-relaxed mb-4 italic">
                          {service.authority}
                        </p>
                        
                        {/* Description */}
                        <p className="font-body text-muted-foreground leading-relaxed mb-8">
                          {service.description}
                        </p>
                        
                        {/* Features with staggered animation */}
                        <StaggerContainer className="space-y-3 mb-8" staggerDelay={75}>
                          {service.features.map((feature, featureIndex) => (
                            <StaggerItem key={feature} index={featureIndex}>
                              <div className="flex items-start gap-3 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0 mt-2.5 group-hover:bg-foreground/70 transition-colors duration-200" />
                                <span className="font-body text-foreground/90">{feature}</span>
                              </div>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                        
                        {/* Service Outcomes */}
                        <div className="mb-8 pt-6 border-t border-border/50">
                          <span className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground/70 mb-3 block">
                            {t.outcomes.label}
                          </span>
                          <div className="flex flex-wrap gap-3">
                            {service.outcomes.map((outcome, outcomeIndex) => (
                              <span 
                                key={outcomeIndex}
                                className="inline-flex items-center gap-1.5 font-body text-xs text-foreground/70 bg-secondary/50 px-3 py-1.5 border border-border/50"
                              >
                                {outcome}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <Link to={`/services/${service.id}`}>
                          <Button variant="outline" className="group">
                            {t.learnMore}
                            <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                          </Button>
                        </Link>
                      </div>

                      {/* Abstract Technical Visual */}
                      <div className={`${index % 2 === 1 ? "lg:order-1" : ""} sticky top-32`}>
                        <ServiceVisual type={service.id} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bridge CTA */}
        <section className="py-16 lg:py-20 bg-secondary/40 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-2xl mx-auto text-center">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-2 tracking-tight">
                {t.bridgeCta.title}
              </h3>
              <p className="font-body text-muted-foreground mb-8">
                {t.bridgeCta.subtitle}
              </p>
              <Link to="/contact">
                <Button variant="outline" className="group">
                  {t.bridgeCta.button}
                  <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-2xl mx-auto text-center">
              <div className="h-px w-16 bg-primary-foreground/40 mx-auto mb-8" />
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4 tracking-tight">
                {t.finalCta.title}
              </h2>
              <p className="font-body text-primary-foreground/60 mb-10 text-lg">
                {t.finalCta.subtitle}
              </p>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl" className="group">
                  {t.finalCta.button}
                  <ArrowRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
