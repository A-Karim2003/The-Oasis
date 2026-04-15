import { betterAuth } from "better-auth";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const auth = betterAuth({
  database: pool,

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      accessType: "offline",
      prompt: "select_account consent",
    },
  },
  // databaseHooks runs
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await pool.query(
            `INSERT INTO guests (name, email, "userId") VALUES ($1, $2, $3)`,
            [user.name, user.email, user.id],
          );
        },
      },
    },
  },
});
