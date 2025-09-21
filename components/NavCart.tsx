"use client";
import React from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";

const NavCart = () => {
  const cartItems = useAppSelector((state) => state.cart.products);
  return (
    <div>
      <Link href="/cart">Cart: {cartItems.length}</Link>
    </div>
  );
};

export default NavCart;
