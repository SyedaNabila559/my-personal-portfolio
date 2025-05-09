"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
  faBars,
  faTimes,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "/", label: "Home", icon: faHome },
    { href: "/about", label: "About", icon: faUser },
    { href: "/skills", label: "Skills", icon: faCode },
    { href: "/projects", label: "Projects", icon: faProjectDiagram },
    { href: "/contact", label: "Contact", icon: faEnvelope },
  ];

  return (
    <nav className="bg-black text-pink-300 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-lg font-bold">SYEDA</h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map(({ href, label, icon }) => (
            <li key={label} className="relative group">
              <Link href={href} className="text-sm hover:text-white transition">
                {label}
              </Link>
              <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-300 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
                <FontAwesomeIcon icon={icon} className="text-gray-800 text-xs" />
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button className="lg:hidden text-xl text-pink-300" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden bg-blue-400 text-black px-4 pb-4 space-y-3 text-sm">
          {navItems.map(({ href, label, icon }) => (
            <li key={label} className="flex items-center space-x-2">
              <FontAwesomeIcon icon={icon} />
              <Link href={href} onClick={closeMenu}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
