import { Pool } from "pg";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
});
