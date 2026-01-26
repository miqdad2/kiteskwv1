import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Zap, Factory, HardHat, Building2, Beaker, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { partners, Partner } from '@/data/partners';
import { cn } from '@/lib/utils';

interface PartnersMegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

// Partner Categories
type Category = 'engineering' | 'sustainability' | 'research' | 'manufacturing';

const CATEGORIES: { id: Category; labelEn: string; labelAr: string; icon: any }[] = [
    { id: 'engineering', labelEn: 'Engineering Software', labelAr: 'برمجيات هندسية', icon: Zap },
    { id: 'sustainability', labelEn: 'Sustainability Solutions', labelAr: 'حلول الاستدامة', icon: ShieldCheck },
    { id: 'research', labelEn: 'Research & Analytics', labelAr: 'البحث والتحليلات', icon: Beaker },
    { id: 'manufacturing', labelEn: 'Advanced Manufacturing', labelAr: 'التصنيع المتقدم', icon: Factory },
];

export function PartnersMegaMenu({ isOpen, onClose }: PartnersMegaMenuProps) {
    const { language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<Category>('engineering');

    if (!isOpen) return null;

    // Filter partners by active category
    const activePartners = partners.filter(p => p.category === activeCategory);

    return (
        <div
            className="absolute top-full inset-x-0 bg-white shadow-lg border-t border-gray-100 py-6 z-50 animate-in fade-in slide-in-from-top-1 duration-100 ease-out"
            onMouseLeave={onClose}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-12 gap-6 lg:gap-8">

                    {/* Left Column: Categories List - Made narrower (col-span-3) */}
                    <div className="col-span-3 flex flex-col space-y-0.5">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                className={cn(
                                    "group flex items-center justify-between px-3 py-2.5 text-sm font-medium transition-colors duration-0 w-full text-left rounded-sm", // Compact padding, medium font
                                    activeCategory === cat.id
                                        ? "bg-[#0B0F14] text-white border-l-2 border-logo-alto font-bold"
                                        : "text-slate-600 hover:bg-gray-50 hover:text-slate-900 hover:scale-[1.01]"
                                )}
                                onMouseEnter={() => setActiveCategory(cat.id)}
                            >
                                <div className="flex items-center gap-2.5">
                                    <cat.icon
                                        size={16} // Smaller icon
                                        className={cn(
                                            activeCategory === cat.id ? "text-white" : "text-slate-400 group-hover:text-slate-700"
                                        )}
                                        strokeWidth={1.5}
                                    />
                                    <span className="tracking-normal">
                                        {language === 'ar' ? cat.labelAr : cat.labelEn}
                                    </span>
                                </div>
                                {activeCategory === cat.id && (
                                    <ChevronRight size={14} className="text-white" />
                                )}
                            </button>
                        ))}

                        <Link
                            to="/partners"
                            onClick={onClose}
                            className="mt-4 px-3 text-xs font-semibold text-logo-codgray hover:text-black transition-colors flex items-center"
                        >
                            {language === 'ar' ? "عرض جميع الشركاء" : "View all partners"}
                            <ArrowRight size={14} className={cn("ml-1.5 transition-transform duration-200", language === 'ar' ? "rotate-180 mr-1.5 ml-0" : "")} />
                        </Link>
                    </div>

                    {/* Right Column: Logo Grid Context Panel - Made wider (col-span-9) */}
                    <div className="col-span-9 bg-gray-50/30 rounded-sm p-5 border border-gray-100 min-h-[240px]">
                        <div className="flex flex-col h-full">
                            <h3 className="font-heading text-sm font-bold text-slate-800 mb-4 tracking-wide uppercase opacity-90">
                                {language === 'ar' ? "الشركاء المعتمدون" : "Authorized Partners"}
                            </h3>

                            {/* Denser Grid: 5 columns, tighter gap */}
                            <div className="grid grid-cols-5 gap-3 animate-in fade-in duration-200" key={activeCategory}>
                                {activePartners.map((partner) => (
                                    <div key={partner.id} className="group relative bg-white p-3 rounded-sm border border-gray-200/80 hover:border-gray-300 hover:scale-[1.02] transition-all duration-150 flex items-center justify-center aspect-[4/3]">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-[85%] max-h-[85%] object-contain transition-all duration-200"
                                        />
                                    </div>
                                ))}
                                {activePartners.length === 0 && (
                                    <div className="col-span-5 text-center py-8 text-slate-400 text-xs">
                                        {language === 'ar' ? "لا يوجد شركاء في هذه الفئة حاليا" : "No partners displayed in this category."}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
