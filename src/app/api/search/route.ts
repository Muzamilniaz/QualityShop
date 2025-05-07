import { NextResponse } from "next/server";

import babyCareImg from "../../../images/category-baby-care.jpg";
import attaRiceDalImg from "../../../images/category-atta-rice-dal.jpg";
import bakeryBiscuitsImg from "../../../images/category-bakery-biscuits.jpg";
import chickenMeatFishImg from "../../../images/category-chicken-meat-fish.jpg";
import cleaningEssentialsImg from "../../../images/category-cleaning-essentials.jpg";
import dairyBreadEggsImg from "../../../images/category-dairy-bread-eggs.jpg";
import instantFoodImg from "../../../images/category-instant-food.jpg";
import petCareImg from "../../../images/category-pet-care.jpg";
import snackMunchiesImg from "../../../images/category-snack-munchies.jpg";
import teaCoffeeDrinksImg from "../../../images/category-tea-coffee-drinks.jpg";

const mockProducts= [
  {
    id: 1,
    name: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies",
    image: babyCareImg.src,
    price: 18,
    originalPrice: 24,
    rating: 4.5,
    reviews: 149,
    badge: { text: "Sale", color: "bg-red-500" },
  },
  {
    id: 2,
    name: "NutriChoice Digestive",
    category: "Bakery & Biscuits",
    image: attaRiceDalImg.src,
    price: 24,
    rating: 4.5,
    reviews: 25,
    badge: { text: "14%", color: "bg-green-500" },
  },
  {
    id: 3,
    name: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuits",
    image: bakeryBiscuitsImg.src,
    price: 32,
    originalPrice: 35,
    rating: 5,
    reviews: 469,
  },
  {
    id: 4,
    name: "Onion Flavour Potato",
    category: "Snack & Munchies",
    image: chickenMeatFishImg.src,
    price: 3,
    originalPrice: 5,
    rating: 3.5,
    reviews: 456,
    badge: { text: "Hot", color: "bg-red-500" },
  },
  {
    id: 5,
    name: "Salted Instant Popcorn",
    category: "Instant Food",
    image: cleaningEssentialsImg.src,
    price: 13,
    originalPrice: 18,
    rating: 4.5,
    reviews: 39,
  },
  {
    id: 6,
    name: "Blueberry Greek Yogurt",
    category: "Dairy, Bread & Eggs",
    image: dairyBreadEggsImg.src,
    price: 18,
    originalPrice: 24,
    rating: 4.5,
    reviews: 189,
    badge: { text: "Sale", color: "bg-red-500" },
  },
  {
    id: 7,
    name: "Britannia Cheese Slices",
    category: "Dairy, Bread & Eggs",
    image: instantFoodImg.src,
    price: 24,
    rating: 5,
    reviews: 345,
  },
  {
    id: 8,
    name: "Kellogg's Original Cereals",
    category: "Instant Food",
    image: petCareImg.src,
    price: 32,
    originalPrice: 35,
    rating: 4.5,
    reviews: 90,
  },
  {
    id: 9,
    name: "Slurrp Millet Chocolate",
    category: "Snack & Munchies",
    image: snackMunchiesImg.src,
    price: 3,
    originalPrice: 5,
    rating: 4.5,
    reviews: 67,
  },
  {
    id: 10,
    name: "Amul Butter - 500 g",
    category: "Dairy, Bread & Eggs",
    image: teaCoffeeDrinksImg.src,
    price: 13,
    originalPrice: 18,
    rating: 3.5,
    reviews: 89,
  },
];

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
  
    if (!query) {
      return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
    }
  
    const filteredProducts = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  
    return NextResponse.json(filteredProducts);
  }