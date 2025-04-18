import React from "react";
import ProductCard from "../shared/ProductCard";
import product1 from "../../images/category-baby-care.jpg";
import product2 from "../../images/category-atta-rice-dal.jpg";
import product3 from "../../images/category-bakery-biscuits.jpg";
import product4 from "../../images/category-chicken-meat-fish.jpg";
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
];

const RelatedProducts: React.FC = () => {
  return (
    <div className="px-4 py-10 md:px-10 mb-9 bg-gray-50">
      <h2 className="text-2xl py-3 font-bold text-gray-800 mb-6 text-center">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
