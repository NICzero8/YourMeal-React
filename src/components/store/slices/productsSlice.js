import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  category: { value: "burgers", name: "Бургеры" },
  status: "loading",
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    const response = await axios.get(
      `https://660e8888356b87a55c4f5b5c.mockapi.io/products?category=${category.value}`
    );
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      .addCase(fetchProducts.pending, (state) => {
        state.products = [];
        state.status = "loading";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products = [];
        state.status = "error";
        console.log(action)
      });
  },
});

export const { changeCategory } = productsSlice.actions;

export default productsSlice.reducer;
