/* eslint-disable */
"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/shared/Loader";
import ProductCard from "@/components/shared/ProductCard";
import citrusFruits from "@/images/assortment-citrus-fruits.png";
import SidebarCategories from "@/components/shared/products/sidebar_categories";
import SidebarStores from "@/components/shared/products/sidebar_stores";
import SidebarPrice from "@/components/shared/products/sidebar_price";
import SidebarRating from "@/components/shared/products/sidebar_rating";
import SidebarImage from "@/components/shared/products/sidebar_image";
import SidebarPagination from "@/components/shared/products/pagination";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { useSearchParams, useRouter } from "next/navigation";

interface DropdownItem {
  title: string;
  items: string[];
}

interface Product {
  id: number;
  productData: {
    id: number;
    title: string;
    category: string;
    featured_image: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    badge?: { text: string; color: string };
  }
}

interface Store {
  name: string;
}

const ShopCategories: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  const [loaderStatus, setLoaderStatus] = useState<boolean>(true);
  const [searchStore, setSearchStore] = useState<string>("");
  const [selectedStores, setSelectedStores] = useState<string[]>(["eGrocery"]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>(["ratingFour"]);
  const [dropdownData, setDropdownData] = useState<DropdownItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [ratingOptions, setRatingOptions] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [showProductLimit, setShowProductLimit] = useState<number>(4);
  const [sortByKeyword, setSortByKeyword] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Read query parameters from URL
  let pageFromUrl = parseInt(searchParams.get("pageNumber") || "1", 10);
  let limitFromUrl = parseInt(searchParams.get("pageSize") || "4", 10);
  let sortByPriceDirection = searchParams.get("sortByPriceDirection") || "LTH";
  let queryFromUrl = searchParams.get("search") || "";


  const fetchProducts = useCallback(
    async (page: number, limit: number, query: string, sort:string) => {
      try {
        setLoaderStatus(true);
        const baseUrl = "https://192.168.1.154:7047";
        const apiUrl = query
          ? `${baseUrl}/api/product/all?pageNumber=${page}&pageSize=${limit}&search=${query}&sortByPriceDirection=${sort}`
          : `${baseUrl}/api/product/all?pageNumber=${page}&pageSize=${limit}&sortByPriceDirection=${sort}`;
        const productListData = await fetch(apiUrl, { cache: "no-store" });

        if (!productListData.ok) {
          throw new Error("Failed to fetch products");
        }
        const response = await productListData.json();
        setProducts(response.products);
        setTotalProducts(response.totalCount);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoaderStatus(false);
      }
    },
    []
  );
  const updateUrlParams = useCallback(() => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("pageNumber", currentPage.toString());
    newSearchParams.set("pageSize", showProductLimit.toString());
    newSearchParams.set("sortByPriceDirection", sortByKeyword);
    if (searchQuery) {
      newSearchParams.set("search", searchQuery);
    }
    fetchProducts(currentPage, showProductLimit, searchQuery, sortByKeyword);
    router.push(`/products?${newSearchParams.toString()}`, { scroll: false });

  }, [currentPage, showProductLimit, searchQuery, router, sortByKeyword, fetchProducts]);

