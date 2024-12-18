import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="card shadow-lg hover:shadow-xl p-4 bg-sky-50 rounded-md animate-pulse">
      <div className="w-full h-60 bg-gray-300"></div>
      <div className="flex flex-col gap-2 mt-5">
        <div className="h-2.5 bg-gray-200 rounded-full"></div>
        <div className="mb-4 h-2.5 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 bg-gray-200 rounded-full"></div>
        <div className="h-2.5 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
