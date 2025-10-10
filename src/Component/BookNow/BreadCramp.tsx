/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity } from "lucide-react";
import React from "react";
import {
  FaRegClock,
  FaUserAlt,
  FaBaby,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Breadcrumbs = ({data}:any) => {
   console.log("package data--->",data);
  return (
    <div className="flex gap-8 p-6">
      <div className="flex justify-center items-center gap-3">
        <FaRegClock className="text-orange-500 text-3xl" />
        <div>
          <p className="font-semibold text-gray-600 mt-2">Duration</p>
          <p className="text-lg text-gray-800">{data.duration}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <FaUserAlt className="text-orange-500 text-3xl" />
        <div>
          <p className="font-semibold text-gray-600 mt-2">Max Adults</p>
          <p className="text-lg text-gray-800">1-{data?.max_adult}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <FaBaby className="text-orange-500 text-3xl" />
        <div>
          <p className="font-semibold text-gray-600 mt-2">Max Child</p>
          <p className="text-lg text-gray-800">1-{data?.child_min_age}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <FaMapMarkerAlt className="text-orange-500 text-3xl" />
        <div>
          <p className="font-semibold text-gray-600 mt-2">Pickup</p>
          <p className="text-lg text-gray-800">{data?.pickup}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <FaCalendarAlt className="text-orange-500 text-3xl" />
        <div>
          <p className="font-semibold text-gray-600 mt-2">Availability</p>
          <p className="text-lg text-gray-800">{data?.availability?.start} - {data?.availability?.end}</p>
        </div>
      </div>
      {/* <div className="flex justify-center items-center gap-3">
        <Activity className="text-orange-500 text-3xl" />
        <div>
          <p className="font-semibold text-gray-600 mt-2">Activity</p>
          <p className="text-lg text-gray-800">Dune Bashing</p>
        </div>
      </div> */}
    </div>
  );
};

export default Breadcrumbs;
