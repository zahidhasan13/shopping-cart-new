import { configureStore } from "@reduxjs/toolkit";
import productsSlice, {
  productsFetch,
} from "../features/products/productsSlice";
import cartSlice from "../features/cart/cartslice";
import authSlice from "../features/auth/authSlice";
import wishlistSlice from "../features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    auth: authSlice,
    wishlist: wishlistSlice,
  },
});

store.dispatch(productsFetch());
