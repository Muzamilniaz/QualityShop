import React from "react";
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

const products = [
  {
    image: product1.src,
    title: "Baby Care",
    price: "$7.99",
    category: "Essentials",
  },
  {
    image: product2.src,
    title: "Atta, Rice & Dal",
    price: "$11.49",
    category: "Groceries",
  },
  {
    image: product3.src,
    title: "Bakery & Biscuits",
    price: "$6.25",
    category: "Bakery",
  },
  {
    image: product4.src,
    title: "Chicken, Meat & Fish",
    price: "$14.99",
    category: "Non-Veg",
  },
  {
    image: product5.src,
    title: "Cleaning Essentials",
    price: "$9.75",
    category: "Household",
  },
  {
    image: product6.src,
    title: "Dairy, Bread & Eggs",
    price: "$8.50",
    category: "Dairy",
  },
  {
    image: product7.src,
    title: "Instant Food",
    price: "$5.99",
    category: "Snacks",
  },
  {
    image: product8.src,
    title: "Pet Care",
    price: "$13.00",
    category: "Pets",
  },
  {
    image: product9.src,
    title: "Snack & Munchies",
    price: "$4.95",
    category: "Snacks",
  },
  {
    image: product10.src,
    title: "Tea, Coffee & Drinks",
    price: "$6.99",
    category: "Beverages",
  },
  {
    image: product11.src,
    title: "Premium Atta Pack",
    price: "$10.99",
    category: "Groceries",
  },
  {
    image: product12.src,
    title: "Biscuits Variety Pack",
    price: "$7.25",
    category: "Bakery",
  },
];

const ProductsGrid: React.FC = () => {
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
