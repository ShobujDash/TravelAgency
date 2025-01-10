import { Vortex } from '@/components/ui/vortex';
import MasterLayout from '@/components/userComponents/Layout/MasterLayout'
import ServiceComponent from '@/components/userComponents/ServicesComponent';
import React from 'react'

const ServicePage = () => {
  return (
    <MasterLayout>
      <section className="py-2 bg-transparent">
        <div className="w-full mx-auto rounded-md  h-[18rem] overflow-hidden">
          <Vortex
            backgroundColor="transparent"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
          >
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
              <span className="text-blue-500"> Services </span> you will get
              from <span className="text-yellow-600">Travel24</span> !
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              Discover your dream destinations with Travel24, where seamless
              planning meets unforgettable adventures. Explore, book, and embark
              on journeys crafted just for you!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                Order now
              </button>
              <button className="px-4 py-2  text-white ">Watch trailer</button>
            </div>
          </Vortex>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <ServiceComponent/>
        </div>
      </section>
    </MasterLayout>
  );
}

export default ServicePage
