// File: stack.ts

// import { defineStackApp } from "@stackframe/stack";
// import { StackNeon } from "@stackframe/neon";

// export const stack = defineStackApp({
//   // Use the Neon database adapter
//   database: StackNeon({
//     // This will automatically read from your .env file
//     connectionString: process.env.DATABASE_URL!,
//   }),
//   // Add any other config you need here
// });

import "server-only";
import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie", // storing auth tokens in cookies
});
