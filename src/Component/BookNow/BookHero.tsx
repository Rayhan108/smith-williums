"use client"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Share2, Camera, MapPin, Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import { FaFacebook, FaSquareWhatsapp } from "react-icons/fa6"
import camel from '@/assests/dumba.png'
import hillCar from '@/assests/hill-car.jpg'
import tea from '@/assests/tea.jpg'
import cofee from '@/assests/cofee.png'
import bellyDance from '@/assests/belly-dance.jpg'
import culture from '@/assests/culture.jpg'
import camping from '@/assests/camping.png'
import nightCamp from '@/assests/night-camp.jpg'
import sandRide from '@/assests/sand-ride.jpg'
import bikeRide from '@/assests/bike-ride.jpg'



const tourImages = [
  camel,
  hillCar,
  tea,
  cofee,
 bellyDance,
 culture,
 camping,
 nightCamp,sandRide,
 bikeRide
]

const shareOptions = [
  { name: "WhatsApp", icon: <FaSquareWhatsapp className="text-green-500" /> },
  { name: "Facebook", icon: <FaFacebook className="text-blue-500" /> },
  { name: "Copy Link", icon: "🔗" },
]

export default function BookHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = "57 HERITAGE DESERT EXPERIENCE"

    switch (platform) {
      case "WhatsApp":
        window.open(`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`)
        break
      case "Facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case "Twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)
        break
      case "Instagram":
        navigator.clipboard.writeText(url)
        alert("Link copied! You can paste it in Instagram.")
        break
      case "Copy Link":
        navigator.clipboard.writeText(url)
        alert("Link copied to clipboard!")
        break
    }
    setIsShareOpen(false)
  }

  return (
    <>
      <div className="bg-white border-b border-gray-100 px-4 py-6 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 leading-tight">
              57 HERITAGE DESERT EXPERIENCE
            </h1>

            {/* Actions */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
              >
                <Camera className="w-5 h-5" />
                <span className="font-medium">5 photos</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  className="p-2 text-orange-500 hover:text-orange-600 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                {/* Share Dropdown */}
                {isShareOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[160px] z-50">
                    {shareOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => handleShare(option.name)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                      >
                        <span className="text-lg">{option.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{option.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Location and Rating Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">United Arab Emirates</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <button className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">
                Customer Reviews
              </button>
            </div>
          </div>
        </div>
      </div>



    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-full mx-auto">
      {/* Large Image (Car in Desert) */}
      <div className="col-span-1 md:col-span-2">
        <Image 
          src="/path/to/your/car-image.jpg" 
          alt="Car in Desert" 
          width={1200} 
          height={800} 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Small Image (Camel in Desert) */}
      <div>
        <Image 
          src="/path/to/your/camel-image.jpg" 
          alt="Camel in Desert" 
          width={600} 
          height={400} 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Small Image (Person Walking in Desert) */}
      <div>
        <Image 
          src="/path/to/your/person-walking-image.jpg" 
          alt="Person walking in Desert" 
          width={600} 
          height={400} 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Small Image (Couple in Desert) */}
      <div>
        <Image 
          src="/path/to/your/couple-dancing-image.jpg" 
          alt="Couple in Desert" 
          width={600} 
          height={400} 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>














      {/* Small Centered Photo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl h-auto p-4">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 bg-black bg-opacity-40 rounded-full text-white hover:bg-opacity-70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-gray-400 !opacity-50",
                bulletActiveClass: "swiper-pagination-bullet-active !bg-orange-500 !opacity-100",
              }}
              className="w-full h-[400px] rounded-xl overflow-hidden"
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
            >
              {tourImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Tour image ${index + 1}`}
                      width={800}
                      height={600}
                      className="max-h-full max-w-full object-contain rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Share Modal Backdrop */}
      {isShareOpen && <div className="fixed inset-0 z-40" onClick={() => setIsShareOpen(false)} />}
    </>
  )
}
