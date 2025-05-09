
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

  return (
    <nav className="bg-black text-pink-300 px-3 py-2 lg:px-4 lg:py-3 fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-base lg:text-lg font-bold ml-2">SYEDA</h1>

        {/* Menu Links */}
        <ul className="flex space-x-6 mr-4 mt-1">
          {[
            { href: "/", label: "Home", icon: faHome },
            { href: "/about", label: "About", icon: faUser },
            { href: "/skills", label: "Skills", icon: faCode },
            { href: "/projects", label: "Projects", icon: faProjectDiagram },
            { href: "/contact", label: "Contact", icon: faEnvelope },
          ].map(({ href, label, icon }) => (
            <li key={label} className="relative group">
              <Link href={href} className="text-sm">{label}</Link>
              <div className="absolute bottom-[-1.25rem] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
                <FontAwesomeIcon icon={icon} className="text-gray-800 text-xs" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center">
        <h1 className="text-base font-bold ml-2">SYEDA</h1>
        <button onClick={toggleMenu} className="text-xl mr-3">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="lg:hidden bg-blue-400 text-black p-3 space-y-3 text-sm">
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHome} />
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} />
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCode} />
            <Link href="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faProjectDiagram} />
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}

      {/* Divider */}
      <div className="bg-white w-full h-0.5 mt-1 lg:mt-2"></div>
    </nav>
  );
};

export default Navbar;
