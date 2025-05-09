"use client";
import React, { useState, useEffect } from "react";
import { FaUserCircle, FaSearch, FaBars } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

interface Navbar {
  id: number;
  link: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [bottomCollapse, setBottomCollapse] = useState(false);
  const [navbar, setNavbar] = useState<Navbar[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter(); // Initialize the router
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const newParams = new URLSearchParams(searchParams);

    if (searchQuery.trim()) {
      // Set search parameter and reset page number if input is not empty
      newParams.set("search", searchQuery.trim());
      newParams.set("pageNumber", "1");
    } else if (searchParams.get("search")) {
      // Remove search parameter if input is empty and search param exists
      newParams.delete("search");
      newParams.set("pageNumber", "1"); // Reset to page 1
    } else {
      // No action needed if input is empty and no search param exists
      return;
    }

    router.push(`/products?${newParams.toString()}`);
  };

  useEffect(() => {
    const query = searchParams.get("search") || "";
    setSearchQuery(query);
  }, [searchParams]);

  useEffect(() => {
    // fetch("/api/navbarItems")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setNavbar(data.data);
    //   })
    //   .catch((err) => {
    //     console.error("Failed to fetch categories:", err);
    //   });
    setNavbar([
      { id: 1, label: "Home", link: "/" },
      { id: 2, label: "All Products", link: "/products" },
    ]);
  }, []);

  return (
    <div className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-4 md:px-10 flex-wrap gap-y-2">
        <div className="flex items-center gap-4">
          <div>
            {/* Hamburger Icon (Mobile) */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setBottomCollapse((prev) => !prev)}
            >
              <FaBars size={20} />
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            QualityShop
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 max-w-xl hidden md:flex items-center border border-gray-200 rounded-full shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products, brands, and more..."
            className="flex-grow px-5 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent transition-colors duration-200"
          />
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-white hover:from-blue-600 hover:to-indigo-700 flex items-center gap-2 text-sm font-semibold rounded-r-full transition-all duration-300"
          >
            <FaSearch size={16} className="opacity-80" />
            Search
          </button>
        </div>

        {/* Profile Icon */}
        <div className="text-gray-600 hover:text-blue-600 cursor-pointer">
          <FaUserCircle size={26} />
        </div>
      </div>

      {/* Bottom Navbar: Responsive Collapsible Categories */}
      <div
        className={`bg-gray-100 px-4 md:px-10 overflow-hidden transition-all duration-300 ${
          bottomCollapse ? "max-h-[220px] py-3" : "max-h-0"
        } md:max-h-none md:py-2`}
      >
        <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base whitespace-nowrap overflow-x-auto scrollbar-hide">
          {navbar.map((cat) => (
            <Link
              href={cat.link}
              key={cat.id}
              className="cursor-pointer hover:text-blue-600 text-gray-700 font-medium"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
