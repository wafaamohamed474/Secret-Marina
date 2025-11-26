"use client"
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok } from "react-icons/fa";
import LinkAtom from "../atoms/LinkAtom";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export const quickLinks = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "about" },
  { label: "Categories", href: "categories" },
  { label: "Destinations", href: "destinations" },
  { label: "Booking", href: "booking" },
];

export const supportLinks = [
  { label: "Contact Us", href: "contact" },
  { label: "Help & Support", href: "help" },
  { label: "Terms & Conditions", href: "terms" },
  { label: "Privacy Policy", href: "privacy" },
];

export const iconLinks = [
  { icon: <FaSnapchat size={24} />, href: "https://snapchat.com" },
  { icon: <FaInstagram size={24} />, href: "https://instagram.com" },
  { icon: <FaTiktok size={24} />, href: "https://tiktok.com" },
  { icon: <FaXTwitter size={24} />, href: "https://twitter.com" },
  { icon: <FaFacebook size={24} />, href: "https://facebook.com" },
];

// Component
export default function FooterLinks() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  return (
    <div className="md:flex md:flex-wrap  lg:flex justify-start w-full gap-20 ">
      {/* Quick Links */}
      <div className="flex  flex-col   gap-4 mb-8 lg:mb-0">
        <h4 className="font-bold text-base text-(--background)">Quick Links</h4>
        {quickLinks.map((link) => (
          <LinkAtom key={link.href} label={link.label} href={`/${currentLocale}/${link.href}`} />
        ))}
      </div>

      {/* Support Links */}
      <div className="flex flex-col gap-4  mb-8 lg:mb-0">
        <h4 className="font-bold text-base text-(--background)">Support</h4>
        {supportLinks.map((link) => (
          <LinkAtom key={link.href} label={link.label} href={`/${currentLocale}/${link.href}`} />
        ))}
      </div>

      <div className="flex flex-col  gap-4  mb-8 lg:mb-0">
        <h4 className="font-bold text-base text-(--background)">Contact</h4>
        <LinkAtom
          label="Email: support@secretmarina.com"
          href="mailto:support@secretmarina.com"
        />
        <LinkAtom label="Phone: +966 XXX XXX XXX" href="tel:+966XXXXXXXXX" />
        <div className="flex justify-start lg:justify-between items-center gap-5">
          {iconLinks.map((link) => (
            <LinkAtom key={link.href} icon={link.icon} href={link.href} />
          ))}
        </div>
      </div>
    </div>
  );
}
