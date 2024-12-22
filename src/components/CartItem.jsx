import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartslice";
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartItem = ({ cartItem }) => {
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <div className="shrink-0 md:order-1">
          <img
            className="h-20 w-20"
            src={cartItem.image}
            alt={cartItem.title}
          />
        </div>

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              onClick={() => dispatch(decreaseQuantity(cartItem, email))}
              type="button"
              id="decrement-button"
              data-input-counter-decrement="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
            >
              <span className="text-xs">
                <FaMinus />
              </span>
            </button>
            <div className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900">
              {cartItem.quantity}
            </div>
            <button
              onClick={() => dispatch(addToCart(cartItem))}
              type="button"
              id="increment-button"
              data-input-counter-increment="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
            >
              <span className="text-xs">
                <FaPlus />
              </span>
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">
              ${+(cartItem.price * cartItem.quantity).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <div className="flex flex-col gap-1">
            <Link
              to={`/product/${cartItem.id}`}
              className="text-base font-medium text-gray-900 hover:underline"
            >
              {cartItem.title}
            </Link>
            <p className="text-base font-bold text-gray-900">
              ${cartItem.price}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(removeFromCart({ cartItem, email }))}
              type="button"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
