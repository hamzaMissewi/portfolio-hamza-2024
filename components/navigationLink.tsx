"use client";
import React, { ReactNode } from "react";
import { clsx } from "clsx";
import Link, { LinkProps } from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function NavigationLink({ href, target, children, ...rest }: LinkProps & { children: ReactNode } & {
  target?: React.HTMLAttributeAnchorTarget
}) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;
  return (
    <Link target={target} aria-current={isActive ? "page" : undefined}
          className={clsx("inline-block px-2 py-3 transition-colors", isActive ? "text-white" : "text-gray-400" +
            " hover:text-gray-200")} href={href} {...rest}>{children}</Link>
  );
}

export default NavigationLink;