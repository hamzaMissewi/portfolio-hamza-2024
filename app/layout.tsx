"use client";
import React from "react";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  // const path = usePathname();
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
