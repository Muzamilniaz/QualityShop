"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../shared/ProductCard";
import product1 from "../../images/category-baby-care.jpg";
import product2 from "../../images/category-atta-rice-dal.jpg";
import product3 from "../../images/category-bakery-biscuits.jpg";
import product4 from "../../images/category-chicken-meat-fish.jpg";
interface Product {
  id: number;
  image: string;
  name: string;
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
// Map API image paths to imported images
const productImages: { [key: string]: string } = {
  "/images/category-baby-care.jpg": product1.src,
  "/images/category-atta-rice-dal.jpg": product2.src,
  "/images/category-bakery-biscuits.jpg": product3.src,
  "/images/category-chicken-meat-fish.jpg": product4.src,
};


const RelatedProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      fetch("/api/relatedProducts")
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched products:", data);
          // Map API image paths to imported image sources
          setProducts(
            data.map((product: Product) => ({
              ...product,
              image: productImages[product.image] ?? product.image,
            }))
          );
        })
        .catch((err) => {
          console.error("Failed to fetch products:", err);
        });
    }, []);
  return (
    <div className="px-4 py-10 md:px-10 mb-9 bg-gray-50">
      <h2 className="text-2xl py-3 font-bold text-gray-800 mb-6 text-center">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
