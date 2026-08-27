import { create } from "zustand";
import {
    loginRequest,
    registerRequest,
    logoutRequest,
    fetchMeRequest,
} from "../lib/api";

// status: "idle" (haven't checked the session yet) -> "loading" ->
// "authenticated" | "unauthenticated"
export const useAuthStore = create((set) => ({
    user: null,
    status: "idle",

    async fetchMe() {
        set({ status: "loading" });
        try {
            const user = await fetchMeRequest();
            set({ user, status: "authenticated" });
        } catch {
            set({ user: null, status: "unauthenticated" });
        }
    },

    async login({ email, password }) {
        try {
            const user = await loginRequest({ email, password });
            set({ user, status: "authenticated" });
            return { ok: true };
        } catch (err) {
            return {
                ok: false,
                message: err.response?.data?.message || "Đăng nhập thất bại. Vui lòng thử lại.",
            };
        }
    },

    async register({ name, email, password }) {
        try {
            const user = await registerRequest({ name, email, password });
            set({ user, status: "authenticated" });
            return { ok: true };
        } catch (err) {
            return {
                ok: false,
                message: err.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.",
            };
        }
    },

    async logout() {
        try {
            await logoutRequest();
        } finally {
            set({ user: null, status: "unauthenticated" });
        }
    },
}));