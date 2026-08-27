import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function ProtectedRoute() {
    const status = useAuthStore((s) => s.status);
    const fetchMe = useAuthStore((s) => s.fetchMe);

    useEffect(() => {
        if (status === "idle") fetchMe();
    }, [status, fetchMe]);

    if (status === "idle" || status === "loading") {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-jl-violet-200 border-t-jl-violet-500" />
            </div>
        );
    }

    if (status === "unauthenticated") {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}