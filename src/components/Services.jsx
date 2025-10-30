
import React from "react";
import { HardHat, Hammer, Building, Cube, Layers } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Construction Equipment",
    description: "High-quality machinery and tools for all construction needs.",
    icon: <HardHat className="w-12 h-12 text-orange-600 mb-4" />,
  },
  {
    id: 2,
    name: "Hardware & Tools",
    description: "Durable hand tools and hardware for professionals and contractors.",
    icon: <Hammer className="w-12 h-12 text-gray-600 mb-4" />,
  },
  {
    id: 3,
    name: "Building Materials",
    description: "Cement, bricks, steel, and all essential materials for strong structures.",
    icon: <Building className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    id: 4,
    name: "Precast & Modular",
    description: "Precast concrete, modular components, and prefabricated solutions.",
    icon: <Cube className="w-12 h-12 text-green-600 mb-4" />,
  },
  {
    id: 5,
    name: "Finishing Materials",
    description: "Tiles, paints, insulation, and finishing products for high-quality results.",
    icon: <Layers className="w-12 h-12 text-purple-600 mb-4" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 md:px-16 bg-gray-50 dark:bg-zinc-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Services We Provide
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center hover:scale-105 transform transition-transform"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {service.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 
