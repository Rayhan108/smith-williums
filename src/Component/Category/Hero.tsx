"use client"

import { useState } from "react"
import { Calendar, ChevronDown, Mountain, Search, User } from "lucide-react"

import scene from '@/assests/scene.jpg';
export default function HeroSection() {
  const [selectedActivity, setSelectedActivity] = useState("Select Activity")
  const [selectedGuests, setSelectedGuests] = useState("Select")
  const [selectedDate, setSelectedDate] = useState("")

  return (
    <section className="relative h-screen w-full overflow-hidden font-nunito">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[500px]"
        style={{
          backgroundImage: `url(${scene.src})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"/>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Main Heading */}
        <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
          Desert Safari Tour Dubai
        </h1>

        {/* Breadcrumb */}
        <nav className="mb-16 flex items-center space-x-2 text-lg">
          <span className="text-white">Home</span>
          <span className="text-white">{">"}</span>
          <span className="text-orange-500 font-medium">Category</span>
        </nav>

        {/* Booking Form */}
        <div className="w-full max-w-5xl relative top-14">
          <div className="flex flex-col gap-0 rounded-lg bg-white shadow-xl md:flex-row">
            {/* Activity Selection */}
            <div className="flex flex-1 items-center gap-3 border-b border-gray-200 p-4 md:border-b-0 md:border-r">
              <Mountain className="h-6 w-6 text-orange-500" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Activity</label>
                <div className="relative">
                  <select
                    value={selectedActivity}
                    onChange={(e) => setSelectedActivity(e.target.value)}
                    className="w-full appearance-none bg-transparent text-gray-600 focus:outline-none"
                  >
                    <option value="Select Activity">Select Activity</option>
                    <option value="Desert Safari">Desert Safari</option>
                    <option value="Camel Ride">Camel Ride</option>
                    <option value="Dune Bashing">Dune Bashing</option>
                    <option value="Quad Biking">Quad Biking</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="flex flex-1 items-center gap-3 border-b border-gray-200 p-4 md:border-b-0 md:border-r">
              <Calendar className="h-6 w-6 text-orange-500" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Dates</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  placeholder="DD-MM-YYYY"
                  className="w-full bg-transparent text-gray-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Guests Selection */}
            <div className="flex flex-1 items-center gap-3 border-b border-gray-200 p-4 md:border-b-0 md:border-r">
              <User className="h-6 w-6 text-orange-500" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <div className="relative">
                  <select
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(e.target.value)}
                    className="w-full appearance-none bg-transparent text-gray-600 focus:outline-none"
                  >
                    <option value="Select">Select</option>
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5+ Guests">5+ Guests</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-center justify-center p-2">
              <button  className="h-12 w-full bg-orange-500 px-8 text-white hover:bg-orange-600 md:w-auto">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
