export default function AuthInput({ label, error, ...props }) {
    return (
        <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-jl-indigo-900">{label}</span>
            <input
                className={`w-full rounded-xl border px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-jl-violet-400 focus:ring-2 focus:ring-jl-violet-100 ${error ? "border-red-400" : "border-slate-200"
                    }`}
                {...props}
            />
            {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
        </label>
    );
}