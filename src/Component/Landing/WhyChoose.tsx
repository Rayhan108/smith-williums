"use client"

import Image from "next/image"
import bus from '@/assests/bus.png'
import vector from '@/assests/vector2.png'
import elephant from '@/assests/elephant.png'
import design from '@/assests/design.png'
import frika from '@/assests/Frika_button.png'

export default function WhyChoose() {
  return (
    <section className="relative  py-16 md:py-24 overflow-hidden font-nunito">
      {/* Decorative golden particles */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <Image
          src={design}
          alt="Golden decorative design"
          className="absolute top-0 right-0 w-[350px] md:w-[500px] object-contain"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Amazing Features Badge */}
     <div className="flex gap-3 items-center ">
      <div className="icon">
        {/* Exact SVG for sunburst icon */}
<Image src={frika} alt="icon" height={100} width={100} className="h-12 w-12"/>
      </div>
      <div className="text-2xl text-[#FB5A10]">
        Amazing Features
      </div>
    </div>
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1632] leading-tight">
              Explore Dubai with Oasis Tours
            </h2>

            {/* Main Image with Decorative Vector */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden z-30">
                <Image
                  src={bus}
                  alt="Vintage van in desert"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-br-[100px]"
                />
              </div>
              {/* Vector design under bus */}
              <div className="absolute top-24 left-60 w-full md:w-[80%] hidden md:flex">
                <Image
                  src={vector}
                  alt="Decorative tribal vector"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 ml-16 lg:mt-0 mt-16 w-[70%]">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1C1632]">
              Why Choose Oasis Palm Tourism
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              We shape the future of travels at OASIS PALM tourism. It seemed
              impossible when we had a vision, but after 15 years of working
              with our professional tour guides, the journey became easier.
              Today OASIS PALM sells Dubai&apos;s adventure and experience with
              expert tour operators help. We know all adventure seeker&apos;s
              needs and work on fulfilling their needs.
            </p>

            {/* Orange separator line */}
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>

            {/* Elephant image */}
            <div className="flex justify-center lg:justify-end ">
              <div className="relative  w-64 h-64 rounded-tl-4xl overflow-hidden shadow-lg">
                <Image
                  src={elephant}
                  alt="Elephant"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
