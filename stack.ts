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

// import "server-only";
// import { StackServerApp } from "@stackframe/stack";

// export const stackServerApp = new StackServerApp({
//   tokenStore: "nextjs-cookie", // storing auth tokens in cookies
// });


import { StackServerApp } from "@stackframe/stack";

export const stack = new StackServerApp({
  tokenStore: "nextjs-cookie",
  // The "!" tells TypeScript: "I promise this variable exists in .env.local"
  // secretKey: process.env.STACK_SECRET_SERVER_KEY!, 
  // projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID!,
});