import React from "react";
import HomeHero from "./home-hero";
import RestaurantCard from "./restourant-card";
import HighlightsCard from "./highligts-card";
import Footer from "@/components/Footer";
export default function HomeContainer() {
  return (
    <main>
      <HomeHero />
      <RestaurantCard />
      <HighlightsCard />
      <Footer />
    </main>
  );
}
