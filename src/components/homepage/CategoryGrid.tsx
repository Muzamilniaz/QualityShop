import React from "react";
import {
  FaPizzaSlice,
  FaCoffee,
  FaIceCream,
  FaFish,
  FaAppleAlt,
  FaHamburger,
} from "react-icons/fa";
import Link from "next/link";
import CategoryCard from "../shared/CategoryCard";

const categories = [
  { id: 1, title: "Pizza", icon: FaPizzaSlice },
  { id: 2, title: "Coffee", icon: FaCoffee },
  { id: 3, title: "Ice Cream", icon: FaIceCream },
  { id: 4, title: "Seafood", icon: FaFish },
  { id: 5, title: "Fruits", icon: FaAppleAlt },
  { id: 6, title: "Burgers", icon: FaHamburger },
];

const CategoryGrid: React.FC = () => {
  return (
    <div className="px-4 py-10 md:px-10 bg-gradient-to-b from-green-50 to-white">
      <h2 className="text-2xl py-3 text-center font-bold text-gray-800 mb-6">
        Explore Food Categories
      </h2>
      <Link
        href="/products"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5"
      >
        {categories.map((item, index) => (
          <CategoryCard key={item.id} title={item.title} icon={item.icon} />
        ))}
      </Link>
    </div>
  );
};

export default CategoryGrid;
