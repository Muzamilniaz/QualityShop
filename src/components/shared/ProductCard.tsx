import React from "react";
import Link from "next/link";
interface ProductProps {
  image: string;
  title: string;
  price: string;
  category: string;
}

const ProductCard: React.FC<ProductProps> = ({
  image,
  title,
  price,
  category,
}) => {
  return (
    <Link
      href="productdetail"
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-1">
        <p className="text-sm text-gray-500 uppercase font-medium">
          {category}
        </p>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex justify-between items-center pt-2">
          <span className="text-blue-600 font-bold text-lg">{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
