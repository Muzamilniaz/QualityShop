"use client";
import {
  faMinus,
  faPlus,
  faShoppingBag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    category: string;
    description: string;
  }

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


export default ProductDetails;