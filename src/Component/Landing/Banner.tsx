'use client'
import Image from "next/image";
import jiraf from "@/assests/jiraf.png";
import car from "@/assests/car.png";
import vector from "@/assests/vector.png";
import bg from "@/assests/BG.png";
import { useTranslations } from "next-intl";

// interface BannerProps {
//   title: string;     
//   subtitle: string; 
// }

export default function Banner(
  // { title, subtitle }: BannerProps

) {
  // Split title and color the last word (Dubai)
  const t = useTranslations("home");
const title = t("title");
const subtitle = t("subtitle");
  const words = title.split(" ");
  const lastWord = words.pop(); // Dubai
  const firstPart = words.join(" ");

  return (
    <section className="relative h-[500px] md:min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex md:min-h-screen flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex flex-1 items-center justify-center px-8 md:px-16 lg:px-24 py-36 md:py-16">
          <div className="max-w-2xl">
            {/* Dynamic Heading */}
            <h1 className="mb-6 2xl:text-5xl font-light leading-tight text-white text-2xl lg:text-4xl xl:text-6xl md:text-start">
              <span className="block uppercase">{firstPart}</span>
              {lastWord && (
                <span className="block uppercase">
                  <span className="text-orange-500">{lastWord}</span>
                </span>
              )}
            </h1>

            {/* Orange Underline */}
            <div className="mb-6 h-1 w-16 bg-orange-500"></div>

            {/* Dynamic Subtitle */}
            <p className="max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right Images Section */}
        <div className="relative md:flex flex-1 items-center justify-center px-6 lg:px-12 md:bottom-28 lg:bottom-0 hidden">
          <div className="relative h-[500px] w-full max-w-xl">
            {/* Decorative Pattern (behind) */}
            <div className="h-96 w-72 lg:right-0 md:-right-44 xl:right-0 2xl:right-12 relative top-48 lg:top-64">
              <Image
                src={vector}
                alt="Decorative Pattern"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Giraffe Image */}
            <div className="absolute lg:-left-36 md:left-8 xl:-left-36 2xl:-left-56 top-16 z-20 md:h-[400px] lg:h-[500px] w-[300px] 2xl:h-[500px] 2xl:w-[350px] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={jiraf}
                alt="Giraffe in natural landscape"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Safari Vehicle Image */}
            <div className="absolute bottom-28 lg:bottom-12 md:-right-10 lg:-right-8 xl:right-6 2xl:right-8 z-10 h-60 w-60 xl:w-72 2xl:w-96 rounded-lg shadow-2xl">
              <Image
                src={car}
                alt="Safari vehicle in desert"
                className="h-full w-full object-cover rounded-tl-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
