"use client";
import React, { PropsWithChildren } from "react";
import { addToCart } from "@/lib/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import type { Product } from "@/lib/products";

type Props = PropsWithChildren<{
  product: Product;
}>;

const AddToCartButton = ({ product, children }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="text-sm cursor-pointer border rounded px-2 py-1 hover:bg-hovercolor text-nowrap hover:ring-1"
      onClick={() => {
        dispatch(addToCart(product));
      }}
    >
      {children}
    </button>
  );
};

export default AddToCartButton;
