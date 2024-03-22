"use client";
import React from "react";
import NavLink from "./NavLink";

interface MenuProps {
  links: { path: string; title: string }[];
  handleOnclick: any;
}

const MenuOverlay: React.FC<MenuProps> = ({ links, handleOnclick }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            handleOnclick={handleOnclick}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
