import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./HomeSlice";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    items: homeSlice,
    cart: cartSlice,
  },
});

export default store;
