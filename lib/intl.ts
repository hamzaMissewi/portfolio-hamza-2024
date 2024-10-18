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
  //   {
  //     domain: "fr.dev.localhost:3000",
  //     locales: ["fr"],
  //     defaultLocale: "fr",
  //   },
  //   {
  //     domain: "ar.dev.localhost:3000",
  //     locales: ["ar"],
  //     defaultLocale: "ar",
  //   },
  // ],
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
