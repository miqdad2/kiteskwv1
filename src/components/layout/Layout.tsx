import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloatingButton } from "../WhatsAppFloatingButton";

interface LayoutProps {
    children: React.ReactNode;
    hidden?: boolean; // New prop to visually hide header/topbar
}

export function Layout({ children, hidden = false }: LayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <div className={hidden ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-300"}>
                <Header
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
            </div>
            <main id="main-content">{children}</main>
            <WhatsAppFloatingButton />
            <Footer />
        </div>
    );
}

