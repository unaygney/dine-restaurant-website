"use client";
import React, { useState } from "react";
import { TABS, BUTTONS } from "./constant";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/Button";
import Link from "next/link";

function TabsCard() {
  const [tabName, setTabName] = useState("family");
  const activeTab = TABS.find((tab) => tab.value === tabName);
  console.log(activeTab);
  return (
    <section className="w-full px-6 bg-white">
      <div className="container mx-auto">
        <div className="py-20">
          <div className="flex flex-col gap-12 text-center">
            <div className="relative w-full h-[400px]">
              <Image
                src={activeTab.images.mobile}
                alt={activeTab.title}
                fill
                placeholder="blur"
              />
            </div>

            <div className="flex flex-col gap-4">
              {BUTTONS.map((item) => (
                <button
                  onClick={() => setTabName(item.value)}
                  className={clsx(
                    "font-semibold leading-7 tracking-[2.5px] text-[17px] text-[#979797] uppercase",
                    { "text-opacity-50": tabName !== item.value },

                    { "relative custom-border-b": tabName === item.value }
                  )}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="heading-m text-[32px]">{activeTab.title}</h4>
              <p className="body-text-2">{activeTab.content}</p>
              <Link href={"/booking"}>
                <Button
                  className="bg-black w-[245px] mx-auto"
                  title="Book a table"
                  variant="primary"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabsCard;
