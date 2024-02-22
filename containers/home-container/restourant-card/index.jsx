import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { CARD_INFO } from "./constant";

export default function RestaurantCard() {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto px-6 md:px-[97px] lg:px-0 ">
        <div className="flex flex-col gap-24">
          {CARD_INFO.map((item, i) => (
            <div
              className="flex flex-col gap-20 relative lg:gap-[125px] -mt-16 lg:flex-row lg:justify-around lg:last:-mb-20 odd:md:before:content-bottom-right odd:md:before:absolute odd:md:before:-left-48 odd:md:before:top-[600px] odd:md:before:z-10 "
              key={item.id}
            >
              <div
                className={clsx(
                  "relative w-full h-[400px] md:h-[360px] lg:w-[540px] lg:h-[720px]  ",
                  {
                    "lg:order-1": i % 2 === 0,
                    "lg:order-2 md:before:content-lines md:before:absolute md:before:-right-16 md:before:bottom-14 before:z-30":
                      i % 2 !== 0,
                  }
                )}
              >
                <Image
                  className="md:hidden shadow-2xl z-20"
                  src={item.image.mobile}
                  alt={`${item.title} image`}
                  placeholder="blur"
                  fill
                />
                <Image
                  className="hidden md:block lg:hidden shadow-2xl z-20"
                  src={item.image.tablet}
                  alt={`${item.title} image`}
                  placeholder="blur"
                  fill
                />
                <Image
                  className="hidden  lg:block shadow-2xl z-20"
                  src={item.image.desktop}
                  alt={`${item.title} image`}
                  placeholder="blur"
                  fill
                />
              </div>
              <div
                className={clsx(
                  "flex flex-col lg:justify-center gap-4 text-center lg:text-start text-ebony-clay mb-20 md:px-10 lg:px-0 lg:max-w-[445px]",
                  { "order-2": i % 2 === 0, "order-1": i % 2 !== 0 }
                )}
              >
                <h4 className="text-[32px] font-bold leading-10 tracking-[-0.4px] md:heading-m text-pretty  ">
                  {item.title}
                </h4>
                <p className="body-text-2 text-pretty ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
