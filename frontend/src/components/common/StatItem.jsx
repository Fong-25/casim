export default function StatItem({ number, label }) {
    return (
        <div className="flex items-end gap-2 text-white">
            <span className="font-display text-5xl font-extrabold leading-none sm:text-6xl">
                {number}
            </span>
            <span className="whitespace-pre-line pb-1 text-sm font-semibold leading-tight sm:text-base">
                {label}
            </span>
        </div>
    );
}