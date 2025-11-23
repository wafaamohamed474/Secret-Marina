"use client";
import Link from "next/link";
import React from "react";

type LinkAtomProps = {
  label?: string; // optional text
  href: string; // link URL
  icon?: React.ReactNode; // optional icon
  className?: string; // optional extra classes
};

export default function LinkAtom({
  label,
  href,
  icon,
  className,
}: LinkAtomProps) {
  // If icon is provided, render as <a> to allow target="_blank"
  if (icon) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-(--hover-link) transition-colors duration-200 text-sm font-md text-(--background) ${
          className || ""
        }`}
      >
        {icon}
      </a>
    );
  }

  // Default: render Next.js Link for internal/text links
  return (
    <Link
      href={href}
      className={`hover:text-(--hover-link) transition-colors duration-200 text-sm font-md text-(--background) ${
        className || ""
      }`}
    >
      {label}
    </Link>
  );
}
