"use client";

import Image from "next/image";
import { FaFacebook, FaTiktok, FaInstagram, FaSnapchat } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterLogoImg from "@/assets/images/footer.png";
import LinkAtom from "../atoms/LinkAtom";
import AppleStore from "@/assets/images/AppleStore.png";
import GooglePlay from "@/assets/images/googleplay.png";

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Categories", href: "/categories" },
  { label: "Destinations", href: "/destinations" },
  { label: "Booking", href: "/booking" },
];

export const supportLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Help & Support", href: "/help" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export const iconLinks = [
  { icon: <FaSnapchat size={24} />, href: "https://snapchat.com" },
  { icon: <FaInstagram size={24} />, href: "https://instagram.com" },
  { icon: <FaTiktok size={24} />, href: "https://tiktok.com" },
  { icon: <FaXTwitter size={24} />, href: "https://twitter.com" },
  { icon: <FaFacebook size={24} />, href: "https://facebook.com" },
];

export default function FooterAlt() {
  return (
    <footer className="w-full py-20 bg-(--primary) text-white flex justify-center items-center ">
      <div className="container-custom  ">
        {/* Logo Column */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 lg:col-span-1">
            <div className="flex md:justify-start justify-center">
              <Image
                src={FooterLogoImg}
                alt="Logo"
                className="lg:w-full h-auto"
              />
            </div>

            <p className="text-(--background) text-base font-medium text-center md:text-left lg:w-3/4">
              Your trusted gateway to exceptional sea experiences across Saudi
              Arabia.
            </p>

            <div className="flex justify-center md:justify-start w-full gap-4 py-5">
              <div>
                <Image
                  src={AppleStore}
                  width={100}
                  alt="Apple Store"
                  className="h-full"
                />
              </div>
              <div>
                <Image
                  src={GooglePlay}
                  width={100}
                  alt="Google Play"
                  className="h-full"
                />
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-4  ">
            <h4 className="font-bold text-base text-(--background)">
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <LinkAtom key={link.href} label={link.label} href={link.href} />
            ))}
          </div>

          {/* Support Links Column */}
          <div className="flex flex-col gap-4 ">
            <h4 className="font-bold text-base text-(--background)">Support</h4>
            {supportLinks.map((link) => (
              <LinkAtom key={link.href} label={link.label} href={link.href} />
            ))}
          </div>

          {/* Social Icons Column */}
          <div className="flex flex-col gap-4  ">
            <h4 className="font-bold text-base text-(--background)">Contact</h4>
            <LinkAtom
              label="Email: support@secretmarina.com"
              href="mailto:support@secretmarina.com"
            />
            <LinkAtom
              label="Phone: +966 XXX XXX XXX"
              href="tel:+966XXXXXXXXX"
            />
            <div className="flex justify-start lg:justify-between items-center gap-5">
              {iconLinks.map((link) => (
                <LinkAtom key={link.href} icon={link.icon} href={link.href} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center w-full text-sm text-gray-300">
          © 2025 Secret Marina. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
