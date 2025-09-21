"use client";
import React from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import { Product } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCart from "./RemoveFromCartButton";

const UpdateProduct = ({ product }: { product: Product }) => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const isProductInCart =
    cartItems.filter((item) => item.id === product.id).length > 0;

  return (
    <div>
      {!isProductInCart ? (
        <AddToCartButton product={product}>Add to cart</AddToCartButton>
      ) : (
        <RemoveFromCart id={product.id}>Remove from cart</RemoveFromCart>
      )}
    </div>
  );
};

export default UpdateProduct;
