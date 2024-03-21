import Link from "next/link";
import React from "react";
import { NavLinkProps } from "./type";

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-2xl rounded md:p-0 hover:text-white"
    >{title}</Link>
  );
};

export default NavLink;
