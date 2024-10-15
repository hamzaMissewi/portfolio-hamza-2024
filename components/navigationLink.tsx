"use client";
import React, { ReactNode } from "react";
import { clsx } from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

// import { enqueueSnackbar } from "notistack";

function NavigationLink({ href, target, children, ...rest }: LinkProps & { children: ReactNode } & {
  target?: React.HTMLAttributeAnchorTarget
}) {
  // const selectedLayoutSegment = useSelectedLayoutSegment();
  // const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const pathname = usePathname();
  const isActive = pathname === href;
  console.log("href ", href);
  console.log("pathname ", pathname);
  return (
    <Link target={target} aria-current={isActive ? "page" : undefined}
          className={clsx("inline-block px-2 py-3 transition-colors", isActive && "text-red-400")}
          href={href} {...rest}>{children}</Link>
  );
}

export default NavigationLink;