"use client"
import Image from "next/image"
import { TbSun } from "react-icons/tb"

import { TbLeaf } from "react-icons/tb"
import running from "@/assests/running.jpg"
import bg from "@/assests/looper-bg.png"
import { useTranslations } from "next-intl"

export default function WhatDrivesUs() {
     const title = useTranslations("about");
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
              <h2 className="text-orange-400 text-base font-medium tracking-wide">{title("drivenUs")}</h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
             {title("missionTitle")}
            </h1>

            {/* Description */}
            <p className="text-amber-100/90 text-lg leading-relaxed">
            {title("aboutDet")}
            </p>

            {/* Mission and Vision side by side */}
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              {/* Mission */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-white/10 border border-white/20">
                   <TbLeaf className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">  {title("mission")}</h3>
                </div>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                 {title("missionDet")}
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-white/10 border border-white/20">
                    <TbLeaf className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">  {title("mission")}</h3>
                </div>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  {title("visionDet")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
