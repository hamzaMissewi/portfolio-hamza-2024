//TODO
import { routing } from "./lib/intl";
import createMiddleware from "next-intl/middleware";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/en/(.*)",
  "/fr/(.*)",
  "/ar/(.*)",
]);

// const intlMiddleware = createMiddleware({
//   locales: AppConfig.locales,
//   localePrefix: AppConfig.localePrefix,
//   defaultLocale: AppConfig.defaultLocale,
// })
const intlMiddleware = createMiddleware(routing);

// export default createMiddleware(routing) &&
export default clerkMiddleware(
  (auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
    //     // Restrict admin routes to users with specific permissions
    //     if (isProtectedRoute(req)) {
    //       auth().protect((has) => {
    //         return (
    //           has({ permission: "org:sys_memberships:manage" }) ||
    //           has({ permission: "org:sys_domains_manage" })
    //         );
    //       });
    //     }
    return intlMiddleware(req);
  },
  { debug: true }
);

// export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(ar|fr|en)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // "/((?!.*\\..*|_next).*)",
    // TODO clerk
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
