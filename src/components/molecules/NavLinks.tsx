"use client";

import Link from "next/link";
import { useParams, useSelectedLayoutSegments } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";
import BellWithBadge from "../atoms/BellWithBadge";
import searchImg from "@/assets/images/search.svg"
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Image from "next/image";
import {NotificationMenu} from "./NotificationMenu";

export default function NavLinks({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  // Get dynamic route params (locale) from Next.js
  const params = useParams();
  const segments = useSelectedLayoutSegments(); // page segments (e.g., ["home"])
  const locale = params?.locale || "en"; // default locale
  const currentPage = segments[0] || ""; // first page segment

  // Links
  const publicLinks = [
    { href: "", label: "Home" },
    { href: "about", label: "About Us" },
    { href: "discover", label: "Discover" },
    { href: "categories", label: "Categories" },
  ];

  const authLinks = [
    { href: "home", label: "Home" },
    { href: "categories", label: "Categories" },
    { href: "booking", label: "Booking" },
    { href: "favorites", label: "Favorites" },
    { href: "settings", label: "Settings" },
  ];

  // Auth state from cookie
  // const token = Cookies.get("token");
  // const isAuth = Boolean(token);
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuth(!!token);
  }, []);

  const linksToShow = isAuth ? authLinks : publicLinks;

  return (
    <nav className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
      {linksToShow.map((link) => {
        const fullHref = `/${locale}/${link.href}`;

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
        {isAuth &&   <NotificationMenu/>}
        <Button className="bg-(--primary-foreground) text-(--primary) p-2">
           <Image src={searchImg} alt="search img" className="w-6 h-6"/>
        </Button>
      </div>
    </nav>
  );
}
