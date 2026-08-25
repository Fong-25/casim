import { useEffect, useRef, useState } from "react";

/**
 * Drives a "pin and scrub" animation:
 *
 *   <section ref={ref} style={{ height: "240vh" }}>   <- tall wrapper, gives scroll runway
 *     <div className="sticky top-0 h-screen">          <- stays pinned while wrapper scrolls by
 *       ...animated content, driven by `progress`...
 *     </div>
 *   </section>
 *
 * `progress` is 0 the instant the wrapper's top hits the top of the viewport
 * (the moment the sticky child pins), and reaches 1 once the wrapper has
 * scrolled by exactly (wrapper height − 100vh) — the moment the sticky child
 * un-pins and the page continues scrolling normally into whatever's next.
 * That means the whole 0→1 range maps to real, deliberate scroll distance
 * instead of a single viewport-height flyby, so slow the animation down by
 * making the wrapper taller, not by fighting the math.
 *
 * ref goes on the OUTER tall wrapper, not the sticky inner div.
 */
export default function useStickyScrollProgress() {
    const ref = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
            setProgress(0.5);
            return;
        }

        let ticking = false;

        const measure = () => {
            ticking = false;
            const rect = node.getBoundingClientRect();
            const vh = window.innerHeight;
            const scrollable = rect.height - vh;
            if (scrollable <= 0) {
                setProgress(0);
                return;
            }
            const raw = -rect.top / scrollable;
            setProgress(Math.min(1, Math.max(0, raw)));
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(measure);
        };

        measure();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return [ref, progress];
}