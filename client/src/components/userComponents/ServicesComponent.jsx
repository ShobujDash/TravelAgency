"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import image from "../../assets/image/travelimage.webp";

const content = [
  {
    title: "Welcome to Travel24",
    description:
      "This is a travel website named Travel24. Discover destinations, plan your trips, and explore the world with us.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
        Welcome to Travel24
      </div>
    ),
  },
  {
    title: "Explore Destinations",
    description:
      "This is a travel website named Travel24. Find your next adventure and explore breathtaking destinations around the globe.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={image}
          className="h-full w-full object-cover"
          alt="Explore Destinations"
        />
      </div>
    ),
  },
  {
    title: "Plan Your Journey",
    description:
      "This is a travel website named Travel24. Use our tools to plan your perfect trip with ease and confidence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
        Plan Your Journey
      </div>
    ),
  },
  {
    title: "Travel with Ease",
    description:
      "This is a travel website named Travel24. Enjoy a seamless travel experience with our curated itineraries and travel tips.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Travel with Ease
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
