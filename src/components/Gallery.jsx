// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import Bricks from "../assets/images/xad0ekidsgxiug78upwc.webp";
// import Cement from "../assets/images/pn9jxnch0w1iclycnncg.webp";
// import Img10 from "../assets/images/hr5eyb7c2wxqz6igvwlu.webp";
// import Img11 from "../assets/images/hxph810mmfhkcamw7lv3.webp";

// const galleryItems = [
//   { id: 1, title: "Commercial Complex", description: "Modern construction using premium materials", image: Bricks, category: "Commercial" },
//   { id: 2, title: "Residential Project", description: "Quality cement and finishing work", image: Cement, category: "Residential" },
//   { id: 3, title: "Infrastructure Development", description: "Large-scale construction excellence", image: Img10, category: "Infrastructure" },
//   { id: 4, title: "Industrial Facility", description: "Heavy-duty materials and construction", image: Img11, category: "Industrial" },
// ];

// const GalleryPreview = () => {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   return (
//     <div className="relative px-[8%] lg:px-[12%] py-20 bg-gray-50 dark:bg-zinc-900">
      
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <div className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold mb-6">
//           Our Work
//         </div>
//         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//           Project Gallery
//         </h2>
//         <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
//           Discover our portfolio of successful construction projects, showcasing quality craftsmanship and premium materials
//         </p>
//       </div>

//       {/* Modern Asymmetric Gallery Grid */}
//       <div className="grid grid-cols-12 gap-6 mb-12">
//         {/* Large Featured Project */}
//         <div className="col-span-12 md:col-span-8 lg:col-span-7 group relative"
//           onMouseEnter={() => setHoveredItem(0)}
//           onMouseLeave={() => setHoveredItem(null)}
//         >
//           <Link to="/gallery" className="block relative h-[400px] rounded-3xl overflow-hidden shadow-xl bg-gray-100 dark:bg-zinc-800">
//             <img
//               src={galleryItems[0].image}
//               alt={galleryItems[0].title}
//               className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//             <div className="absolute top-6 left-6 bg-white/90 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
//               <span className="text-sm font-semibold">{galleryItems[0].category}</span>
//             </div>

//             <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//               <h3 className="text-3xl font-bold mb-3">{galleryItems[0].title}</h3>
//               <p className="text-white/90 text-lg leading-relaxed">{galleryItems[0].description}</p>
//             </div>
//           </Link>
//         </div>

//         {/* Smaller Projects Grid */}
//         <div className="col-span-12 md:col-span-4 lg:col-span-5 space-y-6">
//           {galleryItems.slice(1).map((item, index) => (
//             <div key={item.id} className="group relative"
//               onMouseEnter={() => setHoveredItem(index + 1)}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               <Link to="/gallery" className="block relative h-32 rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-zinc-800">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

//                 <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
//                   <div className="flex justify-between items-start">
//                     <span className="inline-block px-3 py-1 bg-white/20 dark:bg-gray-700 backdrop-blur-sm rounded-full text-xs font-medium">
//                       {item.category}
//                     </span>
//                     <div className="w-8 h-8 bg-white/20 dark:bg-gray-700 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                     <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">{item.description}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="text-center mt-10">
//         <Link
//           to="/gallery"
//           className="inline-flex items-center px-12 py-5 bg-blue-600 dark:bg-blue-700 text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-2xl"
//         >
//           Explore Full Gallery
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default GalleryPreview;
