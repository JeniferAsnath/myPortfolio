"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Theme from "./Theme";

const Navigation = ({ toggleNav }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { id: 1, title: "Accueil", href: "/" },
    { id: 2, title: "Projets", href: "/projets" },
    { id: 3, title: "Prestations", href: "/prestations" },
    { id: 4, title: "À Propos", href: "/about" },

  ];

  const handleToggleNav = () => {
    setNavOpen(!navOpen);
    toggleNav();
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`flex  justify-evenly  items-center   px-4 py-4 text-slate-300 bg-white fixed top-0 left-0 z-50 ${
        darkMode ? "dark" : "light"
      }   bg-white w-screen dark:bg-black `}
    >
      <div className="flex-3 items-center ">
        <h1 className="text-4xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black text-currentColor dark:text-slate-300"
            href=""
            target=""
            rel="noreferrer"
          >
            Logo
          </Link>
        </h1>
      </div>
      <div className="flex-3  items-center">
        <ul className="ml-auto hidden md:flex ">
          {links.map(({ id, title, href }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-slate-300 hover:scale-105 hover:text-white hover:text-xl duration-200"
            >
              <Link className="text-currentColor dark:text-slate-300 rounded-md hover:border-b-2 " href={href} >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex-3 items-center bg-${
          darkMode ? " accent-inherit" : " accent-inherit"
        } px-2 rounded-2xl`}
      >
        <div className="flex items-center  rounded-lg">
          <div className="ml-auto flex items-center ">
            <div className="flex items-center gap-3 mr-4">
              <div className="flex gap-4 items-center">
                <FontAwesomeIcon className="text-currentColor dark:text-slate-300 "  icon={faWhatsapp} size="lg" />
                <Link href="https://www.linkedin.com/in/jenifer-asnath-lungwangu-031418280"><FontAwesomeIcon className="text-currentColor dark:text-slate-300"  icon={faLinkedin} size="lg" /></Link>
                <FontAwesomeIcon className="text-currentColor dark:text-slate-300"  icon={faInstagram} size="lg" />
              </div>

              <Theme />
            </div>
            <button
              className="text-gray-500 md:hidden"
              onClick={handleToggleNav}
            >
              {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
      </div>

      {navOpen && (
        <ul className="flex flex-col justify-center items-center fixed top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-40">
          {links.map(({ id, title, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link href={href} onClick={handleToggleNav}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
