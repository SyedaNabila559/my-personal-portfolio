"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
  faBars,
  faTimes,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024); // lg breakpoint
  };

  useEffect(() => {
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/", label: "Home", icon: faHome },
    { href: "/about", label: "About", icon: faUser },
    { href: "/skills", label: "Skills", icon: faTools },
    { href: "/projects", label: "Projects", icon: faProjectDiagram },
    { href: "/contact", label: "Contact", icon: faEnvelope },
  ];

  return (
    <nav className="bg-black text-pink-300 px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 fixed top-0 left-0 w-full z-50">
      {isMobile ? (
        // Mobile Navbar
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold ml-4">SYEDA</h1>
            <button onClick={toggleMenu} className="text-2xl mr-4">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>

          {isOpen && (
            <ul className="bg-blue-400 text-black p-4 space-y-4 mt-2 rounded-md">
              {menuItems.map((item) => (
                <li key={item.label} className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={item.icon} />
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="text-lg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        // Desktop Navbar
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ml-4">SYEDA</h1>
          <ul className="flex space-x-8 mr-8 mt-2">
            {menuItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link href={item.href} className="text-lg">{item.label}</Link>
                <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
                  <FontAwesomeIcon icon={item.icon} className="text-gray-800" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white w-full h-1 mt-3 rounded-full"></div>
    </nav>
  );
};

export default Navbar;
