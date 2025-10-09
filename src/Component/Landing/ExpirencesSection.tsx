/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


export default function ExperiencesSection({ packages }: any) {

    /* SEO Meta Tags */

  {
    packages?.result.map((experience: any) => (
      <Head key={experience.id}>
        <title>{experience.title} - Wanderlust Adventures</title>
        <meta name="description" content={experience.description} />
        <meta
          name="keywords"
          content="desert safari, adventure, travel, experiences, tours, Dubai"
        />
        <meta
          property="og:title"
          content={`${experience.title} - Wanderlust Adventures`}
        />
        <meta property="og:description" content={experience.description} />
        <meta
          property="og:image"
          content={experience.coverImage} // Use the first image of the experience or a default one
        />
        <meta
          property="og:url"
          content={`${process.env.SERVER_URL}/package/single-package/${experience._id}`}
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
    ));
  }

  console.log("expirences------>", packages);
  return (
    <section className=" py-16 px-6 font-nunito mb-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Our Experiences
        </h2>

        {/* Experiences Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-orange-500",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-orange-600",
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="experiences-swiper"
          >
            {packages?.result?.map((experience: any) => (
              <SwiperSlide key={experience.id}>
                <div className=" rounded-2xl shadow-lg overflow-hidden flex flex-col h-[520px]  mb-12">
                  {/* Experience Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={experience.coverImage}
                      alt={experience.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-orange-500 mb-3 leading-tight">
                      {experience.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {experience.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex-col flex items-center gap-2 mb-1">
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                          {experience.discount}% off
                        </span>
                        <span className="text-gray-400 text-sm line-through">
                          {experience.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-md text-orange-500">
                          {experience.currentPrice}
                        </span>
                        <span className="text-gray-500 text-sm">
                          / Person + VAT
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Link href={`/bookNow/${experience?._id}`}>
                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                          Book Now
                        </button>
                      </Link>
                      <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                        WhatsApp
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
