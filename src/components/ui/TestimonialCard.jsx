import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ text, author, role }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="mb-4">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 italic">"{text}"</p>
      </div>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
