import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./HomeSlice";
import categorySlice from "./CategorySlice";

const store = configureStore({
  reducer: {
    items: homeSlice,
    categories: categorySlice,
  },
});

export default store;
