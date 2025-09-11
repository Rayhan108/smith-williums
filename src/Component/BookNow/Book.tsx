"use client";

import { useState } from "react";
import { FaCalendarAlt, FaMinus, FaPlus } from "react-icons/fa";

export default function Book() {
  const [selectedDate, setSelectedDate] = useState("07/04/2025");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [tourOptions, setTourOptions] = useState({
    singleSeaterBuggy: false,
    quadBike20: false,
    camelBike30: false,
    quadBikePackage: false,
    seaterBuggy4: false,
  });

  const basePrice = 2500;
  const addOnPrices = {
    singleSeaterBuggy: 900,
    quadBike20: 0,
    camelBike30: 0,
    quadBikePackage: 1100,
    seaterBuggy4: 700,
  };

  const calculateAdditionTotal = () => {
    let total = 0;
    Object.entries(tourOptions).forEach(([key, selected]) => {
      if (selected) {
        total += addOnPrices[key as keyof typeof addOnPrices];
      }
    });
    return total;
  };

  const tourTotal = basePrice * adults;
  const additionTotal = calculateAdditionTotal();
  const grandTotal = tourTotal + additionTotal;

  const toggleOption = (option: keyof typeof tourOptions) => {
    setTourOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      {/* Header */}
      <div className="bg-pink-50 p-4 rounded-lg mb-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Book VIP Desert Safari Dubai
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Select Your Date
            </label>
            <div className="relative">
              <input
                type="text"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
              <FaCalendarAlt className="absolute right-2 top-2.5 text-gray-400 text-sm" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              No of Adults
            </label>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="p-2 hover:bg-gray-100"
              >
                <FaMinus className="text-xs" />
              </button>
              <span className="px-3 py-2 text-sm">{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="p-2 hover:bg-gray-100"
              >
                <FaPlus className="text-xs" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              No of Child (1-11 yrs)
            </label>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="p-2 hover:bg-gray-100"
              >
                <FaMinus className="text-xs" />
              </button>
              <span className="px-3 py-2 text-sm">{children}</span>
              <button
                onClick={() => setChildren(children + 1)}
                className="p-2 hover:bg-gray-100"
              >
                <FaPlus className="text-xs" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Base Price
            </label>
            <div className="text-orange-500 font-semibold">AED {basePrice}</div>
          </div>
        </div>
      </div>

      {/* Customize Tour Options */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-orange-500 mb-4">
          Customize Tour Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="font-semibold">Tour Option</div>
          <div className="font-semibold text-center">Quantity</div>
          <div className="font-semibold text-right">Addition Price</div>
        </div>

        {/* Tour Options */}
        <div className="space-y-3 mt-3">
          {/* Single Seater Dune Buggy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-2 border-b border-gray-100">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={tourOptions.singleSeaterBuggy}
                onChange={() => toggleOption("singleSeaterBuggy")}
                className="mr-2"
              />
              <div>
                <div className="font-medium">
                  Single Seater Dune Buggy 30 mins
                </div>
                <div className="text-orange-500 text-xs">Package Details</div>
                <div className="text-xs text-gray-500">
                  Price Per Buggy is AED 900
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center border border-gray-300 rounded w-20 mx-auto">
                <button className="p-1 hover:bg-gray-100">
                  <FaMinus className="text-xs" />
                </button>
                <span className="px-2 py-1 text-sm">1</span>
                <button className="p-1 hover:bg-gray-100">
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
            <div className="text-right font-semibold">AED 900</div>
          </div>

          {/* 20 Minutes Quad Bike */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-2 border-b border-gray-100">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={tourOptions.quadBike20}
                onChange={() => toggleOption("quadBike20")}
                className="mr-2"
              />
              <div>
                <div className="font-medium">20 Minutes Quad Bike</div>
                <div className="text-xs text-gray-500">
                  Price Per Buggy is AED 100
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center border border-gray-300 rounded w-20 mx-auto">
                <button className="p-1 hover:bg-gray-100">
                  <FaMinus className="text-xs" />
                </button>
                <span className="px-2 py-1 text-sm">0</span>
                <button className="p-1 hover:bg-gray-100">
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
            <div className="text-right font-semibold">AED 0</div>
          </div>

          {/* 30 Minutes Camel Bike */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-2 border-b border-gray-100">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={tourOptions.camelBike30}
                onChange={() => toggleOption("camelBike30")}
                className="mr-2"
              />
              <div>
                <div className="font-medium">30 Minutes Camel Bike</div>
                <div className="text-xs text-gray-500">
                  Price Per Buggy is AED 150
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center border border-gray-300 rounded w-20 mx-auto">
                <button className="p-1 hover:bg-gray-100">
                  <FaMinus className="text-xs" />
                </button>
                <span className="px-2 py-1 text-sm">0</span>
                <button className="p-1 hover:bg-gray-100">
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
            <div className="text-right font-semibold">AED 0</div>
          </div>

          {/* Package Details - 20 Minutes Quad Bike */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-2 border-b border-gray-100">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={tourOptions.quadBikePackage}
                onChange={() => toggleOption("quadBikePackage")}
                className="mr-2"
              />
              <div>
                <div className="font-medium">20 Minutes Quad Bike</div>
                <div className="text-orange-500 text-xs">Package Details</div>
                <div className="text-xs text-gray-500">
                  Price Per Buggy is AED 500
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center border border-gray-300 rounded w-20 mx-auto">
                <button className="p-1 hover:bg-gray-100">
                  <FaMinus className="text-xs" />
                </button>
                <span className="px-2 py-1 text-sm">2</span>
                <button className="p-1 hover:bg-gray-100">
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
            <div className="text-right font-semibold">AED 1100</div>
          </div>

          {/* 4 Seater Dune Buggy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-2 border-b border-gray-100">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={tourOptions.seaterBuggy4}
                onChange={() => toggleOption("seaterBuggy4")}
                className="mr-2"
              />
              <div>
                <div className="font-medium">4 Seater Dune Buggy 30 Mins</div>
                <div className="text-orange-500 text-xs">Package Details</div>
                <div className="text-xs text-gray-500">
                  Price Per Buggy is AED 700
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center border border-gray-300 rounded w-20 mx-auto">
                <button className="p-1 hover:bg-gray-100">
                  <FaMinus className="text-xs" />
                </button>
                <span className="px-2 py-1 text-sm">1</span>
                <button className="p-1 hover:bg-gray-100">
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
            <div className="text-right font-semibold">AED 700</div>
          </div>
        </div>

        {/* Totals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 py-4 bg-gray-50 rounded">
          <div className="text-center">
            <div className="text-sm text-gray-600">Tour Totals</div>
            <div className="text-xl font-bold text-orange-500">
              AED {tourTotal}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Addition Totals</div>
            <div className="text-xl font-bold text-orange-500">
              AED {additionTotal}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Grand Totals</div>
            <div className="text-xl font-bold text-orange-500">
              AED {grandTotal}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center flex-col sm:flex-row gap-3 mt-6">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
