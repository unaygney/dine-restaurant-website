// images
import SablmonMobileImage from "./images/salmon-mobile.jpg";
import SalmonTabletImage from "./images/salmon-desktop-tablet.jpg";

import BeefMobileImage from "./images/beef-mobile.jpg";
import BeefTabletImage from "./images/beef-desktop-tablet.jpg";

import ChocolateMobileImage from "./images/chocolate-mobile.jpg";
import ChocolateTabletImage from "./images/chocolate-desktop-tablet.jpg";

export const CARD_INFO = [
  {
    title: "A few highlights from our menu",
    content:
      "We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.",
    cards: [
      {
        id: 0,
        title: "Seared Salmon Fillet",
        content:
          "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
        images: {
          mobile: SablmonMobileImage,
          tablet: SalmonTabletImage,
        },
      },
      {
        id: 1,
        title: "Rosemary Filet Mignon",
        content:
          "Our prime beef served to your taste with a delicious choice of seasonal sides.",
        images: {
          mobile: BeefMobileImage,
          tablet: BeefTabletImage,
        },
      },
      {
        id: 2,
        title: "Summer Fruit Chocolate Mousse",
        content:
          "Creamy mousse combined with summer fruits and dark chocolate shavings.",
        images: {
          mobile: ChocolateMobileImage,
          tablet: ChocolateTabletImage,
        },
      },
    ],
  },
];
