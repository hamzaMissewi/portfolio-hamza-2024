// import { getRequestConfig } from "next-intl/server";
// // import { locales } from "@/lib/intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./lib/intl";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // Validate that the incoming `locale` parameter is valid
//   const locale = await requestLocale;
//   // if (!locale || !locales.includes(locale)) notFound();
//   return { messages: (await import(`./messages/${locale}.json`)).default };
// });


// TODO IMPORTANT
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  // const message = await import(`./messages/${locale}.json`);
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    // messages: (await ss).default,
  };
});