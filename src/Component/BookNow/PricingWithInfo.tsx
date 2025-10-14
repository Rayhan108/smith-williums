/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import {FaCheck} from "react-icons/fa"
import { MdExpandLess } from "react-icons/md"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PricingWithInfo = ({data}:any) => {
   console.log("package data--->",data);
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
          <div>{data?.pickup} (Expected Pickup)</div>
          <div>{data?.drop_off} (Expected Drop off)</div>
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
          {data?.included?.map((item:any, index:number) => (
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
          {
            data?.tour_plan?.map((item:any, index:number) => (
            <div key={index} className="flex items-center text-sm mt-3">
              <FaCheck className="text-green-500 mr-2 text-xs" />
              <span>{item}</span>
            </div>
          ))}

        
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Description</h3>
        <div className="text-sm leading-relaxed">
       {data?.description}
        </div>
      </div> 
        </div>
    );
};

export default PricingWithInfo;