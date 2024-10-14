//TODO
import { locales } from "./lib/intl";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(ar|fr|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};