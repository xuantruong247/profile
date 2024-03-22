"use client";
import React from "react";
import { NavLinkProps } from "./type";
import { Link as ScrollLink } from "react-scroll";

const NavLink: React.FC<NavLinkProps> = ({ href, title, handleOnclick }) => {
  return (
    <ScrollLink
      to={href.substring(1)}
      spy={true}
      smooth={true}
      duration={500}
      onClick={handleOnclick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-2xl rounded md:p-0 hover:text-white cursor-pointer"
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
