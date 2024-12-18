import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen container mx-auto px-2 lg:px-6 xl:px-0">
      {id}
    </div>
  );
};

export default ProductDetails;
