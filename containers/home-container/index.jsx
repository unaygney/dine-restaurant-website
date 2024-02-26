import React from "react";
import HomeHero from "./home-hero";
import RestaurantCard from "./restourant-card";
import HighlightsCard from "./highligts-card";
import Footer from "@/components/Footer";
import ReservationCard from "@/components/ReservationCard";
import TabsCard from "./tabs-card";
export default function HomeContainer() {
  return (
    <main>
      <HomeHero />
      <RestaurantCard />
      <HighlightsCard />
      <TabsCard />
      <ReservationCard />
      <Footer />
    </main>
  );
}
