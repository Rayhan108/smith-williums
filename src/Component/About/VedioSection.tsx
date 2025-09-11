"use client"

import { useState } from "react"
import { Modal } from "antd"
import { FaPlay, FaPhone } from "react-icons/fa"
import { RiCustomerService2Fill } from "react-icons/ri"
import Image from "next/image"
import frika from "@/assests/Frika_button.png"
import nightCamp from "@/assests/night-camp.jpg"
import sandRide from "@/assests/sand-ride.jpg"
import bikeRide from "@/assests/bike-ride.jpg"
import camel from "@/assests/camel.jpg"

export default function VedioSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const showVideoModal = () => setIsVideoModalOpen(true)
  const handleVideoModalClose = () => setIsVideoModalOpen(false)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header + Stats Section in a row */}
        <div className="flex w-[60%] mx-auto flex-col lg:flex-row items-center lg:items-start justify-between gap-12 mb-16">
          {/* Left Content - Header */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Image src={frika} alt="icon" height={100} width={100} className="h-8 w-8" />
              <h3 className="text-orange-500 text-lg font-medium">About Us</h3>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Quality desert tours
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Explore the desert with seasoned professionals. Enjoy thrilling safaris, cultural immersion,
              and unforgettable moment in nature
            </p>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <Image src={nightCamp} alt="Customer 1" width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <Image src={bikeRide} alt="Customer 2" width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <Image src={sandRide} alt="Customer 3" width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 bg-orange-600 flex justify-center items-center border-white overflow-hidden">
                  <span className="text-white font-bold text-sm">99K</span>
                </div>
              </div>

              <div className="text-gray-600 max-w-sm ">
                <p className="text-sm leading-relaxed">
                  Join 99k adventures who&apos;ve experienced unforgettable desert safaris. Be part of the
                  journey — create your story today
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full flex justify-center mb-12">
          <div
            className="relative group cursor-pointer w-full max-w-4xl"
            onClick={showVideoModal}
          >
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={camel}
                alt="Desert sunset with camels"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-white text-3xl ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
            <RiCustomerService2Fill className="text-lg" />
            Get In Touch
          </button>

          <div className="flex items-center gap-3 text-gray-600">
            <FaPhone className="text-orange-500" />
            <div>
              <p className="text-sm font-medium">Contact us at</p>
              <p className="text-lg font-semibold">(+971)506800227</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        title="Desert Safari Experience"
        open={isVideoModalOpen}
        onCancel={handleVideoModalClose}
        footer={null}
        width={1000}
        centered
        className="video-modal"
      >
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Desert Safari Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </Modal>
    </section>
  )
}
