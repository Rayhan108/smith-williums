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
        {/* Header + Image in a row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
          {/* Left Content - Header */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Image src={frika} alt="icon" height={32} width={32} className="h-8 w-8" />
              <h3 className="text-orange-500 text-lg font-medium">About Us</h3>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Quality desert tours
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Explore the desert with seasoned professionals. Enjoy thrilling safaris, cultural immersion,
              and unforgettable moment in nature
            </p>

            {/* Customer avatars + text */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image src={nightCamp} alt="Customer 1" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image src={bikeRide} alt="Customer 2" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image src={sandRide} alt="Customer 3" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 bg-orange-600 flex justify-center items-center border-white overflow-hidden">
                  <span className="text-white font-bold text-xs">99K</span>
                </div>
              </div>
              <div className="text-gray-600 max-w-sm">
                <p className="text-sm leading-relaxed">
                  Join 99k adventures who&apos;ve experienced unforgettable desert safaris. Be part of the
                  journey — create your story today
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Single Image with Play Button */}
          <div
            className="relative group cursor-pointer lg:w-1/2 w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden"
            onClick={showVideoModal}
          >
            <Image
              src={camel} // 👈 change to sandRide if you want
              alt="Desert safari"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-white text-xl ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">99K</h3>
            <p className="text-gray-600 mt-2">Happy Travellers</p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">21+</h3>
            <p className="text-gray-600 mt-2">Top Destinations</p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">35+</h3>
            <p className="text-gray-600 mt-2">Expert Guides</p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">87%</h3>
            <p className="text-gray-600 mt-2">Repeat Bookings</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
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
