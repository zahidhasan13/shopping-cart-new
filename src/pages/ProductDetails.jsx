import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartslice";

const ProductDetails = () => {
  const { products } = useSelector((state) => state.products);
  const { email } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = products.find((product) => product.id == id);

  const addToCartHandler = (product) => {
    dispatch(addToCart({ ...product, email }));
    navigate("/cart");
  };
  return (
    <div className="min-h-screen container mx-auto px-2 lg:px-6 xl:px-0">
      <h2 className="text-4xl font-semibold text-center border-b-2 border-sky-500 pb-2">
        Product <span className="text-sky-500">Details</span>
      </h2>
      {!product?.title ? (
        <p>Loading....</p>
      ) : (
        <div className="flex lg:flex-row flex-col items-start gap-10 mt-10">
          <div className="w-1/3">
            <img src={product?.image} alt="" className="w-96" />
          </div>
          <div className="flex flex-col gap-5 w-2/3">
            <h3 className="text-3xl font-semibold text-gray-600">
              {product?.title}
            </h3>
            <p className="text-lg font-semibold text-gray-600">
              Category: {product?.category}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Description: {product?.description}
            </p>
            <p className="text-lg font-semibold text-gray-600 flex items-center gap-2">
              Rating: {product?.rating.rate}
              <span className="text-yellow-500">
                <FaStar />
              </span>
              ({product.rating.count})
            </p>
            <p className="text-3xl font-bold text-sky-700">${product.price}</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => addToCartHandler(product)}
                className="btn-secondary"
              >
                Add to Cart
              </button>
              <button
                // onClick={() => wishlistHandler(product?.productId)}
                className="btn-warning"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
