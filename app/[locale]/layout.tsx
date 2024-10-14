import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/theme/provider";
import type { Metadata } from "next";
import { siteConfig } from "@/config";
import { PropsWithChildren } from "react";

// const arFont = localFont({
//   src: "@/fonts/Rubik-MediumItalic.ttf",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteConfig;

// export const viewport: Viewport = {
//   themeColor: "#000319",
//   colorScheme: "dark",
// };

interface RootLayoutProps extends PropsWithChildren {
  children: React.ReactNode;
  params: { locale: string };
}

async function Layout({ children, params: { locale } }: RootLayoutProps) {
  const messages = await getMessages();
  // const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
  
    {/*// <body className={locale === "ar" ? arFont.className : inter.className} suppressHydrationWarning={true}>*/}
    <body className={inter.className} suppressHydrationWarning={true}>
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        themes={["dark", "light"]}
        attribute="class" defaultTheme="dark">
        {/*attribute="class" defaultTheme="dark" forcedTheme="dark">*/}
        {children}
        {/*</div>*/}
      </ThemeProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}

export default Layout;