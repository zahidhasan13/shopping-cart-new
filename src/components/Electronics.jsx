import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Electronics = () => {
  const { products } = useSelector((state) => state.products);
  const electronics = products.filter(
    (product) => product.category === "electronics"
  );
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold pb-2 my-3 uppercase">
        electr<span className="text-sky-500">onics</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {electronics.slice(0, 4).map((pd) => (
          <Product key={pd.id} product={pd} />
        ))}
      </div>
    </div>
  );
};

export default Electronics;