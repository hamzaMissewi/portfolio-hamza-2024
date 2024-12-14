// import { getRequestConfig } from "next-intl/server";
// // import { notFound } from "next/navigation";
// // import { locales } from "@/lib/intl";

import { getRequestConfig } from "next-intl/server";
import { routing } from "@/lib/intl";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // Validate that the incoming `locale` parameter is valid
//   const locale = await requestLocale;
//   // if (!locale || !locales.includes(locale)) notFound();
//   return { messages: (await import(`./messages/${locale}.json`)).default };
// });


// TODO IMPORTANT
export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }


  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});