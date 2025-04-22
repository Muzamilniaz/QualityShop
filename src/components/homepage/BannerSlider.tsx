"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface BannerSlide {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  description: string;
}

const BannerSlider: React.FC = () => {
  const [bannerSlides, setBannerSlides] = useState<BannerSlide[]>([]);

  useEffect(() => {
    fetch("/api/bannerSlider")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched banners:", data);
        setBannerSlides(data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch banners:", err);
      });
  }, []);

  return (
    <section className=" mx-auto overflow-hidden rounded-xl container mt-8 px-4 ">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[300px] md:h-[450px] flex items-center justify-start px-6 md:px-20 rounded-3xl"
              style={{
                background: `url(${slide.src}) no-repeat center center`,
                backgroundSize: "cover",
              }}
            >
              <div className="bg-white bg-opacity-80 p-6 rounded-lg max-w-lg">
                <span className="text-sm bg-yellow-400 text-black font-semibold px-3 py-1 rounded">
                  {slide.subtitle}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mt-4 text-gray-900">
                  {slide.title}
                </h2>
                <p className="mt-2 text-gray-700">{slide.description}</p>
                <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                  Shop Now →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;
