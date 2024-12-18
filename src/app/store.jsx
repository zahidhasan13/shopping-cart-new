import { configureStore } from "@reduxjs/toolkit";
import productsSlice, {
  productsFetch,
} from "../features/products/productsSlice";
import cartSlice from "../features/cart/cartslice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

store.dispatch(productsFetch());
