import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";
import kitesLogo from "@/assets/kites-logo.png";

interface CommonContent {
  footer: {
    sections: {
      company: string;
      services: string;
      resources: string;
      contact: string;
    };
    contactLabels: {
      email: string;
      phone: string;
      location: string;
      locationValue: string;
    };
    copyright: string;
    links: {
      expertise: string;
      partners: string;
      contact: string;
      prototypeDevelopment: string;
      consultation: string;
      training: string;
      softwareDistribution: string;
      insights: string;
      events: string;
    };
  };
}

export function Footer() {
  const { language } = useLanguage();
  const common = useContent<CommonContent>('common');

  return (
    <footer className="bg-primary text-primary-foreground/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Column 1 - Company */}
          <div>
            <h4 className="font-heading text-primary-foreground font-semibold text-caption uppercase tracking-widest mb-6">
              {common.footer.sections.company}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/expertise" className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                  {common.footer.links.expertise}
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                  {common.footer.links.partners}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                  {common.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-heading text-primary-foreground font-semibold text-caption uppercase tracking-widest mb-6">
              {common.footer.sections.services}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/prototype-development" className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                  {common.footer.links.prototypeDevelopment}
                </Link>
              </li>
              <li>
                <Link to="/services/consultation" className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                  {common.footer.links.consultation}
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                  {common.footer.links.training}
                </Link>
              </li>
              <li>
                <Link to="/services/software-distribution" className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                  {common.footer.links.softwareDistribution}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="font-heading text-primary-foreground font-semibold text-caption uppercase tracking-widest mb-6">
              {common.footer.sections.resources}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/insights" className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                  {common.footer.links.insights}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-body-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                  {common.footer.links.events}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-heading text-primary-foreground font-semibold text-caption uppercase tracking-widest mb-6">
              {common.footer.sections.contact}
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary-foreground/40 shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="block text-caption text-primary-foreground/30 font-body mb-0.5">
                    {common.footer.contactLabels.email}
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
                    {common.footer.contactLabels.phone}
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
                    {common.footer.contactLabels.location}
                  </span>
                  <span className="text-body-sm font-body text-primary-foreground/60">
                    {common.footer.contactLabels.locationValue}
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
              {common.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
