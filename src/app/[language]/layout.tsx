import "../globals.css";
import localFont from "next/font/local";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import ThemeProvider from "@/components/theme/ThemeToggler";


const arFont = localFont({
    src: "../../fonts/Rubik-MediumItalic.ttf",
});
// const geistSans = localFont({
//     src: "../../fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "../../fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });


const inter = Inter({subsets: ["latin"]});

interface RootLayoutProps {
    children: React.ReactNode;
    params: { language: string };
}

async function Layout({children, params: {language}}: Readonly<RootLayoutProps>) {
    const messages = await getMessages();
    const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;


    return (
        <html
            lang={language}
            dir={language === "ar" ? "rtl" : "ltr"}
            suppressHydrationWarning
        >
        <head>
            <title>Hamza Missaoui's Portfolio</title>
            <link rel="icon" href="/assets/b2b-alive-ltd-icon.svg"/>
            <meta charSet="UTF-8"/>
            {/*<meta name="viewport" content="width=device-width, initial-scale=1.0"/>*/}
            {/*<meta name="description" content="Hamza Missaoui Resume"/>*/}
            {/*<link id="theme-stylesheet" rel="stylesheet" href=""/>*/}
            {/*<meta* property="og:image" content="/assets/b2b-alive-ltd-icon.svg"*/}
        </head>
        <body
            className={`${language === "ar" ? arFont.className : inter.className} text-black dark:text-red-700`}
        >


        <NextIntlClientProvider messages={messages}>
            <ClerkProvider publishableKey={clerkFrontendApi}>
                <ThemeProvider
                    themes={["dark", "light"]}
                    attribute="class"
                    // defaultTheme="system"
                    // enableSystem
                    // disableTransitionOnChange
                >
                    <div className="relative flex flex-col w-full">
                        {/*<header>*/}
                        <Header/>
                        {/*</header>*/}
                        {/*<Divider/>*/}
                        {/*<div className="h-2 dark:bg-white bg-black"/>*/}
                        <div className="h-4 border-y border-black"/>

                        <div className={"flex flex-grow w-full space-x-2 top-7"}>
                            <Sidebar/>
                            {children}
                        </div>
                        <footer>
                            <Footer/>
                        </footer>
                    </div>
                </ThemeProvider>
            </ClerkProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

export default Layout;