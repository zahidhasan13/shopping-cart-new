import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  originalProducts: [], // Add originalProducts to hold the full unfiltered list
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    priceSortProduct: (state, action) => {
      const { order } = action.payload;

      if (order === "asc") {
        state.products = [...state.products].sort((a, b) => a.price - b.price);
      } else if (order === "desc") {
        state.products = [...state.products].sort((a, b) => b.price - a.price);
      } else if (order === "random") {
        state.products = state.originalProducts; // Reset to original products
      }
    },
    categoryProducts: (state, action) => {
      const { category } = action.payload;

      if (category === "all") {
        state.products = state.originalProducts; // Reset to all products
      } else {
        state.products = state.originalProducts.filter(
          (product) => product.category === category
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state) => {
      state.status = "Loading...";
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.status = "";
      state.products = action.payload;
      state.originalProducts = action.payload; // Save original products here
    });
    builder.addCase(productsFetch.rejected, (state) => {
      state.status = "Something went wrong!";
    });
  },
});

export const { priceSortProduct, categoryProducts } = productsSlice.actions;
export default productsSlice.reducer;
