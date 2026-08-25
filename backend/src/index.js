import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"
import path from 'path'

import userRoutes from "./routes/user.route.js"

const app = express()
const __dirname = path.resolve()

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get(/^(?!\/api).*/, (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

app.get("/", (req, res) => {
    res.json({
        message: "API is running",
    });
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});