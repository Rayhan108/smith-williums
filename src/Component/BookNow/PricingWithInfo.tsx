'use client'
import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { FaCalendarAlt, FaMinus, FaPlus, FaCheck, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { MdExpandLess } from "react-icons/md"
  const includedItems = [
    "Pickup and Drop off",
    "Dubai Museum",
    "Zabeel Palace (Dubai King Palace)",
    "Burj Al Arab (Only 71 Hotel)",
    "Burj Khalifa (Passing By)",
    "Dubai Zoo (Passing By)",
    "Islamic Art Gallery",
    "Jumeirah Road",
    "Jumeirah Mosque",
    "Palm Atlantis (Photo Stop)",
    "Dubai Marina",
  ]
const PricingWithInfo = () => {
      const [expandedSections, setExpandedSections] = useState({
    importantNotice: false,
  })
    return (
        <div className='max-w-7xl mx-auto'>
                 {/* Pricing */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Pricing</h3>
        <div className="text-sm space-y-1">
          <div>90 AED Per Adult</div>
          <div>80 AED Per Child (Age 3-9 Years)</div>
        </div>
      </div>

      {/* Timings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Timings</h3>
        <div className="text-sm space-y-1">
          <div>09:00 AM - 09:30 AM (Expected Pickup)</div>
          <div>01:30 PM - 01:30 PM (Expected Drop off)</div>
        </div>
      </div>

      {/* Important Note */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() =>
            setExpandedSections((prev) => ({
              ...prev,
              importantNotice: !prev.importantNotice,
            }))
          }
        >
          <h3 className="text-lg font-semibold">Important Notice</h3>
          {expandedSections.importantNotice ? <MdExpandLess /> : <MdExpandMore />}
        </div>
        {expandedSections.importantNotice && (
          <div className="text-sm mt-2 space-y-2">
            <div>• Kids below 3 years are free of charge.</div>
            <div>• Pickup and Drop off from home/hotel anywhere in Dubai.</div>
            <div>• Minimum of 2 hour booking is required. In case of short notice (less than 12 Hours)</div>
            <div>• Contact to check the availability.</div>
          </div>
        )}
      </div>

      {/* Cancellation & Refund Policy */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Cancellation & Refund Policy</h3>
        <div className="text-sm space-y-2">
          <div>
            Please be informed that we need 24 hours prior for cancellation or any kind of changes in the booking.
          </div>
          <div>Cancellation on the day of the tour will cost the full amount.</div>
        </div>
      </div>

      {/* Included / Excluded */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Included / Excluded</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {includedItems.map((item, index) => (
            <div key={index} className="flex items-center text-sm">
              <FaCheck className="text-green-500 mr-2 text-xs" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Plan */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Tour Plan</h3>
        <div className="bg-gray-50 p-4 rounded">
          <div className="flex items-center justify-between cursor-pointer">
            <span className="font-medium">Important Notice</span>
            <MdExpandMore/>
          </div>
          <div className="mt-2 text-sm space-y-2">
            <div>• Kids below 3 years are free of charge.</div>
            <div>• Pickup and Drop off from anywhere in Dubai.</div>
            <div>
              • Customers from Sharjah and Ajman Are advised to come to Sahara Center Al Nahda Sharjah for the pickup.
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Description</h3>
        <div className="text-sm leading-relaxed">
          Experience the ultimate Heritage Safari Dubai vintage Land Rovers/falconry/camel riders, and a 4-course
          dinner. Book your adventure today. Step back in time and immerse yourself in the rich traditions of the UAE
          with our Heritage Safari Dubai. Journey into the golden dunes in an open-top vintage Land Rover just like the
          desert explorers once did. Witness the awe-inspiring art of falconry, where skilled falconers showcase the
          grace and power of these magnificent birds. Enjoy an authentic camel ride through the serene desert landscape.
          As the sun sets over the desert, relax in a traditional Bedouin-style camp, where you&apos;ll be served a lavish
          4-course dinner under a canopy of stars. With live cultural performances, henna painting, and aromatic shisha,
          this experience blends adventure, culture, and luxury into one unforgettable evening.
        </div>
      </div> 
        </div>
    );
};

export default PricingWithInfo;