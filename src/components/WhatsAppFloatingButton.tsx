// import { PHONE_NUMBERS } from "@/config/contacts";
// Actually user gave specific number: (+965) 22092260 -> 96522092260
// I will ignore config for now to be safe and use exact number requested.

import { MessageCircle } from "lucide-react"; // WhatsApp icon substitute if not available, or I can use an SVG.
// User requested "WhatsApp logo (white)". Lucide doesn't have a perfect WhatsApp logo usually, it has standard icons.
// I should use a proper SVG for WhatsApp or check if lucide-react has Phone/Message that looks okay?
// No, the user explicitly asked for "WhatsApp logo".
// I will use an SVG for the WhatsApp logo to ensure high quality "Executive, institutional appearance".

import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhatsAppFloatingButton() {
    const { language } = useLanguage();
    const isRTL = language === "ar";

    // WhatsApp number formatting
    const whatsappNumber = "96522092260";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "fixed bottom-[100px] right-6 z-[49]", // z-index lower than modals (usually 50+), higher than content. Positioned above Voiceflow (approx bottom-6 + 60px height + gap)
                "flex items-center justify-center",
                "w-[52px] h-[52px]", // 52px minimum tap target
                "bg-[#25D366] hover:bg-[#20bd5a]", // WhatsApp brand color
                "rounded-full shadow-lg hover:shadow-xl",
                "transform hover:scale-105 active:scale-95",
                "transition-all duration-300 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black",
                // RTL handling: always bottom-right as perceived? 
                // User said: "Must respect RTL layouts (position remains bottom-right universally)"
                // So "right-6" is correct for LTR. For RTL, should it be "left-6"?
                // User said: "position remains bottom-right universally".
                // So it should ALWAYS be on the right.
                // But wait, "Must respect RTL layouts (position remains bottom-right universally)" is contradictory if "respect RTL" means flip.
                // Usually "position remains bottom-right universally" means DO NOT FLIP.
                // I will keep it `right-6` always.
                "right-6"
            )}
            aria-label="Contact us on WhatsApp"
        >
            {/* WhatsApp Icon SVG */}
            <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
        </a>
    );
}
