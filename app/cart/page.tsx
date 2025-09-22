"use client";
import CartItems from "@/components/CartItems";
//import { addToCart, removeFromCart } from "@/lib/redux/features/cart/cartSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.products);
  let totalPrice = 0;
  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        Your cart is empty
      </div>
    );
  } else {
    for (let item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
  }

  return (
    <div className="w-full">
      <CartItems products={cartItems} />
      <h3 className="text-right mr-10 text-2xl font-bold">
        Total Price : {totalPrice.toFixed(2)}
      </h3>
    </div>
  );
}
