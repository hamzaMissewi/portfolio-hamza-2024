import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextIntlMiddleware } from "next-intl";

const isProtectedRoute = createRouteMatcher([
  "/en(.*)",
  "/fr(.*)",
  "/ar(.*)",
]);

// const isAdminRoute = createRouteMatcher([
//   "/categories(.*)",
//   "/users(.*)",
//   "/sale(.*)",
//   // "/admin(.*)",
// ]);


const isAdminRoute = createRouteMatcher(["/admin"]);

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims, redirectToSignIn, userId } = await auth();
  const userRole = sessionClaims?.metadata?.role;
  // const url = req.nextUrl.clone(); // this clones the current URL

  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  if (userId && isAdminRoute(req) && userRole !== "admin") {
    redirectToSignIn();
    // return redirect("/sign-in"); // Redirect non-admin users trying to access admin routes
  }
});


// export function middleware(req: NextRequest) {
// //   // Log the request URL
// //   console.log(`Request URL: ${req.nextUrl}`);
// //   // const isAuthenticated = false; // Replace with your authentication logic
// //
// //   // const session = useSession();
// //
// //   // if (!isAuthenticated) {}
// //   if (isProtectedRoute(req) && !session.isSignedIn) {
// //   if (isProtectedRoute(req)) {
// //     // Redirect to login if not authenticated
// //     return NextResponse.redirect(new URL("/login", req.url));
// //     intlMiddleware(req);
// //   }
// //   // If everything is okay, continue to the next middleware or the requested page
// //   return NextResponse.next();
// }

// export function middleware(request) {
//   // return NextIntlMiddleware(request, {
//   //   locales: locales,
//   //   defaultLocale: "en",
//   // });
// }

export const config = {
  // matcher: ['/protected/:path*'], // Apply middleware to all paths under /protected
  matcher: [
    "/",
    "/(fr|en|ar)/:path*",
    // "/((?!.*\\..*|_next).*)",
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    //     // "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv",
    "/(api|trpc)(.*)",
    // "/((?!api|_next|static|favicon.ico).*)",
  ],
};
