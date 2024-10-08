import "../globals.css";
import localFont from "next/font/local";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import type {ThemeProviderProps} from "next-themes/dist/types";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Divider} from "@mui/material";

function ThemeProvider({children, ...props}: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}


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
            suppressHydrationWarning
            dir={language === "ar" ? "rtl" : "ltr"}
        >
        <head>
            <title>Hamza Missaoui's Portfolio</title>
            <link rel="icon" href="/assets/b2b-alive-ltd-icon.svg" content={"Welcome"} property={"og:title"}/>
            <meta name="description" content="Hamza Missaoui Resume"/>
            {/*  <meta* property="og:image" content="/assets/b2b-alive-ltd-icon.svg"*/}
        </head>

        <body
            // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            className={language === "ar" ? arFont.className : inter.className}
            suppressHydrationWarning={true}
        >
        <ThemeProvider
            themes={["dark", "light"]}
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <NextIntlClientProvider messages={messages}>
                <ClerkProvider publishableKey={clerkFrontendApi}>
                    <div className="flex flex-col w-full overflow-hidden">
                        <header>
                            <Header/>
                        </header>
                        <Divider/>
                        <div className={"flex flex-grow flex-1 space-x-2"}>
                            <Sidebar/>
                            {children}
                        </div>
                        <Divider/>
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