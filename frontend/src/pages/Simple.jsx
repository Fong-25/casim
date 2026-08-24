import Navbar from "../components/common/Navbar";

/**
 * Shared shell for the routes that don't have a design yet
 * (About / Services / Info). Swap in real content per-page later.
 */
export default function Simple({ title }) {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen items-center justify-center bg-slate-50 pt-16 md:pt-17.5">
                <h1 className="font-display text-3xl font-extrabold text-jl-indigo-900">
                    {title}
                </h1>
            </main>
        </>
    );
}
