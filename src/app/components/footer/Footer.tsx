import React from "react";
import logo from "../../../../public/logo.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border broder-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="sm:container p-12 flex justify-between">
        <Image src={logo} alt="logo" height={100} width={150}/>
        <p className="text-[#ADB7BE]">All rights reserved &copy; XuanTruong.</p>
      </div>
    </footer>
  );
};

export default Footer;
