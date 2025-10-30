// import React, { useState } from "react";
// import Bricks from "../assets/Bricks.jpeg";
// import Cement from "../assets/Cement.jpeg";
// import Img1 from "../assets/images/d8cbhlbwaoom1fcik7hi.webp";
// import Img2 from "../assets/images/hr5eyb7c2wxqz6igvwlu.webp";
// import Img3 from "../assets/images/b6mpn0np7q7qmucsbmnl.webp";
// import Img4 from "../assets/images/hr5eyb7c2wxqz6igvwlu.webp";
// import Img5 from "../assets/images/ijmfmbyi27zyx65jsmct.webp";
// import Img6 from "../assets/images/p9myulf9nlwqv4lhn7kc.webp";
// import Img7 from "../assets/images/q7lbiezt00b0pst33hio.webp";

// const galleryItems = [
//   { id: 1, title: "Project A", image: Bricks },
//   { id: 2, title: "Project B", image: Cement },
//   { id: 3, title: "Project C", image: Img1},
//   { id: 4, title: "Project D", image: Img2 },
//   { id: 5, title: "Project E", image: Img3 },
//   { id: 6, title: "Project F", image: Img4 },
//   { id: 7, title: "Project G", image: Img5 },
//   { id: 8, title: "Project H", image: Img6 },
//   { id: 9, title: "Project I", image: Img7 },
// ];

// const GalleryPage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openImage = (image) => setSelectedImage(image);
//   const closeImage = () => setSelectedImage(null);

//   return (
//     <>
//       <div className="min-h-screen bg-white dark:bg-zinc-900 py-16">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h1>
//           <p className="text-gray-600 dark:text-gray-300">Our construction projects</p>
//         </div>

//         {/* Grid */}
//         <div className="px-8 max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {galleryItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="group cursor-pointer rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-zinc-800"
//                 onClick={() => openImage(item)}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="py-4 text-center">
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Lightbox */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-4xl max-h-full">
//             <button
//               onClick={closeImage}
//               className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
//             >
//               ✕
//             </button>
//             <img
//               src={selectedImage.image}
//               alt={selectedImage.title}
//               className="max-w-full max-h-full object-contain rounded-lg"
//             />
//             <div className="text-center mt-4">
//               <h3 className="text-white text-xl font-medium">{selectedImage.title}</h3>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GalleryPage;
