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
  /*
    When a new user signs in for the first time, automatically create
    a matching guest profile linked to their Better Auth user account.
  */
  // databaseHooks runs everytime Better Auth performs an operation on its own tables e.g (user, account, session).
  databaseHooks: {
    // Better Auth's user table
    user: {
      // when tringgers when a user is created in user table
      create: {
        after: async (user) => {
          await pool.query(
            `INSERT INTO guests (name, email, "userId") 
             VALUES ($1, $2, $3)
             ON CONFLICT ("userId") DO NOTHING`,
            [user.name, user.email, user.id],
          );
        },
      },
    },
  },
});
