import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryProducts,
  priceSortProduct,
} from "../features/products/productsSlice";

const ProductFilter = () => {
  const [priceOrder, setPriceOrder] = useState("random");
  const [selectedCategory, setSelectedCategory] = useState("random");
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    dispatch(categoryProducts({ products, category }));
  };
  const handlePriceOrderChange = (order) => {
    setPriceOrder(order);
    dispatch(priceSortProduct({ products, order }));
  };
  return (
    <div className="mb-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2">
          <label
            htmlFor="category"
            className="text-xl font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="mt-1 w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="all">All</option>
            {/* Add options for each category */}
            {/* Example: */}
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men Clothing</option>
            <option value="women's clothing">Women Clothing</option>
            <option value="jewelery">Jwellery</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="priceOrder"
            className="text-xl font-medium text-gray-700"
          >
            Price
          </label>
          <select
            id="priceOrder"
            name="priceOrder"
            value={priceOrder}
            onChange={(e) => handlePriceOrderChange(e.target.value)}
            className="mt-1 w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="random">Random</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
