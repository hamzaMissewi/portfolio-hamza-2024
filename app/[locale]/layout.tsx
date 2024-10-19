import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/theme/provider";
import type { Metadata } from "next";
import { siteConfig } from "@/config";
import React, { PropsWithChildren } from "react";
// import localFont from "next/dist/compiled/@next/font/dist/local";
// import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

// const arFont = localFont({
//   src: "@/fonts/Rubik-MediumItalic.ttf",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteConfig;

interface RootLayoutProps extends PropsWithChildren {
  children: React.ReactNode;
  params: { locale: string };
}

async function Layout({ children, params: { locale } }: RootLayoutProps) {
  const messages = await getMessages();
  // const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <title>Hamza Missaoui Portfolio</title>
        <link rel="icon" href="/hamza/b2b-alive.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        // className={locale === "ar" ? arFont.className : inter.className}
        className={inter.className}
        suppressHydrationWarning={true}
      >
        {/* <ClerkProvider>*/}
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            themes={["dark", "light"]}
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default Layout;
