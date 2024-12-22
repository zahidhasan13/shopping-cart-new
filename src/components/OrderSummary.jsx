import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSubTotal } from "../features/cart/cartslice";

const OrderSummary = () => {
  const { cartItems, totalCartAmount } = useSelector((state) => state.cart);
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const tax = +(totalCartAmount * 0.25).toFixed(2);
  const grandTotal = +(totalCartAmount + tax).toFixed(2);

  useEffect(() => {
    dispatch(getSubTotal(email));
  }, [cartItems, dispatch]);
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="text-xl font-semibold text-gray-900">Order summary</p>

      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">
              Original price
            </dt>
            <dd className="text-base font-medium text-gray-900">
              ${+totalCartAmount.toFixed(2)}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">Tax</dt>
            <dd className="text-base font-medium text-gray-900">${tax}</dd>
          </dl>
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
          <dt className="text-base font-bold text-gray-900">Total</dt>
          <dd className="text-base font-bold text-gray-900">${grandTotal}</dd>
        </dl>
      </div>

      <a
        href="#"
        className="flex w-full items-center justify-center btn-secondary"
      >
        Proceed to Checkout
      </a>

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-normal text-gray-500">or</span>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-medium underline hover:no-underline"
        >
          Continue Shopping
          <span>
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
