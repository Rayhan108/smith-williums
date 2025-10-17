/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Modal } from "antd";
import { FaPlay, FaPhone } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import Image from "next/image";
import frika from "@/assests/Frika_button.png";
import nightCamp from "@/assests/night-camp.jpg";
import sandRide from "@/assests/sand-ride.jpg";
import bikeRide from "@/assests/bike-ride.jpg";
import camel from "@/assests/camel.jpg";
import DOMPurify from "isomorphic-dompurify";
import { useTranslations } from "next-intl";
export default function VedioSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const showVideoModal = () => setIsVideoModalOpen(true);
  const handleVideoModalClose = () => setIsVideoModalOpen(false);
  type AboutApiItem = {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    aboutUs: string; // HTML
  };
  type AboutApiResponse = {
    success: boolean;
    message?: string;
    statusCode?: number;
    data?: AboutApiItem[];
  };
  const [aboutHtml, setAboutHtml] = useState<string>("");
  const [aboutLoading, setAboutLoading] = useState<boolean>(false);
  const [aboutError, setAboutError] = useState<string | null>(null);
    const title = useTranslations("about");
    const t = useTranslations("buttons");
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setAboutLoading(true);
        setAboutError(null);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/about/retrive`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const json: AboutApiResponse = await res.json();
        if (!res.ok || !json?.success) {
          throw new Error(json?.message || "Failed to About Us");
        }

        // ✅ Handle both { data: [...] } and { data: { ... } }
        const dataAny = json.data as any;
        const item: AboutApiItem | undefined = Array.isArray(dataAny)
          ? dataAny[0]
          : dataAny;
        const html = item?.aboutUs ?? "";

        if (mounted) setAboutHtml(html);
      } catch (err: any) {
        if (mounted) setAboutError(err?.message || "Could not load About us");
      } finally {
        if (mounted) setAboutLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header + Image in a row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
          {/* Left Content - Header */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={frika}
                alt="icon"
                height={32}
                width={32}
                className="h-8 w-8"
              />
              <h3 className="text-orange-500 text-lg font-medium">    {title("aboutUs")}</h3>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title("title")}
            </h2>

            {/* <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Explore the desert with seasoned professionals. Enjoy thrilling safaris, cultural immersion,
              and unforgettable moment in nature
            </p> */}
            {/* Cancellation & Refund Policy (from API) */}
            <div className="mb-6">
              {aboutLoading && (
                <div className="text-sm text-gray-500">Loading about us…</div>
              )}
              {aboutError && (
                <div className="text-sm text-red-500 mb-2">{aboutError}</div>
              )}

              {aboutHtml ? (
                <div
                  className="prose prose-sm max-w-none text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(aboutHtml),
                  }}
                />
              ) : (
                !aboutLoading &&
                !aboutError && (
                  <div className="text-sm text-gray-500">
                    No About Us available.
                  </div>
                )
              )}
            </div>

            {/* Customer avatars + text */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src={nightCamp}
                    alt="Customer 1"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src={bikeRide}
                    alt="Customer 2"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src={sandRide}
                    alt="Customer 3"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 bg-orange-600 flex justify-center items-center border-white overflow-hidden">
                  <span className="text-white font-bold text-xs">99K</span>
                </div>
              </div>
              <div className="text-gray-600 max-w-sm">
                <p className="text-sm leading-relaxed">
                 {title("join")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Single Image with Play Button */}
          <div
            className="relative group cursor-pointer lg:w-1/2 w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden"
            onClick={showVideoModal}
          >
            <Image
              src={camel} // 👈 change to sandRide if you want
              alt="Desert safari"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-white text-xl ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
              99K
            </h3>
            <p className="text-gray-600 mt-2">Happy Travellers</p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
              21+
            </h3>
            <p className="text-gray-600 mt-2">Top Destinations</p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
              35+
            </h3>
            <p className="text-gray-600 mt-2">Expert Guides</p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
              87%
            </h3>
            <p className="text-gray-600 mt-2">Repeat Bookings</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
            <RiCustomerService2Fill className="text-lg" />
           {t("getInTouch")}
          </button>

          <div className="flex items-center gap-3 text-gray-600">
            <FaPhone className="text-orange-500" />
            <div>
              <p className="text-sm font-medium">{title("contactUs")}</p>
              <p className="text-lg font-semibold">(+971)506800227</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        title="Desert Safari Experience"
        open={isVideoModalOpen}
        onCancel={handleVideoModalClose}
        footer={null}
        width={1000}
        centered
        className="video-modal"
      >
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6fIc33HqWrI"
            title="Desert Safari Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </Modal>
    </section>
  );
}
