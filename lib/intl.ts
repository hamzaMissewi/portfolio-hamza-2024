import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LocalePrefix } from "next-intl/routing";

export const locales: string[] = ["en", "fr", "ar"] as const;

export type Locales = typeof locales;
export const localePrefix: LocalePrefix<Locales> = "as-needed"; // always


export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });