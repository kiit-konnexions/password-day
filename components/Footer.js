import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-center space-x-3">
        <div className="h-[1px] w-32 bg-primary"></div>
        <span className="text-xs font-semibold text-primary">FOLLOW US</span>
        <div className="h-[1px] w-32 bg-primary"></div>
      </div>
      <div className="flex items-center justify-center text-xl space-x-4 mt-5 text-primary">
        <Link
          target="_blank"
          href="https://instagram.com/kiitkonnexions?igshid=YmMyMTA2M2Y="
        >
          <i class="bi bi-instagram"></i>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/konnexions-kiit/"
        >
          <i class="bi bi-linkedin"></i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
