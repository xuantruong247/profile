"use client";
import React from "react";
import { tabButtonProps } from "./type";

const TabButton: React.FC<tabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
