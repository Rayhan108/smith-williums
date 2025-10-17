'use client'
import React from "react";

import hero from "@/assests/map.png";
import { useTranslations } from "next-intl";

const ContactBanner = () => {
    const title = useTranslations("contact");
    const nav = useTranslations("nav");

  return (
    <div className="relative h-[500px]   w-full overflow-hidden font-nunito">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat object-cover"
        style={{
          backgroundImage: `url(${hero.src})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title("title")}
        </h1>

        {/* Breadcrumbs */}
        <nav className="mb-16 flex items-center space-x-2 text-lg">
          <span className="text-white">{nav("home")}</span>
          <span className="text-white">{">"}</span>
          <span className="text-orange-500 font-bold">{nav("contact")}</span>
        </nav>
      </div>
    </div>
  );
};

export default ContactBanner;
