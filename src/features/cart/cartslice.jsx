import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalCartAmount: 0,
  totalCartQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existItemIndex = state.cartItems.findIndex(
        (item) =>
          item.id == action.payload.id && item.email == action.payload.email
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
        (item) =>
          item.id != action.payload.id && item.email !== action.payload.email
      );
      state.cartItems = updatedCart;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, action) => {
      console.log(action.payload);
      console.log(action.payload.id);
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id == action.payload.id && item.email == action.payload.email
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity == 1) {
        const updatedCart = state.cartItems.filter(
          (item) =>
            item.id != action.payload.id || item.email !== action.payload.email
        );
        state.cartItems = updatedCart;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      const updateByEmail = state.cartItems.filter(
        (item) => item.email !== action.payload
      );
      state.cartItems = updateByEmail;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getSubTotal: (state, action) => {
      const updateByEmail = state.cartItems.filter(
        (item) => item.email === action.payload
      );
      const subTotal = updateByEmail.reduce((acc, item) => {
        const { price, quantity } = item;
        const itemTotal = price * quantity;
        acc += itemTotal;
        return acc;
      }, 0);
      state.totalCartAmount = subTotal;
    },
    getTotalQuantity: (state, action) => {
      const updateByEmail = state.cartItems.filter(
        (item) => item.email === action.payload
      );
      const totalQuantity = updateByEmail.reduce((acc, item) => {
        acc += item.quantity;
        return acc;
      }, 0);
      state.totalCartQuantity = totalQuantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  getSubTotal,
  getTotalQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
