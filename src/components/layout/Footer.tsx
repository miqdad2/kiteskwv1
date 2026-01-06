import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import kitesLogo from "@/assets/kites-logo.png";

const footerContent = {
  en: {
    company: {
      title: "Company",
      links: [
        { label: "Expertise", href: "/expertise", isRoute: true },
        { label: "Partners", href: "/partners", isRoute: true },
        { label: "Contact", href: "/contact", isRoute: true },
      ],
    },
    services: {
      title: "Services",
      links: [
        { label: "Prototype Development", href: "/services/prototype-development", isRoute: true },
        { label: "Consultation", href: "/services/consultation", isRoute: true },
        { label: "Training", href: "/services/training", isRoute: true },
        { label: "Software Distribution", href: "/services/software-distribution", isRoute: true },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Insights", href: "/insights", isRoute: true },
        { label: "Events", href: "/events", isRoute: true },
      ],
    },
    contact: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Hawally, Kuwait",
    },
    copyright: "© Kuwait Institute for Training & Engineering Simulations (KITES)",
  },
  ar: {
    company: {
      title: "الشركة",
      links: [
        { label: "الخبرات", href: "/expertise", isRoute: true },
        { label: "الشركاء", href: "/partners", isRoute: true },
        { label: "تواصل معنا", href: "/contact", isRoute: true },
      ],
    },
    services: {
      title: "الخدمات",
      links: [
        { label: "تطوير النماذج الأولية", href: "/services/prototype-development", isRoute: true },
        { label: "الاستشارات", href: "/services/consultation", isRoute: true },
        { label: "التدريب", href: "/services/training", isRoute: true },
        { label: "توزيع البرمجيات", href: "/services/software-distribution", isRoute: true },
      ],
    },
    resources: {
      title: "الموارد",
      links: [
        { label: "الرؤى", href: "/insights", isRoute: true },
        { label: "الفعاليات", href: "/events", isRoute: true },
      ],
    },
    contact: {
      title: "تواصل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      locationValue: "حولي، الكويت",
    },
    copyright: "© معهد الكويت للتدريب والمحاكاة الهندسية (KITES)",
  },
};

export function Footer() {
  const { language } = useLanguage();
  const content = footerContent[language];

  return (
    <footer className="bg-primary text-primary-foreground/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Column 1 - Company */}
          <div>
            <h4 className="font-heading text-primary-foreground font-semibold text-caption uppercase tracking-widest mb-6">
              {content.company.title}
            </h4>
            <ul className="space-y-3">
              {content.company.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-heading text-primary-foreground font-semibold text-caption uppercase tracking-widest mb-6">
              {content.services.title}
            </h4>
            <ul className="space-y-3">
              {content.services.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="font-heading text-primary-foreground font-semibold text-caption uppercase tracking-widest mb-6">
              {content.resources.title}
            </h4>
            <ul className="space-y-3">
              {content.resources.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-heading text-primary-foreground font-semibold text-caption uppercase tracking-widest mb-6">
              {content.contact.title}
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary-foreground/40 shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="block text-caption text-primary-foreground/30 font-body mb-0.5">
                    {content.contact.email}
                  </span>
                  <a
                    href="mailto:info@kites-kw.com"
                    className="text-body-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    info@kites-kw.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary-foreground/40 shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="block text-caption text-primary-foreground/30 font-body mb-0.5">
                    {content.contact.phone}
                  </span>
                  <a
                    href="tel:+96522092260"
                    className="text-body-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                    dir="ltr"
                  >
                    +965 22092260
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-foreground/40 shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="block text-caption text-primary-foreground/30 font-body mb-0.5">
                    {content.contact.location}
                  </span>
                  <span className="text-body-sm font-body text-primary-foreground/60">
                    {content.contact.locationValue}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={kitesLogo} 
                alt="KITES" 
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* Copyright */}
            <p className="text-caption font-body text-primary-foreground/30 text-center sm:text-end">
              {content.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
