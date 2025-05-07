import BannerSlider from "@/components/homepage/BannerSlider";
import PopularCategories from "@/components/homepage/PopularCategories";
import PromoSection from "@/components/homepage/PromoSection";
import Brands from "@/components/homepage/Brands";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <PopularCategories />
      {/* <ProductsGrid /> */}
      <PromoSection />
      <Brands />
    </div>
  );
}
