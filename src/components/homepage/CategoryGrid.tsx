"use client";

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import CategoryCard from '../shared/CategoryCard';

interface Category {
  id: number;
 img :string
}

// Map icon names to React Icon components

const CategoryGrid: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categoryGrid');
        const data = await res.json();
        console.log('Fetched categories:', data);
        setCategories(data.data);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      } 
    };

    fetchCategories();
  }, []);

  return (
        <div className="px-4 py-10 md:px-10 bg-gradient-to-b from-green-50 to-white">
          <h2 className="text-2xl py-3 text-center font-bold text-gray-800 mb-6">
            Explore Food Categories
          </h2>
          <Link href="/products" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
            {categories.map((item) => (
              <CategoryCard key={item.id} img={item.img} id={item.id} />
            ))}
          </Link>
        </div>
  );
};

export default CategoryGrid;
