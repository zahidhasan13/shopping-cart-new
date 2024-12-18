import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.status = "Loading...";
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.status = "";
      state.products = action.payload;
    });
    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status = "Something went wromg!";
    });
  },
});

export default productsSlice.reducer;
