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
      let items = state.products.filter(
        (product) => product.id === action.payload.id
      );
      if (items.length) {
        //product is already in the cart

        const restoftheitems = state.products.filter(
          (product) => product.id !== action.payload.id
        );

        if (restoftheitems.length) {
          const newArr = [
            ...restoftheitems,
            {
              ...items[0],
              quantity: items[0].quantity + 1,
            },
          ];
          state.products = [...newArr];
        } else {
          const newArr = [
            {
              ...items[0],
              quantity: items[0].quantity + 1,
            },
          ];
          state.products = [...newArr];
        }
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      let items = state.products.filter(
        (product) => product.id === action.payload.id
      );
      if (items.length) {
        const item = items[0];
        if (item.quantity == 1) {
          state.products = [
            ...state.products.filter(
              (product) => product.id !== action.payload.id
            ),
          ];
        } else {
          const restoftheitems = state.products.filter(
            (product) => product.id !== action.payload.id
          );

          if (restoftheitems.length) {
            const newArr = [
              ...restoftheitems,
              {
                ...items[0],
                quantity: items[0].quantity - 1,
              },
            ];
            state.products = [...newArr];
          } else {
            const newArr = [
              {
                ...items[0],
                quantity: items[0].quantity - 1,
              },
            ];
            state.products = [...newArr];
          }
        }
      }
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const cartItem = state.products.filter(
        (product) => product.id !== action.payload.id
      )[0];

      state.products = [
        ...state.products,
        {
          ...cartItem,
          quantity: action.payload.quantity,
        },
      ];
    },
  },
});

export const { addToCart, removeFromCart, updateProductQuantity } =
  cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
