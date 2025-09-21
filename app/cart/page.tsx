"use client";
import ProductGrid from "@/components/ProductGrid";
//import { addToCart, removeFromCart } from "@/lib/redux/features/cart/cartSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.products);

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return <ProductGrid products={cartItems} />;
}
