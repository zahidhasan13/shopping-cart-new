import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import ProductSkeleton from "./ProductSkeleton";

const Electronics = () => {
  const { products, status } = useSelector((state) => state.products);
  const electronics = products.filter(
    (product) => product.category === "electronics"
  );
  return (
    <div className="mt-10">
      {status ? (
        <div className="w-60 h-4 my-5 bg-gray-200 rounded-full animate-pulse"></div>
      ) : (
        <h2 className="text-xl font-semibold pb-2 my-3 uppercase">
          electr<span className="text-sky-500">onics</span>
        </h2>
      )}

      {status && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {electronics.slice(0, 4).map((pd) => (
          <Product key={pd.id} product={pd} />
        ))}
      </div>
    </div>
  );
};

export default Electronics;
