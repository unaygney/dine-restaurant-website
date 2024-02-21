import React from "react";
import Logo from "@/public/logo.svg";
import Button from "@/components/Button";
import Link from "next/link";
export default function HomeHero() {
  return (
    <div className=" w-full h-[748px] md:h-[992px] lg:h-[820px]  bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop lg:bg-cod-gray bg-cover lg:bg-contain lg:bg-right bg-no-repeat">
      <div className="container mx-auto w-full h-full">
        <div className="w-full h-full px-6 md:px-10 flex flex-col justify-center items-center gap-6  text-white text-center lg:items-start lg:text-start ">
          <div className="lg:pb-10">
            <Logo />
          </div>
          <h1 className="font-light  text-[32px] md:text-5xl text-pretty tracking-[-0.4px] md:tracking-[-0.6px]  md:max-w-[16ch] leading-10 lg:heading-xl ">
            Exquisite dining since 1989
          </h1>
          <p className="body-text-2 md:body-text-1 lg:max-w-[55ch] text-pretty">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <Link href={"/booking"}>
            <Button variant="secondary" title="Book a table" />
          </Link>
        </div>
      </div>
    </div>
  );
}
