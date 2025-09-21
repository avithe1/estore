"use client";
import React, { PropsWithChildren } from "react";
import { addToCart, removeFromCart } from "@/lib/redux/features/cart/cartSlice";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import type { Product } from "@/lib/products";

type Props = PropsWithChildren<{
  product: Product;
}>;

const AddToCartButton = ({ product, children }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(addToCart(product))}>{children}</button>
  );
};

export default AddToCartButton;
