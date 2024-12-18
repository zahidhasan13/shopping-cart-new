import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const MenClothing = () => {
  const { products } = useSelector((state) => state.products);
  const men = products.filter(
    (product) => product.category === "men's clothing"
  );
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold pb-2 my-3 uppercase">
        men's <span className="text-sky-500">clothing</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {men.slice(0, 4).map((pd) => (
          <Product key={pd.id} product={pd} />
        ))}
      </div>
    </div>
  );
};

export default MenClothing;
