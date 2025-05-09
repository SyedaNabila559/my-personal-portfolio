"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface NavLinkType {
  title: string;
  path: string;
}

const navLinks: NavLinkType[] = [
  {
    title: "Home",
    path: "#home", 
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
    {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Contact",
    path: "#contact", 
  },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] w-full">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="#portfolio" 
          className="text-2xl md:text-5xl text-white font-semibold ml-[10px]"
        >
          Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded-md border-slate-200 text-slate-200 hover:text-white hover:border-white transition-all duration-300"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-xl font-medium text-white hover:text-purple-600 hover:underline transition-all duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`mobile-menu-links ${navbarOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="flex flex-col p-4 space-y-4 mt-4 bg-[#121212]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-xl font-medium text-white hover:text-purple-600 hover:underline transition-all duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
