import {
    register,
    login,
    getUserById,
    getUserByEmail
} from "../services/auth.service.js"

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
}

export async function registerController(req, res) {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            })
        }
        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 character long"
            })
        }
        const { user, token } = await register({ name, email, password })
        res.cookie("token", token, COOKIE_OPTIONS)
        res.status(201).json(user)
    } catch (error) {
        console.error(error)
        res.status(error.statusCode || 500).json({
            message: error.statusCode ? error.message : "Internal server error"
        })
    }
}

export async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const { user, token } = await login({ email, password });
        res.cookie("token", token, COOKIE_OPTIONS)
        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({
            message: error.statusCode ? error.message : "Internal server error",
        });
    }
}

export async function logoutController(req, res) {
    res.clearCookie("token", COOKIE_OPTIONS);
    res.json({ message: "Logged out" });
}

export async function meController(req, res) {
    try {
        const user = await getUserById(req.user.id);

        res.json({
            user,
        });
    } catch (error) {
        console.error(error);

        res.status(error.statusCode || 500).json({
            message: error.statusCode
                ? error.message
                : "Internal server error",
        });
    }
}