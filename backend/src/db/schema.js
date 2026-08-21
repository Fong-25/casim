import {
    pgTable,
    serial,
    varchar,
    text,
    timestamp,
    boolean,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { leng: 255 }).notNull().unique(),
    passswordHash: varchar("password_hash", { length: 255 }).notNull(),
    isActive: boolean("is_active").default(true).notNull(),
    createAt: timestamp("create_at").defaultNow().notNull(),
})