"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import babyCareImg from "../../images/category-baby-care.jpg";
import attaRiceDalImg from "../../images/category-atta-rice-dal.jpg";
import bakeryBiscuitsImg from "../../images/category-bakery-biscuits.jpg";
import chickenMeatFishImg from "../../images/category-chicken-meat-fish.jpg";
import cleaningEssentialsImg from "../../images/category-cleaning-essentials.jpg";
import dairyBreadEggsImg from "../../images/category-dairy-bread-eggs.jpg";
import instantFoodImg from "../../images/category-instant-food.jpg";
import petCareImg from "../../images/category-pet-care.jpg";
import snackMunchiesImg from "../../images/category-snack-munchies.jpg";
import teaCoffeeDrinksImg from "../../images/category-tea-coffee-drinks.jpg";

// JSON data for dropdowns
interface DropdownItem {
  title: string;
  items: string[];
}

const dropdownData: DropdownItem[] = [
  {
    title: "Dairy, Bread & Eggs",
    items: [
      "Milk",
      "Milk Drinks",
      "Curd & Yogurt",
      "Eggs",
      "Bread",
      "Buns & Bakery",
      "Butter & More",
      "Cheese",
      "Paneer & Tofu",
      "Cream & Whitener",
      "Condensed Milk",
      "Vegan Drinks",
    ],
  },
  {
    title: "Snacks & Munchies",
    items: [
      "Chips & Crisps",
      "Nachos",
      "Popcorn",
      "Bhujia & Mixtures",
      "Namkeen Snacks",
      "Healthy Snacks",
      "Cakes & Rolls",
      "Energy Bars",
      "Papad & Fryums",
      "Rusks & Wafers",
    ],
  },
  {
    title: "Fruits & Vegetables",
    items: [
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Fresh Fruits",
      "Organic Fruits & Vegetables",
      "Cuts & Sprouts",
      "Exotic Fruits & Veggies",
      "Flower Bouquets, Bunches",
    ],
  },
  {
    title: "Cold Drinks & Juices",
    items: [
      "Soft Drinks",
      "Fruit Juices",
      "Coldpress",
      "Energy Drinks",
      "Water & Ice Cubes",
      "Soda & Mixers",
      "Concentrates & Syrups",
      "Detox & Energy Drinks",
      "Juice Collection",
    ],
  },
];

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: { text: string; color: string };
}

