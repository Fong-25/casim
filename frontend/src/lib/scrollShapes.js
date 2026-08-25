// Cubic smoothstep — turns a linear 0→1 ramp into an ease-in-out curve.
const smoothstep = (t) => t * t * (3 - 2 * t);

/**
 * Maps raw section-scroll progress (see useSectionScrollProgress) to a
 * 0 → 1 → 0 "openness" curve:
 *   - closed (0) while the section is off-screen
 *   - ramps open between `start` and `holdStart`
 *   - fully open (1) between `holdStart` and `holdEnd`
 *   - ramps closed again between `holdEnd` and `end`
 *
 * Pass a slightly different `start`/`holdStart`/`holdEnd`/`end` set per
 * element to stagger a group — that's what gives the "fanning out of a
 * pocket" feel instead of everything popping in lockstep.
 */
export function revealCurve(
    raw,
    { start = 0.12, holdStart = 0.32, holdEnd = 0.68, end = 0.88 } = {}
) {
    if (raw <= start || raw >= end) return 0;
    if (raw >= holdStart && raw <= holdEnd) return 1;
    if (raw < holdStart) return smoothstep((raw - start) / (holdStart - start));
    return smoothstep((end - raw) / (end - holdEnd));
}

/** Linear interpolation — used to blend a "closed" and "open" value by openness (0→1). */
export const lerp = (a, b, t) => a + (b - a) * t;