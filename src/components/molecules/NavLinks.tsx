"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaSearch } from "react-icons/fa"
import { Button } from "../ui/button"

export default function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/discover", label: "Discover" },
    { href: "/categories", label: "Categories" },
  ]

  return (
    <nav className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`font-medium text-lg ${
            pathname === link.href
              ? "text-(--active-link)"
              : "text-(--nav-links)"
          }`}
          onClick={onLinkClick} 
        >
          {link.label}
        </Link>
      ))}

      <Button className="bg-(--primary-foreground) text-(--primary)">
        <FaSearch />
      </Button>
    </nav>
  )
}