// instead of running only once, run whenever the URL-searchParams change
useEffect(() => {
  
  const pageFromUrl = parseInt(searchParams.get("pageNumber") || "1", 10);
  const limitFromUrl = parseInt(searchParams.get("pageSize") || "4", 10);
  const queryFromUrl = searchParams.get("search") || "";
  const sortByPriceDirection = searchParams.get("sortByPriceDirection") || "LTH";
  setSortByKeyword(sortByPriceDirection);
  setCurrentPage(pageFromUrl);
  setShowProductLimit(limitFromUrl);
  setSearchQuery(queryFromUrl);
}, [searchParams]);

  useEffect(() => {
    fetchData();
    fetchStoreCheckbox();
    fetchRatings();
  }, []);

 
  // Handle state changes and fetch products
  useEffect(() => {
    fetchProducts(currentPage, showProductLimit, searchQuery, sortByKeyword);
    updateUrlParams();
  }, [currentPage, showProductLimit, searchQuery, fetchProducts, updateUrlParams, sortByKeyword]);

  const paginationHandler = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };
  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  const handleStoreCheckbox = (store: string) => {
    setSelectedStores((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]
    );
  };

  const handleRatingCheckbox = (rating: string) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };

  const handleShowProductsLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    setShowProductLimit(newLimit);
    setCurrentPage(1); // Reset to page 1
  };

  const handleSortProducts = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    console.log("Selected sort value:", selectedValue);
    setSortByKeyword(selectedValue);
    setCurrentPage(1); // Reset to page 1
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const fetchData = async () => {
    try {
      const dropdownRes = await fetch("/api/dropdown", { cache: "no-store" });
      const dropdown = await dropdownRes.json();
      setDropdownData(dropdown);

      await fetchProducts(pageFromUrl, limitFromUrl, queryFromUrl, sortByPriceDirection);
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
      const stores: Store[] = storesRaw.map((storeName) => ({ name: storeName }));
      setStores(stores);
    } catch (error) {
      console.error("Error fetching stores:", error);
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



  return (
    <div>
      {loaderStatus ? (
        <Loader />
      ) : (
        <>
          <div className="lg:w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <SidebarCategories
                  dropdownData={dropdownData}
                  openDropdowns={openDropdowns}
                  toggleDropdown={toggleDropdown}
                />
                <SidebarStores
                  stores={stores}
                  selectedStores={selectedStores}
                  handleStoreCheckbox={handleStoreCheckbox}
                  searchStore={searchStore}
                  setSearchStore={setSearchStore}
                />
                <SidebarPrice />
                <SidebarRating
                  ratingOptions={ratingOptions}
                  selectedRatings={selectedRatings}
                  handleRatingCheckbox={handleRatingCheckbox}
                />
                <SidebarImage img={citrusFruits} />
              </div>
              <div className="md:w-3/4">
                <div className="bg-gray-100 rounded-lg p-8 mb-6">
                  <h1 className="text-3xl font-bold">Snacks & Munchies</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">{totalProducts}</span> Products found
                  </p>
                  <div className="sm:flex sm:flex-row items-center gap-4 mt-4 md:mt-0">
                    <div className="flex items-center gap-2">
                      <Link href="/shop/list" className="text-gray-600 hover:text-blue-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                          />
                        </svg>
                      </Link>
                      <Link href="/shop/grid" className="text-blue-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h4v4H4V6zm0 6h4v4H4v-4zm6-6h4v4h-4V6zm0 6h4v4h-4v-4zm6-6h4v4h-4V6zm0 6h4v4h-4v-4z"
                          />
                        </svg>
                      </Link>
                      <Link href="/shop" className="text-gray-600 hover:text-blue-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4h6v6H4V4zm0 8h6v6H4v-6zm8-8h6v6h-6V4zm0 8h6v6h-6v-6z"
                          />
                        </svg>
                      </Link>
                    </div>
                    <select
                      className="border rounded-lg px-3 py-2"
                      value={showProductLimit}
                      onChange={handleShowProductsLimit}
                    >
                      <option value={4}>Show: 4</option>
                      <option value={8}>Show: 8</option>
                      <option value={16}>Show: 16</option>
                    </select>
                    <select
                      className="border rounded-lg px-3 py-2"
                      value={sortByKeyword}
                      onChange={handleSortProducts}
                    >
                      <option value="featured">Sort by: Featured</option>
                      <option value="LTH">Price: Low to High</option>
                      <option value="HTL">Price: High to Low</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.productData.id} {...{ ...product.productData, id: product.id }} />
                  ))}
                </div>
                <SidebarPagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  showProductLimit={showProductLimit}
                  sortByKeyword={sortByKeyword}
                  paginationHandler={paginationHandler}
                />
              </div>
            </div>
          </div>
          <ScrollToTopButton scrollToTop={scrollToTop} />
        </>
      )}
    </div>
  );
};

export default ShopCategories;
