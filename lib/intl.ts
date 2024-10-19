import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales: string[] = ["en", "fr", "ar"];

// export const localePrefix: LocalePrefix<Locales> = "as-needed"; // always

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,
  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "always", // "as-needed",
  // domains: [
  //   {
  //     domain: "dev.localhost:3000",
  //     locales: ["en"],
  //     defaultLocale: "en",
  //   },
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

export enum Language {
  fr = "french",
  en = "english",
  ar = "arabic",
}
