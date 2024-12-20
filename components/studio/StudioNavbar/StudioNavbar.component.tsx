import Link from "next/link";
import React, { ReactNode } from "react";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

interface StudioNavbarProps {
  renderDefault: () => ReactNode;
}

export default function StudioNavbar({
  renderDefault,
}: StudioNavbarProps | any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#ffcc00]">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6 text-[#ffcc00]" />
          Go To Website
        </Link>
      </div>
      <>{renderDefault()}</>
    </div>
  );
}
