import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import { useAuthStore } from "../store/authStore";

const schema = z.object({
    identifier: z.string().min(1, "Vui lòng nhập email"),
    password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

export default function Login() {
    const navigate = useNavigate();
    const login = useAuthStore((s) => s.login);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: zodResolver(schema) });

    async function onSubmit({ identifier, password }) {
        // NOTE: the backend only authenticates by email right now, so a
        // phone number typed here won't match until that's added server-side.
        const result = await login({ email: identifier, password });
        if (result.ok) {
            navigate("/home");
        } else {
            toast.error(result.message);
        }
    }

    return (
        <AuthLayout
            title="Chào mừng bạn trở lại!"
            footer={
                <>
                    Chưa có tài khoản?{" "}
                    <Link to="/register" className="font-semibold text-jl-violet-600 hover:underline">
                        Đăng ký ngay
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <AuthInput
                    label="Email"
                    type="text"
                    autoComplete="username"
                    error={errors.identifier?.message}
                    {...register("identifier")}
                />
                <div>
                    <AuthInput
                        label="Mật khẩu"
                        type="password"
                        autoComplete="current-password"
                        error={errors.password?.message}
                        {...register("password")}
                    />
                    <div className="mt-1.5 text-right">
                        <Link to="#" className="text-xs font-medium text-jl-violet-600 hover:underline">
                            Quên mật khẩu?
                        </Link>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-linear-to-r from-jl-blue-500 to-jl-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-jl-violet-500/25 transition hover:brightness-105 active:scale-[0.98] disabled:opacity-60"
                >
                    {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
            </form>
        </AuthLayout>
    );
}