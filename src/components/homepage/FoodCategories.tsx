"use client";

import React, { useEffect, useState } from "react";

import CategoryCard from "../shared/CategoryCard";

interface Category {
  id: number;
  image: string;
}

// Map icon names to React Icon components

const FoodCategories: React.FC = () => {
  const [brands, setBrands] = useState<Category[]>([]);
  //const baseUrl = "https://192.168.1.154:7047";
  const baseUrl = "https://dazzling-taussig.97-74-80-158.plesk.page";
  useEffect(() => {
    fetch(`${baseUrl}/api/brand`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched :", data);
        const formattedData = data.filter(
          (item: Category) => item.image !== null
        );
        console.log("Formatted brands:", formattedData);
        setBrands(formattedData);
      })
      .catch((err) => {
        console.error("Failed to fetch brands:", err);
      });
  }, []);

  return (
    <div className="px-4 py-10 md:px-10 bg-gradient-to-b from-green-50 to-white">
      <h2 className="text-2xl py-3 text-center font-bold text-gray-800 mb-6">
        Explore Brands
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 ">
        {brands.length === 0 ? (
          <p className="text-center col-span-full">Loading brands...</p>
        ) : (
          brands.map((item) => (
            <CategoryCard key={item.id} img={item.image} id={item.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default FoodCategories;
