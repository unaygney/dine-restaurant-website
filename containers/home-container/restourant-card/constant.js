// images
import EnjoyableMobileImage from "./images/enjoyable-place-mobile.jpg";
import EnjoyableTabletImage from "./images/enjoyable-place-mobile.jpg";
import EnjoyableDesktopImage from "./images/enjoyable-place-mobile.jpg";

import LocallyMobileImage from "./images/locally-sourced-mobile.jpg";
import LocallyTabletImage from "./images/locally-sourced-mobile.jpg";
import LocallyDesktopImage from "./images/locally-sourced-mobile.jpg";

export const CARD_INFO = [
  {
    id: 0,
    image: {
      mobile: EnjoyableMobileImage,
      tablet: EnjoyableTabletImage,
      desktop: EnjoyableDesktopImage,
    },
    title: "Enjoyable place for all the family",
    description:
      "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
  },

  {
    id: 1,
    image: {
      mobile: LocallyMobileImage,
      tablet: LocallyTabletImage,
      desktop: LocallyDesktopImage,
    },
    title: "The most locally sourced food",
    description:
      "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.",
  },
];
