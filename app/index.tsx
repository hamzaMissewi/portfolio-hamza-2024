import React from "react";
import { useLocale } from "use-intl";
import { redirect, usePathname } from "next/navigation";
import { getMessages } from "next-intl/server";

async function IndexLayout({ children }: { children: React.ReactNode }) {
  const locale = usePathname();
  const locale2 = useLocale();
  console.log("locale ", locale, "language ", locale2);
  const messages = await getMessages({ locale });
  console.log("messages ", messages);

  if (!["en", "fr", "ar"].includes(locale)) {
    // redirect(`/${locale}`);
    redirect(`/not-found`);

    //   return (
    //     <html lang={"en"}>
    //       <body
    //         // className={locale === "ar" ? arFont.className : inter.className}
    //         // className={inter.className}
    //         suppressHydrationWarning={true}
    //       >
    //         <NextIntlClientProvider messages={messages}>
    //           {children}
    //         </NextIntlClientProvider>
    //       </body>
    //     </html>
    //     // redirect("/loading");
    //   );
  }
  return children;
}

export default IndexLayout;
