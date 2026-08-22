import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { eq, or } from "drizzle-orm";

import { db } from "../db/index.js"
import { users } from "../db/schema.js"

function createToken(user) {
    return jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email,
    }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })
}

export async function register({ name, email, password }) {
    const [existingUser] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (existingUser) {
        const error = new Error("Email already exists");
        error.statusCode = 409;
        throw error;
    }
    const passwordHash = await bcrypt.hash(password, 12);

    const [user] = await db.insert(users).values({
        name,
        email,
        passwordHash,
    }).returning({
        id: users.id,
        name: users.name,
        email: users.email,
        isActive: users.isActive,
        createdAt: users.createdAt,
    })
    const token = createToken(user)

    return {
        user,
        token
    }
}

export async function login({ email, password }) {
    const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!user) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401
        throw error
    }
    if (!user.isActive) {
        const error = new Error("Account is inactive")
        error.statusCode = 403
        throw error
    }
    const passwordValid = await bcrypt.compare(password, user.passwordHash);
    if (!passwordValid) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error
    }
    const safeUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        isActive: user.isActive,
        createdAt: user.createdAt,
    }
    const token = createToken(safeUser)
    return {
        user: safeUser,
        token
    }
}
export async function getUserById(id) {
    const [user] = await db.select({
        id: users.id,
        name: users.name,
        email: users.email,
        isActive: users.isActive,
        createdAt: users.createdAt
    }).from(users).where(eq(users.id, id)).limit(1);
    if (!user) {
        const error = new Error("User not found")
        error.statusCode = 404
        throw error
    }
    return user;
}
export async function getUserByEmail(email) {
    const [user] = await db.select({
        id: users.id,
        name: users.name,
        email: users.email,
        isActive: users.isActive,
        createdAt: users.createdAt
    }).from(users).where(eq(users.email, email)).limit(1);
    return user
}