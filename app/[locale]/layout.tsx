import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/theme/provider";
import type { Metadata } from "next";
import { siteConfig } from "@/config";
import React, { PropsWithChildren } from "react";
import "./globals.css";

// const arFont = localFont({
//   src: "../../fonts/arabicFont.ttf",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteConfig;

interface RootLayoutProps extends PropsWithChildren {
  children: React.ReactNode;
  params: { locale: string };
}

async function Layout({ children, params: { locale } }: RootLayoutProps) {
  const messages = await getMessages({ locale });
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <title>Hamza Missaoui Portfolio</title>
        <link rel="icon" href="/hamza/b2b-alive.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={inter.className}
        // className={locale === "ar" ? arFont.className : inter.className}
        suppressHydrationWarning={true}
      >
        {/*<ClerkProvider*/}
        {/*  // signInFallbackRedirectUrl={clerkFrontendApi!}*/}
        {/*  publishableKey={clerkFrontendApi}*/}
        {/*  frontendApi={clerkFrontendApi}*/}
        {/*  // i18nIsDynamicList*/}
        {/*>*/}
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            themes={["dark", "light"]}
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        {/*</ClerkProvider>*/}
      </body>
    </html>
  );
}

export default Layout;
