// // File: app/handler/[...stack]/page.tsx

// import { StackHandler } from "@stackframe/stack";

// // This component will catch all routes under /handler/*
// // and show the correct Stackframe UI (sign-up, sign-in, etc.)
// export default function Handler(props: unknown) {
//   return <StackHandler fullPage routeProps={props} />;
// }





import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";

export default function Handler(props: unknown) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
