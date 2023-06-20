import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./HomeSlice";

const store = configureStore({
  reducer: {
    items: homeSlice,
  },
});

export default store;
