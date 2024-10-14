"use client";
import "./globals.css";
import React from "react";
import { usePathname } from "next/navigation";
import NotFound from "@/components/not-found";
// import { useRouter } from "next/router";

type RootLayoutProps = {
  children: React.ReactNode
};

const locales: string[] = ["en", "fr", "ar"];

function RootLayout({ children }: RootLayoutProps) {

  const path = usePathname();
  // const router = useRouter();

  // if (!locales.includes(path.slice(1))) {
  //   router.replace("not-found"); // Redirect to custom 404 for unsupported languages
  // }

  return (
    <html lang={"en"}>
    <head>
      <title>Hamza Missaoui Portfolio</title>
      <link rel="icon" href="/hamza/b2b-alive.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>

    {!locales.includes(path.slice(1)) ? <NotFound /> : children}
    </body>
    </html>
  );
}

export default RootLayout;