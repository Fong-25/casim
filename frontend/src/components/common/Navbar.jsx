import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
    { label: "Về JobLens", to: "/about" },
    { label: "Dịch vụ", to: "/services" },
    { label: "Thông tin", to: "/info" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_-4px_rgba(30,20,90,0.15)]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-17.5 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 shrink-0">
                    <span className="grid place-items-center w-8 h-8 rounded-lg bg-linear-to-br from-jl-blue-500 to-jl-violet-500 text-white">
                        {/* <Sparkles size={18} strokeWidth={2.5} /> */}
                        <img
                            src="/images/logo2.png"
                            alt="JobLens logo"
                            className="h-full w-full object-contain"
                        />
                    </span>
                    <span className="font-display font-extrabold text-xl tracking-tight bg-linear-to-r from-jl-blue-500 to-jl-violet-500 bg-clip-text text-transparent">
                        JobLens
                    </span>
                </Link>

                {/* Desktop nav links */}
                <nav className="hidden lg:flex items-center gap-8 font-body font-medium text-[15px] text-slate-700">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="relative py-1 transition-colors hover:text-jl-violet-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-jl-violet-500 after:transition-all hover:after:w-full"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Search box */}
                <div className="hidden md:flex flex-1 max-w-xs">
                    <div className="flex items-center w-full gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-400 focus-within:border-jl-violet-400 focus-within:ring-2 focus-within:ring-jl-violet-100 transition">
                        <Search size={17} strokeWidth={2} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Auth buttons */}
                <div className="hidden md:flex items-center gap-3 shrink-0">
                    <Link
                        to="/login"
                        className="px-4 py-2 rounded-full text-sm font-semibold text-jl-violet-600 border border-jl-violet-200 hover:bg-jl-violet-50 transition-colors"
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        to="/register"
                        className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-linear-to-r from-jl-blue-500 to-jl-violet-500 shadow-md shadow-jl-violet-500/25 hover:brightness-105 active:scale-[0.98] transition"
                    >
                        Đăng ký
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-slate-700"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-4">
                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-400">
                        <Search size={17} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="w-full bg-transparent text-sm focus:outline-none"
                        />
                    </div>
                    <nav className="flex flex-col gap-3 font-medium text-slate-700">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-2 pt-2">
                        <Link
                            to="/login"
                            className="px-4 py-2 rounded-full text-sm font-semibold text-center text-jl-violet-600 border border-jl-violet-200"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 rounded-full text-sm font-semibold text-center text-white bg-linear-to-r from-jl-blue-500 to-jl-violet-500"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
