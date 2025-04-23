"use client";
import { useState } from "react";
import BannerSlider from "@/components/homepage/BannerSlider";
import ProductsGrid from "@/components/homepage/ProductsGrid";
import PopularCategories from "@/components/homepage/PopularCategories";
import PromoSection from "@/components/homepage/PromoSection";
import FoodCategories from "@/components/homepage/FoodCategories";
import Loader from "@/components/shared/Loader"; // Make sure this exists

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <BannerSlider setShowLoader={setShowLoader} />
          <PopularCategories setShowLoader={setShowLoader} />
          <ProductsGrid setShowLoader={setShowLoader} />
          <PromoSection />
          <FoodCategories setShowLoader={setShowLoader} />
        </>
      )}
    </div>
  );
}
