/**
 * Event data for the Events page
 */

export type EventType = 'workshop' | 'webinar' | 'training' | 'conference';

export interface Event {
    id: number;
    slug: string;
    type: EventType;
    date: string; // ISO format (YYYY-MM-DD)
    title: {
        en: string;
        ar: string;
    };
    location: {
        en: string;
        ar: string;
    };
    upcoming: boolean;
}

export const events: Event[] = [
    {
        id: 1,
        slug: "intro-cfd-ansys-fluent",
        type: "workshop",
        date: "2024-02-15",
        title: {
            en: "Introduction to CFD with Ansys Fluent",
            ar: "مقدمة في ديناميكا الموائع الحسابية باستخدام Ansys Fluent"
        },
        location: {
            en: "Kuwait City",
            ar: "مدينة الكويت"
        },
        upcoming: true
    },
    {
        id: 2,
        slug: "digital-twin-oil-gas-webinar",
        type: "webinar",
        date: "2024-02-20",
        title: {
            en: "Digital Twin Technology in Oil & Gas",
            ar: "تقنية التوائم الرقمية في قطاع النفط والغاز"
        },
        location: {
            en: "Online",
            ar: "عبر الإنترنت"
        },
        upcoming: true
    },
    {
        id: 3,
        slug: "advanced-structural-analysis-cert",
        type: "training",
        date: "2024-03-05",
        title: {
            en: "Advanced Structural Analysis Certification",
            ar: "شهادة التحليل الهيكلي المتقدم"
        },
        location: {
            en: "Kuwait City",
            ar: "مدينة الكويت"
        },
        upcoming: true
    },
    {
        id: 4,
        slug: "mena-simulation-summit-2024",
        type: "conference",
        date: "2024-04-10",
        title: {
            en: "MENA Simulation Summit 2024",
            ar: "قمة المحاكاة في الشرق الأوسط وشمال أفريقيا 2024"
        },
        location: {
            en: "Dubai, UAE",
            ar: "دبي، الإمارات"
        },
        upcoming: true
    },
    {
        id: 5,
        slug: "fea-best-practices-workshop",
        type: "workshop",
        date: "2023-12-10",
        title: {
            en: "FEA Best Practices Workshop",
            ar: "ورشة عمل أفضل ممارسات التحليل بالعناصر المحدودة"
        },
        location: {
            en: "Kuwait City",
            ar: "مدينة الكويت"
        },
        upcoming: false
    },
    {
        id: 6,
        slug: "sustainable-design-simulation-webinar",
        type: "webinar",
        date: "2023-11-25",
        title: {
            en: "Sustainable Design with Simulation",
            ar: "التصميم المستدام باستخدام المحاكاة"
        },
        location: {
            en: "Online",
            ar: "عبر الإنترنت"
        },
        upcoming: false
    }
];

/**
 * Get upcoming events
 */
export function getUpcomingEvents(): Event[] {
    return events.filter(e => e.upcoming);
}

/**
 * Get past events
 */
export function getPastEvents(): Event[] {
    return events.filter(e => !e.upcoming);
}

/**
 * Get events by type
 */
export function getEventsByType(type: EventType): Event[] {
    return events.filter(e => e.type === type);
}

/**
 * Get event by ID
 */
export function getEventById(id: number): Event | undefined {
    return events.find(e => e.id === id);
}

/**
 * Get event by slug
 */
export function getEventBySlug(slug: string): Event | undefined {
    return events.find(e => e.slug === slug);
}
