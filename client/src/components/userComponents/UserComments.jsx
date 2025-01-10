import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import visitor from "../../assets/image/visitor.png"


const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function UserComments() {
  return (
    <div className="max-w-7xl mx-auto rounded-md bg-transparent border-2 border-[#2b2864] my-3">
      <div className=" rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <img src={visitor} alt="" />
          <h1 className="text-2xl font-extrabold uppercase text-white">
            <span className="text-[#36B6F0]">Visitors</span> thoughts about us
          </h1>
          <h1 className="font-semibold text-gray-400">
            Visitors have always expressed their love for Travel24.
          </h1>
        </div>
      </div>
      <div className="h-[20rem] max-w-7xl mx-auto rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
