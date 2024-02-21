import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-cod-gray text-white w-full  ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[120px] lg:gap-[190px]  md:items-start items-center gap-8 px-6 md:px-10 py-[78px]">
          <Link href={"/"}>
            <Logo />
          </Link>
          <div className="md:flex md:flex-col lg:flex-row md:gap-8 lg:gap-[130px] ">
            <div className="text-center md:text-start uppercase body-text-2 text-[14px] ">
              <p>Marthwaite, Sedbergh</p>
              <p>Cumbria</p>
              <p>+00 44 123 4567</p>
            </div>
            <div className="text-center md:text-start uppercase body-text-2 text-[14px] ">
              <p>Open times</p>
              <p>MON - FRI: 09:00 AM - 10:00 PM</p>
              <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
