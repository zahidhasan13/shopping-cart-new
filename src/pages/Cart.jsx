import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import { clearCart } from "../features/cart/cartslice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const cartData = cartItems.filter((cartItem) => cartItem.email === email);
  return (
    // <div className="min-h-screen container mx-auto px-2 lg:px-6 xl:px-0">
    <section className="bg-white py-8 antialiased md:py-16 min-h-screen">
      {cartData.length == 0 ? (
        <div className="flex items-center justify-center flex-col gap-3 mt-40">
          <p className="text-xl">There is no items in this cart</p>
          <Link to="/products">
            <button className="btn-secondary uppercase">
              Continue shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex items-center justify-between border-b-2 border-sky-500 pb-1">
            <h2 className="text-3xl font-semibold">
              Cart <span className="text-sky-500">Items</span>
            </h2>
            <button
              onClick={() => dispatch(clearCart(email))}
              className="btn-danger"
            >
              Clear Cart
            </button>
          </div>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              {
                <div className="space-y-6">
                  {cartData.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                  ))}
                </div>
              }
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <OrderSummary />
            </div>
          </div>
        </div>
      )}
    </section>
    // </div>
  );
};

export default Cart;
