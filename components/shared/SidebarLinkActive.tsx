"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLinkActive({
  label,
  href,
  targetSegment,
}: {
  label: string;
  href: string;
  targetSegment: string;
  isVisible?: boolean;
  isExpand?: boolean;
}) {
  const pathname = usePathname();
  const getLastRoute = () => {
    const pathSegments = pathname.split("/");
    const lastRoute = pathSegments[pathSegments.length - 1];

    return lastRoute.split("?")[0];
  };

  const activeSegment = getLastRoute();

  return (
    <Link
      className={`${
        activeSegment === targetSegment && " text-[#1e1e1e] dark:text-white"
      }  font-semibold text-nft-gray-2 dark:text-nft-gray-3`}
      href={href}
    >
      {label}
    </Link>
  );
}
