import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Review {
  reviewerName: string;
  reviewerImage: string;
  rating: number;
  comment: string;
  reviewDate: string;
}

interface Product {
  id: number;
  title: string;
  featured_image: string;
  price: string;
  type: string;
  description: string;
  weight: string;
  countryOfOrigin: string;
  quality: string;
  check: string;
  minWeight: string;
  reviews: Review[]; // <-- Nested reviews
}

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
          {/* <p className="text-brand-text_primary font-body"> */}
          <div dangerouslySetInnerHTML={{ __html: product.description }} />

          {/* {product.description} */}
          {/* </p> */}
          {/* <p className="text-brand-text_primary font-body">
                        Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish
                        snailfish filefish Antarctic icefish goldeye aholehole trumpetfish
                        pilot fish airbreathing catfish, electric ray sweeper.
                    </p> */}
          <div className="px-2 grid grid-cols-2 sm:grid-cols-2 py-2">
            {/* <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                        {[
                            { label: "Weight", value: product.weight },
                            { label: "Country of Origin", value: product.countryOfOrigin },
                            { label: "Quality", value: product.quality },
                            { label: "Check", value: product.check },
                            { label: "Min Weight", value: product.minWeight },
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
                            <p className="mb-0 text-brand-text_primary font-body">{item.value}</p>
                            </div>
                        ))}
                        </div> */}
          </div>
        </div>
      ) : (
        <div
          className="tab-pane"
          id="nav-mission"
          role="tabpanel"
          aria-labelledby="nav-mission-tab"
        >
          {reviews === undefined || reviews?.length === 0
            ? "No reviews yet"
            : reviews?.map((review) => (
                <div
                  key={review.reviewerName}
                  className="flex items-start gap-4 mb-4"
                >
                  {/* Avatar */}
                  <div className="w-15 h-15 flex-shrink-0">
                    <Image
                      width={100}
                      height={100}
                      src="/img/avatar.jpg"
                      alt="User avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Review Content */}
                  <div className="flex-1">
                    <p className="mb-2 text-sm text-brand-text_primary font-body">
                      {review.reviewDate}
                    </p>
                    <div className="flex justify-between items-center">
                      <h5 className="text-lg font-semibold text-brand-heading_primary">
                        {review.reviewerName}
                      </h5>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={`review-${review.reviewerName}-${i}`}
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

export default ProductTabs;
