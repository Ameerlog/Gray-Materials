import React, { useState, useEffect, useRef } from "react";
import { Lightbulb, TrendingUp, BadgeCheck } from "lucide-react";
import bricks from "../assets/images/Vision.webp";
import cement from "../assets/images/PSAND.webp";
import steel from "../assets/images/Ready mix concrete.webp";
import heroImage from "../assets/images/Solid concrete blocks.webp";



const gallery = [
  { img: bricks, title: "Premium Brick Collection", category: "Masonry" },
  { img: cement, title: "High-Grade Cement", category: "Binding Materials" },
  { img: steel, title: "Steel Reinforcement", category: "Structural Support" },
 
];



const AboutSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});


   useEffect(() => {
    const observers = {};
    Object.keys(sectionRefs.current).forEach((key) => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({ ...prev, [key]: entry.isIntersecting }));
        },
        { threshold: 0.2 }
      );
      if (sectionRefs.current[key]) observers[key].observe(sectionRefs.current[key]);
    });
    return () => Object.values(observers).forEach((obs) => obs.disconnect());
  }, []);

  

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Construction" className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-orange-900/30" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-white font-medium uppercase tracking-widest text-sm">About Our Company</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
            Building Excellence
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Since 2009</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Transforming construction dreams into reality with premium materials and unwavering commitment to quality
          </p>
        </div>
      </div>

    








<div
      ref={(el) => (sectionRefs.current.about = el)}
      className={`bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-20 transform transition-all duration-1000 ${
        isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
  <div className="max-w-7xl mx-auto px-6 lg:px-16">
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
    <span className="text-gray-900 dark:text-white">About </span>
    <span className="text-blue-600 dark:text-blue-400">Gray Material</span>
  </h2>

  {/* Paragraphs */}
  <div className="grid md:grid-cols-2 gap-16 text-gray-700 dark:text-gray-300 leading-relaxed mb-16 text-2xl">
    <p>
      <strong>Gray Material</strong> is a modern construction material brand dedicated to delivering
      high-quality building essentials across India. We specialize in providing reliable and
      consistent products such as <strong>M-Sand, Aggregates, Dust,</strong> and <strong>P-Sand</strong>,
      trusted by builders, contractors, and developers for their quality and performance.
    </p>
    <p>
      Our goal is simple — to simplify material sourcing and ensure that every customer receives the
      right product, at the right price, at the right time. From sourcing to delivery, every batch we
      supply is tested, verified, and quality-assured, helping construction professionals build with
      confidence.
    </p>
  </div>

     {/* Final Paragraph */}
    <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-2xl max-w-5xl mx-auto text-center gap-10 mb-20">      <p>
        Driven by a passion for innovation and backed by strong supplier partnerships,
        <strong> Gray Material</strong> stands for <strong>trust, durability, and long-term value</strong>  in the
        construction industry.
      </p>
    </div>
 

        {/* Icon Cards */}
   <div className="grid md:grid-cols-3 gap-8 mb-20 mt-10">
          <div className="bg-slate-200 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
            <div className="flex justify-center mb-4">
              <Lightbulb className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
              Expert People
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Highly Trained Specialists
            </p>
          </div>

          <div className="bg-slate-200 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
              Big Experience
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              15+ Years of Proven Success
            </p>
          </div>

          <div className="bg-slate-200 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
            <div className="flex justify-center mb-4">
              <BadgeCheck className="w-10 h-10 text-violet-700 dark:text-violet-400" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
              Committed to Quality
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              100% Reliability Guaranteed
            </p>
          </div>
   </div>

      
      </div>
 </div>



  <div
  ref={(el) => (sectionRefs.current.visionMission = el)}
  className={` transform transition-all duration-1000 ${
    isVisible.visionMission ? "translate-x-0 opacity-100" : "translate-y-12 opacity-0"
  } bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800`}
>
  <div className="max-w-7xl mx-auto px-6 lg:px-16">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Vision & Mission</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Empowering the construction industry with quality, innovation, and reliability —
        shaping durable structures for a sustainable tomorrow.
      </p>
    </div>

    {/* Vision Card */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      {/* Left Side - Vision Text */}
      <div className="space-y-6">
        <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-lg font-semibold uppercase tracking-wider">
          Vision
        </span>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-snug">
          Building Sustainable Futures with Innovation & Integrity
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          To lead the construction materials industry by delivering eco-friendly, durable, and 
          technologically advanced materials that redefine modern infrastructure.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We aim to be a trusted name that transforms the way India builds — sustainably and efficiently.
        </p>
      </div>

      {/* Right Side - Vision Image */}
      <div className="relative group">
        <div className="overflow-hidden rounded-3xl shadow-2xl relative">
          <img
            src={bricks}
            alt="Vision - Future Construction"
            className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </div>

    {/* Mission Card */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Mission Image */}
      <div className="relative group order-2 md:order-1">
        <div className="overflow-hidden rounded-3xl shadow-2xl relative">
          <img
            src={bricks}
            alt="Mission - Excellence in Materials"
            className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Right Side - Mission Text */}
      <div className="space-y-6 order-1 md:order-2">
        <span className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text- font-semibold uppercase tracking-wider">
          Mission
        </span>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-snug">
          Delivering Excellence in Every Material We Supply
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We are dedicated to delivering construction materials that exceed industry standards,
          ensuring unmatched quality, consistency, and performance in every project.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Our mission goes beyond supply — it’s about supporting builders, developers, and
          dreamers in constructing a stronger, sustainable future.
        </p>
      </div>
    </div>
  </div>
</div>






    



    
{/* Gallery Section */}
<div className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
  <div className="max-w-7xl mx-auto px-6 lg:px-16">
    {/* Title */}
    <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
      Gallery
    </h2>

    {/* Grid Layout */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {gallery.map((item, index) => (
        <div
          key={index}
          className="group bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 
                     transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-orange-500/40"
        >
          {/* Image Container */}
          <div className="relative w-full h-80 flex justify-center items-center overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-700">
            <img
              src={item.img}
              alt={item.title}
              className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />

            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Card Content */}
          <div className="p-6 text-center space-y-2">
           

           

            {/* Animated Line */}
            <div className="w-0 group-hover:w-16 h-[2px] bg-orange-500 mx-auto transition-all duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




     

   

     
    </>
  );
};

export default AboutSection;
