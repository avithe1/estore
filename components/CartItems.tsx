import type { Product } from "@/lib/products";
import React from "react";
import CartItem from "./CartItem";

const CartItems = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full flex flex-col gap-3 p-5">
      {products.length
        ? products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        : "No products available"}
    </div>
  );
};

export default CartItems;
