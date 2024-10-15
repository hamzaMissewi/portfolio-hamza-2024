"use client";
import "./globals.css";
import React from "react";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";

type RootLayoutProps = {
  children: React.ReactNode
};

function RootLayout({ children }: RootLayoutProps) {

  // const path = usePathname();
  // const router = useRouter();

  // if (!locales.includes(path.slice(1))) {
  //   router.replace("not-found"); // Redirect to custom 404 for unsupported languages
  // }

  return (
    <html lang={"en"}>
    <body>{children}</body>
    </html>
  );
}

export default RootLayout;