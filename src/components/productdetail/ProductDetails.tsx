"use client";
import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Product {
  id: number;
  title: string;
  featured_image: string;
  price: string;
  type: string;
  description: string;
}

const ProductDetails: React.FC<{
  product: Product;
  onAddToCart: () => void;
}> = ({ product, onAddToCart }) => (
  <div className="lg:w-2/3">
    <h4 className="font-bold text-2xl mb-3 text-brand-heading_primary">
      {product.title}
    </h4>
    <p className="mb-3 text-brand-text_primary font-body">
      Type: {product?.type}
    </p>
    <h5 className="font-bold text-xl mb-3">
      ${(parseFloat(product.price) / 100).toFixed(2)}
    </h5>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          key={`star-${product.id}-${i}`}
          icon={faStar}
          className=" text-brand-secondary"
        />
      ))}
    </div>
    {/* <p className="mb-4 text-brand-text_primary font-body"> */}
    <div dangerouslySetInnerHTML={{ __html: product.description }} />
    {/* {product.description} */}
    {/* </p> */}
    {/* <div className="flex items-center mb-5 w-24">
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
    </div> */}
    <button
      className="flex items-center gap-2 rounded-full border-2 border-brand-secondary bg-white px-6 py-2 mt-6 font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-brand-secondary hover:text-white"
      onClick={onAddToCart}
    >
      <FontAwesomeIcon icon={faShoppingBag} className="text-green-600" />
      <span className="text-inherit">Shop Now</span>
    </button>
  </div>
);

export default ProductDetails;
