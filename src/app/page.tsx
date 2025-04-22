"use client";
import { useEffect, useState } from "react";
import BannerSlider from "@/components/homepage/BannerSlider";
import ProductsGrid from "@/components/homepage/ProductsGrid";
import PopularCategories from "@/components/homepage/PopularCategories";
import PromoSection from "@/components/homepage/PromoSection";
import FoodCategories from "@/components/homepage/FoodCategories";
import Loader from "@/components/shared/Loader"; // Make sure this exists

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <BannerSlider />
          <PopularCategories />
          <ProductsGrid />
          <PromoSection />
          <FoodCategories />
        </>
      )}
    </div>
  );
}
