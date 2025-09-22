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
      className="cursor-pointer border border-white rounded bg-gray-700 px-2 py-1 hover:bg-gray-400 hover:text-black hover:border-gray-400"
      onClick={() => dispatch(addToCart(product))}
    >
      {children}
    </button>
  );
};

export default AddToCartButton;
