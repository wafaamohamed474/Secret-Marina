"use client";

import Link from "next/link";
import { useParams, useSelectedLayoutSegments } from "next/navigation";
import { Button } from "../ui/button";
import searchImg from "@/assets/images/search.svg";
import Image from "next/image";
import { NotificationMenu } from "./NotificationMenu";

export default function NavLinks({
  onLinkClick,
  isAuth,
}: {
  onLinkClick?: () => void;
  isAuth?: boolean;
}) {
  const params = useParams();
  const segments = useSelectedLayoutSegments(); // page segments (e.g., ["home"])
  const locale = params?.locale || "en"; // default locale
  const currentPage = segments[0] || ""; // first page segment

  // Links
  const publicLinks = [
    { href: "", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#discover", label: "Discover" },
    { href: "#categories", label: "Categories" },
  ];

  const authLinks = [
    { href: "home", label: "Home" },
    { href: "/home/categories", label: "Categories" },
    { href: "/home/booking", label: "Booking" },
    { href: "/home/favorites", label: "Favorites" },
    { href: "/home/settings", label: "Settings" },
  ];

  const linksToShow = isAuth ? authLinks : publicLinks;

  return (
    <nav className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
      {linksToShow.map((link) => {
        const fullHref = link.href.startsWith("#")
          ? `/${locale}${link.href}` // <-- correct: /ar#about
          : `/${locale}/${link.href}`;

        const isActive =
          currentPage === link.href || (link.href === "" && currentPage === "");

        return (
          <Link
            key={link.href}
            href={fullHref}
            className={`font-medium text-lg ${
              isActive ? "text-(--active-link)" : "text-(--nav-links)"
            }`}
            onClick={onLinkClick}
          >
            {link.label}
          </Link>
        );
      })}

      <div className="flex gap-3">
        {isAuth && <NotificationMenu />}
        <Button className="bg-(--primary-foreground) text-(--primary) p-2">
          <Image src={searchImg} alt="search img" className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
}
