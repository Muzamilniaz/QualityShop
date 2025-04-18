import BannerSlider from "@/components/homepage/BannerSlider";
import CategoryGrid from "@/components/homepage/CategoryGrid";
import ProductsGrid from "@/components/homepage/ProductsGrid";
import PopularCategories from "@/components/homepage/PopularCategories";
import PromoSection from "@/components/homepage/PromoSection";
export default function Home() {
  return (
    <div>
      <BannerSlider />
      <PopularCategories />
      <ProductsGrid />
      <PromoSection />
      <CategoryGrid />
    </div>
  );
}
