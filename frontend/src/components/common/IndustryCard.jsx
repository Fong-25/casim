import { Link } from "react-router-dom";

export default function IndustryCard({ title, description, mascotSrc, ctaLabel = "Bắt đầu" }) {
    return (
        <div className="relative flex h-[320px] w-[240px] flex-col rounded-3xl bg-white px-5 pt-5 pb-4 shadow-xl shadow-jl-blue-500/10">
            <h3 className="text-lg font-bold leading-tight text-jl-blue-500">{title}</h3>
            <p className="mt-2 text-[11px] text-slate-400">Trải nghiệm ngành này</p>
            <p className="mt-3 text-[13px] font-semibold leading-snug text-jl-violet-600">
                {description}
            </p>

            {/* Mascot + fan burst — mt-auto docks this to the card's bottom
            edge no matter how short the description is, instead of leaving a
            dead gap that pushes the button away from it. */}
            <div className="relative mt-auto -mx-5 h-28">
                <svg
                    viewBox="0 0 200 200"
                    className="pointer-events-none absolute bottom-2 right-4 h-32 w-32 opacity-70"
                >
                    {[35, 58, 81, 104, 127].map((r) => (
                        <path
                            key={r}
                            d={`M 200 ${200 - r} A ${r} ${r} 0 0 0 ${200 - r} 200`}
                            fill="none"
                            stroke="#c7d4fb"
                            strokeWidth="2"
                        />
                    ))}
                </svg>

                {mascotSrc && (
                    <img
                        src={mascotSrc}
                        alt=""
                        className="pointer-events-none absolute bottom-0 right-5 h-28 w-auto object-contain"
                    />
                )}
            </div>

            <Link
                to="/register"
                type="button"
                className="absolute bottom-5 left-5 rounded-full bg-linear-to-r from-jl-blue-500 to-jl-violet-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-jl-violet-500/25 transition hover:brightness-105 active:scale-[0.98]"
            >
                {ctaLabel}
            </Link>
        </div>
    );
}