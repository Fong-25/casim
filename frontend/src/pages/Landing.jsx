import Navbar from "../components/common/Navbar";
import HeroSection from "../sections/HeroSection";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";

/**
 * The 4 landing sections stack top to bottom and scroll normally
 * (no scroll-snap) — Navbar stays fixed on top throughout.
 */
export default function Landing() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <Section2 />
                <Section3 />
                <Section4 />
            </main>
        </>
    );
}
