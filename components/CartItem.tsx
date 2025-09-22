import type { Product } from "@/lib/products";
import React from "react";
import UpdateProduct from "./UpdateProduct";
import Link from "next/link";
import Image from "next/image";

const CartItem = ({ product }: { product: Product }) => {
  return (
    <div className="p-2 border rounded border-gray-400 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="relative h-[100px] w-[100px] object-">
          <Image src={product.image} sizes="100%" fill alt={product.title} />
        </div>
        <div>
          <h2 className="text-xl font-bold truncate flex-shrink-0">
            {product.title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>Price : {product.price} per item</div>
        <div className="self-end"><UpdateProduct product={product} /></div>
      </div>
    </div>
  );
};

export default CartItem;
