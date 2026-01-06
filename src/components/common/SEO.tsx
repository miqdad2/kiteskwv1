import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { defaultSEO, seoConfig, serviceMetadata, partnerMetadata, type PageSEO } from '@/config/seo.config';

interface SEOProps {
    page: keyof typeof seoConfig;
    customMeta?: Partial<PageSEO>;
    serviceId?: string;
    partnerId?: string;
}

export function SEO({ page, customMeta, serviceId, partnerId }: SEOProps) {
    const { language } = useLanguage();

    // Get base page SEO
    let pageSEO = seoConfig[page]?.[language];

    // Override with service-specific metadata if serviceId provided
    if (serviceId && serviceMetadata[serviceId]) {
        pageSEO = serviceMetadata[serviceId][language];
    }

    // Override with partner-specific metadata if partnerId provided
    if (partnerId && partnerMetadata[partnerId]) {
        pageSEO = partnerMetadata[partnerId][language];
    }

    if (!pageSEO) {
        console.warn(`SEO config missing for page: ${page}, language: ${language}`);
        return null;
    }

    // Merge custom meta overrides
    const meta = { ...pageSEO, ...customMeta };

    // Build full title
    const fullTitle = meta.title
        ? `${meta.title} | ${defaultSEO.siteName}`
        : defaultSEO.defaultTitle;

    // Use custom OG values or fall back to regular title/description
    const ogTitle = meta.ogTitle || meta.title;
    const ogDescription = meta.ogDescription || meta.description;
    const ogImage = meta.ogImage || defaultSEO.ogImage;

    return (
        <Helmet>
            {/* Set html lang and dir attributes */}
            <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />

            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={meta.description} />
            {meta.keywords && meta.keywords.length > 0 && (
                <meta name="keywords" content={meta.keywords.join(', ')} />
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={defaultSEO.siteUrl} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={defaultSEO.siteName} />
            <meta property="og:locale" content={language === 'ar' ? 'ar_KW' : 'en_US'} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={defaultSEO.siteUrl} />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description" content={ogDescription} />
            <meta name="twitter:image" content={ogImage} />
            {defaultSEO.twitterHandle && (
                <meta name="twitter:site" content={defaultSEO.twitterHandle} />
            )}
        </Helmet>
    );
}
