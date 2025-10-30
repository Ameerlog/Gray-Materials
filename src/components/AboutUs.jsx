"use client";

import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


import image1 from "../assets/images/Ready mix concrete.webp";
import image2 from "../assets/images/Solid concrete blocks.webp";
import image3 from "../assets/images/Paver blocks.webp";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const navigate = useNavigate();

  const tabs = useMemo(
    () => [
      { key: "mission", label: "Mission" },
      { key: "vision", label: "Vision" },
      { key: "values", label: "Values" },
    ],
    []
  );

  const tabsContent = useMemo(
    () => ({
      mission: [
        "We deliver premium construction materials that form the foundation of exceptional buildings and lasting structures.",
        "Our commitment to quality and reliability ensures every project meets the highest industry standards.",
      ],
      vision: [
        "To be the leading provider of construction materials, driving innovation in building practices across the region.",
        "We envision a future where sustainable construction solutions create better communities.",
      ],
      values: [
        "Integrity guides every business decision and partnership we forge in the construction industry.",
        "Excellence in service delivery and transparent communication builds lasting relationships.",
      ],
    }),
    []
  );

  const stats = useMemo(
    () => [
      { number: "15+", label: "Years" },
      { number: "500+", label: "Projects" },
      { number: "100%", label: "Quality" },
    ],
    []
  );

  const images = useMemo(() => [image1, image2, image3], []);

  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-500" >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Building Excellence
            <span className="block text-blue-600 mt-2">Since 2019</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Swiper
              modules={[Navigation, EffectFade, Autoplay]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              navigation={false}
              className="h-full w-full"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Construction ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          <div>
            <div className="flex gap-2 mb-6 bg-gray-100 dark:bg-zinc-800 p-1 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 py-2 px-5 rounded-lg font-medium transition-all text-sm ${
                    activeTab === tab.key
                      ? "bg-white dark:bg-zinc-900 shadow text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              {tabsContent[activeTab].map((text, index) => (
                <p key={index} className="leading-relaxed text-lg">
                  {text}
                </p>
              ))}
            </div>

        
            <div className="grid grid-cols-3 gap-6 mt-12 pt-6 border-t border-gray-200 dark:border-zinc-700">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => navigate("/aboutUs")}
                className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
