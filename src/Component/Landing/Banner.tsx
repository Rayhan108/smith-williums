import Image from "next/image";
import jiraf from "@/assests/jiraf.png";
import car from "@/assests/car.png";
import vector from "@/assests/vector.png";
import bg from "@/assests/BG.png";

export default function Banner() {
  return (
    <section className="relative  h-[500px] md:min-h-screen overflow-hidden">
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
        <div className="flex flex-1 items-center justify-center px-8 md:px-16 lg:px-24 py-36 md:py-16 ">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="mb-6  2xl:text-5xl font-light leading-tight text-white text-2xl lg:text-4xl xl:text-6xl md:text-start">
              <span className="block">EXPERIENCE THE</span>
              <span className="block">
                MAGIC OF <span className="text-orange-500">DUBAI</span>
              </span>
            </h1>

            {/* Orange Underline */}
            <div className="mb-6 h-1 w-16 bg-orange-500"></div>

            {/* Description */}
            <p className="max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
              There&apos;s truly no place like Dubai, a city where golden deserts
              meet sparkling skylines. From thrilling dune bashing to serene
              sunset views, Dubai offers an experience unlike anywhere else in
              the world. Let us take you on an unforgettable desert safari
              adventure that captures the heart and soul of this vibrant city.
            </p>
          </div>
        </div>

        {/* Right Images Section */}
        <div className="relative md:flex flex-1 items-center justify-center px-6 lg:px-12 md:bottom-28 lg:bottom-0  hidden">
          <div className="relative h-[500px] w-full max-w-xl">
            {/* Decorative Pattern (behind) */}
            <div className="h-96  w-72   lg:right-0 md:left-44 xl:right-0 2xl:right-12 relative top-48 lg:top-64">
              <Image
                src={vector}
                alt="Decorative Pattern"
                className="h-full w-full object-cover "
              />
            </div>

            {/* Giraffe Image */}
            <div className="absolute lg:-left-36 md:left-8 xl:-left-36 2xl:-left-56 top-16 z-20 md:h-[400px] lg:h-[500px] w-[300px]  2xl:h-[500px] 2xl:w-[350px] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={jiraf}
                alt="Giraffe in natural landscape"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Safari Vehicle Image */}
            <div className="absolute bottom-28 lg:bottom-12 md:-right-10  lg:-right-8 xl:right-6 2xl:right-8 z-10 h-60 w-60 xl:w-72 2xl:w-96  rounded-lg shadow-2xl">
              <Image
                src={car}
                alt="Safari vehicle in desert"
                className="h-full w-full object-cover rounded-tl-4xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Images */}
      <div className="absolute bottom-8 right-56 space-x-4 hidden">
           <div className="h-36 top-16 w-36 overflow-hidden rounded shadow-lg relative left-56">
              <Image
                src={vector}
                alt="Decorative Pattern"
                className="h-full w-full object-cover "
              />
            </div>
        <div className="h-44 w-36 overflow-hidden rounded shadow-lg z-20">
          <Image src={jiraf} alt="Giraffe" className="h-full w-full object-cover" />
        </div>
        <div className="h-44 w-36 overflow-hidden rounded shadow-lg z-20">
          <Image src={car} alt="Safari vehicle" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
