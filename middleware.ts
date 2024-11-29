//TODO
import { routing } from "./lib/intl";
import createMiddleware from "next-intl/middleware";
import { createRouteMatcher } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);
export default intlMiddleware;

const isProtectedRoute = createRouteMatcher([
  "/en(.*)",
  "/fr(.*)",
  "/ar(.*)",
]);

// export function middleware(req: NextRequest) {
//   // Log the request URL
//   console.log(`Request URL: ${req.nextUrl}`);
//   // const isAuthenticated = false; // Replace with your authentication logic
//
//   // const session = useSession();
//
//   // if (!isAuthenticated) {
//   // if (isProtectedRoute(req) && !session.isSignedIn) {
//     clerkMiddleware();
//   if (isProtectedRoute(req)) {
//     // Redirect to login if not authenticated
//     return NextResponse.redirect(new URL("/login", req.url));
//     intlMiddleware(req);
//   }
//   // If everything is okay, continue to the next middleware or the requested page
//   return NextResponse.next();
//   // next();
// }

export const config = {
  // matcher: ['/protected/:path*'], // Apply middleware to all paths under /protected
  matcher: [
    "/",
    // "/(fr|en|ar)/:path*",
    // "/((?!.*\\..*|_next).*)",
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    //     // "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv",
    "/(api|trpc)(.*)",
  ],
};
