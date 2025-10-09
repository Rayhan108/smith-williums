/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Pagination } from "antd";
import {  MountainSnow, Phone } from "lucide-react";
import Image from "next/image";
import camel from "@/assests/dumba.png";
import hillCar from "@/assests/hill-car.jpg";
import camping from "@/assests/camping.png";

import sandRide from "@/assests/sand-ride.jpg";
import bikeRide from "@/assests/bike-ride.jpg";
import Link from "next/link";
const tourPackages = [
  {
    id: 1,
    title: "57 HERITAGE DESERT EXPERIENCE",
    description:
      "Experience the ultimate Heritage Safari Dubai: vintage Land Rovers,falconry,camel riders, and a 4-course dinner. Book tour adventure today!",
    image: camel,
    originalPrice: "AED 774.00",
    currentPrice: "AED 645.00",
    discount: "20%",
  },
  {
    id: 2,
    title: "57 PREMIUM DESERT SAFARI WITH DUNE BASHING",
    description:
      "Experience the ultimate Desert Safari Dubai: dune bashing, camel rides, and a 4-course dinner. Book your adventure today!",
    image: camping,
    originalPrice: "AED 774.00",
    currentPrice: "AED 645.00",
    discount: "20%",
  },
  {
    id: 3,
    title: "57 DUNE BASHING + HERITAGE DESERT EXPERIENCE",
    description:
      "Experience the ultimate Desert Safari Dubai: Luxury transfers, vintage Land Rovers, camel rides, falconry, and a 4-course dinner. Book now!",
    image: hillCar,
    originalPrice: "AED 774.00",
    currentPrice: "AED 645.00",
    discount: "20%",
  },
  {
    id: 4,
    title: "57 PREMIUM DESERT SAFARI WITH DUNE BASHING",
    description:
      "Experience the ultimate Desert Safari Dubai: dune bashing, camel rides, and a 4-course dinner. Book your adventure today!",
    image: bikeRide,
    originalPrice: "AED 774.00",
    currentPrice: "AED 645.00",
    discount: "20%",
  },
  {
    id: 5,
    title: "57 HERITAGE DESERT EXPERIENCE",
    description:
      "Experience the ultimate Heritage Safari Dubai: vintage Land Rovers,falconry,camel riders, and a 4-course dinner. Book tour adventure today!",
    image: camel,
    originalPrice: "AED 774.00",
    currentPrice: "AED 645.00",
    discount: "20%",
  },
  {
    id: 6,
    title: "57 DUNE BASHING + HERITAGE DESERT EXPERIENCE",
    description:
      "Experience the ultimate Desert Safari Dubai: Luxury transfers, vintage Land Rovers, camel rides, falconry, and a 4-course dinner. Book now!",
    image: camel,
    originalPrice: "AED 774.00",
    currentPrice: "AED 645.00",
    discount: "20%",
  },
  {
    id: 7,
    title: "57 PREMIUM DESERT SAFARI WITH DUNE BASHING",
    description:
      "Experience the ultimate Desert Safari Dubai: dune bashing, camel rides, and a 4-course dinner. Book your adventure today!",
    image: sandRide,
    originalPrice: "AED 774.00",
    currentPrice: "AED 645.00",
    discount: "20%",
  },
];

export default function Packages({packages}:any) {
      const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
console.log("packages------->",packages);

  const meta = packages?.meta;
  // Use the 'limit' from meta for dynamic items per page
  const limit = meta?.limit;
  const totalItems = meta?.total;

  // Calculate current items to show based on page and limit

  const currentItems = packages?.result;
    const onPageChange = (page: number) => {
    setPage(page);
  };
  return (
    <section className="pb-8 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {currentItems?.map((tour:any) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-3 leading-tight">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Dune Bashing Tag */}
                    <div className="flex items-center gap-2 mb-4">
                   <MountainSnow className="h-6 w-6 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">
                        Dune Bashing
                      </span>
                    </div>
                  </div>

                  {/* Pricing and Actions */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                        {tour.discount} OFF
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        {tour.originalPrice}
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {tour.currentPrice}
                      </span>
                      <span className="text-sm text-gray-500">
                        / Person + VAT
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={'/bookNow'}>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Book Now
                      </button>
                        </Link>
                        <Link href={'https://web.whatsapp.com/'}>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        WhatsApp
                      </button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <Pagination
          current={page}
          pageSize={limit} 
          total={totalItems} 
          onChange={onPageChange}
          showSizeChanger={false}
    
          // Show the total number of pages (meta.totalPage)
          pageSizeOptions={[limit?.toString()]}
        
            className="[&_.ant-pagination-item-active]:bg-orange-500 [&_.ant-pagination-item-active]:border-orange-500 [&_.ant-pagination-item-active_a]:text-white [&_.ant-pagination-item]:border-gray-300 [&_.ant-pagination-item_a]:text-gray-600 [&_.ant-pagination-prev]:text-gray-600 [&_.ant-pagination-next]:text-gray-600"
          />
        </div>
      </div>
    </section>
  );
}
