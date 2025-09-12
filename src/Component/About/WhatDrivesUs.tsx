"use client"
import Image from "next/image"
import { TbSun } from "react-icons/tb"

import { TbLeaf } from "react-icons/tb"
import running from "@/assests/running.jpg"
import bg from "@/assests/looper-bg.png"

export default function WhatDrivesUs() {
  return (
    <section className="relative bg-[#692a0f] overflow-hidden py-16 lg:py-20 font-nunito">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={bg}
          alt="Background pattern"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={running}
                alt="Person running on desert sand dunes"
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-2 lg:order-2 space-y-6">
            {/* Header with Icon */}
            <div className="flex items-center gap-2">
              <TbSun className="w-6 h-6 text-orange-400" />
              <h2 className="text-orange-400 text-base font-medium tracking-wide">What Drivers Us</h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
              Our values, mission & Vison
            </h1>

            {/* Description */}
            <p className="text-amber-100/90 text-lg leading-relaxed">
              A Dubai Desert Safari is more than just a tour—it&apos;s a journey into the heart of the Arabian wilderness,
              where nature, adventure, and tradition meet under a vast, sun-kissed sky. Imagine leaving behind the
              towering skyscrapers and bustling streets of Dubai and stepping into a world of endless golden dunes that
              stretch as far as the eye can see.
            </p>

            {/* Mission and Vision side by side */}
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              {/* Mission */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-white/10 border border-white/20">
                   <TbLeaf className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Mission</h3>
                </div>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  Our mission is to create unforgettable desert adventures that connect travelers with the beauty,
                  culture, and spirit of the Arabian desert. We strive to deliver exceptional service, thrilling
                  activities.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-white/10 border border-white/20">
                    <TbLeaf className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Vision</h3>
                </div>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  Our vision is to be the leading desert safari experience provider in Dubai, recognized globally for
                  our commitment to excellence, authenticity, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
