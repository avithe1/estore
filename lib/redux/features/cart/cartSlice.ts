import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { CartItem, Product } from "@/lib/products";

// Define a type for the slice state
interface CartState {
  products: CartItem[];
}

// Define the initial state using that type
const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const newArr = [];

      if (state.products.length) {
        let newItem = true;
        for (const item of state.products) {
          if (item.id === action.payload.id) {
            newItem = false;
            newArr.push({ ...item, quantity: item.quantity + 1 });
          } else {
            newArr.push({ ...item });
          }
        }
        if (newItem) {
          newArr.push({ ...action.payload, quantity: 1 });
        }
      } else {
        newArr.push({ ...action.payload, quantity: 1 });
      }

      state.products = [...newArr];
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const newArr = [];

      for (const item of state.products) {
        if (item.id === action.payload.id) {
          if (item.quantity > 1) {
            newArr.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          newArr.push({ ...item });
        }
      }

      state.products = [...newArr];
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const newArr = [];

      for (const item of state.products) {
        if (item.id === action.payload.id) {
          newArr.push({ ...item, quantity: action.payload.quantity });
        } else {
          newArr.push({ ...item });
        }
      }

      state.products = [...newArr];
    },
  },
});

export const { addToCart, removeFromCart, updateProductQuantity } =
  cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
