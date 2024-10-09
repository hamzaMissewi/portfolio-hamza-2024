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
// import {useTheme} from "next-themes";
// import {Divider} from "@mui/material";


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
    // const {themes} = useTheme();


    return (
        <html
            lang={language}
            suppressHydrationWarning
            dir={language === "ar" ? "rtl" : "ltr"}
        >
        <head>
            <title>Hamza Missaoui's Portfolio</title>
            {/*content={"Welcome"} property={"og:title"}*/}
            <link rel="icon" href="/assets/b2b-alive-ltd-icon.svg"/>
            {/*<meta name="description" content="Hamza Missaoui Resume"/>*/}
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/*<link id="theme-stylesheet" rel="stylesheet" href=""/>*/}
            {/*  <meta* property="og:image" content="/assets/b2b-alive-ltd-icon.svg"*/}
        </head>
        <body
            className={language === "ar" ? arFont.className : inter.className}
            // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            // suppressHydrationWarning={true}
        >

        <ThemeProvider
            // themes={themes}
            // themes={["dark", "light"]}
            // defaultTheme="system"
            // attribute="class"
            // enableSystem
            // disableTransitionOnChange
        >
            <NextIntlClientProvider messages={messages}>
                <ClerkProvider publishableKey={clerkFrontendApi}>
                    <div className="flex flex-col w-full overflow-hidden space-y-10 bg-white dark:bg-black">
                        <header>
                            <Header/>
                        </header>
                        {/*<Divider/>*/}
                        <div className={"flex flex-grow flex-1 space-x-2 relative top-7"}>
                            <Sidebar/>
                            {children}
                        </div>
                        <footer>
                            <Footer/>
                        </footer>
                    </div>
                </ClerkProvider>
            </NextIntlClientProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}

export default Layout;