/**
 * Article data for the Insights/Blog page
 * Category indices: 0=Simulation, 1=Training, 2=Sustainability, 3=Software, 4=Industry, 5=Events
 */

export interface Article {
    id: number;
    slug: string;
    categoryIndex: number;
    date: string;
    title: {
        en: string;
        ar: string;
    };
    excerpt: {
        en: string;
        ar: string;
    };
    readTime?: string; // Optional: e.g., "5 min read"
}

export const articles: Article[] = [
    {
        id: 1,
        slug: "future-cfd-renewable-energy",
        categoryIndex: 0,
        date: "2024-01-15",
        title: {
            en: "The Future of CFD in Renewable Energy",
            ar: "مستقبل ديناميكا الموائع الحسابية في الطاقة المتجددة"
        },
        excerpt: {
            en: "Exploring how computational fluid dynamics is revolutionizing wind and solar energy optimization.",
            ar: "استكشاف كيف تُحدث ديناميكا الموائع الحسابية ثورة في تحسين طاقة الرياح والطاقة الشمسية."
        }
    },
    {
        id: 2,
        slug: "simulation-ready-workforce",
        categoryIndex: 1,
        date: "2024-01-10",
        title: {
            en: "Building a Simulation-Ready Workforce",
            ar: "بناء قوى عاملة جاهزة للمحاكاة"
        },
        excerpt: {
            en: "Key strategies for training engineers in advanced simulation techniques.",
            ar: "استراتيجيات رئيسية لتدريب المهندسين على تقنيات المحاكاة المتقدمة."
        }
    },
    {
        id: 3,
        slug: "sustainable-design-simulation",
        categoryIndex: 2,
        date: "2024-01-05",
        title: {
            en: "Sustainable Design Through Simulation",
            ar: "التصميم المستدام من خلال المحاكاة"
        },
        excerpt: {
            en: "How simulation tools are enabling greener product development.",
            ar: "كيف تُمكّن أدوات المحاكاة من تطوير منتجات أكثر استدامة."
        }
    },
    {
        id: 4,
        slug: "ansys-2024-r1-whats-new",
        categoryIndex: 3,
        date: "2023-12-20",
        title: {
            en: "Ansys 2024 R1: What's New",
            ar: "Ansys 2024 R1: ما الجديد"
        },
        excerpt: {
            en: "A comprehensive overview of the latest features in Ansys simulation software.",
            ar: "نظرة شاملة على أحدث الميزات في برنامج المحاكاة Ansys."
        }
    },
    {
        id: 5,
        slug: "digital-twins-oil-gas",
        categoryIndex: 4,
        date: "2023-12-15",
        title: {
            en: "Digital Twins in Oil & Gas",
            ar: "التوائم الرقمية في النفط والغاز"
        },
        excerpt: {
            en: "Industry applications of digital twin technology in the energy sector.",
            ar: "تطبيقات صناعية لتقنية التوائم الرقمية في قطاع الطاقة."
        }
    },
    {
        id: 6,
        slug: "mena-simulation-summit-2024",
        categoryIndex: 5,
        date: "2023-12-01",
        title: {
            en: "Upcoming: MENA Simulation Summit 2024",
            ar: "قريباً: قمة المحاكاة في منطقة الشرق الأوسط وشمال أفريقيا 2024"
        },
        excerpt: {
            en: "Join us at the region's premier simulation and engineering conference.",
            ar: "انضم إلينا في أبرز مؤتمر للمحاكاة والهندسة في المنطقة."
        }
    }
];

/**
 * Get articles by category index
 */
export function getArticlesByCategory(categoryIndex: number): Article[] {
    return articles.filter(a => a.categoryIndex === categoryIndex);
}

/**
 * Get article by ID
 */
export function getArticleById(id: number): Article | undefined {
    return articles.find(a => a.id === id);
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find(a => a.slug === slug);
}
