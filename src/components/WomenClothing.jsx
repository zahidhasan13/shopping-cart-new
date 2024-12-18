import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const WomenClothing = () => {
  const { products } = useSelector((state) => state.products);
  const women = products.filter(
    (product) => product.category === "women's clothing"
  );
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold pb-2 my-3 uppercase">
        women's <span className="text-sky-500">clothing</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {women.slice(0, 4).map((pd) => (
          <Product key={pd.id} product={pd} />
        ))}
      </div>
    </div>
  );
};

export default WomenClothing;
