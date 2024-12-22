import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setLogOut, setUser, toggleLoading } from "../features/auth/authSlice";
import { getTotalQuantity } from "../features/cart/cartslice";
import { auth } from "../firebase/firebase.config";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartItems, totalCartQuantity } = useSelector((state) => state.cart);
  const { name, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const cartData = cartItems.filter((cartItem) => cartItem.email === email);
  // const totalQuantity = cartData.reduce((acc, item) => {
  //   acc += item.quantity;
  //   return acc;
  // }, 0);
  // console.log(totalCartQuantity);

  useEffect(() => {
    dispatch(getTotalQuantity(email));
  }, [cartItems, dispatch]);

  // onAuth
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
          })
        );
        dispatch(toggleLoading(false));
      } else {
        dispatch(toggleLoading(false));
      }
    });
  }, []);

  // Toogle Menu
  const menuToggler = () => {
    setOpenMenu(!openMenu);
  };

  // LogOut
  const logOutHandler = () => {
    signOut(auth);
    dispatch(setLogOut());
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <header className="header bg-white/90 backdrop-blur-sm lg:h-20 flex justify-center items-center mb-5">
      <nav className="container mx-auto px-2 lg:px-6 xl:px-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="text-xl font-semibold whitespace-nowrap">
            Shopping <span className="text-sky-500">Cart</span>
          </Link>
          <div className="flex items-center lg:order-2">
            {!name ? (
              <div className="flex items-center gap-1">
                <Link to="/login">
                  <button className="btn-primary">Log in</button>
                </Link>
                <Link to="/register">
                  <button className="btn-primary">Sign up</button>
                </Link>
              </div>
            ) : (
              <div className="relative inline-block text-left z-30">
                <button
                  onClick={toggleDropdown}
                  className="w-10 h-10 rounded-full overflow-hidden bg-sky-300 focus:outline-none uppercase text-2xl text-white"
                >
                  {name[0]}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link to="/wishlist">
                        <button
                          onClick={toggleDropdown}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Wishlist
                        </button>
                      </Link>
                      <button
                        onClick={logOutHandler}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2 ${openMenu ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row items-center lg:space-x-8 space-y-4 lg:space-y-0 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpenMenu(!openMenu)}
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "deactiveLink"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  onClick={() => setOpenMenu(!openMenu)}
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "deactiveLink"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/cart"
                  onClick={() => setOpenMenu(!openMenu)}
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "deactiveLink"
                  }
                >
                  <FiShoppingCart />
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-sky-500 rounded-full -top-3 -end-3">
                    {totalCartQuantity}
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
