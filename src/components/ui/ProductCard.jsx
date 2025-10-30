import React from "react";
import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ image, title, price, rating, isNew }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-contain p-4"
        />
        {isNew && (
          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium ml-1">{rating}</span>
          </div>
        </div>
        <p className="text-xl font-bold text-gray-900 mb-4">${price}</p>
        <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium transition-colors hover:bg-blue-800 flex items-center justify-center">
          Add to Cart
          <ShoppingCart className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
