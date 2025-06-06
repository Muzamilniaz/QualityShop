import BannerSlider from "@/components/homepage/BannerSlider";
import PopularCategories from "@/components/homepage/PopularCategories";
import PromoSection from "@/components/homepage/PromoSection";
import FoodCategories from "@/components/homepage/FoodCategories";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <FoodCategories />
      <PromoSection />
      <PopularCategories />
    </div>
  );
}
