"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/shared/ProductCard";

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

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query.trim()) return;

      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/search?query=${encodeURIComponent(query)}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch search results");
        }
        const results = await res.json();
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="container text-center mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search Results for "{query}"</h1>

      {(() => {
        if (isLoading) {
          return <p>Loading...</p>;
        }
        if (searchResults.length > 0) {
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          );
        }
        return <p>No results found for "{query}".</p>;
      })()}
    </div>
  );
};

export default Page;
