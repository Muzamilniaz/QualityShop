import React from "react";
import Link from "next/link";

import amazonpay from "../../images/amazonpay.svg";
import american from "../../images/american-express.svg";
import mastercard from "../../images/mastercard.svg";
import paypal from "../../images/paypal.svg";
import visa from "../../images/visa.svg";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-gray-100 text-gray-700 pt-12 mt-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Logo and About */}
            <div>
              <Link href="/" className="text-2xl font-bold text-blue-600">
                QualityShop
              </Link>
              <p className="text-sm leading-relaxed">
                We deliver more than your expectations and help you grow your
                business exponentially by providing customized applications. So,
                don’t just think, get ready to convert your ideas into reality.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Payment Partners</h4>
                <div className="flex items-center gap-2 flex-wrap">
                  {[amazonpay, american, mastercard, paypal, visa].map(
                    (img, idx) => (
                      <Link href="#" key={img.src}>
                        <img src={img} alt="payment" className="h-8" />
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* All Category */}
            <div>
              <h4 className="font-semibold mb-4">All Category</h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Dairy, Bread & Eggs",
                  "Snacks & Munchies",
                  "Fruits & Vegetables",
                  "Cold Drinks & Juices",
                  "Breakfast & Instant Food",
                  "Bakery & Biscuits",
                  "Chicken, Meat & Fish",
                ].map((item, idx) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-blue-600 flex items-center gap-2"
                    >
                      <i className="fa fa-angle-right" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Consumers */}
            <div>
              <h4 className="font-semibold mb-4">For Consumers</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ShopCart"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> Promos & Coupons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/MyAccountOrder"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/MyAccountOrder"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> Product Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/MyAcconutPaymentMethod"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> Payments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Contact"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get to Know Us */}
            <div>
              <h4 className="font-semibold mb-4">Get to know us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/AboutUs"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/AboutUs"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Blog"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Contact"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Blog"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right" /> Our Value
                  </Link>
                </li>
              </ul>

              {/* Newsletter + Social */}
              <div className="mt-6">
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 border rounded-l-md focus:outline-none"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
                    <i className="fa fa-paper-plane" />
                    Submit {""}
                  </button>
                </div>

                <div className="flex gap-4 mt-4 text-xl">
                  <Link href="#" className="text-blue-600">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link href="#" className="text-blue-400">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#" className="text-pink-500">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href="#" className="text-blue-800">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
            © {year} All Rights Reserved{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
