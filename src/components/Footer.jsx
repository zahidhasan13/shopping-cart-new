import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10">
      <div className="text-center py-10">
        <Link to="/" className="text-2xl font-semibold text-white">
          Shopping <span className="text-sky-500">Cart</span>
        </Link>
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()}{" "}
          <Link to="/" className="hover:underline">
            ShoppingCart
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
