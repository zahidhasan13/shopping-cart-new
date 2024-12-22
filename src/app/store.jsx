import { configureStore } from "@reduxjs/toolkit";
import productsSlice, {
  productsFetch,
} from "../features/products/productsSlice";
import cartSlice from "../features/cart/cartslice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    auth: authSlice,
  },
});

store.dispatch(productsFetch());
