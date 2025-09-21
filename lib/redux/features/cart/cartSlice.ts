import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CartState {
  products: string[]
}

// Define the initial state using that type
const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state) => {
      state.products.push('a')
    },
    removeFromCart: (state) => {
      state.products.pop();
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer