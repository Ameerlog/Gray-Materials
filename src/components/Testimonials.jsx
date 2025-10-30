import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roots International School",
    review:
      "Gray Material consistently delivers high-quality aggregates, making our construction projects efficient and reliable. Highly recommended!",
    rating: 5,
  },
  {
    name: "UrbanBuild Co.",
    review:
      "Their cement and M Sand quality are top-notch. Logistics are timely and service is professional.",
    rating: 5,
  },
  {
    name: "GreenSky Constructions",
    review:
      "Dependable partner for concrete blocks and eco materials. Strongly aligned with our values.",
    rating: 4,
  },
];
const Testimonials = () => {
  return (
    <section
      className="bg-gray-100 dark:bg-zinc-800 py-16 px-4"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-zinc-900 dark:text-white">
          Testimonials
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6"
            >
              <p className="text-zinc-700 dark:text-zinc-300 italic">
                "{t.review}"
              </p>
              <div className="mt-4 font-semibold text-zinc-800 dark:text-white">
                {" "}
                - {t.name}
              </div>
              <div className="flex text-yellow-500 mt-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill={index < t.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
