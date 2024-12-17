import { createNavigation } from "next-intl/navigation";
import { defineRouting, LocalePrefix } from "next-intl/routing";

export const locales: string[] = ["en", "fr", "ar"] as const;
export type Locales = typeof locales;
export const localePrefix: LocalePrefix<Locales> = "always";

// export const pathnames: Pathnames<Locales> = {
//   "/": "/",
//   "/about": "/about",
//   "/project(.*)": "/project(.*)",
//   "/experience": "/experience",
// };


export enum Language {
  fr = "french",
  en = "english",
  ar = "arabic",
}


// export const routing = defineRouting({
//   // A list of all locales that are supported
//   defaultLocale: locales[0],
//   locales: locales,
//   localePrefix: "always", // "as-needed",
//   // localeCookie: "NEXT_LOCALE",
//   // Used when no locale matches
//   // defaultLocale: locales[0],
//   // domains: undefined,
//   // alternateLinks: false,
//   // localeDetection: false,
//   // domains: [
//   //   {
//   //     domain: "dev.localhost:3000",
//   //     locales: ["en"],
//   //     defaultLocale: "en",
//   //   },
// });

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,
  // Used when no locale matches
  defaultLocale: "en",
  // localePrefix: "as-needed",
});
// { defaultLocale: "en", localePrefix: "always", locales: locales }

export const { Link, redirect, useRouter, permanentRedirect } =
  createNavigation(routing);

