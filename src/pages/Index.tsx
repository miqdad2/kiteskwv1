import { SEO } from "@/components/common/SEO";
import { SkipLink } from "@/components/common/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
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
          {/* 1. Hero Section - Lead with value proposition */}
          <Hero />

          {/* 2. Organizations We Support - Establish institutional credibility */}
          <ClientsSection />

          {/* 3. Our Services - Demonstrate capability */}
          <ServicesSection />

          {/* 4. Technology Partners - Tools support outcomes */}
          <PartnersSection />

          {/* 5. Who We Are - Contextual depth (includes Key Pillars) */}
          <WhoWeAreSection />

          {/* 6. Final CTA */}
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
