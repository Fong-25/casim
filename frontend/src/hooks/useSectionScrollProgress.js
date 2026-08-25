import { useEffect, useRef, useState } from "react";

/**
 * Tracks a section's raw scroll-through progress as a single 0→1 number:
 *   0 = section's top edge is at the bottom of the viewport (about to enter)
 *   1 = section's bottom edge is at the top of the viewport (fully scrolled past)
 *
 * Recomputed on scroll/resize, throttled to one measurement per animation frame
 * so it stays cheap even on fast trackpad scrolls. Respects prefers-reduced-motion
 * by freezing at 0.5 (the "fully revealed" point) instead of tracking scroll.
 */
export default function useSectionScrollProgress() {
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
            const total = vh + rect.height;
            const raw = total > 0 ? (vh - rect.top) / total : 0;
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