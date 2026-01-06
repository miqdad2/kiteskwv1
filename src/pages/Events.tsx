import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const content = {
  en: {
    title: "Events",
    intro: "Stay updated with our workshops, webinars, and training events.",
    learnMore: "Learn More",
    upcoming: "Upcoming Events",
    past: "Past Events",
    types: {
      workshop: "Workshop",
      webinar: "Webinar",
      training: "Training",
      conference: "Conference",
    },
  },
  ar: {
    title: "الفعاليات",
    intro: "تابع أحدث ورش العمل والندوات وبرامج التدريب.",
    learnMore: "المزيد",
    upcoming: "الفعاليات القادمة",
    past: "الفعاليات السابقة",
    types: {
      workshop: "ورشة عمل",
      webinar: "ندوة إلكترونية",
      training: "تدريب",
      conference: "مؤتمر",
    },
  },
};

const events = [
  {
    id: 1,
    type: "workshop" as const,
    date: "2024-02-15",
    titleEn: "Introduction to CFD with Ansys Fluent",
    titleAr: "مقدمة في ديناميكا الموائع الحسابية باستخدام Ansys Fluent",
    locationEn: "Kuwait City",
    locationAr: "مدينة الكويت",
    upcoming: true,
  },
  {
    id: 2,
    type: "webinar" as const,
    date: "2024-02-20",
    titleEn: "Digital Twin Technology in Oil & Gas",
    titleAr: "تقنية التوائم الرقمية في قطاع النفط والغاز",
    locationEn: "Online",
    locationAr: "عبر الإنترنت",
    upcoming: true,
  },
  {
    id: 3,
    type: "training" as const,
    date: "2024-03-05",
    titleEn: "Advanced Structural Analysis Certification",
    titleAr: "شهادة التحليل الهيكلي المتقدم",
    locationEn: "Kuwait City",
    locationAr: "مدينة الكويت",
    upcoming: true,
  },
  {
    id: 4,
    type: "conference" as const,
    date: "2024-04-10",
    titleEn: "MENA Simulation Summit 2024",
    titleAr: "قمة المحاكاة في الشرق الأوسط وشمال أفريقيا 2024",
    locationEn: "Dubai, UAE",
    locationAr: "دبي، الإمارات",
    upcoming: true,
  },
  {
    id: 5,
    type: "workshop" as const,
    date: "2023-12-10",
    titleEn: "FEA Best Practices Workshop",
    titleAr: "ورشة عمل أفضل ممارسات التحليل بالعناصر المحدودة",
    locationEn: "Kuwait City",
    locationAr: "مدينة الكويت",
    upcoming: false,
  },
  {
    id: 6,
    type: "webinar" as const,
    date: "2023-11-25",
    titleEn: "Sustainable Design with Simulation",
    titleAr: "التصميم المستدام باستخدام المحاكاة",
    locationEn: "Online",
    locationAr: "عبر الإنترنت",
    upcoming: false,
  },
];

export default function Events() {
  const { language } = useLanguage();
  const t = content[language];

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

  const EventCard = ({ event }: { event: (typeof events)[0] }) => (
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
          {t.types[event.type]}
        </span>
      </div>

      <h3 className="font-heading text-h4 font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
        {language === "en" ? event.titleEn : event.titleAr}
      </h3>

      <div className="flex items-center gap-2 text-muted-foreground text-body-sm mb-5">
        <MapPin size={14} strokeWidth={1.5} />
        <span>{language === "en" ? event.locationEn : event.locationAr}</span>
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="accent-line-light mx-auto mb-10" />
            <h1 className="font-heading text-h1 sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
              {t.title}
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
              {t.upcoming}
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
              {t.past}
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
  );
}
