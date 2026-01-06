import { SEO } from "@/components/common/SEO";
import { SkipLink } from "@/components/common/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <SEO page="home" />
      <SkipLink />
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Who We Are */}
          <WhoWeAreSection />

          {/* 3. Services Overview */}
          <ServicesSection />

          {/* 4. Partners Preview */}
          <PartnersSection />

          {/* 5. Clients Preview */}
          <ClientsSection />

          {/* 6. Call To Action */}
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
