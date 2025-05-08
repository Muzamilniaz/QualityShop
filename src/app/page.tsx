import BannerSlider from "@/components/homepage/BannerSlider";
import ProductsGrid from "@/components/homepage/ProductsGrid";
import PopularCategories from "@/components/homepage/PopularCategories";
import PromoSection from "@/components/homepage/PromoSection";
import FoodCategories from "@/components/homepage/FoodCategories";

export default function Home() {


  return (
    <div>
          <BannerSlider />
          <PopularCategories />
          {/* <ProductsGrid /> */}
          <PromoSection />
          <FoodCategories />
    </div>
  );
}
