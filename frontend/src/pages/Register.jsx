import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import { useAuthStore } from "../store/authStore";

const schema = z
    .object({
        name: z.string().min(1, "Vui lòng nhập họ tên"),
        email: z.email("Email không hợp lệ"),
        password: z.string().min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
        confirmPassword: z.string().min(1, "Vui lòng xác nhận mật khẩu"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Mật khẩu xác nhận không khớp",
        path: ["confirmPassword"],
    });

export default function Register() {
    const navigate = useNavigate();
    const registerUser = useAuthStore((s) => s.register);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: zodResolver(schema) });

    async function onSubmit({ name, email, password }) {
        const result = await registerUser({ name, email, password });
        if (result.ok) {
            navigate("/home");
        } else {
            toast.error(result.message);
        }
    }

    return (
        <AuthLayout
            title="Tạo tài khoản JobLens"
            footer={
                <>
                    Đã có tài khoản?{" "}
                    <Link to="/login" className="font-semibold text-jl-violet-600 hover:underline">
                        Đăng nhập
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <AuthInput
                    label="Họ và tên"
                    type="text"
                    autoComplete="name"
                    error={errors.name?.message}
                    {...register("name")}
                />
                <AuthInput
                    label="Email"
                    type="email"
                    autoComplete="email"
                    error={errors.email?.message}
                    {...register("email")}
                />
                <AuthInput
                    label="Mật khẩu"
                    type="password"
                    autoComplete="new-password"
                    error={errors.password?.message}
                    {...register("password")}
                />
                <AuthInput
                    label="Xác nhận mật khẩu"
                    type="password"
                    autoComplete="new-password"
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-linear-to-r from-jl-blue-500 to-jl-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-jl-violet-500/25 transition hover:brightness-105 active:scale-[0.98] disabled:opacity-60"
                >
                    {isSubmitting ? "Đang tạo tài khoản..." : "Đăng ký"}
                </button>
            </form>
        </AuthLayout>
    );
}