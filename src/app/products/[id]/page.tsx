"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./page.css";
import RelatedProducts from "@/components/relatedproducts/RelatedProducts";
import ProductImage from "@/components/productdetail/ProductImage";
import ProductDetails from "@/components/productdetail/ProductDetails";
import ProductTabs from "@/components/productdetail/ProductTabs";
import Loader from "@/components/shared/Loader";

interface Review {
  reviewerName: string;
  reviewerImage: string;
  rating: number;
  comment: string;
  reviewDate: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
  description: string;
  weight: string;
  countryOfOrigin: string;
  quality: string;
  check: string;
  minWeight: string;
  reviews: Review[]; // <-- Nested reviews
}


const Page: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("description");


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://192.168.1.154:7047/api/product/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        console.log("Fetched product:", data);
        setProduct(data.productData);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };
    fetchProduct();
  }, [id]);


  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleAddToCart = () =>
    alert(`${quantity} ${product?.name} added to cart!`);

  if (!product) return <div className="text-center mt-10"><Loader/></div>;

  return (
    <div className="container mx-auto py-5 p-9 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-5">
        <div className="lg:col-span-2 xl:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ProductImage src={product.image} alt={product.name} />
              <ProductDetails
                product={product}
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onAddToCart={handleAddToCart}
              />
            </div>
            <ProductTabs
              product={product}
              reviews={product.reviews}
              activetab={activeTab}
              setActivetab={setActiveTab}
            />
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default Page;
