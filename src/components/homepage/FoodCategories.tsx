"use client";

import React, { useEffect, useState } from "react";
import {
  FaPizzaSlice,
  FaCoffee,
  FaIceCream,
  FaFish,
  FaAppleAlt,
  FaHamburger,
} from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";
import CategoryCard from "../shared/CategoryCard";

interface Category {
  id: number;
  title: string;
  icon: string;
}

// Map icon names to React Icon components
const iconMap: { [key: string]: IconType } = {
  FaPizzaSlice,
  FaCoffee,
  FaIceCream,
  FaFish,
  FaAppleAlt,
  FaHamburger,
};

const FoodCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/foodCategories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched categories:", data);
        setCategories(data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
      });
  }, []);

  return (
    <div className="px-4 py-10 md:px-10 bg-gradient-to-b from-green-50 to-white">
      <h2 className="text-2xl py-3 text-center font-bold text-gray-800 mb-6">
        Explore Food Categories
      </h2>
      <Link
        href="/products"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5"
      >
        {categories.length === 0 ? (
          <p className="text-center col-span-full">Loading categories...</p>
        ) : (
          categories.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              icon={iconMap[item.icon]}
            />
          ))
        )}
      </Link>
    </div>
  );
};

export default FoodCategories;
