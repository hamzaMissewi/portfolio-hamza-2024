"use client";
import React from "react";

type RootLayoutProps = {
  children: React.ReactNode
};

function RootLayout({ children }: RootLayoutProps) {
  // const locale = usePathname();
  // console.log("locale: " + locale);
  return (
    <html lang={"en"}>
    <head>
      <title>Hamza Missaoui Portfolio</title>
      <link rel="icon" href="/hamza/b2b-alive.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>{children}</body>
    </html>);
}

export default RootLayout;