/* eslint-disable @next/next/no-img-element */
import React from "react";

function Header({ className }) {
  return (
    <div
      className={`${className} flex items-center justify-between h-16 lg:h-20 backdrop-blur z-30 px-6 lg:px-28`}
    >
      <p className="font-medium text-sm lg:text-base text-primary">
        4th May 2023
      </p>
      <img src="/logo.png" className="h-10 lg:h-12" alt="" />
    </div>
  );
}

export default Header;
