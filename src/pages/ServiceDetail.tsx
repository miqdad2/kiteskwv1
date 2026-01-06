import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, Boxes, MessageSquare, GraduationCap, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const servicesData = {
  "prototype-development": {
    icon: Boxes,
    en: {
      title: "Prototype Development",
      overview: "From concept to functional, validated prototypes, KITES supports organizations in transforming ideas into testable and manufacturable solutions using simulation-driven engineering approaches.",
      deliverTitle: "What We Deliver",
      deliverables: [
        "Concept validation through simulation",
        "Functional and performance-based prototypes",
        "Design optimization before production",
        "Risk reduction during early development stages",
      ],
      supportTitle: "How KITES Supports You",
      support: "KITES combines advanced simulation tools, engineering expertise, and practical experience to ensure prototypes meet performance, safety, and manufacturability requirements.",
      cta: "Contact Us to discuss your prototype development needs.",
      ctaButton: "Contact Us",
    },
    ar: {
      title: "تطوير النماذج الأولية",
      overview: "من الفكرة إلى نماذج أولية وظيفية ومُعتمدة، يدعم معهد KITES المؤسسات في تحويل الأفكار إلى حلول قابلة للاختبار والتصنيع باستخدام منهجيات الهندسة القائمة على المحاكاة.",
      deliverTitle: "ما نقدمه",
      deliverables: [
        "التحقق من المفاهيم باستخدام المحاكاة",
        "نماذج أولية وظيفية قائمة على الأداء",
        "تحسين التصميم قبل الإنتاج",
        "تقليل المخاطر في مراحل التطوير المبكرة",
      ],
      supportTitle: "كيف ندعمك",
      support: "يجمع معهد KITES بين أدوات المحاكاة المتقدمة والخبرة الهندسية لضمان تلبية النماذج الأولية لمتطلبات الأداء والسلامة وقابلية التصنيع.",
      cta: "تواصل معنا لمناقشة احتياجات تطوير النماذج الأولية.",
      ctaButton: "تواصل معنا",
    },
  },
  consultation: {
    icon: MessageSquare,
    en: {
      title: "Engineering & Sustainability Consultation",
      overview: "KITES provides expert engineering and sustainability consultation to support informed decision-making, performance optimization, and compliance with industry standards.",
      deliverTitle: "What We Deliver",
      deliverables: [
        "Engineering analysis and validation",
        "Sustainability and environmental assessments",
        "Simulation-driven recommendations",
        "Data-supported technical insights",
      ],
      supportTitle: "How KITES Supports You",
      support: "Our consultants work closely with clients to address technical challenges using proven methodologies and advanced analytical tools.",
      cta: "Contact our experts for personalized consultation.",
      ctaButton: "Contact Us",
    },
    ar: {
      title: "الاستشارات الهندسية والاستدامة",
      overview: "يقدم معهد KITES استشارات هندسية واستدامية متخصصة لدعم اتخاذ القرارات وتحسين الأداء والالتزام بالمعايير الصناعية.",
      deliverTitle: "ما نقدمه",
      deliverables: [
        "التحليل الهندسي والتحقق",
        "تقييمات الاستدامة والبيئة",
        "توصيات قائمة على المحاكاة",
        "رؤى تقنية مدعومة بالبيانات",
      ],
      supportTitle: "كيف ندعمك",
      support: "يعمل مستشارونا بشكل وثيق مع العملاء لمعالجة التحديات التقنية باستخدام منهجيات مثبتة وأدوات تحليل متقدمة.",
      cta: "تواصل مع خبرائنا للحصول على استشارة مخصصة.",
      ctaButton: "تواصل معنا",
    },
  },
  training: {
    icon: GraduationCap,
    en: {
      title: "Professional Engineering Training",
      overview: "KITES delivers professional training programs designed to build practical skills in engineering, simulation, and sustainability tools.",
      deliverTitle: "What We Deliver",
      deliverables: [
        "Software-specific training",
        "Applied engineering workshops",
        "Industry-relevant case studies",
        "Knowledge transfer and upskilling",
      ],
      supportTitle: "How KITES Supports You",
      support: "Our training programs are delivered by experienced professionals with real-world engineering and teaching expertise.",
      cta: "Get in touch to explore our training programs.",
      ctaButton: "Get in Touch",
    },
    ar: {
      title: "التدريب الهندسي الاحترافي",
      overview: "يقدم معهد KITES برامج تدريب احترافية تهدف إلى بناء المهارات العملية في مجالات الهندسة والمحاكاة والاستدامة.",
      deliverTitle: "ما نقدمه",
      deliverables: [
        "تدريب متخصص على البرمجيات",
        "ورش عمل هندسية تطبيقية",
        "دراسات حالة ذات صلة بالصناعة",
        "نقل المعرفة وتطوير المهارات",
      ],
      supportTitle: "كيف ندعمك",
      support: "يتم تقديم برامج التدريب لدينا من قبل خبراء ذوي خبرة عملية وتعليمية في المجال الهندسي.",
      cta: "تواصل معنا لاستكشاف برامجنا التدريبية.",
      ctaButton: "تواصل معنا",
    },
  },
  "software-distribution": {
    icon: Package,
    en: {
      title: "Engineering Software Distribution",
      overview: "KITES provides access to world-leading engineering, simulation, and research software solutions through authorized partnerships.",
      deliverTitle: "What We Deliver",
      deliverables: [
        "Software licensing",
        "Implementation guidance",
        "Technical support coordination",
        "User onboarding and training",
      ],
      supportTitle: "How KITES Supports You",
      support: "We ensure clients select and implement software solutions aligned with their technical and operational needs.",
      cta: "Contact us for software solutions and licensing.",
      ctaButton: "Contact Us",
    },
    ar: {
      title: "توزيع البرمجيات الهندسية",
      overview: "يوفر معهد KITES الوصول إلى برمجيات هندسية وبحثية رائدة عالميًا من خلال شراكات معتمدة.",
      deliverTitle: "ما نقدمه",
      deliverables: [
        "تراخيص البرمجيات",
        "إرشادات التنفيذ",
        "تنسيق الدعم الفني",
        "إعداد المستخدمين والتدريب",
      ],
      supportTitle: "كيف ندعمك",
      support: "نساعد عملاءنا في اختيار وتنفيذ حلول برمجية تتناسب مع احتياجاتهم التقنية والتشغيلية.",
      cta: "تواصل معنا للحصول على حلول وتراخيص البرمجيات.",
      ctaButton: "تواصل معنا",
    },
  },
};

