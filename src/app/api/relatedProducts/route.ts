import { NextResponse } from 'next/server';
import babyCareImg from "../../../images/category-baby-care.jpg";
import chickenMeatFishImg from "../../../images/category-chicken-meat-fish.jpg";
import instantFoodImg from "../../../images/category-instant-food.jpg";
import snackMunchiesImg from "../../../images/category-snack-munchies.jpg";



const products= [
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
];


export async function GET() {
  return NextResponse.json(products);
}

