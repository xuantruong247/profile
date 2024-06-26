"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { navLinks } from "../../../utils/constant";
import logo from "../../../../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClose = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-10 md:px-20 py-2">
        <Link className="text-2xl md:text-5xl text-white" href={"/"}>
          <Image src={logo} alt="logo" height={100} width={150} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md-w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  handleOnclick={() => {  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} handleOnclick={handleClose} />
      ) : null}
    </nav>
  );
};

export default Navbar;
