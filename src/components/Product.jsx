import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="card shadow-lg hover:shadow-xl p-4 bg-sky-50 rounded-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-60 mx-auto mix-blend-multiply"
        />
        <div className="flex flex-col gap-2 mt-5">
          <span className="text-sky-300 font-bold">{product.category}</span>
          <h3 className="truncate text-xl font-bold" title={product.title}>
            {product.title}
          </h3>
          <span className="text-lg">
            Rating: {product.rating.rate} ({product.rating.count})
          </span>
          <span className="text-2xl text-sky-700 font-bold">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
