import { SEO } from "@/components/common/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { events, type Event, type EventType } from "@/data/events";

interface EventsContent {
  pageTitle: string;
  intro: string;
  learnMore: string;
  upcomingHeading: string;
  pastHeading: string;
  eventTypes: Record<EventType, string>;
}

export default function Events() {
  const { language } = useLanguage();
  const t = useContent<EventsContent>('events');

  const upcomingEvents = events.filter((e) => e.upcoming);
  const pastEvents = events.filter((e) => !e.upcoming);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat(language === "ar" ? "ar-KW" : "en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const EventCard = ({ event }: { event: Event }) => (
    <div className="group card-interactive p-6">
      <div className="flex items-start justify-between gap-4 mb-5">
        {/* Date Block */}
        <div className="flex-shrink-0 w-14 h-14 bg-primary flex flex-col items-center justify-center text-center">
          <span className="text-primary-foreground font-heading text-lg font-bold leading-none">
            {new Date(event.date).getDate()}
          </span>
          <span className="text-primary-foreground/60 text-xs uppercase mt-0.5">
            {new Intl.DateTimeFormat(language === "ar" ? "ar-KW" : "en-US", {
              month: "short",
            }).format(new Date(event.date))}
          </span>
        </div>
        {/* Type Badge */}
        <span className="badge-category">
          {t.eventTypes[event.type]}
        </span>
      </div>

      <h3 className="font-heading text-h4 font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
        {event.title[language]}
      </h3>

      <div className="flex items-center gap-2 text-muted-foreground text-body-sm mb-5">
        <MapPin size={14} strokeWidth={1.5} />
        <span>{event.location[language]}</span>
      </div>

      <div className="flex items-center justify-between pt-5 border-t border-border">
        <div className="flex items-center gap-2 text-muted-foreground text-body-sm">
          <Calendar size={14} strokeWidth={1.5} />
          <span>{formatDate(event.date)}</span>
        </div>
        <Button variant="ghost" size="sm" className="p-0 h-auto text-foreground hover:text-accent group/btn">
          {t.learnMore}
          <ArrowRight
            size={14}
            className="ms-1 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 rtl:rotate-180"
          />
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <SEO page="events" />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="page-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="accent-line-light mx-auto mb-10" />
              <h1 className="font-heading text-h1 sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
                {t.pageTitle}
              </h1>
              <p className="font-body text-body-lg text-primary-foreground/60 leading-relaxed">
                {t.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="accent-line-sm" />
              <h2 className="font-heading text-h3 sm:text-h2 font-semibold text-foreground">
                {t.upcomingHeading}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 lg:py-28 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="accent-line-sm" />
              <h2 className="font-heading text-h3 sm:text-h2 font-semibold text-foreground">
                {t.pastHeading}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
