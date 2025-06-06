import { nanoid } from "nanoid";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull(),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
});

// export const session = pgTable("session", {
//   id: text("id").primaryKey(),
//   expiresAt: timestamp("expiresAt").notNull(),
//   token: text("token").notNull().unique(),
//   createdAt: timestamp("createdAt").notNull(),
//   updatedAt: timestamp("updatedAt").notNull(),
//   ipAddress: text("ip_address"),
//   userAgent: text("user_agent"),
//   userId: text("user_id")
//     .notNull()
//     .references(() => user.id, { onDelete: "cascade" }),
// });

// export const account = pgTable("account", {
//   id: text("id").primaryKey(),
//   accountId: text("account_id").notNull(),
//   providerId: text("provider_id").notNull(),
//   userId: text("user_id")
//     .notNull()
//     .references(() => user.id, { onDelete: "cascade" }),
//   accessToken: text("access_token"),
//   refreshToken: text("refresh_token"),
//   idToken: text("id_token"),
//   accessTokenExpiresAt: timestamp("access_token_expires_at"),
//   refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
//   scope: text("scope"),
//   password: text("password"),
//   createdAt: timestamp("createdAt").notNull(),
//   updatedAt: timestamp("updatedAt").notNull(),
// });

// export const verification = pgTable("verification", {
//   id: text("id").primaryKey(),
//   identifier: text("identifier").notNull(),
//   value: text("value").notNull(),
//   expiresAt: timestamp("expiresAt").notNull(),
//   createdAt: timestamp("createdAt"),
//   updatedAt: timestamp("updatedAt"),
// });

export const agents = pgTable("agents", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  instructions: text("instructions").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});
