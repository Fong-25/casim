import { useState } from "react";
import { UserRound } from "lucide-react";

/**
 * Drop the real mascot artwork at `public/mascot.png` (any transparent PNG/WebP works)
 * and this component will pick it up automatically. Until then it renders a
 * lightweight placeholder so the layout stays accurate.
 */
export default function MascotPlaceholder({ className = "" }) {
    const [failed, setFailed] = useState(false);

    if (!failed) {
        return (
            <div className={`relative shrink-0 ${className}`}>
                <img
                    src="/images/mascot.png"
                    alt="JobLens mascot"
                    onError={() => setFailed(true)}
                    className="block h-full w-full object-contain"
                    style={{ display: "block" }}
                />
            </div>
        );
    }

    return (
        <div
            className={`${className} flex flex-col items-center justify-center gap-3 rounded-[2.5rem] border-2 border-dashed border-white/30 bg-white/5 text-white/50`}
        >
            <UserRound size={56} strokeWidth={1.5} />
            <p className="font-body text-xs tracking-wide text-center px-6">
                Đặt file <span className="font-semibold text-white/70">mascot.png</span> vào{" "}
                <span className="font-mono">/public</span>
            </p>
        </div>
    );
}
