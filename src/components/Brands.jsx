import React from "react";
import { motion } from "framer-motion";


import brand1 from "../assets/clients/foxcon.jpg";
import brand2 from "../assets/clients/iit dharwad.jpg";
import brand3 from "../assets/clients/infosys.png";
import brand4 from "../assets/clients/inorbit.jpg";
import brand5 from "../assets/clients/kud.jpg";
import brand6 from  "../assets/clients/marvel.jpg";
import brand7 from "../assets/clients/nexus.jpg";
import brand8 from "../assets/clients/onehubli.jpg";
import brand9 from "../assets/clients/tata hitachi.jpg";
import brand10 from "../assets/clients/tata motors.png";

const Brands = () => {
  const brands = [
    { img: brand1, name: "Foxconn" },
    { img: brand2, name: "IIT Dharwad" },
    { img: brand3, name: "Infosys" },
    { img: brand4, name: "Inorbit" },
    { img: brand5, name: "Tata Motors" },
    { img: brand6, name: "Kud" },
    { img: brand7, name: "Nexus" },
    { img: brand8, name: "One Hubli" },
    { img: brand9, name: "Tata Hitachi" },
    { img: brand10, name: "Tata Motors" },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-zinc-900">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Our Clients
        </h2>
      </motion.div>

    
      <div className="relative overflow-hidden">
       
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-zinc-900 dark:to-transparent z-10 pointer-events-none" />

        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-zinc-900 dark:to-transparent z-10 pointer-events-none" />


        <div className="flex animate-scroll space-x-16 py-10">
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="w-44 h-32 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl flex items-center justify-center p-5 group-hover:border-gray-300 dark:group-hover:border-zinc-700 transition-all duration-300">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
