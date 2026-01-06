/**
 * Partner data organized by category
 * This file contains the structural data for all partners.
 * Display names are language-specific and come from content files.
 */

export interface Partner {
    id: string;
    name: string;
    abbr: string;
    category: 'engineering' | 'sustainability' | 'research';
}

export const partners: Partner[] = [
    // Engineering & Simulation Software
    { id: "siemens", name: "Siemens", abbr: "Si", category: "engineering" },
    { id: "autodesk", name: "Autodesk", abbr: "Ad", category: "engineering" },
    { id: "ansys", name: "ANSYS", abbr: "An", category: "engineering" },
    { id: "dassault", name: "Dassault Systèmes", abbr: "DS", category: "engineering" },
    { id: "ptc", name: "PTC", abbr: "PTC", category: "engineering" },
    { id: "hexagon", name: "Hexagon", abbr: "Hx", category: "engineering" },

    // Sustainability & Environmental Solutions
    { id: "schneider", name: "Schneider Electric", abbr: "SE", category: "sustainability" },
    { id: "envizi", name: "Envizi", abbr: "Ev", category: "sustainability" },
    { id: "sphera", name: "Sphera", abbr: "Sp", category: "sustainability" },

    // Research & Analytics Software
    { id: "matlab", name: "MathWorks", abbr: "MW", category: "research" },
    { id: "tableau", name: "Tableau", abbr: "Tb", category: "research" },
    { id: "esri", name: "Esri", abbr: "Es", category: "research" },
    { id: "alteryx", name: "Alteryx", abbr: "Ax", category: "research" },
];

/**
 * Get partners by category
 */
export function getPartnersByCategory(category: Partner['category']): Partner[] {
    return partners.filter(p => p.category === category);
}

/**
 * Get partner by ID
 */
export function getPartnerById(id: string): Partner | undefined {
    return partners.find(p => p.id === id);
}
