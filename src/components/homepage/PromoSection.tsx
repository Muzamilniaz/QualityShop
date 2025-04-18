import React from "react";
import Link from "next/link";

// Importing images
import grocerybanner from "../../images/grocery-banner.png";
import grocerybanner2 from "../../images/grocery-banner-2.jpg";

const PromoSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Box */}
          <div className="transition-transform duration-300 hover:scale-105 rounded-2xl overflow-hidden shadow-md">
            <div
              className="py-10 px-8 rounded-3xl h-full flex items-center justify-start"
              style={{
                backgroundImage: `url(${grocerybanner.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-black max-w-md">
                <h3 className="text-2xl font-bold mb-2">
                  Fruits &amp; Vegetables
                </h3>
                <p className="mb-4 text-lg">
                  Get Upto <span className="font-bold">30%</span> Off
                </p>
                <Link
                  href="#!"
                  className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div className="transition-transform duration-300 hover:scale-105 rounded-2xl overflow-hidden shadow-md">
            <div
              className="py-10 px-8 rounded-3xl h-full flex items-center justify-start"
              style={{
                backgroundImage: `url(${grocerybanner2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-black max-w-md">
                <h3 className="text-2xl font-bold mb-2">Freshly Baked Buns</h3>
                <p className="mb-4 text-lg">
                  Get Upto <span className="font-bold">25%</span> Off
                </p>
                <Link
                  href="#!"
                  className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
