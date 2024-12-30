import React from 'react'
import Picture from '../../assets/image/Banner02.jpg'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '../ui/button';
import { BackgroundGradient } from "@/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";


const PopularRoom = () => {
  return (
    <div className="text-center max-w-7xl mx-auto">
      <div className="flex items-center justify-between p-1">
        <div className="text-start w-[50%]">
          <h1 className="text-4xl font-semibold my-1">Our Most Popular Room</h1>
          <p className="text-lg font-light ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus a
            doloremque ut aperiam neque aspernatur libero explicabo modi esse
            illo, aut voluptates deserunt error expedita accusantium eum fugiat
            quis possimus.
          </p>
        </div>
        <div className="text-end mr-4 mt-6">
          <Button className="bg-blue-700">See More</Button>
        </div>
      </div>

      <div className="p-1 flex items-center gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
              <img
                src={Picture}
                alt="jordans"
                className="object-contain h-[200px] w-full"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Air Jordan 4 Retro Reimagined
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                February 17, 2024. Your best opportunity to get these right now
                is by entering raffles and waiting for the official releases.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularRoom
