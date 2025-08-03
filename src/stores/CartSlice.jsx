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
    incrementQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity -= 1;
      }
    }
  },
});

export const { addItem, removeItem, updateQuantity, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
