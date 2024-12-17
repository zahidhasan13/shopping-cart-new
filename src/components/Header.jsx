import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Toogle Menu
  const menuToggler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="header">
      <nav className="bg-white/90 backdrop-blur-sm px-2 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="text-xl font-semibold whitespace-nowrap">
            Shopping <span className="text-sky-500">Cart</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <div className="flex items-center gap-1">
              <Link to="/login">
                <button className="btn-primary">Log in</button>
              </Link>
              <Link to="/register">
                <button className="btn-primary">Sign up</button>
              </Link>
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-lg rounded-lg lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={menuToggler}
            >
              <span className="sr-only">Open main menu</span>
              <span>
                <FaBars />
              </span>
            </button>
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
                    20
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
