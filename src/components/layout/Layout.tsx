import { useState } from "react";
import { TopUtilityBar } from "./TopUtilityBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
    hidden?: boolean; // New prop to visually hide header/topbar
}

export function Layout({ children, hidden = false }: LayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <div className={hidden ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-300"}>
                <TopUtilityBar isMobileMenuOpen={isMobileMenuOpen} />
                <Header
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
            </div>
            <main id="main-content">{children}</main>
            <Footer />
        </div>
    );
}
