
import { NextResponse } from 'next/server';
import attaRiceDalImg from "../../../images/category-atta-rice-dal.jpg";
import bakeryBiscuitsImg from "../../../images/category-bakery-biscuits.jpg";
import chickenMeatFishImg from "../../../images/category-chicken-meat-fish.jpg";
import instantFoodImg from "../../../images/category-instant-food.jpg";
import snackMunchiesImg from "../../../images/category-snack-munchies.jpg";
import teaCoffeeDrinksImg from "../../../images/category-tea-coffee-drinks.jpg";
// Products data with static image paths
const products= [
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
    id: 7,
    name: "Britannia Cheese Slices",
    category: "Dairy, Bread & Eggs",
    image: instantFoodImg.src,
    price: 24,
    rating: 5,
    reviews: 345,
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

export async function GET() {
  return NextResponse.json({ data: products }, { status: 200 });
}