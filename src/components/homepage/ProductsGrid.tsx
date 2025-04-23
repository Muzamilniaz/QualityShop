"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../shared/ProductCard";
import product1 from "../../images/category-baby-care.jpg";
import product2 from "../../images/category-atta-rice-dal.jpg";
import product3 from "../../images/category-bakery-biscuits.jpg";
import product4 from "../../images/category-chicken-meat-fish.jpg";
import product5 from "../../images/category-cleaning-essentials.jpg";
import product6 from "../../images/category-dairy-bread-eggs.jpg";
import product7 from "../../images/category-instant-food.jpg";
import product8 from "../../images/category-pet-care.jpg";
import product9 from "../../images/category-snack-munchies.jpg";
import product10 from "../../images/category-tea-coffee-drinks.jpg";
import product11 from "../../images/product-img-11.jpg";
import product12 from "../../images/product-img-12.jpg";

interface Product {
  image: string;
  title: string;
  price: string;
  category: string;
}

// Map API image paths to imported images
const productImages: { [key: string]: string } = {
  "/images/category-baby-care.jpg": product1.src,
  "/images/category-atta-rice-dal.jpg": product2.src,
  "/images/category-bakery-biscuits.jpg": product3.src,
  "/images/category-chicken-meat-fish.jpg": product4.src,
  "/images/category-cleaning-essentials.jpg": product5.src,
  "/images/category-dairy-bread-eggs.jpg": product6.src,
  "/images/category-instant-food.jpg": product7.src,
  "/images/category-pet-care.jpg": product8.src,
  "/images/category-snack-munchies.jpg": product9.src,
  "/images/category-tea-coffee-drinks.jpg": product10.src,
  "/images/product-img-11.jpg": product11.src,
  "/images/product-img-12.jpg": product12.src,
};

interface ProductsGridProps {
  setShowLoader: (show: boolean) => void;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ setShowLoader }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/featuredProducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        // Map API image paths to imported image sources
        setProducts(
          data.data.map((product: Product) => ({
            ...product,
            image: productImages[product.image] ?? product.image,
          }))
        );
        setShowLoader(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  return (
    <div className="px-4 py-10 md:px-10 bg-gray-50">
      <h2 className="text-2xl py-3 font-bold text-gray-800 mb-6 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {products.map((item) => (
          <ProductCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
