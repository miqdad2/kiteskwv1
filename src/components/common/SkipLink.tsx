import { useLanguage } from "@/contexts/LanguageContext";

export function SkipLink() {
    const { language } = useLanguage();

    const text = language === 'ar' ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content';

    return (
        <a
            href="#main-content"
            className="
        sr-only focus:not-sr-only
        focus:absolute focus:top-4 focus:start-4 focus:z-[100]
        focus:px-4 focus:py-2
        bg-primary text-primary-foreground
        border border-primary-foreground
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground
        font-body text-sm font-medium
      "
        >
            {text}
        </a>
    );
}
