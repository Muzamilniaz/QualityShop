import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
interface ProductProps {
  id: number;
  featured_image: string;
  title: string;
  price: number;
  category: string;
  badge?: {
    text: string;
    color: string;
  };
  rating: number;
  reviews: number;
  originalPrice?: number;
}

const ProductCard: React.FC<ProductProps> = ({
  featured_image,
  title,
  price,
  category,
  id,
  badge,
  rating,
  reviews,
  originalPrice,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const placeholderImage =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
  const actualImage = featured_image
    ? featured_image.startsWith("http")
      ? featured_image
      : `https:${featured_image}`
    : placeholderImage;

  return (
    <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        {badge && (
          <span
            className={`absolute top-2 left-2 ${badge.color} text-white text-xs px-2 py-1 rounded`}
          >
            {badge.text}
          </span>
        )}
        <Link href={`/products/${id}`}>
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
              <Image
                src={
                  imageError || !imageLoaded ? placeholderImage : actualImage
                }
                alt={title || "Product Image"}
                width={192}
                height={192}
                className="w-full h-full object-contain"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
              />
            </div>
          </div>
        </Link>

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">
          <Link
            href={`/categories/${category?.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {category}
          </Link>
        </div>
        <h2 className="text-base font-semibold">
          <Link
            href={`/products/${id}`}
            className="text-gray-800 hover:text-blue-600"
          >
            {title}
          </Link>
        </h2>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-500 ml-2">({reviews})</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold text-gray-800">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
