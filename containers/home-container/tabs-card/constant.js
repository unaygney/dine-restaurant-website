// images
import FamilyImageMobile from "./images/family-gathering-mobile.jpg";
import FamilyImageTablet from "./images/family-gathering-tablet.jpg";
import FamilyImageDesktop from "./images/family-gathering-desktop.jpg";

import SpecialEventsMobile from "./images/special-events-mobile.jpg";
import SpecialEventsTablet from "./images/special-events-tablet.jpg";
import SpecialEventsDesktop from "./images/special-events-desktop.jpg";

import SocialImageMobile from "./images/social-events-mobile.jpg";
import SocialImageTablet from "./images/social-events-tablet.jpg";
import SocialImageDesktop from "./images/social-events-desktop.jpg";

export const TABS = [
  {
    value: "family",
    id: 0,
    title: "Family Gathering",
    content:
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    images: {
      mobile: FamilyImageMobile,
      tablet: FamilyImageTablet,
      desktop: FamilyImageDesktop,
    },
  },
  {
    value: "special",
    id: 1,
    title: "Special Events",
    content:
      "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    images: {
      mobile: SpecialEventsMobile,
      tablet: SpecialEventsTablet,
      desktop: SpecialEventsDesktop,
    },
  },
  {
    value: "social",
    id: 2,
    title: "Social Events",
    content:
      "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    images: {
      mobile: SocialImageMobile,
      tablet: SocialImageTablet,
      desktop: SocialImageDesktop,
    },
  },
];

export const BUTTONS = [
  {
    id: 0,
    title: "Family Gathering",
    value: "family",
  },
  {
    id: 1,
    title: "Special Events",
    value: "special",
  },
  {
    id: 2,
    title: "Social Events",
    value: "social",
  },
];
