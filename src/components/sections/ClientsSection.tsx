import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { academicClients, commercialClients, keyClients, type Client } from "@/data/clients";

const content = {
  en: {
    heading: "Organizations We Support",
    subtitle: "Partnering with leading academic institutions, government entities, and industrial organizations across the GCC.",
    academic: "Academic Partners",
    commercial: "Government & Industrial",
    keyInstitutions: "Key Institutions We Partner With",
    cta: "Interested in exploring how we support organizations like yours?",
    ctaButton: "Talk to Our Team",
    trustBand: "SUPPORTING ACADEMIC, GOVERNMENT & INDUSTRIAL LEADERS ACROSS THE GCC",
  },
  ar: {
    heading: "المؤسسات التي ندعمها",
    subtitle: "شراكة مع المؤسسات الأكاديمية الرائدة والجهات الحكومية والمنظمات الصناعية في دول مجلس التعاون الخليجي.",
    academic: "شركاء أكاديميون",
    commercial: "حكومي وصناعي",
    keyInstitutions: "مؤسسات رئيسية نتشارك معها",
    cta: "مهتم باستكشاف كيف ندعم مؤسسات مثل مؤسستك؟",
    ctaButton: "تحدث إلى فريقنا",
    trustBand: "ندعم قادة القطاعات الأكاديمية والحكومية والصناعية في دول الخليج",
  },
};

interface ClientGridProps {
  clients: Client[];
  isRTL?: boolean;
}

function ClientGrid({ clients, isRTL }: ClientGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards">
      {clients.map((client) => (
        <div
          key={client.id}
          className={cn(
            "group relative flex flex-col items-center justify-center p-4 sm:p-6 text-center",
            "bg-white border border-gray-100 rounded-lg",
            "transition-all duration-300 ease-out",
            "hover:bg-slate-50 hover:border-gray-300 hover:-translate-y-[2px] hover:shadow-sm",
            isRTL
              ? "hover:border-r-2 hover:border-r-gray-400"
              : "hover:border-l-2 hover:border-l-gray-400"
          )}
        >
          {/* Logo Container - Fixed height for CLS stability */}
          <div className="flex items-center justify-center w-full h-16 sm:h-20">
            <img
              src={client.logo}
              alt={client.name}
              width={140}
              height={80}
              loading="lazy"
              decoding="async"
              className="max-h-14 sm:max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Client Name - Visible below logo */}
          <span className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors line-clamp-2 text-center leading-tight">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ClientsSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  return (
    <section id="clients" className="relative pb-16 sm:pb-24 lg:pb-32 bg-[#fafafa] overflow-hidden">

      {/* Trust Transition Band */}
      <div className="w-full border-b border-border/40 bg-white/50 backdrop-blur-sm py-4 sm:py-6 mb-12 sm:mb-16 lg:mb-20">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 sm:gap-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-12 sm:w-16 lg:w-32" />
          <span className="text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-500 text-center">
            {language === 'ar'
              ? "ندعم المؤسسات الأكاديمية والجهات الحكومية وقادة الصناعة عبر دول مجلس التعاون الخليجي"
              : "SUPPORTING ACADEMIC, GOVERNMENT & INDUSTRIAL LEADERS ACROSS THE GCC"
            }
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-12 sm:w-16 lg:w-32" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal className="text-center mb-10 sm:mb-16">
          <div className="accent-line mx-auto mb-6 sm:mb-8" />
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground max-w-2xl mx-auto mb-4 sm:mb-6">
            {t.heading}
          </h2>
          <p className="font-body text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            {t.subtitle}
          </p>
        </ScrollReveal>

        {/* Key Institutions Highlight */}
        <div className="mb-12 sm:mb-20 max-w-5xl mx-auto">
          <div className="text-center mb-4 sm:mb-6">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.keyInstitutions}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {keyClients.map((client) => (
              <div
                key={`key-${client.id}`}
                className="bg-white p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-12 sm:h-16 flex items-center justify-center mb-2 sm:mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={100}
                    height={60}
                    loading="eager"
                    decoding="async"
                    className="max-h-10 sm:max-h-14 w-auto max-w-full object-contain"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase text-primary tracking-wide">{client.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Tabs */}
        <Tabs defaultValue="academic" className="w-full max-w-6xl mx-auto mb-16 sm:mb-24" dir={isRTL ? "rtl" : "ltr"}>
          <div className="flex justify-center mb-8 sm:mb-12">
            <TabsList className="bg-white border border-gray-200 p-1 shadow-sm">
              <TabsTrigger value="academic" className="px-4 sm:px-8 text-xs sm:text-sm data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900">{t.academic}</TabsTrigger>
              <TabsTrigger value="commercial" className="px-4 sm:px-8 text-xs sm:text-sm data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900">{t.commercial}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="academic" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <ClientGrid clients={academicClients} isRTL={isRTL} />
          </TabsContent>

          <TabsContent value="commercial" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <ClientGrid clients={commercialClients} isRTL={isRTL} />
          </TabsContent>
        </Tabs>

        {/* Post-Clients CTA */}
        <ScrollReveal className="text-center max-w-3xl mx-auto pt-8 sm:pt-10 border-t border-gray-200">
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-6 sm:mb-8 px-2">
            {t.cta}
          </h3>
          <a
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 rounded-md",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            )}
          >
            {t.ctaButton}
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
}
