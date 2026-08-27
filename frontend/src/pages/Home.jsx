import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Home() {
    const user = useAuthStore((s) => s.user);
    const logout = useAuthStore((s) => s.logout);
    const navigate = useNavigate();

    async function handleLogout() {
        await logout();
        navigate("/login");
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center">
            <img src="/images/mascotthinking.png" alt="" className="h-32 w-auto" />
            <h1 className="font-display text-2xl font-extrabold text-jl-indigo-900">
                Chào mừng{user?.name ? `, ${user.name}` : ""}!
            </h1>
            <p className="max-w-sm text-sm text-slate-500">
                Đây là trang chủ tạm thời — nội dung thật sẽ được xây dựng sau.
            </p>
            <button
                onClick={handleLogout}
                className="rounded-full bg-linear-to-r from-jl-blue-500 to-jl-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-jl-violet-500/25 transition hover:brightness-105 active:scale-[0.98]"
            >
                Đăng xuất
            </button>
        </div>
    );
}