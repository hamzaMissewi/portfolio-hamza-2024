//TODO
import { routing } from "./lib/intl";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(ar|fr|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};