const products: Product[] = [
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

const ShopCategories: React.FC = () => {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  const [loaderStatus, setLoaderStatus] = useState<boolean>(true);
  const [searchStore, setSearchStore] = useState<string>("");
  const [selectedStores, setSelectedStores] = useState<string[]>(["eGrocery"]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([
    "ratingFour",
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const handleStoreCheckbox = (store: string) => {
    setSelectedStores((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]
    );
  };

  const handleRatingCheckbox = (rating: string) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {loaderStatus ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
        </div>
      ) : (
        <>
          <div className="lg:w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar */}
              <div className="md:w-1/4">
                <h5 className="text-lg font-semibold mb-4 mt-6">Categories</h5>
                {dropdownData.map((dropdown, index) => (
                  <div key={index} className="mb-2">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center py-2"
                      aria-expanded={openDropdowns.includes(index)}
                      aria-controls={`categoryFlush${index + 1}`}
                    >
                      {dropdown.title}
                      <svg
                        className={`h-4 w-4 transform ${
                          openDropdowns.includes(index) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-300 ${
                        openDropdowns.includes(index) ? "block" : "hidden"
                      }`}
                      id={`categoryFlush${index + 1}`}
                    >
                      <ul className="pl-4">
                        {dropdown.items.map((item) => (
                          <li key={item} className="py-1">
                            <Link
                              href="productdetail"
                              className="text-gray-600 hover:text-blue-600"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <div className="py-6">
                  <h5 className="text-lg font-semibold mb-4">Stores</h5>
                  <input
                    type="search"
                    value={searchStore}
                    onChange={(e) => setSearchStore(e.target.value)}
                    placeholder="Search by store"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
                  />
                  {[
                    "eGrocery",
                    "DealShare",
                    "DMart",
                    "Blinkit",
                    "BigBasket",
                    "StoreFront",
                    "Spencers",
                    "Online Grocery",
                  ].map((store) => (
                    <div key={store} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={store}
                        checked={selectedStores.includes(store)}
                        onChange={() => handleStoreCheckbox(store)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={store} className="ml-2 text-gray-700">
                        {store}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="py-6">
                  <h5 className="text-lg font-semibold mb-4">Price</h5>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <small className="text-gray-500">
                      Price: <span>$0 - $100</span>
                    </small>
                  </div>
                </div>

                <div className="py-6">
                  <h5 className="text-lg font-semibold mb-4">Rating</h5>
                  {[
                    { id: "ratingFive", stars: 5, label: "★★★★★" },
                    { id: "ratingFour", stars: 4, label: "★★★★☆" },
                    { id: "ratingThree", stars: 3, label: "★★★☆☆" },
                    { id: "ratingTwo", stars: 2, label: "★★☆☆☆" },
                    { id: "ratingOne", stars: 1, label: "★☆☆☆☆" },
                  ].map((rating) => (
                    <div key={rating.id} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={rating.id}
                        checked={selectedRatings.includes(rating.id)}
                        onChange={() => handleRatingCheckbox(rating.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={rating.id}
                        className="ml-2 text-yellow-400"
                      >
                        {rating.label}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="py-6 relative">
                  <Image
                    src="/images/assortment-citrus-fruits.png"
                    alt="Fresh Fruits"
                    width={200}
                    height={200}
                    className="rounded-lg w-full"
                  />
                  <div className="absolute top-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      Fresh Fruits
                    </h3>
                    <p className="text-white">Get Up to 25% Off</p>
                    <Link
                      href="/shop"
                      className="mt-2 inline-block bg-black text-white px-4 py-2 rounded-lg"
                    >
                      Shop Now
                      <svg
                        className="inline-block h-4 w-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:w-3/4">
                <div className="bg-gray-100 rounded-lg p-8 mb-6">
                  <h1 className="text-3xl font-bold">Snacks & Munchies</h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">24</span> Products found
                  </p>
                  <div className=" sm:flex sm:flex:row items-center gap-4 mt-4 md:mt-0">
                    <div className="flex items-center gap-2">
                      <Link
                        href="/shop/list"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                          />
                        </svg>
                      </Link>
                      <Link href="/shop/grid" className="text-blue-600">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h4v4H4V6zm0 6h4v4H4v-4zm6-6h4v4h-4V6zm0 6h4v4h-4v-4zm6-6h4v4h-4V6zm0 6h4v4h-4v-4z"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="/shop"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4h6v6H4V4zm0 8h6v6H4v-6zm8-8h6v6h-6V4zm0 8h6v6h-6v-6z"
                          />
                        </svg>
                      </Link>
                    </div>
                    <select className="border rounded-lg px-3 py-2">
                      <option>Show: 50</option>
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                    </select>
                    <select className="border rounded-lg px-3 py-2">
                      <option>Sort by: Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Release Date</option>
                      <option>Avg. Rating</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="relative">
                        {product.badge && (
                          <span
                            className={`absolute top-2 left-2 ${product.badge.color} text-white text-xs px-2 py-1 rounded`}
                          >
                            {product.badge.text}
                          </span>
                        )}
                        <Link href="productdetail">
                          <div className="flex justify-center">
                            <Image
                              src={product.image}
                              alt={product.name}
                              height={192}
                              width={100}
                              className=" h-auto w-auto object-cover"
                            />
                          </div>
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col gap-2">
                          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </button>
                          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </button>
                          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-gray-500 mb-1">
                          <Link
                            href={`/categories/${product.category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {product.category}
                          </Link>
                        </div>
                        <h2 className="text-base font-semibold">
                          <Link
                            href="productdetail"
                            className="text-gray-800 hover:text-blue-600"
                          >
                            {product.name}
                          </Link>
                        </h2>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-sm text-gray-500 ml-2">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-lg font-semibold text-gray-800">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through ml-2">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center hover:bg-blue-700">
                            <svg
                              className="h-4 w-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v14m-7-7h14"
                              />
                            </svg>
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <nav className="flex justify-center">
                    <ul className="flex gap-2">
                      <li>
                        <button
                          className="px-3 py-2 bg-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
                          disabled
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                      </li>
                      <li>
                        <Link
                          href="/shop?page=1"
                          className="px-3 py-2 bg-blue-600 text-white rounded-lg"
                        >
                          1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?page=2"
                          className="px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                        >
                          2
                        </Link>
                      </li>
                      <li>
                        <span className="px-3 py-2 text-gray-700">...</span>
                      </li>
                      <li>
                        <Link
                          href="/shop?page=12"
                          className="px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                        >
                          12
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?page=2"
                          className="px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default ShopCategories;
