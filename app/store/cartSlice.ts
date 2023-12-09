import { createSlice } from "@reduxjs/toolkit";
import { ProductInt } from "@/app/types/product";

interface CartItem extends ProductInt {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
  changed: boolean;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.changed = true;
      state.totalQuantity++;

      const newItem = action.payload;
      state.totalAmount += newItem.price;
      state.items.push(newItem);
    },
    removeItem: (state, action) => {
      state.changed = true;
      state.totalQuantity--;
      const id = action.payload;
      const item = state.items.find((x) => x.id === id);
      if (item?.price) state.totalAmount -= item.price;
      state.items = state.items.filter((x) => x.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.changed = false;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
