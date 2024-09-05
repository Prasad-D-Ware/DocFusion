import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href={"/"} className="md:flex-1">
        <div className="flex gap-1 items-center ">
          <Image
            src={"/assets/icons/logo-icon.svg"}
            alt="Logo without name"
            width={55}
            height={14}
            className=""
          />
          <h1 className="font-bold text-xl hidden md:block">DocFusion</h1>
        </div>
      </Link>
      {children}
    </div>
  );
};

export default Header;
