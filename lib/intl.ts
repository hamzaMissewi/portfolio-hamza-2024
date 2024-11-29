// import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales: string[] = ["en", "fr", "ar"] as const;

// export const localePrefix: LocalePrefix<Locales> = "as-needed"; // always

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,
  // localeCookie: "NEXT_LOCALE",
  // Used when no locale matches
  // defaultLocale: locales[0],
  localePrefix: "always", // "always", // "as-needed",
  // domains: undefined,
  // alternateLinks: false,
  // localeDetection: false,
  // domains: [
  //   {
  //     domain: "dev.localhost:3000",
  //     locales: ["en"],
  //     defaultLocale: "en",
  //   },
});

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
  createNavigation(routing);
// createSharedPathnamesNavigation(routing);
