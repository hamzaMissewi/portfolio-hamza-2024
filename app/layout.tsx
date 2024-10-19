"use client";
import React from "react";
import "./globals.css";
import { unstable_setRequestLocale } from "next-intl/server";

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  unstable_setRequestLocale("en-US");

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
