import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add an item to the cart
    selectItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item does not exist, add it with quantity set to 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    // Update the quantity of an item in the cart
    updateItemQuantity: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        // Update the quantity only if it's greater than 0
        if (quantity > 0) {
          existingItem.quantity = quantity;
        } else {
          // If quantity is 0 or less, remove the item from the cart
          state.items = state.items.filter(i => i.id !== item.id);
        }
      }
    },
  },
});

// Export actions and selector
export const { selectItem, removeItem, updateItemQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;
