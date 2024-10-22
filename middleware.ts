//TODO
import { routing } from "./lib/intl";
import createMiddleware from "next-intl/middleware";
import { createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/en/(.*)",
  "/fr/(.*)",
  "/ar/(.*)",
]);

// export default createMiddleware(routing) &&
//   clerkMiddleware((auth, req) => {
//     if (isProtectedRoute(req)) auth().protect();
//   });
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

  // matcher: [
  //   "/",
  //   "/(ar|fr|en)/:path*",
  //   "/((?!api|_next|_vercel|.*\\..*).*)",
  //   // TODO clerk
  //   "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  //   "/(api|trpc)(.*)",
  // ],
};
