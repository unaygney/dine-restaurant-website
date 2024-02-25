"use client";
import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function ReservationCard() {
  return (
    <div className="w-full px-6 py-20 bg-footer-hero-mobile md:bg-footer-hero-tablet lg:bg-footer-hero-desktop bg-no-repeat bg-cover">
      <div className="container mx-auto">
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between gap-5 text-white text-center">
          <h3 className="heading-m text-[32px] lg:text-[48px] ">
            Ready to make a reservation?
          </h3>
          <Link href={"/booking"}>
            <Button title="Book a Table" variant="secondary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
