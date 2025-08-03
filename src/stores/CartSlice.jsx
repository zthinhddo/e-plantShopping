import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const removeItem = state.items.indexOf(item => item.name === action.payload.name);
      state.items.splice(removeItem, 1);

    },
    updateQuantity: (state, action) => {
      const updateItemIndex = state.items.indexOf(item => item.name === action.payload.name);
      state.items[updateItemIndex].quantity = action.payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
