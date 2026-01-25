import { Boxes, MessageSquare, GraduationCap, Package, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const content = {
  en: {
    eyebrow: "WHAT WE DO",
    label: "Our Services",
    subtitle: "Integrated engineering services supporting analysis, validation, training, and long-term capability development.",
    coreLabel: "Core Service",
    trustText: "Trusted by engineering teams across energy, manufacturing, infrastructure, and academia.",
    sectionCta: {
      prompt: "Not sure which service fits your challenge?",
      button: "Request an Engineering Assessment",
    },
    services: [
      {
        id: "consultation",
        title: "Engineering & Sustainability Consulting",
        challenge: "Typical Challenge: Complex engineering or environmental decisions with high uncertainty",
        description: "Address complex engineering and environmental challenges through simulation-led analysis, expert assessment, and strategic guidance.",
        cta: "Explore consulting approach",
        icon: MessageSquare,
      },
      {
        id: "software-distribution",
        title: "Simulation Software & Platforms",
        challenge: "Typical Challenge: Selecting and adopting the right simulation platforms",
        description: "Enable effective use of world-leading engineering and simulation platforms through guided selection, onboarding, and long-term support.",
        cta: "View supported platforms",
        icon: Package,
      },
      {
        id: "prototype-development",
        title: "Simulation-Driven Prototyping",
        challenge: "Typical Challenge: Validating designs before physical investment",
        description: "Transform early concepts into validated, simulation-backed engineering solutions ready for real-world application.",
        cta: "See validation workflow",
        icon: Boxes,
      },
      {
        id: "training",
        title: "Professional Engineering Training",
        challenge: "Typical Challenge: Building internal engineering capability and software proficiency",
        description: "Build internal engineering capability through structured professional and academic training aligned with real project needs.",
        cta: "View training programs",
        icon: GraduationCap,
      },
    ],
  },
  ar: {
    eyebrow: "ماذا نقدم",
    label: "خدماتنا",
    subtitle: "خدمات هندسية متكاملة تدعم التحليل والتحقق والتدريب وتطوير القدرات طويلة المدى.",
    coreLabel: "الخدمة الأساسية",
    trustText: "موثوق به من قبل الفرق الهندسية في قطاعات الطاقة والتصنيع والبنية التحتية والأوساط الأكاديمية.",
    sectionCta: {
      prompt: "غير متأكد أي خدمة تناسب تحديك؟",
      button: "اطلب تقييماً هندسياً",
    },
    services: [
      {
        id: "consultation",
        title: "استشارات الهندسة والاستدامة",
        challenge: "التحدي النموذجي: قرارات هندسية أو بيئية معقدة مع عدم يقين عالٍ",
        description: "معالجة التحديات الهندسية والبيئية المعقدة من خلال التحليل القائم على المحاكاة والتقييم المتخصص والتوجيه الاستراتيجي.",
        cta: "استكشف نهج الاستشارات",
        icon: MessageSquare,
      },
      {
        id: "software-distribution",
        title: "برمجيات ومنصات المحاكاة",
        challenge: "التحدي النموذجي: اختيار واعتماد منصات المحاكاة المناسبة",
        description: "تمكين الاستخدام الفعال لمنصات الهندسة والمحاكاة الرائدة عالمياً من خلال الاختيار الموجه والإعداد والدعم طويل المدى.",
        cta: "عرض المنصات المدعومة",
        icon: Package,
      },
      {
        id: "prototype-development",
        title: "النمذجة القائمة على المحاكاة",
        challenge: "التحدي النموذجي: التحقق من التصاميم قبل الاستثمار المادي",
        description: "تحويل المفاهيم المبكرة إلى حلول هندسية معتمدة على المحاكاة وجاهزة للتطبيق الفعلي.",
        cta: "شاهد سير عمل التحقق",
        icon: Boxes,
      },
      {
        id: "training",
        title: "التدريب الهندسي المهني",
        challenge: "التحدي النموذجي: بناء القدرات الهندسية الداخلية وإتقان البرمجيات",
        description: "بناء القدرات الهندسية الداخلية من خلال تدريب مهني وأكاديمي منظم يتماشى مع احتياجات المشاريع الحقيقية.",
        cta: "عرض برامج التدريب",
        icon: GraduationCap,
      },
    ],
  },
};

export function ServicesSection() {
  const { language } = useLanguage();
  const t = content[language];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(".services-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Services Stagger
      gsap.fromTo(".service-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Bottom CTA
      gsap.fromTo(".services-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-cta",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-gray-50/50 to-transparent -z-10 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="services-header text-center mb-16 opacity-0">
          <div className="accent-line mx-auto mb-8 bg-[#2563eb]" style={{ width: '3rem', height: '1px' }} />
          <span className="block text-xs font-semibold text-[#2563eb]/80 uppercase tracking-[0.2em] mb-4">
            {t.eyebrow}
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-6">
            {t.label}
          </h2>
          <p className="font-body text-lg text-logo-jumbo max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid - 4 Cards */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.services.map((service, index) => (
            <div key={service.id} className="service-card opacity-0">
              <Link
                to={`/services/${service.id}`}
                className="group block h-full bg-white p-8 lg:p-10 rounded-xl border border-gray-200 border-t-2 border-t-transparent shadow-sm cursor-pointer transition-all duration-300 ease-executive hover:shadow-xl hover:border-gray-300 hover:border-t-[#2563eb] hover:-translate-y-1 relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
              >
                <div className="flex flex-col h-full items-start text-left transition-all duration-300 ease-executive">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2563eb]/5 group-hover:scale-105 group-hover:border-[#2563eb]/10 transition-all duration-300 ease-executive">
                    <service.icon
                      className="text-gray-500 group-hover:text-[#2563eb] transition-colors duration-300 ease-executive"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base lg:text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>

                  {/* Challenge Context Line - Reduced prominence */}
                  <p className="font-body text-xs text-muted-foreground/70 font-normal leading-snug mb-4">
                    {service.challenge}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm text-logo-jumbo leading-relaxed mb-6 line-clamp-3 max-w-[95%]">
                    {service.description}
                  </p>

                  {/* Service-Specific CTA */}
                  <div className="mt-auto flex items-center text-sm font-medium text-gray-500 group-hover:text-[#2563eb] transition-colors duration-200 ease-executive">
                    <span className="relative inline-block">
                      {service.cta}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2563eb] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 ease-executive" />
                    </span>
                    <ArrowRight
                      className="ml-2 w-4 h-4 transition-transform duration-200 ease-executive group-hover:translate-x-1 rtl:rotate-180 rtl:mr-2 rtl:ml-0 rtl:group-hover:-translate-x-1"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Section-Level CTA */}
        <div className="services-cta text-center mt-24 pt-12 border-t border-gray-100 opacity-0">
          <p className="font-body text-base text-gray-500 mb-4">
            {t.sectionCta.prompt}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md text-sm font-semibold transition-all duration-300 ease-executive group border border-black/20 bg-white text-slate-900 hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb]"
          >
            <span>{t.sectionCta.button}</span>
            <ArrowRight
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:mr-2 rtl:ml-0 rtl:group-hover:-translate-x-1"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
