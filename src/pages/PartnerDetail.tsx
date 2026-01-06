import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";
import { SEO } from "@/components/common/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { getPartnerById } from "@/data/partners";

interface PartnerContent {
  name: string;
  about: string;
  solutions: string[];
  support: string;
  ctaDescription: string;
}

interface PartnerDetailsContent {
  pageLabels: {
    backToPartners: string;
    partnerNotFound: string;
    aboutTitle: string;
    solutionsTitle: string;
    supportTitle: string;
    ctaTitle: string;
    ctaContact: string;
    ctaQuote: string;
  };
  partners: Record<string, PartnerContent>;
}

export default function PartnerDetail() {
  const { partnerId } = useParams<{ partnerId: string }>();
  const { language } = useLanguage();
  const allContent = useContent<PartnerDetailsContent>('partner-details');

  const partner = partnerId ? getPartnerById(partnerId) : null;
  const partnerContent = partnerId && allContent.partners ? allContent.partners[partnerId] : null;

  // Partner not found in data
  if (!partner) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-2xl text-foreground mb-4">
              {allContent.pageLabels?.partnerNotFound || (language === "en" ? "Partner not found" : "الشريك غير موجود")}
            </h1>
            <Link to="/partners">
              <Button variant="outline">
                <ArrowLeft size={16} strokeWidth={1.5} className="me-2 rtl:rotate-180" />
                {allContent.pageLabels?.backToPartners || (language === "en" ? "Back to Partners" : "العودة إلى الشركاء")}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Partner exists but content missing - show fallback
  if (!partnerContent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-2xl text-foreground mb-4">
              {partner.name}
            </h1>
            <p className="text-muted-foreground mb-6">
              {language === "en"
                ? "Content for this partner is being updated. Please check back soon."
                : "يتم تحديث محتوى هذا الشريك. يرجى التحقق مرة أخرى قريباً."}
            </p>
            <Link to="/partners">
              <Button variant="outline">
                <ArrowLeft size={16} strokeWidth={1.5} className="me-2 rtl:rotate-180" />
                {allContent.pageLabels?.backToPartners || (language === "en" ? "Back to Partners" : "العودة إلى الشركاء")}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEO page="partners" partnerId={partnerId} />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Partner Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={16} strokeWidth={1.5} className="rtl:rotate-180" />
              {allContent.pageLabels.backToPartners}
            </Link>

            <div className="max-w-4xl">
              {/* Partner Logo Placeholder */}
              <div className="w-28 h-28 lg:w-36 lg:h-36 border border-border bg-background flex items-center justify-center mb-8">
                <span className="font-heading text-4xl lg:text-5xl font-bold text-muted-foreground/50">
                  {partner.abbr}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                {partnerContent.name}
              </h1>
            </div>
          </div>
        </section>

        {/* About the Partner */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6 tracking-tight">
                {allContent.pageLabels.aboutTitle} {partnerContent.name}
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {partnerContent.about}
              </p>
            </div>
          </div>
        </section>

        {/* Solutions & Applications */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-8 tracking-tight">
                {allContent.pageLabels.solutionsTitle}
              </h2>
              <ul className="space-y-4">
                {partnerContent.solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 font-body text-lg text-muted-foreground"
                  >
                    <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* KITES Support */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6 tracking-tight">
                {allContent.pageLabels.supportTitle}
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {partnerContent.support}
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-primary-foreground mb-4 tracking-tight">
                {allContent.pageLabels.ctaTitle}
              </h2>
              <p className="font-body text-lg text-primary-foreground/70 mb-8">
                {partnerContent.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="heroOutline" size="lg" className="w-full sm:w-auto group">
                    {allContent.pageLabels.ctaContact}
                    <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 group"
                  >
                    {allContent.pageLabels.ctaQuote}
                    <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}