/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/shared/Loader";
import ProductCard from "@/components/shared/ProductCard";
// JSON data for dropdowns
interface DropdownItem {
  title: string;
  items: string[];
}

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

interface Store {
  name: string[];
}

const ShopCategories: React.FC = () => {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  const [loaderStatus, setLoaderStatus] = useState<boolean>(true);
  const [searchStore, setSearchStore] = useState<string>("");
  const [selectedStores, setSelectedStores] = useState<string[]>(["eGrocery"]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([
    "ratingFour",
  ]);
  const [dropdownData, setDropdownData] = useState<DropdownItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [ratingOptions, setRatingOptions] = useState<any[]>([]);

  

  const fetchData = async () => {
    try {
      // Fetch dropdown data
      const dropdownRes = await fetch("/api/dropdown", { cache: "no-store" });
      const dropdown = await dropdownRes.json();
      setDropdownData(dropdown);

      // Fetch initial products
      await fetchProducts();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoaderStatus(false);
    }
  };

  const fetchProducts = async () => {
    try {
      // Fetch products data
      const productListData = await fetch("/api/productlist", { cache: "no-store" });
      const products = await productListData.json();
      setProducts(products);
      if(products.length > 0) {
        setLoaderStatus(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoaderStatus(false);
    }
  };

  const fetchStoreCheckbox = async () => {
    try {
      const storeCheckboxData = await fetch("/api/storescheckbox", { cache: "no-store" });
      const storesRaw: string[] = await storeCheckboxData.json();
  
      // Transform each string into an object with a string `name`
      const stores: Store[] = storesRaw.map((storeName) => ({ name: [storeName] }));
    
      setStores(stores);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoaderStatus(false);
    }
  };


  const fetchRatings = async () => {
    try {
      const res = await fetch("/api/ratings", { cache: "no-store" });
      const ratings = await res.json();
      setRatingOptions(ratings);
    } catch (err) {
      console.error("Failed to fetch ratings", err);
    }
  };
  

  useEffect(() => {
    fetchData();
    fetchStoreCheckbox();
    fetchRatings();
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
        <Loader />
      ) : (
        <>
          <div className="lg:w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar */}
              <div className="md:w-1/4">
                <h5 className="text-lg font-semibold mb-4 mt-6">Categories</h5>
                {dropdownData.map((dropdown, index) => (
                  <div key={dropdown.title} className="mb-2">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center py-2"
                      aria-expanded={openDropdowns.includes(index)}
                      aria-controls={`categoryFlush${index + 1}`}
                    >
                      {dropdown.title}
                      <svg
                        className={`h-4 w-4 transform ${openDropdowns.includes(index) ? "rotate-180" : ""
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
                      className={`transition-all duration-300 ${openDropdowns.includes(index) ? "block" : "hidden"
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
                  {stores.map((store) => {
                    const storeKey = store.name.join(" ").replace(/\s+/g, "-"); // to handle names like "Online Grocery"
                    return (
                      <div key={storeKey} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={storeKey}
                          checked={selectedStores.includes(storeKey)}
                          onChange={() => handleStoreCheckbox(storeKey)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={storeKey} className="ml-2 text-gray-700">
                          {store.name}
                        </label>
                      </div>
                    );
                  })}


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
                  {ratingOptions.map((rating) => (
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
                    <ProductCard key={product.id} {...product} />
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
