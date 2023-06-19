// https://fakestoreapi.com/products/category/women%27s%20clothing

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItemsByCategory = createAsyncThunk(
  "posts/fetchItemsByCategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

const categoryNames = ["women's clothing", "electronics", "men's clothing", "jewelery"];

const categorySlice = createSlice({
  name: "categoryItems",
  initialState: {
    categories: {},
    status: {},
  },

  reducers: {},

  extraReducers: (builder) => {
    categoryNames.forEach((category) => {
      builder.addMatcher(
        (action) =>
          action.type === fetchItemsByCategory.pending.type &&
          action.meta.arg === category,
        (state) => {
          state.status[category] = "loading";
        }
      );

      builder.addMatcher(
        (action) =>
          action.type === fetchItemsByCategory.fulfilled.type &&
          action.meta.arg === category,
        (state, action) => {
          state.status[category] = "succeeded";
          state.categories[category] = action.payload;
        }
      );

      builder.addMatcher(
        (action) =>
          action.type === fetchItemsByCategory.rejected.type &&
          action.meta.arg === category,
        (state, action) => {
          state.status[category] = "failed";
          state.error = action.error.message;
        }
      );
    });
  },
});

export default categorySlice.reducer;


