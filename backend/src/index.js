import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"

import userRoutes from "./routes/user.route.js"

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

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