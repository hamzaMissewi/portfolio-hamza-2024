import React from "react";
import Image from "next/image";
import { Link } from "@/lib/intl";
import { useLocale } from "next-intl";


function NotFoundPage() {
  const locale = useLocale();

  return (
    // <html lang={"en"}>
    // <body>
    <div>
      <h1 className="mt-10 font-semibold">404 Something went wrong !</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href={`/${locale}`}>Go back to home</Link>
      <div className="h-40 w-40 mx-auto">
        <Image src={"/hamza/spinner.svg"} width={200} height={200} alt="spinner" />
      </div>
    </div>
  );
}

export default NotFoundPage;