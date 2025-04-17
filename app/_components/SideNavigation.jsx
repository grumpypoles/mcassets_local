"use client";

import {
  ScaleIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  LifebuoyIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  WalletIcon,
  GlobeAsiaAustraliaIcon,
  WrenchScrewdriverIcon, 
  WrenchIcon
} from "@heroicons/react/24/solid";

import SignOutButton from "@/app/_components/SignOutButton";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    {
    name: "User profile",
    href: "/account/profile",
    icon: <UserIcon className="w-5 h-5 text-primary-600" />,
  },
 
  {
    name: "Settings",
    href: "/account/admin",
    icon: <WrenchScrewdriverIcon className="w-5 h-5 text-primary-600" />,
  },
];

const navSubLinks = [
  {
    name: "Categories",
    href: "/account/admin/categories",
    icon: <WrenchIcon className="w-5 h-5 text-primary-600" />,
  },
  {
    name: "Locations",
    href: "/account/admin/locations",
    icon: <WrenchIcon className="w-5 h-5 text-primary-600" />,
  },
  
 
  
  ];




const SideNavigation = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (name) => {
    setActiveMenu((prev) => (prev === name ? null : name));
  };

  return (
    <ul className="flex flex-col h-full gap-2 text-lg">
      {navLinks.map((link) => (
        <li key={link.name}>
          <div onClick={() => handleMenuClick(link.name)}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? "bg-primary-800" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </div>

          {link.name === "Settings" && activeMenu === "Settings" && (
            <>
              <ul className="pl-5">
                {navSubLinks.map((subs) => (
                  <li key={subs.name}>
                    <Link
                      className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                        pathname === subs.href ? "bg-primary-800" : ""
                      }`}
                      href={subs.href}
                    >
                      {subs.icon}
                      <span>{subs.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SideNavigation;
