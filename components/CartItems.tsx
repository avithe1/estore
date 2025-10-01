import type { Product } from "@/lib/products";
import React from "react";
import CartItem from "./CartItem";

const CartItems = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-10 px-2 sm:px-5">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartItems;
