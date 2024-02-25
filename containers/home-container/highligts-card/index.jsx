import React from "react";
import Image from "next/image";
import { CARD_INFO } from "./constant";
function HighlightsCard() {
  return (
    <section className="bg-cod-gray text-white px-6 py-16 lg:py-[200px] md:px-24">
      <div className="container mx-auto">
        <div>
          {CARD_INFO.map((item) => (
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-60 text-center lg:text-start ">
              <div className="flex flex-col gap-2 md:max-w-[445px] md:mx-auto lg:mx-0">
                <h3 className="heading-m text-[40px] lg:text-[48px]">
                  {item.title}
                </h3>
                <p className="body-text-2">{item.content}</p>
              </div>

              <div className="flex flex-col gap-6 ">
                {item.cards.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col gap-9 md:flex-row  "
                  >
                    <div className="relative w-full h-[245px] md:w-[128px] md:h-24 ">
                      <Image
                        src={card.images.mobile}
                        alt={`${card.title} image`}
                        fill
                        placeholder="blur"
                        className="md:hidden"
                      />
                      <Image
                        src={card.images.tablet}
                        alt={`${card.title} image`}
                        fill
                        placeholder="blur"
                        className="hidden md:block"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 md:text-start  ">
                      <h6 className="heading-l">{card.title}</h6>
                      <p className="body-text-2">{card.content}</p>
                      <hr className="mt-12 bg-[#979797] h-[1px] border-none md:hidden lg:block" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightsCard;
