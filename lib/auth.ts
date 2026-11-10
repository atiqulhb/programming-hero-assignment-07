// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
// const db = client.db('better-auth-db');

// export const auth = betterAuth({
//   emailAndPassword: {
//     enabled: true,
//   },

//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
// });


import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";

function requireEnv(key: string): string {
  const value = process.env[key]

  if (!value) {
    throw new Error(`Missing Environment variables: ${key}`)
  }

  return value
}

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: requireEnv('BETTER_AUTH_GOOGLE_CLIENT_ID'),
      clientSecret: requireEnv('BETTER_AUTH_GOOGLE_SECRET')
    },
    github: {
      clientId: requireEnv('BETTER_AUTH_GITHUB_CLIENT_ID'),
      clientSecret: requireEnv('BETTER_AUTH_GITHUB_SECRET')
    }
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },
});
