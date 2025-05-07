import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface CategoryProps {
  img: string;
  id: number;
}

const CategoryCard: React.FC<CategoryProps> = ({ id, img }) => {
  const router = useRouter();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const actualImage = `https:${img.trim()}`;
  const placeholderImage =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
  const handleClick = () => {
    router.push("/product?brand=" + id);
  };
  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-24 h-24 bg-gray-400 border border-gray-300 rounded-full flex items-center justify-center mb-4 overflow-hidden shadow-sm">
        <Image
          src={imageError || !imageLoaded ? placeholderImage : actualImage}
          alt="Brand Icon"
          width={80}
          height={80}
          className="object-contain"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
          unoptimized={true}
        />
      </div>
      {/* Optional Title */}
      {/* <h3 className="text-base font-medium text-gray-800">{title}</h3> */}
    </div>
  );
};

export default CategoryCard;
