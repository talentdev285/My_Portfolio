import React, { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled!"); // Debugging log
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <a href="/">
          Murshida <span>Khatun</span>
        </a>
      </div>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu />
      </button>
      <nav className={`header-left ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/murshida2023/">
              <FaLinkedinIn /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/talentdev285">
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
        <button className="button-87">Contact</button>
      </nav>
    </header>
  );
}
