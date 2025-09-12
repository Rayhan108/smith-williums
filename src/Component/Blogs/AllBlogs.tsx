'use client'
import Image from "next/image"; // Next.js Image component
import Link from "next/link"; // Next.js Link component
import { Pagination } from "antd"; // Ant Design pagination

import camel from "@/assests/dumba.png";
import hillCar from "@/assests/hill-car.jpg";
import camping from "@/assests/camping.png";
import sandRide from "@/assests/sand-ride.jpg";
import bikeRide from "@/assests/bike-ride.jpg";

const AllBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Ultimate Guide to Dubai Desert Safari What to Expect",
      image: camel,
      description:
        "Experience the magic of the Arabian desert with our detailed guide. From thrilling dune bashing to serene camel rides, discover every adventure waiting for you. Learn about the best time to visit, what to pack, and how to make the most of your safari trip.",
    },
    {
      id: 2,
      title: "Morning vs. Evening Desert Safari: Which One Should You Choose?",
      image: hillCar,
      description:
        "Experience the magic of the Arabian desert with our detailed guide. From thrilling dune bashing to serene camel rides, discover every adventure waiting for you. Learn about the best time to visit, what to pack, and how to make the most of your safari trip.",
    },
    {
      id: 3,
      title: "Top 7 Activities You Can't Miss on a Dubai Desert Safari",
      image: camping,
      description:
        "Experience the magic of the Arabian desert with our detailed guide. From thrilling dune bashing to serene camel rides, discover every adventure waiting for you. Learn about the best time to visit, what to pack, and how to make the most of your safari trip.",
    },
    {
      id: 4,
      title: "What to Wear on a Dubai Desert Safari: A Complete Style & Comfort Guide",
      image: sandRide,
      description:
        "Experience the magic of the Arabian desert with our detailed guide. From thrilling dune bashing to serene camel rides, discover every adventure waiting for you. Learn about the best time to visit, what to pack, and how to make the most of your safari trip.",
    },
    {
      id: 5,
      title: "Dubai Desert Safari Essentials: What You Need to Know",
      image: bikeRide,
      description:
        "Experience the magic of the Arabian desert with our detailed guide. From thrilling dune bashing to serene camel rides, discover every adventure waiting for you. Learn about the best time to visit, what to pack, and how to make the most of your safari trip.",
    },
  ];

  const handlePageChange = (page:number) => {
    console.log(page);
  };

  return (
    <div className="container mx-auto px-4 py-8 font-nunito">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <Link href={`/blogs/${blog.id}`} className="text-orange-500 mt-4 block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          defaultCurrent={1}
          total={blogs.length}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllBlogs;
