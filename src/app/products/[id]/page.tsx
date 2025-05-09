"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./page.css";
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
  title: string;
  featured_image: string;
  price: string;
  type: string;
  description: string;
  weight: string;
  countryOfOrigin: string;
  quality: string;
  check: string;
  minWeight: string;
  productUrl: string;
  images: string[];
  reviews: Review[]; // <-- Nested reviews
}

const Page: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [productLink, setProductLink] = useState<Product | null>(null);

  const [activeTab, setActiveTab] = useState<string>("description");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        //const res = await fetch(`https://192.168.1.154:7047/api/product/${id}`);
        const res = await fetch(
          `https://dazzling-taussig.97-74-80-158.plesk.page/api/product/${id}`
        );
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        console.log("Fetched product:", data);
        setProduct(data.productData);
        setProductLink(data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const url = productLink?.productUrl;

    if (url) {
      const isAbsolute = /^https?:\/\//i.test(url); //
      const finalUrl = isAbsolute ? url : `https://${url}`;

      window.open(finalUrl, "_blank");
    } else {
      alert("Product URL not available.");
    }
  };
  if (!product)
    return (
      <div className="text-center mt-10">
        <Loader />
      </div>
    );

  return (
    <div className="container mx-auto py-5 p-9 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-5">
        <div className="lg:col-span-2 xl:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="images_section">
                <ProductImage
                  src={`https:${product.featured_image}`}
                  alt={product.title}
                />
                {/* {product?.images?.map((image, index) => (
                  <Image
                    key={index}
                    height={180}
                    width={120}
                    src={`https:${image}`}
                    className="w-auto h-auto rounded-lg"
                    alt={product.title}
                  />
              ))} */}
              </div>
              <ProductDetails product={product} onAddToCart={handleAddToCart} />
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
      {/* <RelatedProducts /> */}
    </div>
  );
};

export default Page;
