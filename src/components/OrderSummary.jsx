import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="text-xl font-semibold text-gray-900">Order summary</p>

      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">
              Original price
            </dt>
            <dd className="text-base font-medium text-gray-900">$7,592.00</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">Savings</dt>
            <dd className="text-base font-medium text-green-600">-$299.00</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">
              Store Pickup
            </dt>
            <dd className="text-base font-medium text-gray-900">$99</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">Tax</dt>
            <dd className="text-base font-medium text-gray-900">$799</dd>
          </dl>
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
          <dt className="text-base font-bold text-gray-900">Total</dt>
          <dd className="text-base font-bold text-gray-900">$8,191.00</dd>
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
