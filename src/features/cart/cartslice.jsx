import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalCartItems: 0,
  totalCartAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existItemIndex = state.cartItems.findIndex(
        (item) => item.id == action.payload.id
      );
      if (existItemIndex >= 0) {
        state.cartItems[existItemIndex].quantity += 1;
      } else {
        const asseblingItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(asseblingItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.cartItems.filter(
        (item) => item.id != action.payload.id
      );
      state.cartItems = updatedCart;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id == action.payload.id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity == 1) {
        const updatedCart = state.cartItems.filter(
          (item) => item.id != action.payload.id
        );
        state.cartItems = updatedCart;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
