import React from "react";
import Link from "next/link";

import attaricedal from "../../images/atta-rice-dal.png";
import petcare from "../../images/pet-care.png";
import cleaningessentials from "../../images/cleaning-essentials.png";
import babycare from "../../images/baby-care.png";
import chickenmeatfish from "../../images/chicken-meat-fish.png";
import colddrinksjuices from "../../images/cold-drinks-juices.png";
import teacoffeedrinks from "../../images/tea-coffee-drinks.png";
import instantfood from "../../images/instant-food.png";
import bakerybiscuits from "../../images/bakery-biscuits.png";
import snackmunchies from "../../images/snack-munchies.png";
import fruitsvegetables from "../../images/fruits-vegetables.png";
import dairybreadeggs from "../../images/dairy-bread-eggs.png";

const categories = [
  { img: dairybreadeggs, label: "Dairy, Bread & Eggs" },
  { img: fruitsvegetables, label: "Fruits & Vegetables" },
  { img: snackmunchies, label: "Snack & Munchies" },
  { img: bakerybiscuits, label: "Bakery & Biscuits" },
  { img: instantfood, label: "Instant Food" },
  { img: teacoffeedrinks, label: "Tea, Coffee & Drinks" },
  { img: colddrinksjuices, label: "Cold Drinks & Juices" },
  { img: chickenmeatfish, label: "Chicken, Meat & Fish" },
  { img: babycare, label: "Baby Care" },
  { img: cleaningessentials, label: "Cleaning Essentials" },
  { img: petcare, label: "Pet Care" },
  { img: attaricedal, label: "Atta, Rice & Dal" },
];

const CategoriesGrid = () => {
  return (
    <section className="my-8 lg:my-14">
      <div className="container mx-auto">
        <div className="text-center mt-8 mb-10">
          <h3 className="text-2xl font-bold">Shop Popular Categories</h3>
          <div className="wt-separator bg-primarys mx-auto my-2 h-1 w-20 rounded"></div>
          <div className="wt-separator2 bg-primarys mx-auto h-1 w-12 rounded"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-y-10">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="w-1/2 md:w-1/3 lg:w-1/6 px-2 text-center group"
            >
              <Link href="/products">
                <img
                  src={cat.img.src}
                  alt={cat.label}
                  className="rounded-full mx-auto w-24 h-24 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
              <h5 className="mt-4 text-sm font-medium">
                <Link href="#" className="text-inherit">
                  {cat.label}
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
