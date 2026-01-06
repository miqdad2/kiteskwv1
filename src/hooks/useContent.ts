import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Hook to load localized content from JSON files
 * @param namespace - Content namespace (e.g., 'services', 'common', 'contact')
 * @returns Typed content object for the current language
 */
export function useContent<T>(namespace: string): T {
    const { language } = useLanguage();

    try {
        // Use Vite's glob import to load all content files
        const contentFiles = import.meta.glob('/src/content/**/*.json', { eager: true });

        // Construct the path to the content file
        const path = `/src/content/${language}/${namespace}.json`;

        // Get the content from the loaded files
        const content = contentFiles[path] as { default: T };

        if (!content) {
            throw new Error(`Content file not found: ${path}`);
        }

        return content.default;
    } catch (error) {
        console.error(`Failed to load content: ${namespace} (${language})`, error);
        // Return empty object as fallback to prevent crashes
        return {} as T;
    }
}
