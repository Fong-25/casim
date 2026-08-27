import axios from 'axios'
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
    // Backend auth is cookie-based (httpOnly "token" cookie) — every request
    // needs to carry it.
    withCredentials: true,
});

// registerController responds with the user object directly (res.json(user)).
export async function registerRequest({ name, email, password }) {
    const { data } = await api.post("/users/register", { name, email, password });
    return data;
}

// loginController / meController both wrap it as { user }.
export async function loginRequest({ email, password }) {
    const { data } = await api.post("/users/login", { email, password });
    return data.user;
}

export async function logoutRequest() {
    await api.post("/users/logout");
}

export async function fetchMeRequest() {
    const { data } = await api.get("/users/me");
    return data.user;
}