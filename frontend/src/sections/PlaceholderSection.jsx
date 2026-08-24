/**
 * Generic scaffold for landing sections 2-4. Swap the content once the
 * design for that section is ready — keep the min-h-screen + id so the
 * scroll flow and any future in-page nav links keep working.
 */
export default function PlaceholderSection({ id, eyebrow, title, tone = "light" }) {
    const isLight = tone === "light";

    return (
        <section
            id={id}
            className={`flex min-h-screen w-full flex-col items-center justify-center px-6 text-center ${isLight ? "bg-slate-50 text-jl-indigo-900" : "bg-jl-indigo-900 text-white"
                }`}
        >
            <span
                className={`font-body text-xs font-bold uppercase tracking-[0.3em] ${isLight ? "text-jl-violet-500" : "text-jl-sky-300"
                    }`}
            >
                {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
                {title}
            </h2>
            <p
                className={`mt-4 max-w-md font-body text-sm ${isLight ? "text-slate-500" : "text-white/60"
                    }`}
            >
                Nội dung của phần này đang chờ thiết kế — thay thế component này khi có bản thiết kế chi tiết.
            </p>
        </section>
    );
}
