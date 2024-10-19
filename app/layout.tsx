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

  return (
    <html lang={"en"}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//       <body>
//       <header>
//         <SignedOut>
//           <SignInButton />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </header>
//       <main>{children}</main>
//       </body>
//       </html>
//     </ClerkProvider>
//   )
// }