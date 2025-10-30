


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";


import hero1 from "../assets/images/main01.webp";
import hero2 from "../assets/images/main 02.webp";
import hero3 from "../assets/images/Main 03.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: hero1,
    title: "Top-Quality Construction Materials Delivered",
    subtitle:
      "GrayMaterial Delivers Premium grade Materials trusted by contractors,builders & developers.",
    stats: ["Every Product is crafted for Strength Consistency and Long Lasting Performance"],
    accent: "from-blue-400 to-blue-600",
  },
  {
    image: hero2,
    title: "Building Dreams with Reliable Supply",
    subtitle:
      "We Believe that every great structure begins with great Foundation ",
    stats: ["On-time Delivery", "Nationwide Network"],
    accent: "from-emerald-400 to-green-600",
  },
  {
    image: hero3,
    title: "Innovative Solutions for Modern Construction",
    subtitle:
      "Delivering materials and methods that drive efficiency and quality.",
    stats: ["Cutting-edge Tech", "Eco-Friendly Materials"],
    accent: "from-purple-400 to-indigo-600",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
          
            <div className="relative h-screen w-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title} 
                
                className="absolute inset-0 h-full w-full object-cover scale-110 animate-kenburns"
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />

          
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white animate-fadeInUp">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-200 animate-fadeInUp delay-200">
                  {slide.subtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  {slide.stats.map((stat, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-white/10 text-white backdrop-blur-sm text-sm md:text-base"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <a
                  href="/products"
                  className="mt-8 inline-block rounded-xl px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
      <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition">
        <ChevronLeft className="h-6 w-6 text-white" strokeWidth={2} />
      </button>

      <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition">
        <ChevronRight className="h-6 w-6 text-white" strokeWidth={2} />
      </button>

    
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <div key={index} className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              key={activeIndex} // re-render on slide change
              className={`h-full bg-gradient-to-r ${slides[activeIndex].accent}`}
              style={{
                animation:
                  index === activeIndex ? "progress 6s linear forwards" : "none",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
