/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Share2, Camera, MapPin, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaFacebook, FaSquareWhatsapp, FaTelegram, FaXTwitter } from "react-icons/fa6";

interface BookHeroProps {
  data: {
    name?: string;
    location?: string;
    images?: string[];
  };
}

const shareOptions = [
  { name: "WhatsApp", icon: <FaSquareWhatsapp className="text-green-500" /> },
  { name: "Facebook", icon: <FaFacebook className="text-blue-600" /> },
  { name: "Twitter", icon: <FaXTwitter className="text-gray-700" /> },
  { name: "Telegram", icon: <FaTelegram className="text-sky-500" /> },
  { name: "Copy Link", icon: "🔗" },
  { name: "More", icon: <Share2 className="text-orange-500" /> },
];

export default function BookHero({ data }: BookHeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const images = data?.images || [];
  const title = data?.name || "57 HERITAGE DESERT EXPERIENCE";
  const location = data?.location || "United Arab Emirates";

  // ✅ Core share function
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `${title} - ${location}`;

    switch (platform) {
      case "WhatsApp":
        window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
        break;
      case "Facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
      case "Twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "Telegram":
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
      case "Copy Link":
        navigator.clipboard.writeText(url);
        alert("✅ Link copied to clipboard!");
        break;
      case "More":
        if (navigator.share) {
          navigator
            .share({
              title: title,
              text: text,
              url: url,
            })
            .catch((err) => console.error("Share failed:", err));
        } else {
          alert("Your browser doesn’t support native sharing.");
        }
        break;
      default:
        break;
    }

    setIsShareOpen(false);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-6 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 leading-tight">
              {title}
            </h1>

            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
              >
                <Camera className="w-5 h-5" />
                <span className="font-medium">{images.length} photos</span>
              </button>

              {/* Share */}
              <div className="relative">
                <button
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  className="p-2 text-orange-500 hover:text-orange-600 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                {isShareOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[180px] z-50">
                    {shareOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => handleShare(option.name)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                      >
                        <span className="text-lg">{option.icon}</span>
                        <span className="text-sm font-medium text-gray-700">
                          {option.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Location + Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{location}</span>
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

      {/* Image Grid */}
      <div className="p-4 max-w-7xl mx-auto">
        {images.length >= 4 ? (
          <div className="grid grid-cols-2 gap-3">
            <Image
              src={images[0]}
              alt="Main"
              width={600}
              height={430}
              className="object-cover rounded-xl w-full h-[430px]"
            />
            <div>
              <Image
                src={images[1]}
                alt="Secondary"
                width={600}
                height={200}
                className="w-full h-[200px] object-cover rounded-xl"
              />
              <div className="grid grid-cols-2 gap-3 mt-3">
                <Image
                  src={images[2]}
                  alt="Third"
                  width={300}
                  height={200}
                  className="object-cover rounded-xl"
                />
                <Image
                  src={images[3]}
                  alt="Fourth"
                  width={300}
                  height={200}
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                width={400}
                height={300}
                className="object-cover rounded-xl w-full h-[300px]"
              />
            ))}
          </div>
        )}
      </div>

      {/* Swiper Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl h-auto p-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 text-gray-700 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !bg-gray-400 !opacity-50",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-orange-500 !opacity-100",
              }}
              className="w-full h-[400px] rounded-xl overflow-hidden"
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <Image
                      src={img}
                      alt={`Tour image ${index + 1}`}
                      width={800}
                      height={600}
                      className="max-h-full max-w-full object-contain rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {isShareOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsShareOpen(false)} />
      )}
    </>
  );
}
