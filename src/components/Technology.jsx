// import React from "react";
// import { Truck, Phone, ShieldCheck, Tag } from "lucide-react";

// const technology = [
//   {
//     title: "Govt-approved & BIS Standard Quality",
//     description:
//       "We source and supply only BIS-certified and government-approved construction materials — ensuring superior strength, safety, and long-term durability for every build.",
//   },
//   {
//     title: "Doorstep Delivery to Pune, Goa & Pan-India",
//     description:
//       "We provide reliable and timely delivery right to your construction site — from metro cities to remote regions across India, including Pune and Goa.",
//   },
//   {
//     title: "Bulk, OEM & Export Ready",
//     description:
//       "Whether you’re a local contractor or a global buyer, our large-scale logistics and production capacity make us ready for bulk, OEM, and export requirements.",
//   },
//   {
//     title: "100% Consistent Grading & Moisture-Free Supply",
//     description:
//       "Every batch undergoes strict grading checks and moisture control to ensure uniform quality and optimal performance at every delivery.",
//   },
// ];
// const Technology = () => {
//   return (
//     // <section className="bg-white dark:bg-zinc-900 py-16 px-4" id="technology">
//     //   <div className="max-w-7xl mx-auto">
//     //     <h2 className="text-3xl font-bold text-center mb-10 text-zinc-900 dark:text-white">
//     //       Why Choose Gray Material?
//     //     </h2>
//     //     <p className="text-center text-zinc-600 dark:text-zinc-300 mb-12 max-w-2xl mx-auto">
//     //       At Gray Material®, we blend efficiency and authenticity by delivering
//     //       verified materials directly to your site, ensuring quality, pricing
//     //       transparency, and always-on customer support - all designed to meet
//     //       the real-world needs of contractors and builders.
//     //     </p>
//     //     <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//     //       {technology.map((tech, index) => (
//     //         <div
//     //           key={index}
//     //           className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-xl shadow text-center"
//     //         >
//     //           <div className="flex justify-center mb-4">{tech.icon}</div>
//     //           <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">
//     //             {tech.title}
//     //           </h3>
//     //           <p className="text-zinc-600 dark:text-zinc-300 text-sm">
//     //             {tech.description}
//     //           </p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </section>
  

  
//     <section
//       id="technology"
//       className="bg-gradient-to-b via-zinc-900 to-black py-20 px-6 md:px-10 cursor-pointer font-[Poppins]"
//     >
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Outer Card Wrapper */}
//         <div className="bg-white/5 dark:bg-zinc-800/50 backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] p-10 md:p-16">
//           {/* Heading */}
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
//             Why Choose Gray Material?
//           </h2>

//           {/* Subheading */}
//           <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
//             Gray Material® is India’s trusted construction material partner —
//             delivering government-approved, BIS-certified, and moisture-free
//             materials right to your site. We ensure consistency, bulk-ready
//             logistics, and nationwide delivery you can count on.
//           </p>

//           {/* Grid Cards */}
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {technology.map((tech, index) => (
//               <div
//                 key={index}
//                 className="relative group bg-gray-800/40 dark:bg-zinc-800/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:bg-gray-800/60"
//               >
//                 {/* Number */}
//                 <span className="absolute top-3 left-4 text-4xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors duration-300">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white e mb-2 relative z-10 leading-snug">
//                   {tech.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 dark:text-gray-400 text-sm relative z-10 leading-relaxed">
//                   {tech.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default Technology;


import React from "react";

const technology = [
  {
    title: "Govt-approved & BIS Standard Quality",
    description:
      "We source and supply only BIS-certified and government-approved construction materials — ensuring superior strength, safety, and long-term durability for every build.",
  },
  {
    title: "Doorstep Delivery to Pune, Goa & Pan-India",
    description:
      "We provide reliable and timely delivery right to your construction site — from metro cities to remote regions across India, including Pune and Goa.",
  },
  {
    title: "Bulk, OEM & Export Ready",
    description:
      "Whether you're a local contractor or a global buyer, our large-scale logistics and production capacity make us ready for bulk, OEM, and export requirements.",
  },
  {
    title: "100% Consistent Grading & Moisture-Free Supply",
    description:
      "Every batch undergoes strict grading checks and moisture control to ensure uniform quality and optimal performance at every delivery.",
  },
];

const Technology = () => {
  return (
    <section
      id="technology"
      className="bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-black py-20 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto text-center">
    
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          Why Choose Gray Material?
        </h2>

      
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 text-base md:text-lg leading-relaxed">
          Gray Material® is India's trusted construction material partner —
          delivering government-approved, BIS-certified, and moisture-free
          materials right to your site. We ensure consistency, bulk-ready
          logistics, and nationwide delivery you can count on.
        </p>


        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {technology.map((tech, index) => (
            <div
              key={index}
              className="relative group transition-all duration-300 hover:-translate-y-1"
            >
        
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

             
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-snug">
                {tech.title}
              </h3>

       
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {tech.description}
              </p>

            
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
