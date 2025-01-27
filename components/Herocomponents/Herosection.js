"use client";

import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/Herocomponents/placeholderinput";
import { WordRotate } from "@/components/ui/word-rotate";
import React from 'react'

const Herosection = () => {
    const handleSearchChange = (e) => {
        // Handle search input change
        console.log("Search changed:", e.target.value);
      };
    
      const handleSearchSubmit = (e) => {
        // Handle search submission
        e.preventDefault();
        console.log("Search submitted");
      };
  return (
    <div className="min-h-screen relative bg-black">
    {/* Background Image with Overlay */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${
          process.env.NEXT_PUBLIC_IMAGE_URL ||
          "https://historywithtravel.com/images/Lonavala/lonavala-demography.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
    </div>

    {/* Content */}
    <div className="relative z-10">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          LOGO
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-full bg-white/10 px-6 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          Become a host
        </motion.button>
      </nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32 text-center">
        {/* Animated Logo
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mb-12 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-white/20" />
        </motion.div> */}

        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Discover the world of
            <WordRotate
              className="block mt-2 text-5xl sm:text-7xl"
              words={["Word", "Rotate"]}
            />
            {/* <span className="block mt-2 text-5xl sm:text-7xl">Adventure</span> */}
          </h1>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center justify-center"
        >
          <PlaceholdersAndVanishInput
            placeholders={[
              "Search by city...",
              "Try 'Mountain View'",
              "Find your next adventure",
              "Discover hidden gems",
            ]}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
        </motion.div>
      </div>
    </div>
  </div>
  )
}

export default Herosection