import { TopUtilityBar } from "./TopUtilityBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen">
            <TopUtilityBar />
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
        </div>
    );
}
