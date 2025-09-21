"use client";
//import { addToCart, removeFromCart } from "@/lib/redux/features/cart/cartSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";

export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cart.products);
  console.log(cartItems);
  return (
    <div className="w-full border-b border-gray-600 p-5 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">E-Cart</Link>
      </div>
      <div>
        <Link href="/cart">{cartItems.length}</Link>
      </div>
    </div>
  );
}
