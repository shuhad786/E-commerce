import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./HomeSlice";
import cartSlice from "./CartSlice";
import userSlice from "./UserSlice"; 

const store = configureStore({
    reducer: {
        items: homeSlice,
        cart: cartSlice,
        user: userSlice,
    },
});

export default store;
