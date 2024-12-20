
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import "../style/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Project" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          {/* Logo */}
          <Link href="/">
            <h1
              data-aos="fade-down"
              className="navbar-logo">
              Khalid Ghani
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul data-aos="fade-down" className="navbar-menu">
            {navLinks.map((link) => (
              <li key={link.href} className="navbar-item">
                <Link href={link.href} className="navbar-link">
                  {link.label}
                </Link>
                <span className="navbar-underline"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            data-aos="fade-left"
            className="navbar-toggle"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul data-aos="fade-down-left" className="mobile-menu">
            {navLinks.map((link) => (
              <li key={link.href} className="mobile-menu-item">
                <Link href={link.href} className="mobile-menu-link">
                  {link.label}
                </Link>
                <span className="mobile-menu-underline"></span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;