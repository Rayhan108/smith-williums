'use client'
import Image from "next/image";
import schoolTrip from '@/assests/school-trip.png';
import weddingPhoto from '@/assests/wedding-photoshoot.jpg';
import wedding from '@/assests/weding.jpg';
import lunch from '@/assests/lunch.jpg';
import { CircleCheckBig } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const arrangements = [
  {
    title: "School Trip",
    image: schoolTrip,
    timing: "09:00PM to 11:30PM",
    pricing: "Adult 360 - Child 160",
    features: ["Camping, Exciting Visits", "Competitions and Prizes", "Rides Included"],
  },
  {
    title: "Corporate Events",
    image: lunch,
    timing: "09:00PM to 11:30PM",
    pricing: "Adult 360 - Child 160",
    features: ["Camping, Exciting Visits", "Competitions and Prizes", "Rides Included"],
  },
  {
    title: "Wedding Ceremony",
    image: weddingPhoto,
    timing: "09:00PM to 11:30PM",
    pricing: "Adult 360 - Child 160",
    features: ["Camping, Exciting Visits", "Competitions and Prizes", "Rides Included"],
  },
  {
    title: "Wedding Ceremony",
    image: wedding,
    timing: "09:00PM to 11:30PM",
    pricing: "Adult 360 - Child 160",
    features: ["Camping, Exciting Visits", "Competitions and Prizes", "Rides Included"],
  },

];

export default function ExclusiveArrangements() {
  return (
    <section className="w-full py-12 px-4 md:px-8 font-nunito">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Exclusive arrangement for Corporate, 
            <br />
            individual, special day or personalize
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
         
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="arrangements-swiper"
        >
          {arrangements.map((arrangement, index) => (
            <SwiperSlide key={index}>
              <div className="relative font-nunito overflow-hidden rounded-2xl border-2 border-orange-400 group cursor-pointer transition-transform mb-8">
                {/* Background Image and Gradient */}
                <div className="relative h-80 md:h-96">
                  <Image
                    src={arrangement.image || "/placeholder.svg"}
                    alt={arrangement.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-[#FB5A10] opacity-70" />
                </div>

                {/* Content Overlay */}
                <div className="w-full justify-center items-center absolute inset-0 p-6 flex flex-col ">
                  {/* Title */}
                  <div>
                    <div className="rounded-lg px-4 py-2 inline-block">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{arrangement.title}</h3>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-4">  
                    {/* Timing */}
                    <div className="bg-[#FECCB5] backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-orange-300/30">
                      <p className="font-semibold text-black">{arrangement.timing}</p>
                    </div>

                    {/* Pricing */}
                    <div className="bg-[#FFFFFF] backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-orange-300/30 ">
                      <p className="font-semibold text-black">{arrangement.pricing}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {arrangement.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="rounded px-2 py-1 flex items-center gap-2 w-full">
                            <p className="text-sm font-medium text-white flex gap-3">
                              <CircleCheckBig />  {feature}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
