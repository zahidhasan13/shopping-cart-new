import React from "react";
import { Link } from "react-router-dom";

const WishlistItem = ({ wishlistItem }) => {
  return (
    <Link to={`/product/${wishlistItem.id}`}>
      <div className="card shadow-lg hover:shadow-xl p-4 bg-sky-50 rounded-md">
        <img
          src={wishlistItem.image}
          alt={wishlistItem.title}
          className="w-40 h-60 mx-auto mix-blend-multiply"
        />
        <div className="flex flex-col gap-2 mt-5">
          <span className="text-sky-300 font-bold">
            {wishlistItem.category}
          </span>
          <h3 className="truncate text-xl font-bold" title={wishlistItem.title}>
            {wishlistItem.title}
          </h3>
          <span className="text-lg">
            Rating: {wishlistItem.rating.rate} ({wishlistItem.rating.count})
          </span>
          <span className="text-2xl text-sky-700 font-bold">
            ${wishlistItem.price}
          </span>
          <div className="flex gap-3">
            <button className="btn-secondary">Add to Cart</button>
            <button className="btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WishlistItem;
