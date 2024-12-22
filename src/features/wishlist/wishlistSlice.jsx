import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existItemIndex = state.wishlistItems.findIndex(
        (item) =>
          item.id == action.payload.id && item.email == action.payload.email
      );
      if (existItemIndex >= 0) {
        state.wishlistItems[existItemIndex].quantity += 1;
      } else {
        const asseblingItem = { ...action.payload, quantity: 1 };
        state.wishlistItems.push(asseblingItem);
      }
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
    removeWishlistItem: (state, action) => {
      const updatedWishlist = state.wishlistItems.filter(
        (item) =>
          item.id != action.payload.id && item.email !== action.payload.email
      );
      state.wishlistItems = updatedWishlist;
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
