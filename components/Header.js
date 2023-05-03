/* eslint-disable @next/next/no-img-element */
import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-sm lg:text-base text-primary">
        4th May 2023
      </p>
      <img src="/logo.png" className="h-10 lg:h-12" alt="" />
    </div>
  );
}

export default Header;
