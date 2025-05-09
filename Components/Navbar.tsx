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
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-pink-300 px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl lg:text-2xl font-bold ml-4">SYEDA</h1>

        {/* Menu Links */}
        <ul className="flex space-x-8 mr-8 mt-2">
          <li className="relative group">
            <Link href="/" className="text-lg">Home</Link>
            <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
              <FontAwesomeIcon icon={faHome} className="text-gray-800" />
            </div>
          </li>
          <li className="relative group">
            <Link href="/about" className="text-lg">About</Link>
            <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
              <FontAwesomeIcon icon={faUser} className="text-gray-800" />
            </div>
          </li>
          <li className="relative group">
            <Link href="/skills" className="text-lg">Skills</Link>
            <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
              <FontAwesomeIcon icon={faTools} className="text-gray-800" />
            </div>
          </li>
          <li className="relative group">
            <Link href="/projects" className="text-lg">Projects</Link>
            <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
              <FontAwesomeIcon icon={faProjectDiagram} className="text-gray-800" />
            </div>
          </li>
          <li className="relative group">
            <Link href="/contact" className="text-lg">Contact</Link>
            <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-800" />
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center">
        <h1 className="text-xl font-bold ml-4">SYEDA</h1>
        <button onClick={toggleMenu} className="text-2xl mr-4">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="lg:hidden bg-blue-400 text-black p-4 space-y-4">
          <li className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faHome} />
            <Link href="/" onClick={() => setIsOpen(false)} className="text-lg">Home</Link>
          </li>
          <li className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faUser} />
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg">About</Link>
          </li>
          <li className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faTools} />
            <Link href="/skills" onClick={() => setIsOpen(false)} className="text-lg">Skills</Link>
          </li>
          <li className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faProjectDiagram} />
            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-lg">Projects</Link>
          </li>
          <li className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faEnvelope} />
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg">Contact</Link>
          </li>
        </ul>
      )}

      {/* Divider */}
      <div className="bg-white w-full h-1 mt-2 lg:mt-4"></div>
    </nav>
  );
};

export default Navbar;
