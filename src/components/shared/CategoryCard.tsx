import Image from "next/image";
import {  useRouter } from "next/navigation";
import React, { useState } from "react";

interface CategoryProps {
  img:string;
  id:number;
}

const CategoryCard: React.FC<CategoryProps> = ({id,img }) => {
    const router = useRouter();
  
 const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const actualImage = `https:${img.trim()}`;  
  const placeholderImage =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
    const handleClick = () => {
      router.push("/products?brand="+id);
    }
  return (
    <div className="bg-gray-500 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-1 text-center" onClick={handleClick}>
      <div className="text-4xl text-green-500 mb-3">
        {/* <Icon /> */}
        <Image
          src={imageError || !imageLoaded ? placeholderImage : actualImage}
          alt="Food Icon"
          width={100}
          height={100}
          className="h-20 w-20 object-contain"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
          unoptimized={true} // Add this line to prevent Next.js from optimizing the image
        />
      </div>
      {/* <h3 className="text-lg font-semibold text-gray-800">{title}</h3> */}
    </div>
  );
};

export default CategoryCard;
