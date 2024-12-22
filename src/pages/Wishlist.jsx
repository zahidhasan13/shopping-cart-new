import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishlistItem from "../components/WishlistItem";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const wishlistData = wishlistItems.filter(
    (wishlistItem) => wishlistItem.email === email
  );
  return (
    // <div className="min-h-screen container mx-auto px-2 lg:px-6 xl:px-0">
    <section className="bg-white py-8 antialiased md:py-16 min-h-screen">
      {wishlistData.length == 0 ? (
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
              Wishlist <span className="text-sky-500">Items</span>
            </h2>
            <div className="flex gap-3">
              <button
                // onClick={() => dispatch(clearCart(email))}
                className="btn-secondary"
              >
                All Add to Cart
              </button>
              <button
                // onClick={() => dispatch(clearCart(email))}
                className="btn-danger"
              >
                Clear Wishlist
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5">
            {wishlistData.map((item) => (
              <WishlistItem key={item.id} wishlistItem={item} />
            ))}
          </div>
        </div>
      )}
    </section>
    // </div>
  );
};

export default Wishlist;
