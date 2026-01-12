/**
 * Client Data - Academic and Commercial Organizations
 * Logos are located in /public/clients/academic and /public/clients/commercial
 */

export type ClientCategory = "Academic" | "Government" | "Industrial";

export interface Client {
    id: string;
    name: string;
    logo: string;
    category: ClientCategory;
}

/**
 * Academic Clients - Universities and Research Institutions
 */
export const academicClients: Client[] = [
    {
        id: "kuwait-university",
        name: "Kuwait University",
        logo: "/clients/academic/kuwait-university.svg",
        category: "Academic",
    },
    {
        id: "uae-university",
        name: "United Arab Emirates University",
        logo: "/clients/academic/united-arab-emirates-university.svg",
        category: "Academic",
    },
    {
        id: "aus",
        name: "American University of Sharjah",
        logo: "/clients/academic/american-university-sharjah.svg",
        category: "Academic",
    },
    {
        id: "uowd",
        name: "University of Wollongong in Dubai",
        logo: "/clients/academic/university-wollongong-dubai.svg",
        category: "Academic",
    },
    {
        id: "pnu",
        name: "Princess Nourah Bint Abdulrahman University",
        logo: "/clients/academic/princess-nourah-bint-abdulrahman-university.svg",
        category: "Academic",
    },
    {
        id: "aiu",
        name: "American International University",
        logo: "/clients/academic/american-international-university.svg",
        category: "Academic",
    },
    {
        id: "tamu",
        name: "Texas A&M University",
        logo: "/clients/academic/texas-am-university.svg",
        category: "Academic",
    },
    {
        id: "khalifa-university",
        name: "Khalifa University",
        logo: "/clients/academic/khalifa-university.svg",
        category: "Academic",
    },
    {
        id: "bits-pilani",
        name: "BITS Pilani – Dubai Campus",
        logo: "/clients/academic/bits-pilani-dubai-campus.svg",
        category: "Academic",
    },
    {
        id: "kfupm",
        name: "King Fahd University of Petroleum & Minerals",
        logo: "/clients/academic/king-fahd-university-petroleum-minerals.svg",
        category: "Academic",
    },
    {
        id: "kaust",
        name: "King Abdullah University of Science and Technology",
        logo: "/clients/academic/king-abdullah-university-science-technology.svg",
        category: "Academic",
    },
    {
        id: "hbku",
        name: "Hamad Bin Khalifa University",
        logo: "/clients/academic/hamad-bin-khalifa-university.svg",
        category: "Academic",
    },
    {
        id: "paaet",
        name: "Public Authority for Applied Education & Training",
        logo: "/clients/academic/public-authority-applied-education-training.svg",
        category: "Academic",
    },
    {
        id: "kacst",
        name: "King Abdulaziz City for Science and Technology",
        logo: "/clients/academic/king-abdulaziz-city-science-technology.svg",
        category: "Government",
    },
];

/**
 * Commercial Clients - Government Entities & Industrial Organizations
 */
export const commercialClients: Client[] = [
    {
        id: "moe",
        name: "Ministry of Education – Kuwait",
        logo: "/clients/commercial/ministry-education-kuwait.svg",
        category: "Government",
    },
    {
        id: "mew",
        name: "Ministry of Electricity & Water – Kuwait",
        logo: "/clients/commercial/ministry-electricity-water-kuwait.svg",
        category: "Government",
    },
    {
        id: "mpw",
        name: "Ministry of Public Works – Kuwait",
        logo: "/clients/commercial/ministry-public-works-kuwait.svg",
        category: "Government",
    },
    {
        id: "kfas",
        name: "Kuwait Foundation for the Advancement of Sciences",
        logo: "/clients/commercial/kuwait-foundation-advancement-sciences.svg",
        category: "Government",
    },
    {
        id: "kisr",
        name: "Kuwait Institute for Scientific Research",
        logo: "/clients/commercial/kuwait-institute-scientific-research.svg",
        category: "Government",
    },
    {
        id: "epa",
        name: "Environment Public Authority – Kuwait",
        logo: "/clients/commercial/environment-public-authority-kuwait.svg",
        category: "Government",
    },
    {
        id: "sabah-center",
        name: "Sabah Al Ahmad Center for Giftedness & Creativity",
        logo: "/clients/commercial/sabah-al-ahmad-center.svg",
        category: "Government",
    },
    {
        id: "kuwait-steel",
        name: "Kuwait Steel",
        logo: "/clients/commercial/kuwait-steel.svg",
        category: "Industrial",
    },
    {
        id: "alghanim",
        name: "Alghanim Industries",
        logo: "/clients/commercial/alghanim-industries.svg",
        category: "Industrial",
    },
    {
        id: "sts",
        name: "STS Kuwait",
        logo: "/clients/commercial/sts-kuwait.svg",
        category: "Industrial",
    },
    {
        id: "cosmic",
        name: "Cosmic International",
        logo: "/clients/commercial/cosmic-international.svg",
        category: "Industrial",
    },
    {
        id: "electric-house",
        name: "Electric House",
        logo: "/clients/commercial/electric-house.svg",
        category: "Industrial",
    },
    {
        id: "saud-al-muhana",
        name: "Saud Al-Muhana Engineering",
        logo: "/clients/commercial/saud-al-muhana-engineering.svg",
        category: "Industrial",
    },
    {
        id: "alam-steel",
        name: "Alam Steel Industries",
        logo: "/clients/commercial/alam-steel-industries.svg",
        category: "Industrial",
    },
    {
        id: "al-fajr",
        name: "Al Fajr Al Jadid",
        logo: "/clients/commercial/al-fajr-al-jadid.svg",
        category: "Industrial",
    },
    {
        id: "eye-center",
        name: "Kuwait Specialized Eye Center",
        logo: "/clients/commercial/kuwait-specialized-eye-center.svg",
        category: "Industrial",
    },
    {
        id: "tasneef",
        name: "Tasneef",
        logo: "/clients/commercial/tasneef.svg",
        category: "Industrial",
    },
    {
        id: "ggmc",
        name: "Gulf Glass Manufacturing Co.",
        logo: "/clients/commercial/gulf-glass-manufacturing.svg",
        category: "Industrial",
    },
    {
        id: "rak",
        name: "RAK",
        logo: "/clients/commercial/rak.svg",
        category: "Industrial",
    },
    {
        id: "toco",
        name: "TOCO",
        logo: "/clients/commercial/toco.svg",
        category: "Industrial",
    },
    {
        id: "sos",
        name: "SOS",
        logo: "/clients/commercial/sos.svg",
        category: "Industrial",
    },
    {
        id: "kpak",
        name: "K-PAK",
        logo: "/clients/commercial/k-pak.svg",
        category: "Industrial",
    },
    {
        id: "alfattan",
        name: "Alfattan Holding",
        logo: "/clients/commercial/alfattan-holding.svg",
        category: "Industrial",
    },
];

/**
 * Key Clients for highlight section
 */
export const keyClients: Client[] = [
    academicClients[0], // Kuwait University
    commercialClients[0], // Ministry of Education
    commercialClients[4], // KISR
    commercialClients[3], // KFAS
];
