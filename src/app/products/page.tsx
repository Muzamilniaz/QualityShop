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
  };
}

interface Store {
  name: string;
}

const ShopCategories: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get("pageNumber") || "1", 10);
  const showProductLimit = parseInt(searchParams.get("pageSize") || "4", 10);
  const searchQuery = searchParams.get("search") || "";
  const sortByKeyword = searchParams.get("sortByPriceDirection") || "featured";

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
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const fetchProducts = useCallback(
    async (
      page: number,
      limit: number,
      query: string,
      sort: string,
      brand?: string
    ) => {
      try {
        setLoaderStatus(true);
        //const baseUrl = "https://192.168.1.154:7047";
        const baseUrl = "https://dazzling-taussig.97-74-80-158.plesk.page";
        let apiUrl = "";

        if (brand) {
          apiUrl = `${baseUrl}/api/product/brand/${brand}?pageNumber=${page}&pageSize=${limit}&sortByPriceDirection=${sort}`;
        } else {
          apiUrl = query
            ? `${baseUrl}/api/product/all?pageNumber=${page}&pageSize=${limit}&search=${query}&sortByPriceDirection=${sort}`
            : `${baseUrl}/api/product/all?pageNumber=${page}&pageSize=${limit}&sortByPriceDirection=${sort}`;
        }

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

  const updateUrlParams = useCallback(
    (newPage: number, newLimit: number, newQuery: string, newSort: string) => {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set("pageNumber", newPage.toString());
      newSearchParams.set("pageSize", newLimit.toString());
      newSearchParams.set("sortByPriceDirection", newSort);

      if (newQuery) {
        newSearchParams.set("search", newQuery);
      } else {
        const existingBrand = searchParams.get("brand");
        if (existingBrand) {
          newSearchParams.set("brand", existingBrand);
        }
      }

      const currentParamsStr = searchParams.toString();
      const newParamsStr = newSearchParams.toString();
      if (currentParamsStr !== newParamsStr) {
        router.push(`/products?${newParamsStr}`, { scroll: false });
      }
    },
    [router, searchParams]
  );

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoaderStatus(true);

        const dropdownRes = await fetch("/api/dropdown", { cache: "no-store" });
        const dropdown = await dropdownRes.json();
        setDropdownData(dropdown);

        const storeCheckboxData = await fetch("/api/storescheckbox", {
          cache: "no-store",
        });
        const storesRaw: string[] = await storeCheckboxData.json();
        const stores: Store[] = storesRaw.map((storeName) => ({
          name: storeName,
        }));
        setStores(stores);

        const res = await fetch("/api/ratings", { cache: "no-store" });
        const ratings = await res.json();
        setRatingOptions(ratings);

        await fetchProducts(
          currentPage,
          showProductLimit,
          searchQuery,
          sortByKeyword,
          searchParams.get("brand") || undefined
        );
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoaderStatus(false);
      }
    };

    fetchInitialData();
  }, [
    currentPage,
    showProductLimit,
    searchQuery,
    sortByKeyword,
    searchParams,
    fetchProducts,
  ]);

  const paginationHandler = (page: number) => {
    updateUrlParams(page, showProductLimit, searchQuery, sortByKeyword);
    scrollToTop();
  };

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

  const handleShowProductsLimit = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLimit = parseInt(event.target.value, 10);
    updateUrlParams(1, newLimit, searchQuery, sortByKeyword);
  };

  const handleSortProducts = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value;
    updateUrlParams(1, showProductLimit, searchQuery, newSort);
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
                    <span className="font-semibold">{totalProducts}</span>{" "}
                    Products found
                  </p>
                  <div className="sm:flex sm:flex-row items-center gap-4 mt-4 md:mt-0">
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
                    <ProductCard
                      key={product.productData.id}
                      {...{ ...product.productData, id: product.id }}
                    />
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
