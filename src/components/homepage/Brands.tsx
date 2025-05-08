"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import CategoryCard from "../shared/CategoryCard";

interface Category {
  id: number;
  image: string;
  title: string;
}

const FoodCategories: React.FC = () => {
  const [brands, setBrands] = useState<Category[]>([]);
  const baseUrl = "https://192.168.1.154:7047";
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
      <Link
        href="/products"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 "
      >
        {brands.length === 0 ? (
          <p className="text-center col-span-full">Loading brands...</p>
        ) : (
          brands.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              img={item.image}
              id={item.id}
            />
          ))
        )}
      </Link>
    </div>
  );
};

export default FoodCategories;
