import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("posts/fetchItems", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const fetchItemsByWomenClothing = createAsyncThunk("posts/fetchItemsByWomenClothing", async () => {
  const response = await fetch(`https://fakestoreapi.com/products/category/women%27s%20clothing/`);
  const data = await response.json();
  return data;
});

export const fetchItemsByMenClothing = createAsyncThunk("posts/fetchItemsByMenClothing", async () => {
  const response = await fetch(`https://fakestoreapi.com/products/category/men%27s%20clothing/`);
  const data = await response.json();
  return data;
});

export const fetchItemsByJewelery = createAsyncThunk("posts/fetchItemsByJewelery", async () => {
  const response = await fetch(`https://fakestoreapi.com/products/category/jewelery/`);
  const data = await response.json();
  return data;
});

export const fetchItemsByElectronics = createAsyncThunk("posts/fetchItemsByElectronics", async () => {
  const response = await fetch(`https://fakestoreapi.com/products/category/electronics/`);
  const data = await response.json();
  return data;
});

const homeSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchItemsByWomenClothing.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByWomenClothing.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItemsByWomenClothing.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchItemsByMenClothing.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByMenClothing.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItemsByMenClothing.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchItemsByJewelery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByJewelery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItemsByJewelery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchItemsByElectronics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByElectronics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItemsByElectronics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export default homeSlice.reducer;