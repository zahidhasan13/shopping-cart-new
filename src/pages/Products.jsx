import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import ProductSkeleton from "../components/ProductSkeleton";

const Products = () => {
  const { products, status } = useSelector((state) => state.products);
  return (
    <div className="min-h-screen container mx-auto px-2 lg:px-6 xl:px-0">
      <h2 className="text-4xl font-semibold text-center border-b-2 border-sky-500 pb-2 my-10">
        All <span className="text-sky-500">Products</span>
      </h2>
      {status && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
