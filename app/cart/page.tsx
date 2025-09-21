"use client";
import ProductGrid from "@/components/ProductGrid";
//import { addToCart, removeFromCart } from "@/lib/redux/features/cart/cartSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.products);
  console.log(cartItems);
  return <ProductGrid products={cartItems} />;
}
