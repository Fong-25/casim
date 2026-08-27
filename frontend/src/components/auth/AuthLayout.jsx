import { Link } from "react-router-dom";
import { PieChart, BarChart3, CalendarCheck, Laptop, AlarmClock } from "lucide-react";

// Floating icon chips scattered around the mascot. Standing in for real
// artwork for now — swap for illustrated icons whenever those exist.
const DECOR_ICONS = [
    { Icon: PieChart, color: "text-jl-violet-500", className: "left-[6%] top-[16%] -rotate-6" },
    { Icon: CalendarCheck, color: "text-amber-500", className: "left-[30%] top-[2%] rotate-3" },
    { Icon: Laptop, color: "text-jl-blue-500", className: "left-[54%] top-[20%] -rotate-3" },
    { Icon: AlarmClock, color: "text-sky-500", className: "left-[70%] top-[48%] rotate-6" },
    { Icon: BarChart3, color: "text-emerald-500", className: "left-[-10%] top-[48%] rotate-3" },
];

export default function AuthLayout({ title, children, footer }) {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-linear-to-t from-jl-blue-500 via-blue-400 to-blue-200 p-4 sm:p-6">
            <div className="flex w-full max-w-5xl items-center overflow-visible rounded-3xl md:gap-6">
                {/* Left: mascot + decorative icon chips */}
                <div className="relative hidden h-140 flex-1 items-center justify-center md:flex">
                    {DECOR_ICONS.map(({ Icon, color, className }, i) => (
                        <div
                            key={i}
                            className={`absolute flex h-16 w-16 items-center justify-center rounded-2xl bg-white/95 shadow-lg ${className}`}
                        >
                            <Icon className={color} size={30} strokeWidth={2} />
                        </div>
                    ))}
                    <img
                        src="/images/mascotlogin.png"
                        alt="JobLens mascot"
                        className="relative z-10 h-100 w-auto object-contain drop-shadow-2xl -translate-x-20 translate-y-20"
                    />
                </div>

                {/* Right: form card */}
                <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
                    <Link to="/" className="mb-6 flex items-center justify-center gap-2">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-jl-blue-500 to-jl-violet-500">
                            <img src="/images/logo2.png" alt="" className="h-full w-full object-contain" />
                        </span>
                        <span className="font-display text-xl font-extrabold bg-linear-to-r from-jl-blue-500 to-jl-violet-500 bg-clip-text text-transparent">
                            JobLens
                        </span>
                    </Link>

                    <h1 className="mb-6 text-center font-display text-2xl font-extrabold leading-snug text-jl-indigo-900 sm:text-3xl">
                        {title}
                    </h1>

                    {children}

                    {footer && (
                        <div className="mt-6 text-center text-sm text-slate-500">{footer}</div>
                    )}
                </div>
            </div>
        </div>
    );
}