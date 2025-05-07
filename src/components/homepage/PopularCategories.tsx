"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import dairyBreadEggs from "../../images/dairy-bread-eggs.png";
import fruitsVegetables from "../../images/fruits-vegetables.png";
import snackMunchies from "../../images/snack-munchies.png";
import bakeryBiscuits from "../../images/bakery-biscuits.png";
import instantFood from "../../images/instant-food.png";
import teaCoffeeDrinks from "../../images/tea-coffee-drinks.png";
import coldDrinksJuices from "../../images/cold-drinks-juices.png";
import chickenMeatFish from "../../images/chicken-meat-fish.png";
import babyCare from "../../images/baby-care.png";
import cleaningEssentials from "../../images/cleaning-essentials.png";
import petCare from "../../images/pet-care.png";
import attaRiceDal from "../../images/atta-rice-dal.png";
import Loader from "../shared/Loader";

interface Category {
  img: string;
  label: string;
}

// Map API image paths to imported images
const categoryImages: { [key: string]: string | StaticImageData } = {
  "/images/dairy-bread-eggs.png": dairyBreadEggs,
  "/images/fruits-vegetables.png": fruitsVegetables,
  "/images/snack-munchies.png": snackMunchies,
  "/images/bakery-biscuits.png": bakeryBiscuits,
  "/images/instant-food.png": instantFood,
  "/images/tea-coffee-drinks.png": teaCoffeeDrinks,
  "/images/cold-drinks-juices.png": coldDrinksJuices,
  "/images/chicken-meat-fish.png": chickenMeatFish,
  "/images/baby-care.png": babyCare,
  "/images/cleaning-essentials.png": cleaningEssentials,
  "/images/pet-care.png": petCare,
  "/images/atta-rice-dal.png": attaRiceDal,
};

const CategoriesGrid: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/popularCategories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched categories:", data);
        setCategories(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <Loader />
      </div>
    );
  }

  return (
    <section className="my-8 lg:my-14">
      <div className="container mx-auto">
        <div className="text-center mt-8 mb-10">
          <h3 className="text-2xl font-bold">Shop Popular Categories</h3>
          <div className="wt-separator bg-primarys mx-auto my-2 h-1 w-20 rounded"></div>
          <div className="wt-separator2 bg-primarys mx-auto h-1 w-12 rounded"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-y-10">
          {categories.length === 0 ? (
            <p>Loading categories...</p>
          ) : (
            categories.map((cat) => (
              <div
                key={cat.label}
                className="w-1/2 md:w-1/3 lg:w-1/6 px-2 text-center group"
              >
                <Link href="/products">
                  <Image
                    src={categoryImages[cat.img] ?? cat.img}
                    alt={cat.label}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
                <h5 className="mt-4 text-sm font-medium">
                  <Link href="#" className="text-inherit">
                    {cat.label}
                  </Link>
                </h5>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
