"use client";
import {
  faMinus,
  faPlus,
  faShoppingBag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./page.css"; // Import your CSS file here
import RelatedProducts from "@/components/relatedproducts/RelatedProducts";
import mainImg from "../../images/product-img-12.jpg";
import Image from "next/image";
interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
  description: string;
}
interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  comment: string;
}
const ProductImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className=" w-full h-full ">
    <div className="border border-amber-100 rounded-lg overflow-hidden">
      <a href="#sample">
        <Image
          height={100}
          width={100}
          src={src}
          className="w-full rounded-lg"
          alt={alt}
        />
      </a>
    </div>
  </div>
);
const ProductDetails: React.FC<{
  product: Product;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: () => void;
}> = ({ product, quantity, onIncrement, onDecrement, onAddToCart }) => (
  <div className="lg:w-1/2">
    <h4 className="font-bold text-2xl mb-3 text-brand-heading_primary">
      {product.name}
    </h4>
    <p className="mb-3 text-brand-text_primary font-body">
      Category: {product.category}
    </p>
    <h5 className="font-bold text-xl mb-3">{product.price}</h5>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          key={`star-${product.id}-${i}`}
          icon={faStar}
          className=" text-brand-secondary"
        />
      ))}
      {/* <i
            key={`review-${review.id}-${i}`}
            className={`fa fa-star ${
              i < 4 ? 'text-yellow-500' : 'text-gray-300'
            }`}
          ></i> */}
    </div>
    <p className="mb-4 text-brand-text_primary font-body">
      {product.description}
    </p>
    <div className="flex items-center mb-5 w-24">
      <button
        className="btn btn-sm rounded-full bg-gray-100 text-brand-text_primary border h-7 w-7 flex items-center justify-center border-gray-300 p-2 hover:bg-gray-200 transition duration-500"
        onClick={onDecrement}
      >
        <FontAwesomeIcon icon={faMinus} className="font-bold" />
      </button>
      <input
        type="text"
        className="w-12 text-center border-0 bg-transparent oytline-none focus:outline-none focus:ring-0 text-brand-text_primary font-bold"
        value={quantity}
        readOnly
      />
      <button
        className="btn btn-sm rounded-full bg-gray-100 text-brand-text_primary border h-7 w-7 flex items-center justify-center border-gray-300 p-2 hover:bg-gray-200 transition duration-500"
        onClick={onIncrement}
      >
        <FontAwesomeIcon icon={faPlus} className="font-bold" />
        <i className="fa fa-plus"></i>
      </button>
    </div>
    <button
      className="btn border border-brand-secondary rounded-full px-4 py-2 mb-4 text-brand-primary hover:bg-brand-secondary hover:text-white transition duration-500"
      onClick={onAddToCart}
    >
      <FontAwesomeIcon icon={faShoppingBag} className="mr-2  text-green-600" />
      <span className="font-medium"> Shop Now</span>
    </button>
  </div>
);
const ProductTabs: React.FC<{
  product: Product;
  reviews: Review[];
  activetab: string;
  setActivetab: (tab: string) => void;
}> = ({ product, reviews, activetab, setActivetab }) => (
  <div className="lg:w-full">
    <nav className=" ">
      <div className="nav nav-tabs mb-3 flex border-b-2">
        <button
          className={`nav-link bg-transparent  border-0  border-b-2 text-brand-heading_primary  font-medium   py-2 px-4 transition duration-500 ${
            activetab === "description"
              ? "border-brand-secondary "
              : " text-brand-primary"
          }`}
          type="button"
          role="tab"
          id="nav-about-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-about"
          aria-controls="nav-about"
          aria-selected="true"
          onClick={() => setActivetab("description")}
        >
          Description
        </button>
        <button
          className={`nav-link bg-transparent border-0 border-b-2 text-brand-heading_primary py-2 font-medium px-4 transition duration-500 ${
            activetab === "reviews"
              ? "border-brand-secondary"
              : "text-brand-primary"
          }`}
          type="button"
          role="tab"
          id="nav-mission-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-mission"
          aria-controls="nav-mission"
          aria-selected="false"
          onClick={() => setActivetab("reviews")}
        >
          Reviews
        </button>
      </div>
    </nav>
    <div className="tab-content mb-5">
      {activetab === "description" ? (
        <div
          className="tab-pane active"
          id="nav-about"
          role="tabpanel"
          aria-labelledby="nav-about-tab"
        >
          <p className="text-brand-text_primary font-body">
            {product.description}
          </p>
          <p className="text-brand-text_primary font-body">
            Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish
            snailfish filefish Antarctic icefish goldeye aholehole trumpetfish
            pilot fish airbreathing catfish, electric ray sweeper.
          </p>
          <div className="px-2 grid grid-cols-2 sm:grid-cols-2 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {[
                { label: "Weight", value: "1 kg" },
                { label: "Country of Origin", value: "Agro Farm" },
                { label: "Quality", value: "Organic" },
                { label: "Check", value: "Healthy" },
                { label: "Min Weight", value: "250 Kg" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`grid grid-cols-2 text-center py-2 ${
                    index % 2 === 0 ? "bg-gray-100" : ""
                  }`}
                >
                  <p className="mb-0 font-medium text-brand-text_primary font-body">
                    {item.label}
                  </p>
                  <p className="mb-0 text-brand-text_primary font-body">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="tab-pane"
          id="nav-mission"
          role="tabpanel"
          aria-labelledby="nav-mission-tab"
        >
          {reviews.map((review) => (
            <div key={review.id} className="flex items-start gap-4 mb-4">
              {/* Avatar */}
              <div className="w-15 h-15 flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="img/avatar.jpg"
                  alt="User avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Review Content */}
              <div className="flex-1">
                <p className="mb-2 text-sm text-brand-text_primary font-body">
                  {review.date}
                </p>
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-semibold text-brand-heading_primary">
                    {review.author}
                  </h5>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={`review-${review.id}-${i}`}
                        icon={faStar}
                        className={`text-sm ${
                          i < review.rating
                            ? "text-brand-secondary"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-brand-text_primary font-body mb-2">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Page: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("description");
  const product: Product = {
    id: 1,
    name: "Brocoli",
    image: mainImg.src,
    price: "3,35 $",
    category: "Vegetables",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.",
  };
  const reviews: Review[] = [
    {
      id: 1,
      author: "Jason Smith",
      date: "April 12, 2024",
      rating: 4,
      comment:
        "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Suspendisse ultricies nisi vel quam suscipit",
    },
    {
      id: 2,
      author: "Sam Peters",
      date: "April 12, 2024",
      rating: 3,
      comment:
        "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Suspendisse ultricies nisi vel quam suscipit",
    },
  ];
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleAddToCart = () =>
    alert(`${quantity} ${product.name} added to cart!`);
  return (
    <div className="container mx-auto py-5 p-9   bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-5">
        <div className="lg:col-span-2 xl:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ProductImage src={product.image} alt={product.name} />
              <ProductDetails
                product={product}
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onAddToCart={handleAddToCart}
              />
            </div>
            <ProductTabs
              product={product}
              reviews={reviews}
              activetab={activeTab}
              setActivetab={setActiveTab}
            />
            {/* <ReviewForm /> */}
          </div>
        </div>
        {/* <Sidebar categories={categories} featuredProducts={featuredProducts} /> */}
      </div>
      <RelatedProducts />
    </div>
  );
};
export default Page;
