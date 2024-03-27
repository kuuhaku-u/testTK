// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"
// import { authMiddleware } from "@clerk/nextjs";


// export function middleware(request: NextRequest) {
//   // TODO: Feel free to remove this block
//   if (request.headers?.get("host")?.includes("next-enterprise.vercel.app")) {
//     return NextResponse.redirect("https://blazity.com/open-source/nextjs-enterprise-boilerplate", { status: 301 })
//   }
// }

// export default authMiddleware({
//   // Allow signed out users to access the specified routes:
//   // publicRoutes: ['/anyone-can-visit-this-route'],
// });

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// }

import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ["/", "/about"],
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ]
};