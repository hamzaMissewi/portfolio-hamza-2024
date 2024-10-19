"use client";
import React from "react";
import "./globals.css";
// import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// import { unstable_setRequestLocale } from "next-intl/server";

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  // unstable_setRequestLocale("en-US");

  return children;
  // return (
  //   <html lang={"en"}>
  //     <body>{children}</body>
  //   </html>
  // );
}

export default RootLayout;
