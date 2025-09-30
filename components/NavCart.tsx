"use client";
import React from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const NavCart = () => {
  const cartItems = useAppSelector((state) => state.cart.products);
  return (
    <Link href="/cart">
      <div className="flex items-center gap-2 rounded-xl border border-gray-700 px-4 py-2 hover:bg-gray-900">
        <div>
          <ShoppingCart className="size-4 sm:size-6"/>
        </div>
        <div className="text-sm sm:text-base">{cartItems.length}</div>
      </div>
    </Link>
  );
};

export default NavCart;
