"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";
import BellWithBadge from "../atoms/BellWithBadge";
export default function NavLinks({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

 const links = [
    { href: "home", label: "Home" },
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

  const isAuth = true;
  const showAuthLinks = isAuth ? authLinks : links;

  return (
    <nav className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
      {showAuthLinks.map((link) => (
       <Link
          key={link.href}
          href={`/${currentLocale}/${link.href}`}
          className={`font-medium text-lg ${
            pathname === `/${currentLocale}/${link.href}`
              ? "text-(--active-link)"
              : "text-(--nav-links)"
          }`}
          onClick={onLinkClick}
        >
          {link.label}
        </Link>
      ))}

      {isAuth ? (
        <div className="flex gap-3">
          <BellWithBadge count={7} />

          <Button className="bg-(--primary-foreground) text-(--primary)">
            <FaSearch />
          </Button>
        </div>
      ) : (
        <Button className="bg-(--primary-foreground) text-(--primary)">
          <FaSearch />
        </Button>
      )}
    </nav>
  );
}
