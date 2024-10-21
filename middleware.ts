//TODO
import { routing } from "./lib/intl";
import createMiddleware from "next-intl/middleware";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(ar|fr|en)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // TODO clerk
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

const isProtectedRoute = createRouteMatcher([
  "/en/(.*)",
  "/fr/(.*)",
  "/ar/(.*)",
]);

// export default clerkMiddleware();
export default createMiddleware(routing) &&
  clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });
