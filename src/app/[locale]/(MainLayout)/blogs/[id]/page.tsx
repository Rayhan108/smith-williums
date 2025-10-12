import Image from 'next/image';
import hillCar from '@/assests/hill-car.jpg';
import { Calendar1Icon } from 'lucide-react';

const BlogDetails = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 font-nunito">
      <header className="">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={hillCar}
            alt="Desert Safari"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="">
          <h1 className="text-2xl md:text-3xl mt-5 font-semibold">
            The Ultimate Guide to Dubai Desert Safari: What to Expect
          </h1>
          <div className="flex gap-3 items-center">
            <Calendar1Icon className="text-[#FB5A10]" />
            <p className="text-sm md:text-lg mt-2">1 July 2025</p>
          </div>
        </div>
      </header>

      <section className="mt-10 space-y-8 text-lg text-gray-800">
        <p>
          Experience the magic of the Arabian desert with our detailed guide. From thrilling dune bashing to serene camel rides, discover every adventure waiting for you. Learn about the best time to visit, what to pack, and how to make the most of your safari trip.
        </p>
        <p>
          A Dubai Desert Safari is more than just a tour—it&apos;s a journey into the heart of the Arabian wilderness, where nature, adventure, and tradition meet under a vast, sun-kissed sky. Imagine leaving behind the towering skyscrapers and bustling streets of Dubai and stepping into a world of endless golden dunes that stretch as far as the eye can see. Here, the desert tells its own story—one of survival, beauty, and timeless charm.
        </p>
        <p>
          From the moment you set off, your senses will be awakened. The adrenaline rush of dune bashing will have your heart racing as your 4x4 vehicle climbs and dips over rolling sand hills. The gentle sway of a camel ride will transport you to another era, giving you a taste of how Bedouins once traversed this rugged landscape. As the day unfolds, you’ll witness the desert’s transformation—from the warm, golden hues of afternoon sunlight to the fiery reds and deep purples of sunset.
        </p>
        <p>
          But a desert safari isn&apos;t just about thrilling activities; it&apos;s about connecting with the culture and spirit of the UAE. At a traditional camp, you&apos;ll be welcomed with warm Arabian hospitality—savoring rich coffee, sweet dates, and delicious BBQ while being entertained by mesmerizing dance performances under a canopy of stars. Whether you’re visiting for the first time or returning to relive the magic, the Dubai Desert Safari offers an unforgettable blend of adventure, cultural heritage, and natural beauty.
        </p>
      </section>
    </div>
  );
};

export default BlogDetails;
