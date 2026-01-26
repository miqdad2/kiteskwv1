import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, MessageSquare, Package, Boxes, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { servicesDetailData } from '@/data/serviceDetailData';
import { cn } from '@/lib/utils';

interface ServicesMegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

// Map service IDs to the order requested
const SERVICE_ORDER = [
    'consultation',
    'software-distribution',
    'prototype-development',
    'training'
];

export function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
    const { language } = useLanguage();
    const [activeServiceId, setActiveServiceId] = useState<string>('consultation');

    if (!isOpen) return null;

    // Get current content based on language
    const getContent = (id: string) => {
        const service = servicesDetailData[id];
        // Fallback for software-distribution if not in detail data yet, define basic info or skip
        // Assuming detail data exists for all, if not we handle gracefully
        // strictly structured access
        return service ? service[language] : null;
    };

    const activeContent = getContent(activeServiceId);

    return (
        <div
            className="absolute top-full inset-x-0 bg-white shadow-xl border-t border-gray-100 py-8 z-50 animate-in fade-in slide-in-from-top-2 duration-100 ease-out"
            onMouseLeave={onClose}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column: Navigation List */}
                    <div className="col-span-4 flex flex-col space-y-1">
                        {SERVICE_ORDER.map((id) => {
                            const service = servicesDetailData[id];
                            // If service data is missing in the large file, we might skip or show placeholder. 
                            // We'll rely on the keys being present.
                            if (!service) return null;

                            const content = service[language];
                            const isActive = activeServiceId === id;

                            return (
                                <Link
                                    key={id}
                                    to={`/services/${id}`}
                                    className={cn(
                                        "group flex items-center justify-between px-4 py-3 text-sm font-semibold transition-all duration-200",
                                        isActive
                                            ? "bg-logo-codgray text-white shadow-sm"
                                            : "text-logo-gunsmoke hover:bg-gray-50 hover:text-logo-codgray"
                                    )}
                                    onMouseEnter={() => setActiveServiceId(id)}
                                    onClick={onClose}
                                >
                                    <div className="flex items-center gap-3">
                                        <service.icon
                                            size={18}
                                            className={cn(
                                                isActive ? "text-white" : "text-logo-gunsmoke group-hover:text-logo-codgray"
                                            )}
                                            strokeWidth={1.5}
                                        />
                                        <span className="tracking-wide">
                                            {/* Use title from data or mapped short titles if needed */}
                                            {id === 'consultation' ? (language === 'ar' ? "الاستشارات الهندسية" : "Engineering & Sustainability") : content.head.title}
                                        </span>
                                    </div>
                                    {isActive && (
                                        <ChevronRight size={16} className="text-white" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Column: Context Panel */}
                    <div className="col-span-8 bg-gray-50/50 rounded-sm p-8 border border-gray-100">
                        {activeContent ? (
                            <div className="h-full flex flex-col items-start justify-center animate-in fade-in duration-200 key={activeServiceId}">
                                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 tracking-tight">
                                    {activeContent.head.title}
                                </h3>
                                <p className="font-body text-base text-slate-500 leading-relaxed max-w-2xl mb-6">
                                    {activeContent.head.subtitle}
                                </p>

                                {/* Optional: Deliverables/Capabilities List if available to add density */}
                                {activeContent.overview && (
                                    <p className="text-sm text-slate-400 max-w-xl mb-8 line-clamp-2">
                                        {activeContent.overview.content}
                                    </p>
                                )}

                                <Link
                                    to={`/services/${activeServiceId}`}
                                    onClick={onClose}
                                    className="mt-auto inline-flex items-center text-sm font-medium text-logo-codgray border-b border-logo-alto pb-0.5 transition-colors"
                                >
                                    <span>
                                        {language === 'ar' ? "استكشف تفاصيل الخدمة" : "Explore service details"}
                                    </span>
                                    <ArrowRight size={16} className={cn("ml-2 transition-transform duration-200", language === 'ar' ? "rotate-180 mr-2 ml-0" : "")} />
                                </Link>
                            </div>
                        ) : (
                            <div className="h-full flex items-center justify-center text-slate-300">
                                Select a service
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