type ServiceId = keyof typeof servicesData;

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { language } = useLanguage();

  const service = serviceId ? servicesData[serviceId as ServiceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
              {language === "en" ? "Service Not Found" : "الخدمة غير موجودة"}
            </h1>
            <Link to="/services">
              <Button variant="outline">
                <ArrowLeft size={16} className="rtl:rotate-180" />
                {language === "en" ? "Back to Services" : "العودة للخدمات"}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const t = service[language];
  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back Link */}
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground font-body text-sm mb-8 transition-colors"
              >
                <ArrowLeft size={16} strokeWidth={1.5} className="rtl:rotate-180" />
                {language === "en" ? "All Services" : "جميع الخدمات"}
              </Link>
              
              {/* Icon */}
              <div className="w-16 h-16 border border-primary-foreground/30 mx-auto flex items-center justify-center mb-8">
                <Icon className="text-primary-foreground/80" size={32} strokeWidth={1.5} />
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
                {t.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="h-px w-16 bg-foreground/20 mb-8" />
              <p className="font-body text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {t.overview}
              </p>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-10 tracking-tight">
                {t.deliverTitle}
              </h2>
              <ul className="space-y-5">
                {t.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-foreground/70 shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                    <span className="font-body text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How KITES Supports You Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-8 tracking-tight">
                {t.supportTitle}
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {t.support}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="h-px w-16 bg-primary-foreground/40 mx-auto mb-8" />
              <p className="font-body text-lg lg:text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                {t.cta}
              </p>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl" className="group">
                  {t.ctaButton}
                  <ArrowRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
