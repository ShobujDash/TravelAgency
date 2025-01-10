import { LampContainer } from '@/components/ui/lamp';
import { motion } from "framer-motion";
import MasterLayout from '@/components/userComponents/Layout/MasterLayout'
import React from 'react'
import { GalleryGridLayout } from '@/components/userComponents/GalleryGridLayout';
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

const GalleryPage = () => {
  return (
    <MasterLayout>
      <section className="bg-transparent py-2">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Sell All Pictures <br /> of the destination 
          </motion.h1>
        </LampContainer>

        <div className="max-w-6xl mx-auto px-6">
         <GalleryGridLayout/>
        </div>
      </section>
    </MasterLayout>
  );
}

export default GalleryPage
